const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filters = require('./utils/filters.js')

// Eleventy config
module.exports = function(config) {
  // Plugins
  config.addPlugin(syntaxHighlight)

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName])
  })

  // Asset Watch Targets
  config.addWatchTarget('./documentation/assets')
  config.addWatchTarget('./appuniversum')

  // ---
  // Markdown
  // ---
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs).disable('code');

  config.setLibrary("md", markdownLib);

  // ---
  // Aliases
  // ---
  config.addLayoutAlias('base', 'layouts/base.liquid');
  config.addLayoutAlias('default', 'layouts/default.liquid');
  config.addLayoutAlias('documentation', 'layouts/documentation.liquid');
  config.addLayoutAlias('component', 'layouts/component.liquid');

  // ---
  // Collections
  // ---
  // Components > sorted by name
  config.addCollection('components', collection => {
    return collection.getFilteredByGlob('documentation/components/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });


  // Patterns > sorted by name
  config.addCollection('patterns', collection => {
    return collection.getFilteredByGlob('documentation/patterns/*.md').sort((a, b) => {
      return b.date - a.date;
    });;
  });


  // ---
  // Plugins
  // ---
  config.addPlugin(syntaxHighlight);

  // ---
  // Copy static files to the compiled site folder
  // ---
  config.addPassthroughCopy('documentation/assets/scripts');
  config.addPassthroughCopy('documentation/assets/img');
  config.addPassthroughCopy('documentation/assets/build');
  config.addPassthroughCopy('documentation/favicon.png');
  config.addPassthroughCopy('documentation/favicon.ico');
  config.addPassthroughCopy('documentation/apple-touch-icon-precomposed.png');


  // ---
  // Liquid config
  // ---
  config.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });


  // ---
  // Config
  // ---
  return {
    dir: {
      input: 'documentation',
      output: '_site'
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };

};
