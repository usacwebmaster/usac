module.exports = ec => {
	ec.addFilter('mainsection', url => url.match(/^\/([^/]*)/)[1] || 'home')
	ec.addFilter('descendsFrom', (desc, anc) => desc.startsWith(anc))
	ec.addFilter('children', (all, url) => all.filter(page => page.url.startsWith(url) && !page.url.slice(url.length, -1).includes('/') && page.url !== url))

	ec.setLibrary('md', require('markdown-it')('commonmark').use(require('markdown-it-anchor'), {
		permalink: true,
		permalinkSymbol: ''
	}))

	return {
		templateFormats: ['html', 'md', 'jpg', 'svg'],

		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}
