# UCLA USAC Website [![Netlify Status](https://api.netlify.com/api/v1/badges/a90ce7c8-76b9-42cd-a763-d4187dc7dcd1/deploy-status)](https://app.netlify.com/sites/usac/deploys)

Source code for the official USAC website, built with [Eleventy](https://11ty.io).

## Development

The latest LTS version of [Node.js](https://nodejs.org) (and `npm`) must be installed. Familiarity with NPM is assumed. To get started,

	npm install	# Install dependencies (when changed)
	npm start	# Run a local instance of the website

## Organization

The website is compiled by Eleventy from the following files, which describe the structure; as well as all the other files, which provide the content. The template syntax is [Nunjucks](https://mozilla.github.io/nunjucks/).

*Reading the entire documentation for Eleventy is highly recommended in order to understand this manual.*

- `_data/`
	- JSON files serving as <q>databases</q> for certain pages
	- `docs.js` interprets the documents under `indexed/` into a database
		- Guesses the current school year from the current month
		- Hardcodes date of the latest budget (needs frequent update)
- `_includes/`
	- Contains partial templates reusable by other pages
	- `layouts/default.html` is the toplevel template for every page
- `indexed/`
	- Filenames have format `<type>.<date>.<name>.pdf`
	- `type` is an enumeration
	- `date` is in ISO format; the day or day and month may be omitted
	- `name` may be omitted
- `.eleventy.js`
	- Copy `docs/`, `indexed/`, and `img/` to output (static files)
	- The custom navigation system, implemented via filters
	- Defines static redirects (e.g. navigation links to external pages)
- `.eleventyignore` hides some pages from the site, like this manual
