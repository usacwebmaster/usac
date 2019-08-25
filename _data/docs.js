const fs = require('fs').promises

const root = 'docs'

module.exports = async () => {
	const index = {}

	const files = await fs.readdir(root)
	for (const file of files.sort()) {
		const [cat, year, date] = file.split('.')

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
