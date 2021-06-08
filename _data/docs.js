const fs = require('fs').promises

// TODO: Need to set the boundary at a date, not month.
const NEW_YEAR = 4 // May

const input = 'indexed'
const output = '/docs'

function getSchoolYear(date) {
	const year = date.getUTCFullYear() - (date.getUTCMonth() < NEW_YEAR)
	return `${year}-${year + 1}`
}

module.exports = async () => {
	const index = {
		_schoolYear: getSchoolYear(new Date),
		_budgetDate: new Date('2021-06-07')
	}

	const files = await fs.readdir(input)
	for (const file of files.sort().reverse()) {
		const [cat, isoDate, name, ext] = file.split('.')
		const date = new Date(isoDate)
		const year = getSchoolYear(date)

		if (!(cat in index)) {
			index[cat] = {}
		}

		if (!(year in index[cat])) {
			index[cat][year] = []
		}

		const doc = { date, url: `${output}/${file}` }
		if (typeof ext !== 'undefined') {
			doc.name = name
		}

		index[cat][year].push(doc)
	}

	return index
}
