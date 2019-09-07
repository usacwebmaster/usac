const fs = require('fs').promises

const root = 'docs'

// TODO: this is wrong
function getSchoolYear(date) {
	const year = date.getUTCFullYear()
	return `${year}-${year + 1}`
}

module.exports = async () => {
	const index = {}

	const files = await fs.readdir(root)
	for (const file of files.sort().reverse()) {
		const [cat, isoDate, name, ext] = file.split('.')
		const date = new Date(isoDate)
		const year = getSchoolYear(date)

		if (typeof ext === 'undefined') {
			delete name
		}

		if (!(cat in index)) {
			index[cat] = {}
		}

		if (!(year in index[cat])) {
			index[cat][year] = []
		}

		index[cat][year].push({ date, url: `/${root}/${file}` })
	}

	return index
}
