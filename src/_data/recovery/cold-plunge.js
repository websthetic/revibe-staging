// Content for /cold-plunge/, from the dev handover. Rendered by layouts/recovery.html.
// Internal links are "/" until the real pages exist (memberships among them).
const home = require("../home.js");

// the home Instagram posts, cold plunge ones first, as in the handover
const igOrder = [
    "Box breathing in the cold plunge",
    "Plunging with physio Benson",
    "Benefits of the cold plunge",
    "Getting into the cold plunge after a session",
    "A calm cold plunge",
    "The infrared sauna room at Revibe",
    "Infrared sauna warms the body",
    "A guest relaxing in the infrared sauna",
    "Friday night in the sauna",
    "Red light in the infrared sauna",
    "The Coldture control panel",
];

module.exports = {
    name: "Cold plunge",
    // background tint of the hero: "cold" (green) or "heat" (red)
    theme: "cold",
    requestService: "Cold plunge",

    hero: {
        title: "Cold plunge",
        subtitle: "Ice bath therapy in Mississauga and Markham",
        text: "Recover faster, build resilience and stay consistent. Cold water immersion helps your body handle stress, calm soreness and come back ready for the next session.",
        secondaryButton: { label: "See memberships", url: "/memberships/" },
        // first slot plays a short loop; the poster shows while it loads and when motion is reduced
        video: { src: "/assets/videos/cold-plunge.mp4", poster: "/assets/videos/cold-plunge-poster.jpg" },
        images: [
            { src: "/assets/images/recovery/plunge-calm.jpg", alt: "A guest sitting calmly in the cold plunge", position: "center 70%" },
            { src: "/assets/images/recovery/plunge-above.jpg", alt: "A guest lying back in the cold plunge, seen from above", position: "center 45%" },
        ],
    },

    facts: [
        { figure: "1 to 3", label: "minutes per plunge" },
        { figure: "30", label: "minute session" },
        { figure: "$30", label: "drop-in" },
        { figure: "$79", label: "memberships a month" },
    ],

    benefits: {
        title: "What does a cold plunge do?",
        text: "Cold closes blood vessels and calms the nervous system. Done regularly, it helps your body recover between sessions and handle stress better.",
        items: [
            "Less muscle soreness and inflammation",
            "Faster recovery between workouts",
            "Better circulation",
            "Stronger stress tolerance",
            "Support for injury recovery",
            "More energy and alertness after",
            "A lift in mood",
            "Resilience you can build week by week",
        ],
    },

    boxes: [
        {
            title: "Who it is for",
            dark: true,
            items: ["Athletes and active people", "Anyone sore after training", "Busy, stressed professionals", "Tendon or repetitive strain", "Low back or joint discomfort", "Anyone building a routine"],
            image: "/assets/images/recovery/plunge-smile.jpg",
            alt: "A guest smiling through his cold plunge",
            position: "center 40%",
        },
        {
            title: "The Revibe experience",
            items: ["A clean, controlled plunge", "Private, solo or with friends", "Towels and showers on site", "Pairs with sauna or physio", "Beginner friendly from day one", "Your first plunge is guided"],
            image: "/assets/images/recovery/plunge-breathing.jpg",
            alt: "A guest breathing calmly in the cold plunge",
            position: "center 35%",
        },
    ],

    // components/steps.html
    steps: {
        title: "How does contrast therapy work?",
        text: "Heat opens your blood vessels, cold closes them, and moving between the two moves blood through tissue faster than either does alone. Most members run two or three rounds and are out inside half an hour, short enough to do before work. Thirty seconds in the water is a real first plunge.",
        buttons: [
            { label: "See pricing", url: "#pricing" },
            { label: "Book a single session", url: "/", book: true },
        ],
        steps: [
            { title: "Sauna", text: "Twelve to fifteen minutes in the infrared cabin until you are properly warm.", image: "/assets/images/recovery/sauna-warm.jpg", alt: "A guest warming up in the infrared sauna", position: "center 40%" },
            { title: "Shower", text: "A quick rinse between the two. Thirty seconds is enough.", image: "/assets/images/osteopathy/statement-plunge.jpg", alt: "A hand trailing through cold water", position: "center 45%" },
            { title: "Cold plunge", text: "One to three minutes. Start shorter and build it over a few weeks.", image: "/assets/images/recovery/plunge-above-2.jpg", alt: "A guest lying back in the cold plunge, seen from above", position: "center 40%" },
            { title: "Repeat", text: "Two or three rounds is the usual session. The team guides your first one.", image: "/assets/images/recovery/plunge-lean.jpg", alt: "A guest leaning back in the cold plunge", position: "center 45%" },
        ],
    },

    pricing: {
        title: "How much does it cost?",
        text: "Try a single session, or join and make it a routine. Every membership includes the cold plunge and infrared sauna, at either clinic.",
        // colour: yellow, white (default) or black; book: true opens the Book your session pop-up
        plans: [
            { label: "Drop-in", price: "$30", text: "One 30 minute session. Cold plunge and infrared sauna, plus HST.", cta: "Book a session", url: "/", book: true, colour: "yellow" },
            { label: "Social Butterfly", price: "$79", per: "/mo", text: "8 sessions a month on a 6-month term, or $99 month to month. Unlimited from $99.", cta: "See the plan", url: "/memberships/" },
            { label: "Recovery Club", price: "$139", per: "/mo", text: "Private access, compression boots, a guest every session and 20% off assessments.", cta: "See the plan", url: "/memberships/", colour: "black" },
        ],
        fine: "All prices plus HST. Three drop-ins cost more than a month of Social Butterfly.",
    },

    // sections/home/reviews.html
    reviews: {
        title: "What guests say",
        rating: home.reviews.rating,
        count: home.reviews.count,
        note: home.reviews.note,
        allUrl: home.reviews.allUrl,
        writeUrl: home.reviews.writeUrl,
        items: [
            { name: "Charla C.", service: "Sauna and cold plunge", quote: "It’s my first time ever trying out an infrared sauna and I am loving every second of it. The cold water plunge is no joke but after awhile your body really gets use it and the benefits are endless. Your body really feels amazing afterwards." },
            { name: "Ricardo B.", service: "Recovery", quote: "If you’re looking for a place to improve your self I would say this is it. From their highly skilled and knowledgeable staff to their various different facilities, private gym, sauna, cold plunge, recovery room etc. it’s a great place to be." },
            { name: "Teresa N.", service: "Cold plunge", quote: "Love that the facility has a recovery room and cold plunge as well." },
            { name: "Kimberley B.", service: "Recovery", quote: "Revibe wellness has it all under one roof for all your therapy, healing, wellness needs. The recovery room is awesome. Really love the infrared sauna." },
            { name: "Tom M.", service: "Infrared sauna", quote: "Everybody that works there is super friendly. Enjoyed the infrared sauna today as I sweat like crazy and felt amazing after." },
            { name: "Thomas A.", service: "Infrared sauna", quote: "Amazing place with such welcoming staff! The place is always super clean with such a relaxing vibe. I tried the NEW infrared sauna this visit and was not disappointed." },
        ],
    },

    // sections/home/instagram.html
    instagram: {
        ...home.instagram,
        posts: igOrder.map((caption) => home.instagram.posts.find((post) => post.caption === caption)),
    },

    // components/faq.html
    faq: {
        title: "Cold plunge FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            { q: "What are the benefits of cold plunge therapy?", a: "It helps reduce inflammation, improve recovery and increase circulation. Athletes and active people use it to recover faster and stay consistent." },
            { q: "How long should I stay in a cold plunge?", a: "Most people stay in for one to three minutes. Thirty seconds is a normal first plunge, and the team guides your first session." },
            { q: "How often should I do cold plunges?", a: "It depends on your goals. Many people plunge two to four times a week, often after training." },
            { q: "Is a cold plunge safe?", a: "Yes, when used properly. Start short and build up. If you have a heart condition or are pregnant, check with your doctor first." },
            { q: "Can I combine cold plunge with the sauna?", a: "Yes. Moving between the sauna and the plunge is contrast therapy, and most members do two or three rounds." },
            { q: "Do I need to book in advance?", a: "Yes. Booking ahead secures your time." },
            { q: "What should I bring?", a: "Swimwear, a change of clothes and water. Towels are provided and showers are on site." },
            { q: "Can I come with a friend?", a: "Yes. Many guests book together, and Recovery Club members can bring a guest every session." },
            { q: "How much does a cold plunge cost?", a: "A single session is $30 plus HST. Memberships start at $79 a month on a 6-month term." },
        ],
    },

    stickyLabel: "Book a cold plunge",
};
