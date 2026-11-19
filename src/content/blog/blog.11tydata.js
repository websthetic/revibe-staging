// Every post in this folder: tagged "post" (listed on /blogs/), laid out by layouts/post.html.
// The address comes from the post's url field, so it stays the same as on the old site
// ("Why-More-People-Choose-Massage-Markham" becomes /why-more-people-choose-massage-markham/).
const markdownIt = require("markdown-it");
const md = markdownIt({ html: true });

// the service page a post links to in its closing block, picked from words in its address and title
// when its front matter does not set service: { label, url }. First match wins.
const services = [
    [/pelvic/, "Pelvic floor physiotherapy", "/services/pelvic-physiotherapy/"],
    [/naturopath/, "Naturopathic medicine", "/services/naturopathic-medicine/"],
    [/osteopath/, "Osteopathy", "/services/osteopathy/"],
    [/chiropract/, "Chiropractic", "/services/chiropractic/"],
    [/massage|\brmt\b|lymphatic/, "Massage therapy", "/services/massage/"],
    [/cold.plunge|ice.bath/, "Cold plunge", "/cold-plunge/"],
    [/sauna/, "Infrared sauna", "/infrared-sauna/"],
    [/normatec|compression|recovery.lounge/, "Recovery lounge", "/recovery-lounge/"],
    [/performance|combine|force.plate|baseline|training/, "Performance training", "/performance-training/"],
];
const physio = ["Physiotherapy", "/services/physiotherapy/"];

module.exports = {
    tags: "post",
    layout: "layouts/post.html",
    // og:type article, with article:published_time and article:author (layouts/base.html, post.html)
    ogType: "article",
    eleventyComputed: {
        permalink: (data) => `/${slugify(data.url || data.page.fileSlug)}/`,
        // the post's faqs ({ question, answer }) in the shape components/faq.html expects;
        // answers may hold Markdown links, rendered here
        faq: (data) =>
            data.faqs && data.faqs.length
                ? {
                      title: data.shortAnswer ? "Frequently asked questions" : "Questions",
                      items: data.faqs.map((item) => ({ q: item.question, a: md.renderInline(String(item.answer)), html: true })),
                  }
                : null,
        service: (data) => {
            if (data.service) return data.service;
            const words = `${data.url || data.page.fileSlug} ${data.title || ""} ${data.category || ""}`.toLowerCase();
            const hit = services.find(([re]) => re.test(words));
            const [label, url] = hit ? hit.slice(1) : physio;
            return { label, url };
        },
    },
};

function slugify(text) {
    return String(text)
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
