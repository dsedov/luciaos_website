const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    // Add the navigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Configure markdown-it
    const md = new markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });
    eleventyConfig.setLibrary("md", md);

    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("CNAME");

    // Create collections for different types of content
    eleventyConfig.addCollection("docs", function(collectionApi) {
        return collectionApi.getFilteredByGlob("docs/**/*.md");
    });

    eleventyConfig.addCollection("components", function(collectionApi) {
        return collectionApi.getFilteredByGlob("components/**/*.{md,njk}");
    });

    eleventyConfig.addCollection("external", function(collectionApi) {
        const externalDocs = collectionApi.getFilteredByGlob("external/**/*.md");
        // Ensure each external doc has proper navigation data
        externalDocs.forEach(doc => {
            if (!doc.data.eleventyNavigation) {
                doc.data.eleventyNavigation = {};
            }
            // Don't modify the index page
            if (doc.url !== "/external/") {
                doc.data.eleventyNavigation.parent = "External";
            }
        });
        return externalDocs;
    });

    // Add a filter for sorting navigation items
    eleventyConfig.addFilter("sortByOrder", function(values) {
        return values.sort((a, b) => a.data.eleventyNavigation.order - b.data.eleventyNavigation.order);
    });

    // Add filter to filter navigation items by section
    eleventyConfig.addFilter("filterBySection", function(values, section) {
        return values.filter(item => {
            // Include the section's index page
            if (item.url === `/${section}/`) return true;
            // Include all pages under the section
            return item.url.startsWith(`/${section}/`);
        });
    });

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};