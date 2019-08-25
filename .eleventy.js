module.exports = ec => {
	ec.addFilter('mainSection', (all, url) => all.find(page => page.url === url.match(/^\/[^/]*\/?/)[0]))
	ec.addFilter('sectionName', page => page.fileSlug || 'home')

	ec.addFilter('children', (all, url) => all.filter(page => page.url.startsWith(url) && !page.url.slice(url.length, -1).includes('/') && page.url !== url))
	ec.addFilter('descendsFrom', (desc, anc) => desc.startsWith(anc))

	ec.setLibrary('md', require('markdown-it')('commonmark').use(require('markdown-it-anchor'), {
		permalink: true,
		permalinkSymbol: ''
	}))

	ec.addPassthroughCopy('img')
	ec.addPassthroughCopy('docs')

	return {
		templateFormats: ['html', 'md', 'jpg'],

		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	}
}
