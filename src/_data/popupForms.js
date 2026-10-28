// Settings for the "Book your session", "Request to book" and careers pop-ups (components/popup-forms/).
module.exports = {
    book: {
        title: "Book your session",
        text: "Pick your clinic. You book straight into Jane, our scheduling system, where you choose your practitioner and time.",
    },
    request: {
        title: "Request to book",
        text: "Tell us what you need and the team will call you back to book the right session.",
        image: "/assets/images/popup-forms/request-to-book.jpg",
        perks: ["A call back within one business day", "Direct billing to most insurers", "No referral needed"],
        // Netlify Forms picks the form up by this name when the site is deployed
        formName: "request-booking",
        // after a successful request, these services go to their thank you page
        // (src/content/pages/thank-you-pages/); the rest show the confirmation in the pop-up
        thankYouPages: {
            Chiropractic: "/thank-you-chiropractic-care/",
            "Cold plunge": "/thank-you-cold-plunge/",
            "Infrared sauna": "/thank-you-infrared-sauna/",
            "Massage therapy": "/thank-you-massage-therapy/",
            "Naturopathic medicine": "/thank-you-naturopathic/",
            Osteopathy: "/thank-you-osteopathy/",
            "Pelvic floor physiotherapy": "/thank-you-pelvic/",
            Physiotherapy: "/thank-you-physiotherapy/",
            "Recovery lounge": "/thank-you-recovery-lounge/",
            "Stretch therapy": "/thank-you-stretch-therapy/",
        },
        services: [
            "Physiotherapy",
            "Pelvic floor physiotherapy",
            "Massage therapy",
            "Chiropractic",
            "Osteopathy",
            "Naturopathic medicine",
            "Stretch therapy",
            "Performance training",
            "Cold plunge",
            "Infrared sauna",
            "Recovery lounge",
            "Memberships",
            "Not sure yet",
        ],
        sources: [
            "Google search",
            "Google Maps",
            "Instagram",
            "TikTok",
            "A friend or family member",
            "My doctor or another practitioner",
            "Recess",
            "Walked by",
            "Other",
        ],
    },
    // "Apply to join Revibe" on the careers and job pages (components/popup-forms/careers-popup-form.html);
    // the roles come from careers.roles.list in _data/careers.js
    careers: {
        title: "Join the Revibe team",
        text: "We're growing and looking for passionate people. Fill out the form and we'll be in touch.",
        tagline: "Be you again, but better",
        image: "/assets/images/careers/revibe-clinic-client-intake-form.webp",
        // the same Netlify form name as the old site, so applications keep landing in one list
        formName: "careers",
        experience: ["New grad", "1 to 3 years", "3 to 5 years", "5+ years"],
        availability: ["Full-time", "Part-time"],
        consent: "By submitting your info, you consent to receiving electronic and telephone communications (email, SMS text and mobile) from Revibe about current and upcoming projects, including promotions, news, events and related subjects. You can unsubscribe at any time.",
    },
};
