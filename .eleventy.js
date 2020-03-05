const EBOARD = 'https://www.uclaelectionsboard.org/'
const rewrite = {
	'/funding/': '/funding/sga/',
	'/elections/': EBOARD,
	'/about/eboard/': EBOARD,
	'/documents/elections/': `${EBOARD}#comp-k6e35ave`
}

module.exports = ec => {
	ec.addFilter('top', (arr, n) => arr.slice(0, n))

	ec.addFilter('mainSection', (all, url) => all.find(page => page.url === url.match(/^\/[^/]*\/?/)[0]))
	ec.addFilter('sectionName', page => page.fileSlug || 'home')

	ec.addFilter('children', (all, url) =>
		all.filter(page => page.url.startsWith(url) && !page.url.slice(url.length, -1).includes('/') && page.url !== url))
	ec.addFilter('descendsFrom', (desc, anc) => desc.startsWith(anc))

	ec.addFilter('navsort', pages => pages
		.filter(({ data }) => data.weight !== 0)
		.sort(({ data: a }, { data: b }) => (a.weight || 0) - (b.weight || 0) || (a.title > b.title ? 1 : a.title < b.title ? -1 : 0)))
	ec.addFilter('navlink', link => rewrite[link] || link)

	ec.addFilter('isoDate', date => date.toISOString().split('T')[0])
	ec.addFilter('humanDate', date => date.toLocaleDateString(undefined, { timeZone: 'UTC' }))

	ec.setLibrary('md', require('markdown-it')('commonmark').use(require('markdown-it-anchor'), {
		permalink: true,
		permalinkSymbol: ''
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
