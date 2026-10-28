// Offer landing pages (ads) and the free consultation pages, from the dev handover. Rendered by layouts/offer.html.
// Each claim form sends to Netlify Forms under formName, then goes to thankYouUrl.
const home = require("./home.js");

module.exports = {
    "therapy-20-off": {
        formName: "therapy-20-off",
        thankYouUrl: "/services/performance-therapy/20-off/thank-you/",
        stage: {
            image: "/assets/images/physiotherapy/step-treat.jpg",
            alt: "Michael Leung, physiotherapist, stretching a client's hip on the table",
            title: "Twenty percent off your first session",
            text: "Hands-on performance therapy at any Revibe clinic, with a registered practitioner from the first session. 20% off your first performance therapy session.",
            // the yellow figure; percent: true sets it smaller, with a big label beside it
            price: "20% off",
            percent: true,
            priceLabel: "your first session",
            claimLabel: "Claim 20% off",
            proof: "Full terms are confirmed when the clinic calls you.",
        },
        form: {
            title: "Claim twenty percent off",
            intro: "Fill this in and the clinic will call or email to book your first session with the right practitioner.",
            // extra dropdowns after name, phone, email and location; full: true spans both columns
            selects: [
                { name: "service", label: "Which service", options: ["Physiotherapy", "Chiropractic", "Massage therapy", "Osteopathy", "Stretch therapy", "Not sure, help me choose"] },
                { name: "concern", label: "What is going on?", full: true, options: ["Back or neck pain", "Shoulder, knee, hip or ankle", "Recovering from an injury or surgery", "Headaches", "Tension and stress", "Something else"] },
            ],
        },
        get: {
            title: "What you get",
            badge: "20%",
            badgeLabel: "off your first performance therapy session",
            fine: "Full terms are confirmed when the clinic calls you.",
            items: [
                "Assessment and treatment in the same session",
                "The right practitioner for what is going on",
                "Any Revibe clinic",
                "No referral needed for physiotherapy",
                "A plan, a target number of sessions and what to do between them",
                "Every practitioner on the same file",
            ],
        },
        session: {
            title: "What is performance therapy?",
            text: "Treatment built around how you want to move and perform, not only where it hurts. Hands-on care and exercise from these five services under one roof, with every practitioner on the same file.",
            // a row of tall pills, one per service
            services: [
                { label: "Physiotherapy", image: "/assets/images/first-session/conversation.jpg", alt: "Zeeruk, physiotherapist, reviewing a client's assessment with her on the table", position: "46% 40%" },
                { label: "Chiropractic", image: "/assets/images/services/chiropractic.jpg", alt: "Dr. Morgan, chiropractor, adjusting a client on the table", position: "72% 40%" },
                { label: "Massage therapy", image: "/assets/images/services/massage.jpg", alt: "A registered massage therapist working on a client's upper back", position: "50% 40%" },
                { label: "Osteopathy", image: "/assets/images/osteopathy/step-listen.jpg", alt: "An osteopath cradling a client's head and neck as she lies on the table", position: "42% 50%" },
                { label: "Stretch therapy", image: "/assets/images/stretch/hero-leg.jpg", alt: "A practitioner taking a client's leg into an assisted stretch", position: "45% 50%" },
            ],
            // split: photo above the text instead of behind it
            split: true,
            halves: [
                { big: "Assess", title: "Find what is really going on", text: "Your practitioner tests how you move, load and recover, then explains what is driving the pain and what it is stopping you from doing.", image: "/assets/images/chiropractic/step-assess.jpg", alt: "Dr. Trevor D'Souza, chiropractor, assessing a client's posture as she sits on the table", position: "center 35%", colour: "green" },
                { big: "Rebuild", title: "Treat it, then build it back", text: "Physiotherapy, chiropractic, massage, osteopathy and stretch to settle it, then exercise that gets you back to training, work and the things you love.", image: "/assets/images/performance/goal-life.jpg", alt: "Michael Leung coaching a client through a squat at the rack", position: "45% 50%", colour: "green" },
            ],
        },
        reviews: {
            title: "What clients say",
            text: "Real Google reviews from people treated by Revibe physiotherapists, chiropractors and massage therapists.",
            items: [
                { name: "Craig B.", initials: "CB", quote: "Revibe is the best physio place I've been to, my physiotherapist is Scott French and he is amazing. Gives great feedback and the progress I've been making after a knee surgery is tremendous. The staff here makes sure to get to know you and you're not treated like just another body everyone is extremely friendly." },
                { name: "Dhaval S.", initials: "DS", quote: "I’ve been seeing Dr. Trevor for the past few months for chiropractic care, and it’s been a great experience. He’s professional, friendly, and truly attentive. My back and neck pain have noticeably improved, and I always leave feeling better. Highly recommend him if you’re looking for genuine and effective care!" },
                { name: "Shiyamala D.", initials: "SD", quote: "Winson Cheong (RMT) got me running pain free again in just a couple of weeks! He combined different types of treatments and even adapted and re-wrote my marathon plan to help me get back on the road in time for my race. He goes above and beyond for his patients. I can’t recommend him enough!" },
            ],
        },
        bar: { big: "20% off", small: "first session" },
    },

    "recovery-10-pack": {
        formName: "recovery-10-pack",
        thankYouUrl: "/recovery/10-pack/thank-you/",
        stage: {
            image: "/assets/images/services/recovery.jpg",
            alt: "A guest sitting calmly in the cold plunge at Revibe",
            title: "Thirty minutes. The room to yourself",
            text: "Ten private cold plunge and infrared sauna sessions at any Revibe clinic. No one else in the room unless you bring them, no clock on the wall but yours. Ten sessions for $200 instead of $300.",
            price: "$200",
            wasPrice: "$300",
            priceLabel: "Ten sessions, valid for six months. Plus HST.",
            claimLabel: "Claim the 10 pack",
            proof: "Nothing is charged until you talk to us.",
        },
        form: {
            title: "Claim your ten sessions",
            intro: "Fill this in and the clinic will contact you to set up the pack and book your first session. Nothing is charged until you talk to us.",
            selects: [{ name: "recipient", label: "Who is it for", options: ["Me", "A gift for someone"] }],
        },
        get: {
            title: "What you get for $200",
            badge: "$20",
            badgeLabel: "a session",
            badgeWas: "$30",
            fine: "Regular price $300. Sessions valid six months from purchase. Plus HST.",
            items: [
                "Ten 30 minute sessions, booked when it suits you",
                "The room is yours, alone or with one other person",
                "Infrared sauna and cold plunge, every session",
                "Either location, any day we are open",
                "Towels provided. Bring a swimsuit.",
                "Split the ten, or give the whole pack as a gift",
            ],
        },
        session: {
            title: "What happens in a session?",
            text: "Heat, then cold, then the quiet after. Thirty minutes, you set the order and the time in each. Most people start with the sauna, take the plunge for a minute or three, and spend the rest of the half hour warming back up.",
            halves: [
                { big: "Heat", title: "Infrared sauna, up to twenty minutes", text: "Infrared heats you from the inside rather than heating the air, so it is gentler to sit in and you sweat sooner. Loosens muscle, raises circulation and settles the nervous system before the plunge.", image: "/assets/images/recovery/sauna-solo.jpg", alt: "A guest alone in the infrared sauna at Revibe", position: "center 35%", colour: "yellow" },
                { big: "Cold", title: "Cold plunge, one to three minutes", text: "Most people start at thirty seconds and build from there. The first thirty seconds are the hard part. After that the breathing slows, the soreness drops and the rest of the day feels sharper.", image: "/assets/images/recovery/plunge-lean.jpg", alt: "A guest leaning back in the cold plunge", position: "center 40%", colour: "green" },
            ],
        },
        reviews: {
            title: "What members say",
            text: "Real Google reviews from people who use the sauna, the plunge and the recovery room.",
            items: [
                { name: "Ricardo B.", initials: "RB", quote: "If you’re looking for a place to improve your self I would say this is it. From their highly skilled and knowledgeable staff to their various different facilities, private gym, sauna, cold plunge, recovery room etc. it’s a great place to be. Clean and tidy. Highly recommend" },
                { name: "Tom M.", initials: "TM", quote: "Everybody that works there is super friendly. Enjoyed the infrared sauna today as I sweat like crazy and felt amazing after. Will update with future experiences. Juice bar is also a definite thing to check out I really enjoyed the first drink. I think drink name has something to do with Hulk. Worth it" },
                { name: "Kimberley B.", initials: "KB", quote: "Revibe wellness has it all under one roof for all your therapy, healing, wellness needs. The therapists are competent and committed. The space is friendly and welcoming. The recovery room is awesome. Really love the infrared sauna. I have had a great experience with my pre and post surgery care and honestly everyday healing modalities at Revibe. Get your vibe back at Revibe !!" },
            ],
        },
        bar: { big: "$200", was: "$300" },
    },

    "performance-consult": {
        formName: "free-consultation",
        thankYouUrl: "/performance-training/free-consultation/thank-you/",
        stage: {
            image: "/assets/images/hurt/squat-coaching.jpg",
            alt: "A Revibe coach crouched at the rack, watching a client set up her lift",
            title: "Fifteen minutes with a coach. Free",
            text: "A free performance consultation at any Revibe clinic, in person or virtual. A CSCS coach, most of them physiotherapists, works out what you are training for and the plan that fits. No cost, nothing to buy on the call.",
            price: "Free",
            priceLen: "15 minutes",
            priceLabel: "In person at either clinic, or virtual.",
            claimLabel: "Book my free consultation",
            proof: "Every coach is CSCS certified."
        },
        form: {
            title: "Book your free consultation",
            intro: "Fill this in and a coach will call or email to set a time, in person or virtual. Nothing to buy on the call.",
            selects: [
                {
                    name: "format",
                    label: "Format",
                    options: [
                        "In person",
                        "Virtual"
                    ]
                },
                {
                    name: "goal",
                    label: "What are you training for?",
                    options: [
                        "Getting strong again after rehab or injury",
                        "Fat loss and body composition",
                        "Strength and general fitness",
                        "Sport performance",
                        "Something else"
                    ],
                    full: true
                }
            ]
        },
        get: {
            title: "What you get for free",
            badge: "15 min",
            badgeLabel: "one to one with a performance coach",
            fine: "The consultation is free with no obligation. Training blocks are chosen after the call, never on it.",
            items: [
                "Fifteen minutes one to one with a coach",
                "In person at either clinic, or virtual",
                "Your goal and your history, talked through properly",
                "A recommended plan of 12, 24 or 48 sessions",
                "An honest answer if coached training is not the right call",
                "Nothing to buy on the call. You decide afterwards"
            ]
        },
        session: {
            title: "What is performance training?",
            text: "Coached strength and conditioning inside a clinic. A coach writes the program, watches every rep and progresses the load, and the physiotherapists are in the same building when something starts complaining.",
            halves: [
                {
                    big: "Coach",
                    title: "A coach in every session",
                    text: "Not a program on a phone. Someone watching every rep, adjusting the load and keeping the plan honest week to week, in blocks of 12, 24 or 48 sessions.",
                    image: "/assets/images/performance/hero-coaching.jpg",
                    alt: "Zeeruk Rehman cueing a client in the Revibe gym",
                    position: "40% 40%",
                    colour: "green"
                },
                {
                    big: "Recover",
                    title: "Recovery in the building",
                    text: "Compression, infrared sauna and cold plunge are part of the plan, not an add-on, and a physiotherapist is down the hall. At both clinics.",
                    image: "/assets/images/performance/hero-force-plate.jpg",
                    alt: "An athlete mid-jump above the force plates while a coach records the test",
                    position: "66% center",
                    colour: "green"
                }
            ]
        },
        reviews: {
            title: "What clients say",
            text: "Real Google reviews from people who train and rehab with our coaches.",
            // two reviews, each full width
            pair: true,
            items: [
                {
                    name: "Kyle P.",
                    initials: "KP",
                    quote: "Revibe is an amazing spot for anything therapy, wellness, and fitness. The staff are unbelievable and are very knowledgable when it comes to rehab, and performance! Josh is one of my go-to-guys to get me back to high performance. Highly recommend to anyone looking for long term solutions to their health."
                },
                {
                    name: "K A.",
                    initials: "KA",
                    quote: "If you're on the hunt for a top-notch physiotherapist / performance coach, Zeeruk is your guy! He not only knows the ins and outs of keeping your body in tip-top shape but also adds a whole new level of fun to workouts. I found him on social media; he's posting some pretty helpful things that have genuinely elevated my fitness game. Zeeruk is the real deal!"
                }
            ]
        },
        bar: {
            big: "Free",
            small: "15 min"
        }
    },

    // /services/naturopathic-medicine/free-consultation/ (content/pages/offers/naturopathic-free-consultation.html)
    "naturopathic-consult": {
        formName: "naturopathic-free-consultation",
        thankYouUrl: "/services/naturopathic-medicine/free-consultation/thank-you/",
        stage: {
            image: "/assets/images/naturopathic/stethoscope-back-check.jpg",
            alt: "A Revibe naturopathic doctor listening to a client's back with a stethoscope",
            title: "Come with the symptom. We find the cause",
            text: "A free naturopathic consultation at any Revibe clinic, in person or virtual. A naturopathic doctor hears what has been going on and tells you whether naturopathic medicine can help, and how. No cost, nothing to buy on the call.",
            price: "Free",
            priceLabel: "A consultation with a naturopathic doctor, in person or virtual.",
            claimLabel: "Book my free consultation",
            proof: "Nothing to buy on the call.",
        },
        form: {
            title: "Book your free consultation",
            intro: "Fill this in and the clinic will call or email to set a time with a naturopathic doctor, in person or virtual.",
            selects: [
                { name: "format", label: "Format", options: ["In person", "Virtual"] },
                {
                    name: "concern",
                    label: "What would you like help with?",
                    options: ["Low energy or poor sleep", "Hormones or cycle", "Digestion or food sensitivities", "Stress, mood or focus", "Weight or nutrition", "Something else"],
                    full: true,
                },
            ],
        },
        get: {
            title: "What you get for free",
            badge: "$0",
            badgeLabel: "for the consultation",
            fine: "The consultation is free with no obligation. Initial naturopathic sessions and testing are booked afterwards and most extended health plans cover naturopathic care.",
            items: [
                "A conversation with a naturopathic doctor, not a form",
                "Sleep, energy, digestion and stress, heard properly",
                "A plain answer on whether naturopathic medicine can help",
                "What testing, if any, is worth doing",
                "How IV therapy, acupuncture or cupping might fit, only if they do",
                "Nothing to buy. You decide afterwards",
            ],
        },
        session: {
            title: "What does a naturopathic doctor treat?",
            text: "The things that show up as symptoms and never get a clear answer. Tiredness that sleep does not fix, hormones that feel off, digestion that has a mind of its own, getting sick too often.",
            halves: [
                {
                    big: "Energy",
                    title: "Sleep, energy and hormones",
                    text: "Testing and treatment for the things behind feeling flat: thyroid, cortisol, sex hormones, iron and B12. DUTCH testing where it is warranted.",
                    image: "/assets/images/naturopathic/step-listen.jpg",
                    alt: "Dr. Jennifer Tang, naturopathic doctor, in a consult at her desk",
                    position: "center 40%",
                    colour: "green",
                },
                {
                    big: "Gut",
                    title: "Digestion, immunity and pain",
                    text: "Food sensitivities, gut health, recurring colds, inflammation. Acupuncture and cupping in the same clinic as physiotherapy, so pain is treated from both sides.",
                    image: "/assets/images/naturopathic/lisbeth-kitchen-lemons.jpg",
                    alt: "Lisbeth Bitar Patino, naturopathic doctor, slicing lemons at the clinic kitchen counter beside bowls of fruit",
                    position: "55% 60%",
                    colour: "green",
                },
            ],
        },
        reviews: {
            title: "What clients say",
            text: "Real Google reviews from people who have had a session with a Revibe naturopathic doctor.",
            items: [
                { name: "Laura B.", initials: "LB", quote: "Dr. Jennifer Tang is absolutely amazing, she has changed my way of living. I feel like a whole new person after taking all her recommendations. She made me understand the benefits of seeing a naturopathic doctor and it has paid off!" },
            ],
        },
        bar: { big: "Free", small: "consultation" },
    },

    "athlete-consult": {
        formName: "athlete-consultation",
        thankYouUrl: "/performance-training/free-consultation/thank-you/",
        stage: {
            image: "/assets/images/hurt/sprint-start.jpg",
            alt: "An athlete driving out of a sprint start on the force plates while a Revibe coach records the test",
            title: "Fifteen minutes with a coach. Free",
            text: "A free performance consultation for athletes at any Revibe clinic, in person or virtual. A CSCS coach, most of them physiotherapists, looks at your sport, your season and your numbers, and tells you the plan that fits. No cost, nothing to buy on the call.",
            price: "Free",
            priceLen: "15 minutes",
            priceLabel: "In person at either clinic, or virtual.",
            claimLabel: "Book my free consultation",
            proof: "Every coach is CSCS certified."
        },
        form: {
            title: "Book your free consultation",
            intro: "Fill this in and a coach will call or email to set a time, in person or virtual. Nothing to buy on the call.",
            selects: [
                {
                    name: "format",
                    label: "Format",
                    options: [
                        "In person",
                        "Virtual"
                    ]
                },
                {
                    name: "goal",
                    label: "What are you training for?",
                    options: [
                        "Getting strong again after rehab or injury",
                        "Fat loss and body composition",
                        "Strength and general fitness",
                        "Sport performance",
                        "Something else"
                    ],
                    full: true
                }
            ]
        },
        get: {
            title: "What you get for free",
            badge: "15 min",
            badgeLabel: "one to one with a performance coach",
            fine: "The consultation is free with no obligation. Training blocks are chosen after the call, never on it.",
            items: [
                "Fifteen minutes one to one with a coach",
                "In person at either clinic, or virtual",
                "Your sport, your season and your numbers, talked through",
                "A recommended plan of 12, 24 or 48 sessions",
                "An honest answer if coached training is not the right call",
                "Nothing to buy on the call. You decide afterwards"
            ]
        },
        session: {
            title: "What is performance training?",
            text: "Coached strength and conditioning inside a clinic. A coach writes the program, watches every rep and progresses the load, and the physiotherapists are in the same building when something starts complaining.",
            halves: [
                {
                    big: "Coach",
                    title: "A coach in every session",
                    text: "Not a program on a phone. Someone watching every rep, adjusting the load and keeping the plan honest week to week, in blocks of 12, 24 or 48 sessions.",
                    image: "/assets/images/physiotherapy/statement-sprint.jpg",
                    alt: "A Revibe coach cueing an athlete through a resistance band drill",
                    position: "58% center",
                    colour: "green"
                },
                {
                    big: "Recover",
                    title: "Recovery in the building",
                    text: "Compression, infrared sauna and cold plunge are part of the plan, not an add-on, and a physiotherapist is down the hall. At both clinics.",
                    image: "/assets/images/services/recovery.jpg",
                    alt: "A guest sitting calmly in the cold plunge",
                    position: "center 45%",
                    colour: "green"
                }
            ]
        },
        reviews: {
            title: "What clients say",
            text: "Real Google reviews from people who train and rehab with our coaches.",
            // two reviews, each full width
            pair: true,
            items: [
                {
                    name: "Kyle P.",
                    initials: "KP",
                    quote: "Revibe is an amazing spot for anything therapy, wellness, and fitness. The staff are unbelievable and are very knowledgable when it comes to rehab, and performance! Josh is one of my go-to-guys to get me back to high performance. Highly recommend to anyone looking for long term solutions to their health."
                },
                {
                    name: "K A.",
                    initials: "KA",
                    quote: "If you're on the hunt for a top-notch physiotherapist / performance coach, Zeeruk is your guy! He not only knows the ins and outs of keeping your body in tip-top shape but also adds a whole new level of fun to workouts. I found him on social media; he's posting some pretty helpful things that have genuinely elevated my fitness game. Zeeruk is the real deal!"
                }
            ]
        },
        bar: {
            big: "Free",
            small: "15 min"
        }
    },

    // shared by every offer page
    rating: home.reviews.rating,
    reviewCount: "600+",
    reviewsUrl: home.reviews.allUrl,
};
