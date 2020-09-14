const navPlugin = require('./plugins/nav')

const MarkdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = ec => {
	ec.addFilter('top', (arr, n) => arr.slice(0, n))

	ec.addFilter('isoDate', date => date.toISOString().split('T')[0])
	ec.addFilter('humanDate', date => date.toLocaleDateString(undefined, { timeZone: 'UTC' }))

	ec.addPlugin(navPlugin)

	ec.setLibrary('md', MarkdownIt('commonmark').use(markdownItAnchor, {
		permalink: true,
		permalinkSymbol: '#'
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
