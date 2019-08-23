module.exports = ec => {
	const getHomepage = c => c.getFilteredByGlob('index.md')
	const getToplevel = c => c.getFilteredByGlob('*/index.*')
	const getSecondlevel = c => c.getFilteredByGlob('*/*/index.*')

	ec.addFilter('mainsection', url => url.match(/^\/([^/]*)/)[1] || 'home')
	ec.addCollection('toplevel', c => [...getHomepage(c), ...getToplevel(c)])
	ec.addCollection('secondlevel', c => [...getToplevel(c), ...getSecondlevel(c)])

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
