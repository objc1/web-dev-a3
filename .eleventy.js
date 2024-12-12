module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/styles");

    // Bootstrap
    eleventyConfig.addPassthroughCopy({
        "node_modules/bootstrap/dist/css/bootstrap.min.css": "styles/bootstrap.min.css",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "scripts/bootstrap.bundle.min.js"
    });

    eleventyConfig.addFilter("readableDate", function (date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };

        return new Date(date).toLocaleDateString('en-CA', options);
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "dist"
        }
    };
};

