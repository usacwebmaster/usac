module.exports = ec => {
	const getToplevel = c => c.getFilteredByGlob('*/index.*')
	const getSecondlevel = c => c.getFilteredByGlob('*/*/index.*')

	ec.addFilter('mainsection', url => url.match(/^\/([^/]*)/)[1] || 'home')
	ec.addCollection('toplevel', getToplevel)
	ec.addCollection('secondlevel', c => [...getToplevel(c), ...getSecondlevel(c)])

	return {
		templateFormats: ['html', 'md', 'jpg', 'svg'],

		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}
