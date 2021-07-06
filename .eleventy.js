const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filters = require('./utils/filters.js')

// Eleventy config
module.exports = function(eleventyConfig) {
  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  // ---
  // Markdown
  // ---
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs).disable('code');

  eleventyConfig.setLibrary("md", markdownLib);

  // ---
  // Aliases
  // ---
  eleventyConfig.addLayoutAlias('base', 'layouts/base.liquid');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.liquid');
  eleventyConfig.addLayoutAlias('documentation', 'layouts/documentation.liquid');
  eleventyConfig.addLayoutAlias('component', 'layouts/component.liquid');

  // ---
  // Collections
  // ---
  // Components > sorted by name
  eleventyConfig.addCollection('components', collection => {
    return collection.getFilteredByGlob('documentation/components/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });


  // Patterns > sorted by name
  eleventyConfig.addCollection('patterns', collection => {
    return collection.getFilteredByGlob('documentation/patterns/*.md').sort((a, b) => {
      return b.date - a.date;
    });;
  });


  // ---
  // Plugins
  // ---
  eleventyConfig.addPlugin(syntaxHighlight);

  // ---
  // Copy static files to the compiled site folder
  // ---
  eleventyConfig.addPassthroughCopy('documentation/assets/img');
  eleventyConfig.addPassthroughCopy('documentation/assets/build');
  eleventyConfig.addPassthroughCopy('documentation/favicon.png');
  eleventyConfig.addPassthroughCopy('documentation/favicon.ico');
  eleventyConfig.addPassthroughCopy('documentation/apple-touch-icon-precomposed.png');


  // ---
  // Liquid config
  // ---
  eleventyConfig.setLiquidOptions({
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
