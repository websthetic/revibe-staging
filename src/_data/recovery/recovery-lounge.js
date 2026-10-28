// Content for /recovery-lounge/, from the dev handover. Rendered by layouts/recovery.html.
// Reviews come from the cold plunge page (recovery reviews first); internal links are "/" until those pages exist.
const coldPlunge = require("./cold-plunge.js");
const home = require("../home.js");

// pick items from a list in a given order, matching on one field
const inOrder = (list, field, order) => order.map((value) => list.find((item) => item[field] === value));

module.exports = {
    name: "Recovery lounge",
    // background tint of the hero: "cold" (green), "heat" (red) or "lounge" (deep teal)
    theme: "lounge",
    requestService: "Recovery lounge",

    hero: {
        title: "Recovery lounge",
        subtitle: "Normatec compression in Mississauga and Markham",
        text: "Full-body recovery, made for real life. Settle into a theatre-style recliner, put on Normatec compression and let your legs, hips and arms reset while you switch off.",
        secondaryButton: { label: "See memberships", url: "/memberships/" },
        video: { src: "/assets/videos/recovery-lounge.mp4", poster: "/assets/videos/recovery-lounge-poster.jpg" },
        images: [
            { src: "/assets/images/recovery/lounge-group.jpg", alt: "Guests relaxing together in Normatec boots in the Revibe Recovery Lounge", position: "center 50%" },
            { src: "/assets/images/recovery/lounge-room.jpg", alt: "The Revibe Recovery Lounge with its reclining chairs and neon sign", position: "center 50%" },
        ],
    },

    facts: [
        { figure: "15 to 30", label: "minutes in compression" },
        { figure: "3", label: "zones: legs, hips, arms" },
        { figure: "$1", label: "a minute drop-in" },
        { figure: "$25", label: "unlimited a month" },
    ],

    benefits: {
        title: "What does compression do?",
        text: "Normatec boots fill and release in waves from your feet up. That pulsing moves fluid out of tired muscles, so you feel lighter and recover between sessions.",
        items: [
            "Less soreness and fatigue",
            "Better circulation",
            "Less tightness in the legs and hips",
            "Faster recovery between workouts",
            "Less heaviness and swelling",
            "More energy for the next session",
            "A real chance to switch off",
            "A routine you will keep",
        ],
    },

    boxes: [
        {
            title: "Who it is for",
            dark: true,
            items: ["Athletes and active people", "Anyone sore after training", "Heavy, tired or swollen legs", "People on their feet all day", "Busy, stressed professionals", "Anyone who loves compression"],
            image: "/assets/images/recovery/lounge-setup.jpg",
            alt: "A Revibe team member setting up a guest in Normatec boots",
            position: "center 45%",
        },
        {
            title: "The Revibe experience",
            items: ["Normatec boots, arms and hips", "Massage guns for tight spots", "Theatre-style reclining chairs", "A dark, quiet recovery room", "Add sauna or plunge first", "Come solo or as a group"],
            image: "/assets/images/recovery/lounge-dozing.jpg",
            alt: "A guest dozing in a recliner wearing Normatec boots",
            position: "center 55%",
        },
    ],

    // a dark numbered list in place of the contrast therapy steps
    flow: {
        title: "Your recovery flow",
        text: "Four steps, about an hour. Do all of it, or come in just for the boots.",
        image: "/assets/images/recovery/lounge-boots.jpg",
        alt: "Close up of Normatec recovery boots on a guest in the lounge",
        position: "center 50%",
        steps: [
            { title: "Heat or cold", text: "Start in the infrared sauna or cold plunge, if you like." },
            { title: "Compression", text: "Full-body Normatec for 15 to 30 minutes." },
            { title: "Massage gun", text: "Work on anything still tight." },
            { title: "Recline", text: "Stay a while and let it settle." },
        ],
    },

    pricing: {
        title: "How much does it cost?",
        text: "Pay by the minute, go unlimited, or get compression with your Recovery Club membership.",
        plans: [
            { label: "Drop-in", price: "$1", per: "/min", text: "Normatec compression, billed by the minute. Most sessions run 15 to 30 minutes.", cta: "Book the lounge", url: "/", book: true, colour: "yellow" },
            { label: "Unlimited compression", price: "$25", per: "/mo", text: "Unlimited Normatec sessions every month. $15 a month when you add it to a membership.", cta: "See memberships", url: "/memberships/" },
            { label: "Recovery Club", price: "$139", per: "/mo", text: "30 minutes of compression boots included, plus the sauna, cold plunge, private access and a guest every session.", cta: "See the plan", url: "/memberships/", colour: "black" },
        ],
        fine: "All prices plus HST.",
    },

    reviews: {
        ...coldPlunge.reviews,
        items: inOrder(coldPlunge.reviews.items, "name", ["Ricardo B.", "Kimberley B.", "Teresa N.", "Charla C.", "Tom M.", "Thomas A."]),
    },

    instagram: {
        ...home.instagram,
        posts: inOrder(home.instagram.posts, "caption", [
            "Plunging with physio Benson",
            "Box breathing in the cold plunge",
            "Getting into the cold plunge after a session",
            "Benefits of the cold plunge",
            "A calm cold plunge",
            "The infrared sauna room at Revibe",
            "Infrared sauna warms the body",
            "A guest relaxing in the infrared sauna",
            "Friday night in the sauna",
            "Red light in the infrared sauna",
            "The Coldture control panel",
        ]),
    },

    faq: {
        title: "Recovery lounge FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            { q: "What is Normatec compression?", a: "Normatec is a dynamic compression system. The boots, arm and hip attachments fill with air in waves, from your feet or hands toward your core, to move fluid and ease tired muscles." },
            { q: "Can I do full-body compression?", a: "Yes. The lounge has boots, arm attachments and hip attachments, so you can work on your legs, hips and arms." },
            { q: "How long is a compression session?", a: "Most guests use the boots for 15 to 30 minutes." },
            { q: "Are there massage guns?", a: "Yes. Massage guns are available in the lounge for targeted spots." },
            { q: "Is the lounge private?", a: "It is a shared, quiet room with theatre-style recliners. Most guests keep it calm, put headphones in and switch off." },
            { q: "Can I combine it with the sauna or cold plunge?", a: "Yes. Many guests start with the sauna or cold plunge and finish in compression." },
            { q: "Is compression only for athletes?", a: "No. It helps anyone with sore, tight or heavy legs, including people who are on their feet all day." },
            { q: "Do I need to book ahead?", a: "Yes. Booking ahead secures your chair and your boots." },
            { q: "Can compression help with swelling?", a: "Many guests find their legs feel less heavy and swollen after a session. If you have a medical condition that causes swelling, check with your doctor first." },
        ],
    },

    stickyLabel: "Book the recovery lounge",
};
