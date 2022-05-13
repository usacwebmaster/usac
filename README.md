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
		- Guesses the current school year from the current month [^1]
		- Hardcodes date of the latest budget (needs to be updated weekly) [^1]
	- `layout.json` specifies the default <q>layout</q> (an Eleventy concept) for all pages
- `_includes/`
	- Contains partial templates and macros reusable by other pages
	- `layouts/default.html` is the toplevel template for every page
- `plugins/`
	- `nav.js` is the custom navigation system, implemented via filters [^2]
- `.eleventy.js`
	- Copy `docs/`, `indexed/`, and `img/` to output (these are the static files)
	- Define custom filters used by the aforementioned macros
	- Configure Eleventy and load the aforementioned USAC-specific plugins
- `.eleventyignore` hides some pages from the site, like this manual
- `.nvmrc` specifies the Node.js version used for building

[^1]: This isn't a great solution; come up with a better one if you have time.
[^2]: This is fairly complex but there's no documentation yet. You are encouraged to read the source code thoroughly to understand how the front matter in the content files determines a page's position in the navigation. (Or, better yet, delete this plugin and use Eleventy's built-in navigation system, which appeared after this was built).

## Document management

To add a document to the website, place it under `indexed/` with the appropriate filename. It will be accessible to all pages that need it. If it doesn't fit one of the existing types, place it under `docs/` instead, and manually link to it.

- `indexed/`
	- Filenames have format `<type>.<date>.<name>.pdf`
	- `type` is one of <q>minutes</q>, <q>agenda</q>, <q>resolution</q>, <q>budget</q>, <q>misc</q> or any type that you may implement
	- `date` is in [ISO format](https://en.wikipedia.org/wiki/ISO_8601)
		- If only the year is present, it represents the school year ending in that year, rather than a calendar year
	- `name` is human readable
		- Optional; should only be provided if the `type` needs it
- `docs/`
	- All assets needed by other pages, including images and PDF's
	- This is best for files linked to by one particular page [^3]
- `img/`
	- Images used by the theme, not by any particular page
	- Having to add files to `img/` is rare

[^3]: Currently, there is no system of accounting between documents and the pages that link to them. I.e. both broken links as well as orphaned documents are tolerated. It would be great if you wrote a linter that fails the build if these are found.

## Styling

We are using [Sass](https://sass-lang.com/) as a CSS preprocessor. This adds complexity because Eleventy does not know about Sass, so there are extra steps to convert SCSS into CSS and copy it into the same output directory used by Eleventy. The NPM scripts handle this already.

The stylesheets are split across many files in an attempt at modularity (before Sass's new module system appeared).

- `main.scss` imports all the others in the correct order [^4]
	- `_util.scss` defines utility functions in the Sass language, and no actual styling
	- `_colors.scss` should define colors used elsewhere, with no actual styling
	- `_reset.scss` has diverged in focus over time, but it's supposed to partially reset some of the browser's default CSS so the other stylesheets need not worry about that
	- `_breaks.scss` defines breakpoints for responsive design, with no actual styling
	- `_table.scss` is styles for HTML tables
	- `_components.scss` is a catch-all for specific <q>components</q> used on various pages, and should ideally be broken down further
	- `_layout.scss` imports stylesheets from `layout/` which correspond to the main sections of the theme
		- `layout/_fold` refers to the area above the main content
		- `layout/_header` refers to the strip at the top containing the logo and toplevel navigation
		- `layout/_subnav.scss` refers to everything below the header and above the main content
		- `layout/_main.scss` styles the main area, whose content varies page-to-page
		- `layout/_footer.scss` styles the footer
	- `_vendor.scss` imports stylesheets from `vendor/`, but that shouldn't be a separate directory anymore
	- `_hacks.scss` contains workarounds for specific bugs in specific browsers

[^4]: The biggest single improvement here would be refactoring all stylesheets so that they can be imported in any order and multiple times.

## Deployment

The great advantage of a static site is that it can easily be built on any machine and served from any server. There are at least three methods currently in use:

- `npm start` on your local machine. This is how you will work on changes. It continuously builds the website as files change and serves it from a local address (typically `http://localhost:8080`). Always test this before pushing commits.
- [usac.netlify.app](https://usac.netlify.app/). Netlify is a free CI/CD service for static websites. It watches for commits to this repo and automatically builds and hosts the latest version. This serves as a mirror of the real USAC website in case there is something wrong with that one. It also lets you push to a non-`master` branch and see the effects online.
- ASUCLA server. If you are the new webmaster, your predecessor should provide this info.

## Future improvements

One important thing missing from this system is regression testing. Ideally, when you make a change or upgrade packages, you should be assured that nothing unexpected changed as a result. The best way to do this is to compare the generated page to the old pages, either in terms of HTML or (for a complete solution) in terms of visual appearance using a headless browser. A headless browser would also come in very useful for automated accessibility testing using something like Axe. This would be a fairly ambitious project, but the payoff would be higher stability and overall less time spent by the webmaster.
