# UCLA USAC Website [![Netlify Status](https://api.netlify.com/api/v1/badges/a90ce7c8-76b9-42cd-a763-d4187dc7dcd1/deploy-status)](https://app.netlify.com/sites/usac/deploys)

Source code for the official USAC website, built with [Eleventy](https://www.11ty.dev/).

## Background

The contents of this repo fully specify the USAC website. Eleventy is a program used to compile this repo into a set of HTML files that can be served in order to host the website. There are no databases or backend services involved.

All the build tools run on [Node.js](https://nodejs.org/). Familiarity with Git, Node.js, and `npm` is assumed. Ideally, you have also used another static site generator such as Jekyll in the past, and/or have read the documentation for Eleventy to understand how it works.

This manual assumes you are using Linux or Mac. The best solution for Windows is to do your development in [WSL2](https://docs.microsoft.com/en-us/windows/wsl/).

## Development

To get started, install the correct version of Node.js (see `.nvmrc`) and latest version of `npm`. This can be done in one step with [NVM](https://github.com/nvm-sh/nvm):

	nvm install --latest-npm

Then,

	npm install	# Install dependencies (when changed)
	npm start	# Run a local instance of the website

Please read `package.json` to see what other scripts are available.

## Organization

The website is compiled by Eleventy from the following files, which describe the structure; as well as all the other files, which provide the content. The template syntax is [Nunjucks](https://mozilla.github.io/nunjucks/) with the file extension `html`.

*Reading the entire documentation for Eleventy is highly recommended in order to understand this manual.*

- `_data/`
	- JSON files serving as <q>databases</q> for certain pages
	- `docs.js` interprets the documents under `indexed/` into a database
		- Guesses the current school year from the current month
		- Hardcodes date of the latest budget (needs to be updated weekly)
	- `layout.json` specifies the default <q>layout</q> (an Eleventy concept) for all pages
- `_includes/`
	- Contains partial templates and macros reusable by other pages
	- `layouts/default.html` is the toplevel template for every page
- `plugins/`
	- `nav.js` is the custom navigation system, implemented via filters [^1]
- `.eleventy.js`
	- Copy `docs/`, `indexed/`, and `img/` to output (these are the static files)
	- Define custom filters used by the aforementioned macros
	- Configure Eleventy and load the aforementioned USAC-specific plugins
- `.eleventyignore` hides some pages from the site, like this manual
- `.nvmrc` specifies the Node.js version used for building

[^1]: This is fairly complex but there's no documentation yet. You are encouraged to read the source code thoroughly to understand how the front matter in the content files determines a page's position in the navigation. (Or, better yet, delete this plugin and use Eleventy's built-in navigation system, which appeared after this was built).

## Document Management

To add a document to the website, place it under `indexed/` with the appropriate filename. It will be accessible to all pages that need it. If it doesn't fit one of the existing types, place it under `docs/` instead, and manually link to it.

- `indexed/`
	- Filenames have format `<type>.<date>.<name>.pdf`
	- `type` is one of <q>minutes</q>, <q>agenda</q>, <q>resolution</q>, <q>budget</q>, <q>misc</q> or any type that you may implement
	- `date` is in ISO format
		- If only the year is present, it represents the school year ending in that year, rather than a calendar year
	- `name` is human readable
		- Optional; should only be provided if the `type` needs it
- `docs/`
	- All assets needed by other pages, including images and PDF's
	- This is best for files linked to by one particular page
- `img/`
	- Images used by the theme, not by any particular page
	- Having to add files to `img/` is rare
