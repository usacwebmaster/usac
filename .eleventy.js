module.exports = ec => {
	ec.addPassthroughCopy('img')
	ec.addFilter('mainsection', url => url.match(/^\/([^/]*)/)[1] || 'home')

	return {
		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}
