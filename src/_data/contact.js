// Content for the contact page, /contact-us/ (content/pages/contact-us.html, contact.less, contact.js).
// Clinic phones, addresses and map links come from _data/clinics.js; the Instagram strip reuses careers.instagram.
module.exports = {
    hero: {
        title: "Let's help your body perform for {real life}",
        text: "Whether you're dealing with pain, tightness, fatigue, or just not feeling your best, we'll help you understand what's going on and what to do next.",
        careMap: {
            title: "Not sure what your body needs right now?",
            text: "Get your 60 second Care Map assessment.",
            button: "Start my Care Map",
        },
    },
    form: {
        title: "Tell us what's {going on}",
        text: [
            "You don't need to have it all figured out. Whether you're recovering from an injury, feeling constantly tight or sore, or just know something's off, our team will help you understand what your body needs and guide you toward the right next step.",
            "Fill out the form and we'll reach out with a clear direction.",
        ],
        // Netlify Forms picks the form up by this name (the old site's name, so messages stay in one list)
        formName: "contact",
        // a sent message goes to the general thank you page (content/pages/thank-you-pages/thank-you-general.html)
        thankYou: "/thank-you/",
        button: "Send message",
        note: "We reply within one business day.",
        image: { src: "/assets/images/contact/revibe-contact-massage.webp", alt: "A Revibe massage therapist working on a guest's back" },
        email: "hello@revibeto.com",
    },
};
