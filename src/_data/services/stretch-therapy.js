// Content for /stretch-spa/ (the live site's address for stretch therapy), from the dev handover.
// Rendered by layouts/service.html. This page has no insurance section (no insurance key).
module.exports = {
    name: "Stretch therapy",
    requestService: "Stretch therapy",

    hero: {
        title: "Stretch therapy",
        text: "One to one stretching with a trained practitioner, for range of motion, recovery and the tightness that does not go away on its own. Fascial stretch therapy and the Matcha Method at every Revibe clinic.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. Every session starts with a short assessment of how you move.",
        images: [
            { src: "/assets/images/stretch/hero-leg.jpg", alt: "A practitioner taking a woman's leg into an assisted stretch", position: "center 45%" },
            { src: "/assets/images/services/stretch-therapy.jpg", alt: "A Revibe practitioner bending a client's knee into a quad stretch on the table", position: "center 22%" },
            { src: "/assets/images/stretch/hero-hip.jpg", alt: "A practitioner guiding a client's leg into a hip stretch", position: "center 45%" },
        ],
    },

    fit: {
        title: "Is stretch therapy right for me?",
        text: "If one of these sounds like you, book a session. If the tightness is coming from somewhere a stretch will not fix, the practitioner says so and a physiotherapist is in the same building.",
        // no photo; "stretch" arranges the tiles a a b c / d e f c / g g h h on desktop
        layout: "stretch",
        // the two links jump to their answers in the FAQ; the rest are not links
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "My hamstrings are tight no matter what I do.", topic: "Fascial stretch therapy", url: "#fst" },
            { area: "b", colour: "green", quote: "I train hard and never stretch." },
            { area: "c", colour: "black", quote: "My shoulders feel locked when I reach overhead." },
            { area: "d", colour: "mint", quote: "My hips are stiff from sitting all day." },
            { area: "e", colour: "white", quote: "I played yesterday and I can barely move." },
            { area: "f", colour: "mint", quote: "I cannot touch my toes anymore." },
            { area: "g", colour: "green", wide: true, quote: "I want to stretch properly before my sport.", topic: "The Matcha Method", url: "#matcha" },
            { area: "h", colour: "white", quote: "I am stiff when I wake up." },
        ],
    },

    firstAppointment: {
        title: "What happens in my first session?",
        text: "Arrive in clothes you can move in. The practitioner does the work.",
        steps: [
            {
                title: "We assess",
                text: "What you do, what is tight and what you want from it, then a few minutes on how you move and where you are restricted, so the session is built around you rather than a set routine.",
                image: "/assets/images/pelvic/hero-stretch.jpg",
                alt: "A woman stretching her arms overhead",
                position: "center 35%",
            },
            {
                title: "We stretch",
                text: "Each joint taken to the end of its range with the practitioner's hands and a strap. You breathe, they move.",
                image: "/assets/images/pelvic/hip.jpg",
                alt: "A practitioner's hand at a woman's hip during an assisted stretch",
                position: "center 50%",
            },
            {
                title: "We plan",
                text: "How often to come back, and a referral down the hall if something needs more than a stretch.",
                image: "/assets/images/stretch/step-plan.jpg",
                alt: "Anesto stretching a client's hip with the knee bent toward the chest",
                position: "40% 35%",
            },
        ],
    },

    types: {
        title: "Which stretch is right for me?",
        text: "Two approaches, one practitioner. If you are not sure, book either and they will choose on the day after a short assessment.",
        // two items with text show as two large cards
        items: [
            { label: "Fascial stretch therapy", text: "Table based and practitioner led. Straps hold the rest of the body still while one joint at a time is taken through its full range with gentle, repeated movement." },
            { label: "Matcha Method", text: "A more dynamic technique on the ground or the table. You move with the practitioner, so it carries straight into sport and training.", colour: "mint" },
        ],
    },

    different: {
        title: "What makes stretch therapy at Revibe different?",
        text: "Stretch therapy at Revibe sits inside performance therapy, so it is a treatment with the clinic behind it rather than a stretch studio on its own.",
        licensed: {
            title: "Trained practitioners",
            text: "Practitioners trained in fascial stretch therapy and the Matcha Method, working inside a clinic rather than a studio.",
        },
        hands: {
            title: "Stretched, not stretching",
            text: "You lie down and the practitioner does the work, reaching an end range a solo stretch never gets to because you can relax instead of bracing.",
            image: "/assets/images/stretch/stretched.jpg",
            alt: "Anesto taking a client's leg into a hip and hamstring stretch",
            position: "center 40%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, chiropractors, massage therapists and osteopaths under one roof at every Revibe clinic. If the tightness is coming from a joint or an injury, the right person is down the hall.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. It tells us whether a stretch is the answer or whether something else is driving the tightness.",
            linkLabel: "Take the Care Map",
        },
        // calls: true shows a "Call <clinic>" button per clinic instead of a link
        billing: {
            title: "Ask about your plan",
            text: "Whether stretch therapy is covered depends on your plan. Ask the clinic when you book and they will tell you whether your plan covers it.",
            calls: true,
        },
    },

    team: {
        title: "Who will treat me?",
        text: "Practitioners trained in fascial stretch therapy and the Matcha Method, across our clinics.",
        members: ["rachel-murray", "kyle-sunga"],
        role: "Stretch therapy practitioner",
    },

    reviews: {
        title: "What do clients say about stretch therapy at Revibe?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        items: [
            {
                name: "Kris",
                initials: "K",
                quote: "I visited Kyle yesterday at Revibe. I have problems with tight muscles. Kyle did a phenomenal job not only helping with assisted fascia stretching but also helping to relieve my neck and shoulder pain. He also showed me some home stretches to help. The facility is beautiful and the services offered are vast. From anything related to sports injuries to performing better in life or the gym. Highly recommended! Kris",
            },
            {
                name: "tatiana j.",
                initials: "TJ",
                quote: "Rachel was a great help, very professional and knowledgeable! She explained what was causing the lower back pain in my exercise routine and how to adequately adjust my shoulders to reduce straining. As well as she did all this whilst stretching & working my problem areas! 10/10 recommend!",
            },
            {
                name: "Stanley C.",
                initials: "SC",
                quote: "Josh helped identify and worked on relieving chronic issues with my hip flexors. He provided me with a bunch of exercises/stretches to help increase flexibility and to maintain it on my own. It's been a huge help and I highly recommend a visit.",
            },
        ],
    },

    statement: {
        image: "/assets/images/stretch/statement-back.jpg",
        alt: "Hands working into a client's lower back",
        position: "center 50%",
    },

    related: {
        title: "Stretch therapy is one part of performance therapy",
        items: [
            { label: "Physiotherapy", url: "/services/physiotherapy/", image: "/assets/images/services/physiotherapy.jpg", alt: "Michael Leung, physiotherapist, working a client's hip on the table", position: "center 55%" },
            { label: "Chiropractic", url: "/services/chiropractic/", image: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 40%" },
            { label: "Massage therapy", url: "/services/massage/", image: "/assets/images/services/massage-hands.jpg", alt: "A massage therapist's hands working into a client's shoulder", position: "center 45%" },
            { label: "Osteopathy", url: "/services/osteopathy/", image: "/assets/images/services/osteopathy-leg.jpg", alt: "A Revibe osteopathic practitioner lifting a client's leg on the table", position: "center 35%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If a stretch is not what you need, it will say so.",
        button: "Take the Care Map",
    },

    // no serviceLabel: the clinic cards skip the "<service> in <clinic>" link
    locations: {
        title: "Where can I book stretch therapy?",
    },

    faq: {
        title: "Stretch therapy FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        // id lets the mosaic tiles link to an answer
        items: [
            { q: "What is stretch therapy?", a: "Stretch therapy is one to one stretching done by a trained practitioner, who moves your body through positions you cannot reach well on your own and holds each joint at the end of its range. At Revibe it is part of performance therapy and is available at every Revibe clinic, as fascial stretch therapy on the table or the more dynamic Matcha Method." },
            { id: "fst", q: "Is stretch therapy the same as fascial stretch therapy?", a: "Not quite. Stretch therapy is the service, and fascial stretch therapy is one of the two approaches inside it. Fascial stretch therapy is table based and practitioner led: straps hold the rest of the body still while one joint at a time is taken through its full range with gentle, repeated movement. The other approach is the Matcha Method." },
            { id: "matcha", q: "What is the Matcha Method?", a: "The Matcha Method is a more dynamic stretching technique, done on the ground or the table. You move with the practitioner rather than lying still, so it carries straight into sport and training. If you are not sure whether it or fascial stretch therapy suits you, book either and the practitioner will choose on the day after a short assessment." },
            { q: "How is stretch therapy different from massage?", a: "Massage therapy is treatment from a registered massage therapist for tension, recovery and chronic pain. Stretch therapy works on range of motion: the practitioner takes each joint to the end of its range with their hands and a strap while you relax, reaching an end range a solo stretch never gets to. Both are part of performance therapy at every Revibe clinic." },
            { q: "How long is a stretch therapy session?", a: "Every session starts with a few minutes on how you move and where you are restricted, then the practitioner stretches you through the areas that need it. The front desk at any Revibe clinic will tell you how long your session runs when you book." },
            { q: "How often should I get stretched?", a: "It depends on what you want from it. At the end of each session the practitioner tells you how often to come back, based on what they found in the assessment and what you are stretching for, whether that is recovery from training, preparation before your sport or stiffness from sitting all day." },
            { q: "Does stretch therapy hurt?", a: "It should not. Fascial stretch therapy uses gentle, repeated movement, and the point is that you relax instead of bracing, which is what lets the practitioner reach an end range a solo stretch never gets to. Tell the practitioner if anything feels sharp. If the tightness is coming from a joint or an injury, a physiotherapist is down the hall." },
            { q: "Is stretch therapy covered by insurance?", a: "It depends on your plan. Ask the clinic when you book, at Revibe Mississauga on (905) 783-8423 or Revibe Markham on (289) 806-5123, and they will tell you whether your plan covers stretch therapy." },
            { q: "What should I wear to a stretch therapy session?", a: "Clothes you can move in, like what you would wear to train. The practitioner takes each joint to the end of its range, and with the Matcha Method you move with them, so skip anything tight or restrictive. Then lie back: the practitioner does the work." },
            { q: "How do I book stretch therapy at Revibe?", a: "Book online with the Book in Mississauga or Book in Markham buttons on this page, or call Revibe Mississauga at (905) 783-8423 or Revibe Markham at (289) 806-5123. If you are not sure whether you want fascial stretch therapy or the Matcha Method, book either and the practitioner will choose on the day after a short assessment." },
        ],
    },

    stickyLabel: "Book stretch therapy",
};
