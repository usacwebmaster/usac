module.exports = eleventyConfig => {
	const mainSectionId = url => url.split('/')[1]
	eleventyConfig.addFilter('mainSectionId', mainSectionId)
	eleventyConfig.addFilter('mainSection', (nav, url) => url === '/' ? nav : nav.children[mainSectionId(url)])

	eleventyConfig.addFilter('navLink', item => item.data.url || item.data.page.url)
	eleventyConfig.addFilter('descendsFrom', (url, item) => url.startsWith(item.data.page.url))

	eleventyConfig.addCollection('nav', c => {
		const root = { children: {} }
		for (const page of c.getAll()) {
			const item = page.url.split('/').slice(1, -1).reduce((item, seg) => item.children[seg] = item.children[seg] || { children: {} }, root)
			item.data = page.data
		}

		return applyWeight(root)
	})
}

function applyWeight(item) {
	item.navItems = Object.keys(item.children).filter(seg => applyWeight(item.children[seg]).data.weight !== 0)
	item.navItems.sort((aSeg, bSeg) => {
		const a = item.children[aSeg].data
		const b = item.children[bSeg].data
		return (a.weight || 0) - (b.weight || 0) || (a.title > b.title ? 1 : a.title < b.title ? -1 : 0)
	})

	return item
}
