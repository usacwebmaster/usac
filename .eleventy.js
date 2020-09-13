const MarkdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = ec => {
	ec.addFilter('top', (arr, n) => arr.slice(0, n))

	ec.addFilter('isoDate', date => date.toISOString().split('T')[0])
	ec.addFilter('humanDate', date => date.toLocaleDateString(undefined, { timeZone: 'UTC' }))

	ec.addFilter('mainSectionId', url => url.split('/')[1])
	ec.addFilter('mainSection', (nav, url) => url === '/' ? nav : nav.children[url.split('/')[1]])

	ec.addFilter('navLink', item => item.data.url || item.data.page.url)
	ec.addFilter('descendsFrom', (url, item) => url.startsWith(item.data.page.url))

	ec.addCollection('nav', c => {
		const root = { children: {} }
		for (const page of c.getAll()) {
			const item = page.url.split('/').slice(1, -1).reduce((item, seg) => item.children[seg] = item.children[seg] || { children: {} }, root)
			item.data = page.data
		}

		return applyWeight(root)
	})

	ec.setLibrary('md', MarkdownIt('commonmark').use(markdownItAnchor, {
		permalink: true,
	}))

	ec.addPassthroughCopy({
		img: true,
		docs: true,
		indexed: 'docs',
		'_includes/history.txt': 'humans.txt'
	})

	return {
		templateFormats: ['html', 'md'],
		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}

function applyWeight(item) {
	item.navItems = Object.keys(item.children).filter(seg => applyWeight(item.children[seg]).data.weight !== 0)
	item.navItems.sort((aSeg, bSeg) => {
		const a = item.children[aSeg].data
		const b = item.children[bSeg].data
		return (a.weight || 0) - (b.weight || 0) || (a.title > b.title ? 1 : a.title < b.title ? -1 : 0)
	})

	return item
}
