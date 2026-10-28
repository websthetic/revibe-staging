// Content for /memberships/, from the dev handover. Rendered by src/content/pages/recovery/memberships.html.
// The contrast therapy steps come from the cold plunge page.
const coldPlunge = require("./cold-plunge.js");

module.exports = {
    hero: {
        title: "Cold plunge and sauna memberships",
        text: "Two memberships, two terms, and both continue month to month with no cancellation fee after the initial commitment. Use them at every Revibe clinic.",
        proofBold: "From $79 a month",
        proof: "on a 6-month term, or $30 for a single session. 600+ five star reviews.",
        images: [
            { src: "/assets/images/services/recovery.jpg", alt: "A guest sitting calmly in the cold plunge at Revibe", position: "center 75%" },
            { src: "/assets/images/recovery/sauna-solo.jpg", alt: "A guest alone in the infrared sauna", position: "center 45%" },
            { src: "/assets/images/pelvic/seating-nook.jpg", alt: "The Revibe lounge with towels and merch", position: "center 50%" },
        ],
    },

    plans: {
        title: "How much does a membership cost?",
        text: "Each membership comes as 8 sessions a month or unlimited, on a 6-month commitment or month to month. Both bill monthly and continue month to month after the initial term.",
        // prices are per month, plus HST: [6-month term, month to month]
        items: [
            {
                name: "Social Butterfly",
                tagline: "Make recovery a routine. Built for a steady weekly reset.",
                image: "/assets/images/pelvic/lounge.jpg",
                alt: "The shared recovery space at Revibe Mississauga",
                position: "center 55%",
                rows: [
                    { label: "8 sessions a month", note: "About twice a week", prices: ["$79", "$99"] },
                    { label: "Unlimited", note: "Up to one a day", prices: ["$99", "$119"] },
                ],
                fine: "All prices plus HST, per month. Unlimited is $20 more than 8 sessions on either term.",
                perks: ["30 minutes of cold plunge and infrared sauna every session", "Shared recovery space", "Use it at any Revibe location"],
            },
            {
                name: "Recovery Club",
                // the dark card
                featured: true,
                tagline: "Make recovery a lifestyle, and bring your people.",
                image: "/assets/images/recovery/sauna-group.jpg",
                alt: "Three guests together in the infrared sauna",
                position: "center 50%",
                rows: [
                    { label: "8 sessions a month", note: "About twice a week", prices: ["$139", "$169"] },
                    { label: "Unlimited", note: "Up to one a day", prices: ["$189", "$229"] },
                ],
                fine: "All prices plus HST, per month. Unlimited is $50 more on the 6-month term and $60 more month to month.",
                perks: [
                    "Private access to the recovery space",
                    "30 minutes of cold plunge and infrared sauna",
                    "30 minutes of compression boots in the recovery lounge",
                    "Bring one guest every session",
                    "20% off initial assessments for all treatments",
                    "Exclusive Revibe merch",
                    "Use it at any Revibe location",
                ],
            },
        ],
        dropIn: {
            price: "$30",
            title: "Not ready to commit?",
            text: "One drop-in session, no commitment. Thirty minutes of cold plunge and infrared sauna, plus HST.",
        },
    },

    terms: {
        title: "How does the commitment work?",
        items: [
            { big: "Drop-in", label: "$30, no commitment", text: "One cold plunge and infrared sauna session, 30 minutes. Book it in Jane." },
            { big: "1 month", label: "Then month to month", text: "An initial one-month commitment, then month to month. No cancellation fee after the first month." },
            { big: "6 months", label: "The best monthly rate", text: "An initial six-month commitment with monthly billing, then month to month. No cancellation fee after the first six months." },
        ],
    },

    steps: {
        ...coldPlunge.steps,
        buttons: [
            { label: "See the plans", url: "#plans" },
            { label: "Book a single session", url: "/", book: true },
        ],
    },

    reviews: {
        title: "What do members say about the cold plunge and sauna?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        items: [
            { name: "Charla C.", initials: "CC", quote: "It’s my first time ever trying out an infrared sauna and I am loving every second of it. The privacy is another great part no one bothers you or interrupts you completely private and rejuvenating. The cold water plunge is no joke but after awhile your body really gets use it and the benefits are endless. Your body really feels amazing afterwards. Especially if you have muscle soreness, tightness and or inflammation." },
            { name: "Tom M.", initials: "TM", quote: "Everybody that works there is super friendly. Enjoyed the infrared sauna today as I sweat like crazy and felt amazing after. Will update with future experiences." },
            { name: "Thomas A.", initials: "TA", quote: "Amazing place with such welcoming staff! The place is always super clean with such a relaxing vibe. I tried the NEW infrared sauna this visit and was not disappointed." },
        ],
    },

    join: {
        title: "Start this week",
        text: "Tell us which membership suits you and the team will reach out to set it up and book your first session.",
        // Netlify Forms picks the form up by this name when the site is deployed
        formName: "membership",
        consent: "By submitting, you agree to receive email, text and phone messages from Revibe about your membership, promotions and events. Unsubscribe any time.",
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. It will tell you whether recovery or treatment should come first.",
        button: "Take the Care Map",
    },

    // no serviceLabel: the clinic cards skip the "<service> in <clinic>" link
    locations: { title: "Where can I use my membership?" },

    faq: {
        title: "Membership FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            { q: "How much is a cold plunge membership in Mississauga?", a: "Social Butterfly is $79 plus HST a month for 8 sessions or $99 for unlimited on a 6-month term, and $99 or $119 month to month. Recovery Club, which adds private access, compression boots, a guest every session and 20% off initial assessments, is $139 or $189 on a 6-month term and $169 or $229 month to month. A single drop-in is $30, so three drop-ins already cost more than a month of Social Butterfly." },
            { q: "Can I pause my membership?", a: "Pauses are handled case by case. Call the clinic or speak to the front desk and we will tell you what is possible on your term." },
            { q: "What happens at the end of the term?", a: "Your membership continues month to month at the same rate, and you can cancel any time after that with no fee." },
            { q: "What if I need to cancel early?", a: "There is no cancellation fee once your initial commitment is complete, one month or six months depending on your term. Before that, speak to the front desk and we will walk you through your options." },
            { q: "Which locations can I use my membership at?", a: "Any Revibe location with a cold plunge and infrared sauna." },
            { q: "I have never done a cold plunge. Is that a problem?", a: "No. A member of the team walks you through the sequence, sets the timer and stays nearby for your first plunge. Thirty seconds is a normal first attempt, and most people double that within a month." },
            { q: "How long should I stay in the cold plunge?", a: "One to three minutes once you are used to it. Start at thirty seconds and add time across a few weeks. Getting in regularly matters more than getting in for long." },
            { q: "What do I bring?", a: "Swimwear, a towel and a change of clothes. Showers are on site, and you shower between the sauna and the plunge as part of the sequence." },
            { q: "How often should I be coming?", a: "Two to four sessions a week is where most members land. Three drop-ins already cost more than a month of Social Butterfly, so a membership starts paying for itself from the third session." },
            { q: "Does a membership cover physiotherapy or massage?", a: "No. A membership covers cold plunge and infrared sauna, and Recovery Club adds compression boots and 20% off initial assessments. Physiotherapy, massage, chiropractic, osteopathy and naturopathic medicine are booked separately, and most can be direct billed to your extended health plan. Cold plunge and sauna are not insurance eligible." },
        ],
    },

    stickyLabel: "Join a membership",
};
