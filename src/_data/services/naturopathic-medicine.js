// Content for /services/naturopathic-medicine/, from the dev handover. Rendered by layouts/service.html.
// Internal links are "/" until the real pages exist.
const freeConsultation = { label: "Book a free consultation", url: "/services/naturopathic-medicine/free-consultation/" };

module.exports = {
    name: "Naturopathic medicine",
    // preselected in the Request to book form
    requestService: "Naturopathic medicine",

    hero: {
        title: "Naturopathic medicine",
        text: "Naturopathic doctors who look for the cause behind low energy, poor sleep, hormones, digestion and stress. Testing when it is warranted, then a plan with nutrition, acupuncture, cupping or IV therapy, at every Revibe clinic.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. In person or virtual, and most extended health plans cover naturopathic care.",
        // replaces the default "Request to book" / "Book online" pair
        buttons: [freeConsultation, { label: "See what we treat", url: "#types", outline: true }],
        images: [
            { src: "/assets/images/naturopathic/hero-tincture.jpg", alt: "A naturopathic doctor measuring a tincture with a dropper", position: "center 40%" },
            { src: "/assets/images/naturopathic/hero-acupuncture.jpg", alt: "Acupuncture needles being placed along a client's back", position: "center 45%" },
            { src: "/assets/images/services/naturopathic.jpg", alt: "Lisbeth Bitar Patino, naturopathic doctor, listening with a stethoscope during an assessment", position: "62% 43%" },
        ],
    },

    fit: {
        title: "Is naturopathic medicine right for me?",
        text: "If one of these sounds like you, start with a free consultation. If what you need is a physiotherapist, chiropractor or massage therapist instead, your naturopathic doctor will say so and they are down the hall.",
        photo: { src: "/assets/images/naturopathic/fit-tang.jpg", alt: "Dr. Jennifer Tang, naturopathic doctor, holding a tincture bottle", position: "center 30%" },
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "I sleep eight hours and still wake up exhausted.", topic: "Sleep and energy", url: "#sleep" },
            { area: "b", colour: "green", quote: "My cycle and my moods feel off.", topic: "Hormones and DUTCH testing", url: "#dutch" },
            { area: "c", colour: "black", quote: "I am bloated after almost every meal and nobody can tell me why.", topic: "Gut health", url: "#gut" },
            { area: "d", colour: "mint", quote: "I catch every cold that goes around.", topic: "Naturopathic consultation", url: "#consult" },
            { area: "e", colour: "white", quote: "My bloodwork came back normal but I do not feel normal.", topic: "Naturopathic consultation", url: "#consult" },
            { area: "f", colour: "white", quote: "Stress is running my life.", topic: "Acupuncture", url: "#acupuncture" },
            { area: "g", colour: "green", wide: true, quote: "I want IV therapy to get my energy back.", topic: "IV therapy", url: "#iv" },
            { area: "h", colour: "black", quote: "I do not know what to eat for my goals.", topic: "Meal plans", url: "#meal-plans" },
        ],
    },

    firstAppointment: {
        title: "What happens at my first naturopathic appointment?",
        text: "A full health history and assessment, so the plan is built on the cause, not the symptom. You leave knowing what is worth testing and what to change first.",
        // replaces the "Book in Mississauga / Markham" pair
        buttons: [freeConsultation],
        steps: [
            {
                title: "We listen",
                text: "Your health history, sleep, energy, digestion, stress and what you want to feel like again.",
                image: "/assets/images/naturopathic/step-listen.jpg",
                alt: "Dr. Jennifer Tang, naturopathic doctor, in a consult at her desk",
                position: "center 35%",
            },
            {
                title: "We test",
                text: "Bloodwork, DUTCH hormone testing or food sensitivity testing when it is warranted, not by default.",
                image: "/assets/images/naturopathic/step-test.jpg",
                alt: "Lisbeth Bitar Patino, naturopathic doctor, assessing a client's shoulders",
                position: "center 30%",
            },
            {
                title: "We treat",
                text: "Nutrition, supplements, acupuncture, cupping or IV therapy, matched to what the assessment and testing show.",
                image: "/assets/images/massage/hero-cupping.jpg",
                alt: "Cupping on a client's upper back",
                position: "center 55%",
            },
            {
                title: "We plan",
                text: "A written plan, follow-ups and retesting, so you can see what changed.",
                image: "/assets/images/naturopathic/step-plan.jpg",
                alt: "Dr. Jennifer Tang, naturopathic doctor, talking a client through her plan",
                position: "center 35%",
            },
        ],
    },

    types: {
        title: "What does naturopathic care include?",
        text: "Your naturopathic doctor chooses what fits after the assessment. These are the areas our naturopathic doctors focus on.",
        items: [
            { label: "Naturopathic consultation", id: "consult", text: "A full health assessment that looks at sleep, energy, digestion, hormones and stress together." },
            { label: "Sleep and energy", id: "sleep", text: "Finding what is behind feeling flat: thyroid, cortisol, iron, B12 and how you sleep." },
            { label: "Hormones and DUTCH testing", id: "dutch", text: "Cycle, mood and stress hormones, tested with the DUTCH test where it is warranted." },
            { label: "Gut health", id: "gut", text: "Bloating, food sensitivities and digestion that has a mind of its own." },
            { label: "IV therapy", id: "iv", text: "Vitamins and nutrients delivered directly, built around your plan." },
            { label: "Acupuncture", id: "acupuncture", text: "For pain, stress and sleep, in the same clinic as your physiotherapist." },
            { label: "Cupping", id: "cupping", text: "Releases tight tissue and pairs well with acupuncture and massage." },
            { label: "Meal plans", id: "meal-plans", text: "Nutrition built around your goals, your testing and how you actually eat." },
        ],
    },

    different: {
        title: "What makes naturopathic medicine at Revibe different?",
        text: "Revibe is a performance therapy clinic. Naturopathic medicine here works with the physiotherapists, chiropractors and massage therapists next door, on the same plan.",
        licensed: {
            title: "Naturopathic doctors",
            text: "Licensed naturopathic doctors who take the time to hear the whole story, in person or virtual.",
            linkLabel: "Meet the team",
            linkUrl: "/",
            textAfter: ".",
        },
        hands: {
            title: "Testing before guessing",
            text: "Bloodwork, DUTCH and food sensitivity testing when they are worth doing, so your plan is built on your numbers, not a hunch.",
            image: "/assets/images/naturopathic/testing.jpg",
            alt: "Lisbeth Bitar Patino, naturopathic doctor, assessing a client",
            position: "center 30%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, chiropractors, osteopaths and massage therapists under one roof, so pain and recovery are treated from both sides.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. It shows your naturopathic doctor where to start.",
            linkLabel: "Take the Care Map",
        },
        // the white card; no link on this page
        billing: {
            title: "Acupuncture and IV on site",
            text: "Acupuncture, cupping and IV therapy happen in the same clinic, so your plan does not send you across town.",
        },
    },

    team: {
        title: "Who will treat me?",
        text: "Two naturopathic doctors, in person at any Revibe clinic or virtually. You see the same naturopathic doctor for the whole plan.",
        members: ["jennifer-tang", "lisbeth-bitar-patino"],
    },

    reviews: {
        title: "What do clients say about naturopathic medicine at Revibe?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        items: [
            {
                name: "laura B.",
                initials: "LB",
                quote: "Dr. Jennifer Tang is absolutely amazing, she has changed my way of living. I feel like a whole new person after taking all her recommendations. She made me understand the benefits of seeing a naturopathic doctor and it has paid off!",
            },
            {
                name: "Rose A.",
                initials: "RA",
                quote: "I personally saw Dr. Jennifer tang for my gut health problems. She helped me control my condition so I can have more flexibility with my diet. The acupuncture and cupping was very safe, sanitary and effective.",
            },
            {
                name: "Umar Q.",
                initials: "UQ",
                quote: "I just started seeing Dr. Jennifer Tang who is a naturopath and she has been extremely helpful in coming up with a plan to address gut issues I have been experiencing. Not only is she very knowledgeable, she is clearly someone who cares about her patients and continuously checks up on them, which is greatly appreciated. Her acupuncture treatments have also started to make a difference in my life.",
            },
        ],
    },

    statement: {
        image: "/assets/images/osteopathy/statement-plunge.jpg",
        alt: "A hand trailing through the cold plunge water",
        position: "center 45%",
    },

    insurance: {
        title: "Is naturopathic medicine covered by insurance?",
        text: "Most extended health plans in Ontario cover naturopathic care. Check your plan, or ask us before your first session and we will tell you what to look for. IV therapy and DUTCH testing are quoted when you contact us.",
        cardTitle: "Start with a free consultation",
        cardText: "Talk to a naturopathic doctor, in person or virtual, before you book anything.",
        linkLabel: "Book a free consultation",
        linkUrl: "/services/naturopathic-medicine/free-consultation/",
    },

    related: {
        title: "Naturopathic medicine works with the rest of Revibe",
        items: [
            { label: "Physiotherapy", url: "/services/physiotherapy/", image: "/assets/images/services/physiotherapy.jpg", alt: "Michael Leung, physiotherapist, working a client's hip on the table", position: "center 55%" },
            { label: "Chiropractic", url: "/services/chiropractic/", image: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 40%" },
            { label: "Massage therapy", url: "/services/massage/", image: "/assets/images/services/massage-hands.jpg", alt: "A massage therapist's hands working into a client's shoulder", position: "center 45%" },
            { label: "Osteopathy", url: "/services/osteopathy/", image: "/assets/images/services/osteopathy.jpg", alt: "A Revibe osteopathic practitioner working gently at a client's neck", position: "55% 40%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If the answer is not naturopathic medicine, it will say so.",
        button: "Take the Care Map",
    },

    locations: {
        title: "Where can I see a naturopathic doctor?",
        serviceLabel: "Naturopathic medicine",
        locationPage: "naturopathic-medicine",
    },

    faq: {
        title: "Naturopathic medicine FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What does a naturopathic doctor treat?",
                a: "The things that show up as symptoms and never get a clear answer: low energy, poor sleep, hormones and cycles, digestion and food sensitivities, stress and getting sick too often. Your naturopathic doctor looks for the cause, tests where it is warranted and builds a plan around it.",
            },
            {
                q: "Can I start with a free consultation?",
                a: "Yes. Revibe offers a free consultation with a naturopathic doctor, in person or virtual, so you can talk through what has been going on and find out whether naturopathic medicine can help before you book.",
            },
            {
                q: "Is naturopathic medicine covered by insurance?",
                a: "Most extended health plans cover naturopathic care. Check your plan, or ask us before your first session and we will tell you what to look for.",
            },
            {
                q: "Do you offer acupuncture and cupping?",
                a: "Yes. Acupuncture and cupping are offered alongside naturopathic care, in the same clinic as our physiotherapists, chiropractors and massage therapists.",
            },
            {
                q: "How much do IV therapy and DUTCH testing cost?",
                a: "IV therapy depends on the plan your naturopathic doctor builds, and DUTCH testing is quoted when you contact us, so we confirm the price before anything is booked.",
            },
            {
                q: "Who are the naturopathic doctors at Revibe?",
                a: "Dr. Jennifer Tang and Lisbeth Bitar Patino. You can book in person at any Revibe clinic, or virtually.",
            },
        ],
    },

    stickyLabel: "Book naturopathic medicine",
};
