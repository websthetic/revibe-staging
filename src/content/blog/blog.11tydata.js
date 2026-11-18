// Every post in this folder: tagged "post" (listed on /blogs/), laid out by layouts/post.html.
// The address comes from the post's url field, so it stays the same as on the old site
// ("Why-More-People-Choose-Massage-Markham" becomes /why-more-people-choose-massage-markham/).
module.exports = {
    tags: "post",
    layout: "layouts/post.html",
    eleventyComputed: {
        permalink: (data) => `/${slugify(data.url || data.page.fileSlug)}/`,
        // the post's faqs ({ question, answer }) in the shape components/faq.html expects
        faq: (data) =>
            data.faqs && data.faqs.length
                ? { title: "Questions", items: data.faqs.map((item) => ({ q: item.question, a: item.answer })) }
                : null,
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
