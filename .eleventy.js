// ─────────────────────────────────────────────────────────────────────────────
// ELEVENTY CONFIGURATION
// This file configures how Eleventy builds your static site
// Documentation: https://www.11ty.dev/docs/config/
// ─────────────────────────────────────────────────────────────────────────────

// 📦 Plugin Imports
const pluginImages = require("@codestitchofficial/eleventy-plugin-sharp-images");
const pluginMinifier = require("@codestitchofficial/eleventy-plugin-minify");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

// ⚙️ Configuration Files
const configSitemap = require("./src/config/plugins/sitemap");
const configImages = require("./src/config/plugins/images");

// 🔧 Processing Functions
const less = require("./src/config/processors/less");
const javascript = require("./src/config/processors/javascript");

// 🛠️ Utilities
const filterPostDate = require("./src/config/filters/postDate");
const filterIsoDate = require("./src/config/filters/isoDate");
const isProduction = process.env.ELEVENTY_ENV === "PROD";

module.exports = function (eleventyConfig) {
    // ═════════════════════════════════════════════════════════════════════════
    // LANGUAGES
    // Using Eleventy's build events to process non-template languages
    // Learn more: https://www.11ty.dev/docs/events/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * JavaScript & CSS Processing
     * These processors handle bundling, transpiling, and minification
     * - JavaScript: Compiled with esbuild for modern bundling
     * - CSS/LESS: Processed and minified for production, including a PostCSS pipeline
     */
    eleventyConfig.on("eleventy.after", javascript);
    eleventyConfig.on("eleventy.after", less);

    // ═════════════════════════════════════════════════════════════════════════
    // PLUGINS
    // Extend Eleventy with additional functionality
    // Learn more: https://www.11ty.dev/docs/plugins/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * 🖼️ Image Optimization
     * Resize and optimize images for better performance using {% getUrl %}
     * Documentation: https://github.com/CodeStitchOfficial/eleventy-plugin-sharp-images
     */
    eleventyConfig.addPlugin(pluginImages, configImages);

    /*
     * 🗺️ Sitemap Generation
     * Creates sitemap.xml automatically using domain from _data/client.json
     * Documentation: https://github.com/quasibit/eleventy-plugin-sitemap
     */
    eleventyConfig.addPlugin(pluginSitemap, configSitemap);

    /*
     * 📦 Production Minification
     * Minifies HTML, CSS, JSON, XML, XSL, and webmanifest files
     * Only runs during production builds (npm run build)
     * Documentation: https://github.com/CodeStitchOfficial/eleventy-plugin-minify
     */
    if (isProduction) {
        eleventyConfig.addPlugin(pluginMinifier);
    }

    // ═════════════════════════════════════════════════════════════════════════
    // PASSTHROUGH COPIES
    // Copy files directly to output without processing
    // Learn more: https://www.11ty.dev/docs/copy/
    // ═════════════════════════════════════════════════════════════════════════

    eleventyConfig.addPassthroughCopy("./src/assets"); // Static assets
    eleventyConfig.addPassthroughCopy("./src/_redirects"); // Redirect rules
    eleventyConfig.addPassthroughCopy("./src/llms.txt"); // plain summary for AI search tools, served at /llms.txt

    // ═════════════════════════════════════════════════════════════════════════
    // FILTERS
    // Transform data in templates at build time
    // Learn more: https://www.11ty.dev/docs/filters/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * 📅 Human-Readable Date Formatting Filter
     * Converts JavaScript dates to human-readable format
     * Usage: {{ "2023-12-02" | postDate }}
     * Powered by Luxon: https://moment.github.io/luxon/api-docs/
     */
    eleventyConfig.addFilter("postDate", filterPostDate);

    /*
     * 📅 ISO Date Formatting Filter
     * Converts JavaScript dates to ISO 8601 format
     * Usage: {{ "2023-12-02" | isoDate }}
     * Powered by Luxon: https://moment.github.io/luxon/api-docs/
     */
    eleventyConfig.addFilter("isoDate", filterIsoDate);

    // ═════════════════════════════════════════════════════════════════════════
    // SHORTCODES
    // Generate dynamic content with JavaScript
    // Learn more: https://www.11ty.dev/docs/shortcodes/
    // ═════════════════════════════════════════════════════════════════════════

    /*
     * 📆 Current Year Shortcode
     * Outputs the current year (useful for copyright notices)
     * Usage: {% year %}
     * Updates automatically with each build
     */
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // ═════════════════════════════════════════════════════════════════════════
    // BLOG
    // ═════════════════════════════════════════════════════════════════════════

    const markdownIt = require("markdown-it");
    const md = markdownIt({ html: true });

    // inline Markdown (FAQ answers with [links](/...)) to HTML
    eleventyConfig.addFilter("mdInline", (text) => md.renderInline(String(text || "")));
    // the same text without Markdown or HTML, word for word as the visitor reads it (FAQPage schema)
    eleventyConfig.addFilter("plainText", (text) =>
        String(text || "")
            .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
            .replace(/<[^>]+>/g, "")
            .replace(/\*\*?|__/g, "")
    );
    // words in a rendered post (BlogPosting wordCount)
    eleventyConfig.addFilter("wordCount", (html) =>
        String(html || "")
            .replace(/<[^>]+>/g, " ")
            .split(/\s+/)
            .filter(Boolean).length
    );
    // "More from the blog": the post's related slugs first, then the newest posts in its category, then the newest
    eleventyConfig.addFilter("relatedPosts", (posts, page, related, category) => {
        const others = (posts || []).filter((p) => p.url && p.url !== page.url).reverse();
        const picked = [];
        const add = (p) => p && !picked.includes(p) && picked.length < 3 && picked.push(p);
        (related || []).forEach((slug) => add(others.find((p) => p.url === `/${slug}/`)));
        if (category) others.filter((p) => p.data.category === category).forEach(add);
        others.forEach(add);
        return picked;
    });

    /*
     * Scheduled posts: in a production build a post dated in the future is left out
     * (no page, not in the blog list or sitemap), and links to it from other pages are
     * shown as plain text. It goes live with the first build on or after its date.
     */
    if (isProduction) {
        const fs = require("fs");
        const path = require("path");
        const blogDir = path.join(__dirname, "src/content/blog");
        const now = new Date();
        const scheduled = fs
            .readdirSync(blogDir)
            .filter((f) => f.endsWith(".md"))
            .map((f) => {
                const head = fs.readFileSync(path.join(blogDir, f), "utf8").split("---")[1] || "";
                const date = (head.match(/^date:\s*(.+)$/m) || [])[1];
                const url = ((head.match(/^url:\s*(.+)$/m) || [])[1] || f.replace(/\.md$/, "")).trim().toLowerCase();
                return { url, date: date && new Date(date.trim()) };
            })
            .filter((p) => p.date && p.date > now)
            .map((p) => `/${p.url}/`);

        eleventyConfig.addPreprocessor("scheduled-posts", "md", (data) => {
            if (data.page.inputPath.includes("/content/blog/") && data.page.date > now) return false;
        });
        if (scheduled.length) {
            eleventyConfig.addTransform("unlink-scheduled-posts", function (content) {
                if (!(this.page.outputPath || "").endsWith(".html")) return content;
                // the minifier may have dropped the quotes around the href
                return content.replace(/<a [^>]*href="?([^"\s>]+)"?[^>]*>([\s\S]*?)<\/a>/g, (link, href, text) =>
                    scheduled.includes(href) ? text : link
                );
            });
        }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // BUILD CONFIGURATION
    // Define input/output directories and template engine
    // ═════════════════════════════════════════════════════════════════════════

    return {
        dir: {
            input: "src", // Source files directory
            output: "public", // Build output directory
            includes: "_includes", // Partial templates directory
            data: "_data", // Global data files directory
        },
        htmlTemplateEngine: "njk", // Nunjucks for HTML templates
    };
};
