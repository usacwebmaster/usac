const rewrite = {
	'/funding/': '/funding/sga/'
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
	ec.addFilter('siteurl', link => ec.javascriptFunctions.url(rewrite[link] || link))

	ec.addFilter('isodate', date => date.toISOString().split('T')[0])
	ec.addFilter('humandate', date => date.toLocaleDateString(undefined, { timeZone: 'UTC' }))

	ec.setLibrary('md', require('markdown-it')('commonmark').use(require('markdown-it-anchor'), {
		permalink: true,
		permalinkSymbol: ''
	}))

	ec.addPassthroughCopy('img')
	ec.addPassthroughCopy('docs')

	return {
		templateFormats: ['html', 'md', 'jpg', 'svg', 'pdf'],

		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}
