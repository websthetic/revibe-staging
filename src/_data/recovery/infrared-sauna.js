// Content for /infrared-sauna/, from the dev handover. Rendered by layouts/recovery.html.
// The contrast therapy steps, pricing and reviews are the same as the cold plunge page, so they come from there.
const coldPlunge = require("./cold-plunge.js");
const home = require("../home.js");

// pick items from a list in a given order, matching on one field
const inOrder = (list, field, order) => order.map((value) => list.find((item) => item[field] === value));

module.exports = {
    name: "Infrared sauna",
    // background tint of the hero: "cold" (green) or "heat" (red)
    theme: "heat",
    requestService: "Infrared sauna",

    hero: {
        title: "Infrared sauna",
        subtitle: "Red light sauna therapy in Mississauga and Markham",
        text: "Recover deeper and reset your system. Infrared heat raises your core temperature, opens up circulation and relaxes tight muscles, so you recover between sessions and stay consistent.",
        secondaryButton: { label: "See memberships", url: "/memberships/" },
        video: { src: "/assets/videos/infrared-sauna.mp4", poster: "/assets/videos/infrared-sauna-poster.jpg" },
        images: [
            { src: "/assets/images/recovery/sauna-group.jpg", alt: "Three guests together in the infrared sauna", position: "center 50%" },
            { src: "/assets/images/recovery/sauna-warm.jpg", alt: "A guest warming up in the infrared sauna", position: "center 40%" },
        ],
    },

    facts: [
        { figure: "15 to 30", label: "minutes per session" },
        { figure: "2 to 4", label: "sessions a week" },
        { figure: "$30", label: "drop-in" },
        { figure: "$79", label: "memberships a month" },
    ],

    benefits: {
        title: "What does an infrared sauna do?",
        text: "Heat opens blood vessels and relaxes muscle. Used regularly, it helps you recover, loosen up and manage stress.",
        items: [
            "Less muscle tension and joint stiffness",
            "Better circulation",
            "A calmer nervous system",
            "Faster recovery between workouts",
            "A routine that keeps you consistent",
            "More calories burned per session",
            "A deep, cleansing sweat",
            "Healthier looking skin",
        ],
    },

    boxes: [
        {
            title: "Who it is for",
            dark: true,
            items: ["Athletes and active people", "Anyone with tight muscles", "Busy, stressed professionals", "Mobility and recovery goals", "Body composition goals", "Anyone needing a wind down"],
            image: "/assets/images/recovery/sauna-red-light.jpg",
            alt: "A guest relaxing in the red light of the infrared sauna",
            position: "center 55%",
        },
        {
            title: "The Revibe experience",
            items: ["Towels and water provided", "A clean, private sauna cabin", "Sessions, packs or memberships", "Pairs with plunge or physio", "Solo or shared, your choice", "Beginner friendly from day one"],
            image: "/assets/images/recovery/sauna-pair.jpg",
            alt: "Two guests sitting side by side in the warm light of the infrared sauna",
            position: "center 40%",
        },
    ],

    steps: coldPlunge.steps,
    pricing: coldPlunge.pricing,

    reviews: {
        ...coldPlunge.reviews,
        // sauna reviews first
        items: inOrder(coldPlunge.reviews.items, "name", ["Tom M.", "Thomas A.", "Charla C.", "Kimberley B.", "Ricardo B.", "Teresa N."]),
    },

    instagram: {
        ...home.instagram,
        // sauna posts first
        posts: inOrder(home.instagram.posts, "caption", [
            "The infrared sauna room at Revibe",
            "Infrared sauna warms the body",
            "A guest relaxing in the infrared sauna",
            "Friday night in the sauna",
            "Red light in the infrared sauna",
            "The Coldture control panel",
            "Box breathing in the cold plunge",
            "Plunging with physio Benson",
            "Benefits of the cold plunge",
            "Getting into the cold plunge after a session",
            "A calm cold plunge",
        ]),
    },

    faq: {
        title: "Infrared sauna FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            { q: "What are the benefits of an infrared sauna?", a: "It improves circulation, reduces muscle tension and supports recovery. Many guests use it to relax and to recover from training." },
            { q: "How long should I stay in the sauna?", a: "Most sessions run 15 to 30 minutes, depending on comfort and experience." },
            { q: "How often should I use the sauna?", a: "Many people use it two to four times a week as part of their recovery routine." },
            { q: "Is an infrared sauna safe?", a: "Yes, when used properly. Stay hydrated and listen to your body. If you are pregnant or have a heart condition, check with your doctor first." },
            { q: "Can I combine the sauna with the cold plunge?", a: "Yes. Moving between the two is contrast therapy, and most members do two or three rounds." },
            { q: "Do I need to book in advance?", a: "Yes. Booking ahead secures your time." },
            { q: "What should I bring?", a: "Comfortable clothes, swimwear and water. Towels are provided and showers are on site." },
            { q: "Can I come with a friend?", a: "Yes. Many guests book together, and Recovery Club members can bring a guest every session." },
            { q: "How much does the sauna cost?", a: "A single session is $30 plus HST. Memberships start at $79 a month on a 6-month term." },
        ],
    },

    stickyLabel: "Book an infrared sauna",
};
