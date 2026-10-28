// Content for /services/osteopathy/, from the dev handover. Rendered by layouts/service.html.
// Internal links are "/" until the real pages exist.
module.exports = {
    name: "Osteopathy",
    // preselected in the Request to book form
    requestService: "Osteopathy",

    hero: {
        title: "Osteopathy",
        text: "Registered manual osteopaths who treat the body as one connected system. Gentle, hands-on, drug-free care at every Revibe clinic, for back and neck pain, headaches, digestion, pregnancy, infants and older adults.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. Most extended health plans cover a registered manual osteopath, and we bill most insurers directly.",
        images: [
            { src: "/assets/images/services/osteopathy.jpg", alt: "A Revibe osteopathic practitioner working gently at a client's neck", position: "55% 40%" },
            { src: "/assets/images/osteopathy/hero-ribs.jpg", alt: "Anesto, osteopathic practitioner, treating a client's ribs and shoulder", position: "center 38%" },
            { src: "/assets/images/osteopathy/hero-table.jpg", alt: "A Revibe osteopathic practitioner treating a client on the table", position: "center 45%" },
        ],
    },

    fit: {
        title: "Is osteopathy right for me?",
        text: "Osteopathy suits people who want gentle treatment that looks at the whole body rather than one sore spot. If one of these sounds like you, book an assessment. If a physiotherapist or chiropractor is the better fit, your osteopath will say so and they are down the hall.",
        photo: { src: "/assets/images/osteopathy/fit-neck.jpg", alt: "Anesto, osteopathic practitioner, working at the neck of a client lying on the table" },
        // each tile jumps to its card in "Which type of osteopathy do I need?"; a tile without a url is not a link
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "My back and neck are always tight.", topic: "Structural osteopathy", url: "#structural" },
            { area: "b", colour: "green", quote: "I get headaches and my jaw is tense.", topic: "Cranial osteopathy", url: "#cranial" },
            { area: "c", colour: "black", quote: "I am bloated and my gut never settles.", topic: "Visceral osteopathy", url: "#visceral" },
            { area: "d", colour: "mint", quote: "My baby is unsettled and feeding is hard.", topic: "Pediatric osteopathy", url: "#pediatric" },
            { area: "e", colour: "white", quote: "I am pregnant and my hips and back ache.", topic: "Pregnancy", url: "#pregnancy" },
            { area: "f", colour: "white", quote: "I have tried everything and nothing has stuck." },
            { area: "g", colour: "green", wide: true, quote: "I am getting older and losing my balance.", topic: "Geriatric osteopathy", url: "#geriatric" },
            { area: "h", colour: "black", quote: "I train and keep picking up niggles.", topic: "Sports osteopathy", url: "#sports" },
        ],
    },

    firstAppointment: {
        title: "What happens at my first osteopathy appointment?",
        text: "A whole-body assessment and gentle treatment in the same session. You leave with a plan and advice you can use the same day.",
        steps: [
            {
                title: "We listen",
                text: "Your history, lifestyle, sleep, stress and what you want to get back to. Osteopathy starts with the whole picture.",
                image: "/assets/images/osteopathy/step-listen.jpg",
                alt: "A Revibe osteopathic practitioner supporting a client's head as she lies on the table",
                position: "40% 50%",
            },
            {
                title: "We assess",
                text: "How you move and how the joints, muscles and connective tissue are working together, not just the area that hurts.",
                image: "/assets/images/osteopathy/step-assess.jpg",
                alt: "Anesto, osteopathic practitioner, releasing a client's neck",
                position: "center 40%",
            },
            {
                title: "We treat",
                text: "Gentle manual techniques: soft tissue work, joint mobilization, stretching, and cranial or visceral work where it is the right tool.",
                image: "/assets/images/osteopathy/step-treat.jpg",
                alt: "A Revibe osteopathic practitioner working on a client's leg on the table",
                position: "center 45%",
            },
            {
                title: "We plan",
                text: "Movement advice, simple exercises and an honest view of how many sessions it should take.",
                image: "/assets/images/osteopathy/step-plan.jpg",
                alt: "Anesto, osteopathic practitioner, treating a client's abdomen",
                position: "center 40%",
            },
        ],
    },

    types: {
        title: "Which type of osteopathy do I need?",
        text: "Your osteopath chooses the approach after the assessment. These are the areas our osteopaths focus on.",
        // items with text show as cards (no links) instead of the arrow list
        items: [
            { label: "Structural osteopathy", id: "structural", text: "Joints, muscles and connective tissue for back, neck, shoulder and hip pain." },
            { label: "Cranial osteopathy", id: "cranial", text: "Light-touch work on the head, neck and spine for headaches, TMJ, stress and sleep." },
            { label: "Visceral osteopathy", id: "visceral", text: "Gentle work on the organs and surrounding tissue for bloating, constipation and abdominal discomfort." },
            { label: "Pediatric osteopathy", id: "pediatric", text: "Very gentle techniques for infants and children, with parents in the room." },
            { label: "Sports osteopathy", id: "sports", text: "Soft tissue release, mobilization and movement assessment for athletes." },
            { label: "Chronic pain", id: "chronic-pain", text: "Gentle manual care combined with exercise and movement education." },
            { label: "Geriatric osteopathy", id: "geriatric", text: "Light pressure adapted to older adults, for stiffness, balance and walking comfort." },
            { label: "Pregnancy", id: "pregnancy", text: "Supported positioning for back, pelvis and hip discomfort through pregnancy." },
        ],
    },

    different: {
        title: "What makes osteopathy at Revibe different?",
        text: "Revibe is a performance therapy clinic. Osteopathy here is part of a team, with the physiotherapists, chiropractors and massage therapists next door and on the same plan.",
        licensed: {
            title: "Registered, experienced",
            text: "Our osteopaths are registered manual osteopaths with extensive training in anatomy, physiology and manual therapy. You see the same osteopath for the whole plan.",
            linkLabel: "Meet the team",
            linkUrl: "/",
            textAfter: ".",
        },
        hands: {
            title: "Gentle and whole-body",
            text: "Osteopathy looks at how the joints, muscles, organs and nervous system affect each other. It is often the right call for people who want hands-on care without force.",
            image: "/assets/images/osteopathy/gentle.jpg",
            alt: "A Revibe practitioner gently supporting a client's head and neck on the table",
            position: "center 45%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, chiropractors, massage therapists and naturopathic doctors under one roof at every Revibe clinic, treating the same case together when that is what gets you better.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. It tells your osteopath what is driving the problem, and tells you when the answer is a different service.",
            linkLabel: "Take the Care Map",
        },
        billing: {
            title: "Direct billing",
            text: "We bill most extended health insurers directly. Bring your card, we handle the claim, and you leave without the paperwork.",
            linkLabel: "See which plans we bill",
            linkUrl: "/direct-billing/",
        },
    },

    team: {
        title: "Who will treat me?",
        text: "Three osteopathic manual practitioners across our clinics. You see the same osteopath for the whole plan.",
        members: ["anesto-charles", "emily-wilson", "erica-runnalls"],
    },

    reviews: {
        title: "What do clients say about osteopathy at Revibe?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        items: [
            {
                name: "Neesha G.",
                initials: "NG",
                quote: "Anesto is an excellent osteopath who’s been a huge help in my ankle injury recovery. He’s knowledgeable, attentive, and takes the time to explain everything clearly. Each session has made a real difference in my mobility and pain levels. I truly appreciate his care and expertise. I highly recommend him!",
            },
            {
                name: "Cailey W.",
                initials: "CW",
                quote: "I just had my first osteopathy appointment with Emily Wilson and I highly recommend her services! She was thorough and extremely respectful during the assessment, explained her process clearly and made sure I was comfortable at every stage. I've already noticed an improvement in my back and I can't wait for the next appointment. It was surprisingly relaxing and informative. The business as a whole offers such an impressive array of services and the environment is inviting and friendly.",
            },
            {
                name: "Jennifer H.",
                initials: "JH",
                quote: "Erica is an amazing Osteopathic Manual Therapist! She has supported my postpartum recovery and sports related injuries. She is knowledgeable, kind and overall an awesome person to work with. I highly recommend Erica if you are looking to work with an Osteopath!.",
            },
        ],
    },

    statement: {
        image: "/assets/images/osteopathy/statement-plunge.jpg",
        alt: "A hand trailing through the cold plunge water",
        position: "center 45%",
    },

    insurance: {
        title: "Is osteopathy covered by insurance?",
        text: "Most extended health plans in Ontario cover osteopathy by a registered manual osteopath. Check your plan or ask us before your first session and we will tell you what is covered.",
        cardTitle: "We bill most insurers directly",
        cardText: "Bring your card and we handle the claim at the front desk.",
        linkLabel: "See which plans we bill",
        linkUrl: "/direct-billing/",
    },

    related: {
        title: "Osteopathy is one part of performance therapy",
        items: [
            { label: "Physiotherapy", url: "/services/physiotherapy/", image: "/assets/images/services/physiotherapy.jpg", alt: "Michael Leung, physiotherapist, working a client's hip on the table", position: "center 55%" },
            { label: "Chiropractic", url: "/services/chiropractic/", image: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 40%" },
            { label: "Massage therapy", url: "/services/massage/", image: "/assets/images/services/massage-hands.jpg", alt: "A massage therapist's hands working into a client's shoulder", position: "center 45%" },
            { label: "Stretch therapy", url: "/stretch-spa/", image: "/assets/images/services/stretch-therapy.jpg", alt: "A Revibe therapist stretching a client's leg up from the table", position: "center 32%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If the answer is not osteopathy, it will say so.",
        button: "Take the Care Map",
    },

    locations: {
        title: "Where can I see an osteopath?",
        serviceLabel: "Osteopathy",
        locationPage: "osteopathy",
    },

    faq: {
        title: "Osteopathy FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What should I expect during an osteopathy appointment?",
                a: "Your first session at any Revibe clinic is a whole-body assessment: your history, lifestyle and goals, then a physical exam of how you move and how the joints, muscles and connective tissue are working together. Treatment is gentle and hands-on and usually starts in the same session, and you leave with a plan and movement advice.",
            },
            {
                q: "Can osteopathy help with chronic lower back pain?",
                a: "Yes. Structural osteopathy treats the joints, muscles and connective tissue around the lower back, and your osteopath also looks at how the rest of the body is loading it. Gentle manual care is combined with exercise and movement education, so the plan keeps working between sessions.",
            },
            {
                q: "Is osteopathy effective for neck pain and stiffness?",
                a: "Yes. Treatment uses gentle soft tissue work, joint mobilization and stretching for the neck and upper back, and your osteopath looks at what else is feeding the stiffness, such as jaw tension, stress or sleep. You leave with movement advice you can use the same day.",
            },
            {
                q: "Can osteopathy help with digestive issues?",
                a: "Visceral osteopathy is gentle work on the organs and surrounding tissue, used for bloating, constipation and abdominal discomfort. Your osteopath takes a full history first. If something needs a different service, you will be told, and the naturopathic doctors are under the same roof at every Revibe clinic.",
            },
            {
                q: "Does osteopathy work for headaches and migraines?",
                a: "Many headaches involve tension in the neck, jaw and upper back, and that is where osteopathy works. Cranial osteopathy uses light-touch work on the head, neck and spine for headaches, TMJ, stress and sleep, alongside gentle work on the neck and shoulders.",
            },
            {
                q: "Can osteopathy help with sports injuries?",
                a: "Yes. Sports osteopathy uses soft tissue release, mobilization and a movement assessment for the niggles that keep coming back when you train. Because Revibe is a performance therapy clinic, your osteopath can bring a physiotherapist or chiropractor onto the same plan when an injury needs it.",
            },
            {
                q: "How does osteopathy support post-surgical recovery?",
                a: "Gentle manual techniques ease the stiffness that often follows surgery and help you get moving again, with simple exercises and movement advice to keep the progress between sessions. Your osteopath works alongside the physiotherapists when that is the better fit.",
            },
            {
                q: "Is osteopathy safe for babies and children?",
                a: "Pediatric osteopathy uses very gentle techniques for infants and children, with parents in the room for the whole session. Parents most often book for a baby who is unsettled or finding feeding hard. Your osteopath takes a full history first.",
            },
            {
                q: "Is osteopathy covered by insurance?",
                a: "Most extended health plans in Ontario cover osteopathy by a registered manual osteopath. We bill most insurers directly at every Revibe clinic: bring your card and we handle the claim at the front desk. Check your plan or ask us before your first session and we will tell you what is covered.",
            },
            {
                q: "What is the difference between an osteopath and a chiropractor?",
                a: "Both treat back, neck and joint pain with their hands. Chiropractic focuses on spinal and joint adjustments. Osteopathy is gentler and looks at how the joints, muscles, organs and nervous system affect each other, without force. Both work at every Revibe clinic, and if the other is the better fit, your practitioner will say so.",
            },
        ],
    },

    stickyLabel: "Book osteopathy",
};
