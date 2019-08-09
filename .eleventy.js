const fs = require('fs')
const sass = require('node-sass')

module.exports = ec => {
	fs.writeFileSync('style/main.css', sass.renderSync({
		file: 'style/main.scss'
	}))

	ec.setTemplateFormats(['html', 'md', 'css'])
	ec.addPassthroughCopy('img')
}
