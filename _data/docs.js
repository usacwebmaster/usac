const fs = require('fs').promises

const input = 'indexed'
const output = '/docs'

function getSchoolYear(date) {
	if (date.getUTCFullYear() == 2023)
	{
		NEW_MONTH = 4 // May
		NEW_DATE = 23
	}
	else if (date.getUTCFullYear() == 2022){
		NEW_MONTH = 4  // May
		NEW_DATE = 17 
	}
	else if (date.getUTCFullYear() == 2021){
		NEW_MONTH = 4  // May
		NEW_DATE = 11
	}
	else if (date.getUTCFullYear() == 2020){
		NEW_MONTH = 4 // May
		NEW_DATE = 19
	}
	else if (date.getUTCFullYear() == 2019){
		NEW_MONTH = 4 // May
		NEW_DATE = 7
	}
	else if (date.getUTCFullYear() == 2018){
		NEW_MONTH = 7 // May
		NEW_DATE = 7
	}
	else if (date.getUTCFullYear() == 2017){
		NEW_MONTH = 4 // May
		NEW_DATE = 9
	}
	else if (date.getUTCFullYear() == 2016){
		NEW_MONTH = 4 // May
		NEW_DATE = 31
	}
	else if (date.getUTCFullYear() == 2016){
		NEW_MONTH = 4 // May
		NEW_DATE = 5
	}
	else if (date.getUTCFullYear() == 2015){
		NEW_MONTH = 4 // May
		NEW_DATE = 5
	}
	else if (date.getUTCFullYear() == 2014){
		NEW_MONTH = 4 // May
		NEW_DATE = 13
	}
	else if (date.getUTCFullYear() == 2013){
		NEW_MONTH = 4 // May
		NEW_DATE = 14
	}
	else if (date.getUTCFullYear() == 2012){
		NEW_MONTH = 4 // May
		NEW_DATE = 22
	}
	else if (date.getUTCFullYear() == 2011){
		NEW_MONTH = 4 // May
		NEW_DATE = 17
	}
	else if (date.getUTCFullYear() == 2010){
		NEW_MONTH = 4 // May
		NEW_DATE = 12
	}
	else if (date.getUTCFullYear() == 2009){
		NEW_MONTH = 4 // May
		NEW_DATE = 13
	}
	else if (date.getUTCFullYear() == 2008){
		NEW_MONTH = 4 // May
		NEW_DATE = 14
	}
	else if (date.getUTCFullYear() == 2007){
		NEW_MONTH = 4 // May
		NEW_DATE = 15
	}
	else if (date.getUTCFullYear() == 2006){
		NEW_MONTH = 4 // May
		NEW_DATE = 30
	}
	else if (date.getUTCFullYear() == 2005){
		NEW_MONTH = 4 // May
		NEW_DATE = 24
	}
	else if (date.getUTCFullYear() == 2004){
		NEW_MONTH = 5 // May
		NEW_DATE = 1
	}
	else if (date.getUTCFullYear() == 2003){
		NEW_MONTH = 4 // May
		NEW_DATE = 20
	}
	else{
		NEW_MONTH = 4  // May
		NEW_DATE = 23 
	}
	year = date.getUTCFullYear()-1 // - (date.getUTCMonth() <= (NEW_YEAR))
	if (date.getUTCMonth() >= NEW_MONTH){
		if (date.getUTCMonth() == NEW_MONTH){
			if 	(date.getUTCDate() >= NEW_DATE){
				year = year + 1
			}
		}
		else {
		year = year + 1
		}	
	}

	return `${year}-${year + 1}`
}

module.exports = async () => {
	const index = {
		_schoolYear: getSchoolYear(new Date),
		_budgetDate: new Date('2023-01-23') 
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
