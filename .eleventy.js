module.exports = ec => {
	ec.addPassthroughCopy('img')
	ec.addFilter('mainsection', url => url.match(/^\/([^/]*)/)[1] || 'home')
	ec.addCollection('toplevel', c => c.getFilteredByGlob('*/index.*'))

	return {
		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}
