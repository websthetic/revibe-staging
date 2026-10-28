// Content for /services/chiropractic/, from the dev handover. Rendered by layouts/service.html.
// Internal links are "/" until the real pages exist.
module.exports = {
    name: "Chiropractic",
    // preselected in the Request to book form
    requestService: "Chiropractic",

    hero: {
        title: "Chiropractic",
        text: "Licensed chiropractors who adjust what is stuck and strengthen what is weak. Spinal and joint adjustments, soft tissue work and rehab exercise at every Revibe clinic, for backs, necks, headaches and sciatica.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. Every chiropractor here is licensed by the College of Chiropractors of Ontario, and we bill most insurers directly.",
        images: [
            { src: "/assets/images/services/chiropractic.jpg", alt: "A Revibe chiropractor adjusting a client's back on the table", position: "center 70%" },
            { src: "/assets/images/chiropractic/hero-trevor.jpg", alt: "Dr. Trevor D'Souza, chiropractor, smiling as he treats a client on the table", position: "58% 60%" },
            { src: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 32%" },
        ],
    },

    fit: {
        title: "Is chiropractic right for me?",
        text: "If one of these sounds like you, book an assessment. If the chiropractor thinks a physiotherapist or massage therapist should see you first or alongside, they are in the same building and the handover is a walk down the hall.",
        // no photo: the eight tiles fill the mosaic on their own
        // url jumps to the matching item in "What does a chiropractor treat?"; a tile without one is not a link
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "My lower back locks up when I bend and it takes days to loosen.", topic: "Spinal adjustments", url: "#adjustments" },
            { area: "b", colour: "green", quote: "I cannot turn my head to check my blind spot.", topic: "Spinal adjustments", url: "#adjustments" },
            { area: "c", colour: "black", quote: "My headaches start at the base of my skull and wrap around to my eyes.", topic: "Headaches and migraines", url: "#headaches" },
            { area: "d", colour: "mint", quote: "There is a burning line from my back to my foot.", topic: "Sciatica", url: "#sciatica" },
            { area: "e", colour: "white", quote: "I sit at a desk all day and my posture is starting to show it.", topic: "Posture correction", url: "#posture" },
            { area: "f", colour: "white", quote: "I am pregnant and my pelvis aches.", topic: "Pregnancy", url: "#pregnancy" },
            { area: "g", colour: "green", wide: true, quote: "I hurt my back at work weeks ago and it still is not settling.", topic: "Work injuries", url: "#work-injuries" },
            { area: "h", colour: "black", quote: "My mid back feels like it needs to crack." },
        ],
    },

    firstAppointment: {
        title: "What happens at my first chiropractic appointment?",
        text: "A full assessment and, where appropriate, your first adjustment in the same session. You leave knowing what is going on and how many sessions it should take.",
        steps: [
            {
                title: "We listen",
                text: "Your history, how it started, what makes it better and worse. Most of the picture comes from this.",
                image: "/assets/images/chiropractic/step-listen.jpg",
                alt: "A Revibe chiropractor talking a client through his history on the table",
                position: "center 28%",
            },
            {
                title: "We assess",
                text: "Movement, posture, joint and nerve tests to find which segment is restricted and why.",
                image: "/assets/images/chiropractic/step-assess.jpg",
                alt: "Dr. Trevor D'Souza, chiropractor, assessing a client's posture as she sits on the table",
                position: "center 35%",
            },
            {
                title: "We treat",
                text: "Adjustments and soft tissue work, explained before anything happens. Lighter techniques for anyone who prefers them.",
                image: "/assets/images/chiropractic/step-treat.jpg",
                alt: "A Revibe chiropractor smiling as he works on a client's neck",
                position: "center 50%",
            },
            {
                title: "We plan",
                text: "A plan with a target number of sessions, home exercises and a clear point where we reassess rather than carry on indefinitely.",
                image: "/assets/images/chiropractic/step-plan.jpg",
                alt: "A Revibe chiropractor working at a client's neck in the treatment space",
                position: "center 50%",
            },
        ],
    },

    types: {
        title: "What does a chiropractor treat?",
        text: "The assessment decides the approach. These are the problems our chiropractors see most, each with its own way of working.",
        // id lets the tiles above jump to the matching row
        items: [
            { label: "Spinal adjustments", id: "adjustments", url: "/" },
            { label: "Sciatica", id: "sciatica", url: "/" },
            { label: "Headaches and migraines", id: "headaches", url: "/" },
            { label: "Posture correction", id: "posture", url: "/" },
            { label: "Sports injuries", id: "sports", url: "/" },
            { label: "Pregnancy", id: "pregnancy", url: "/" },
            { label: "Chronic pain", id: "chronic-pain", url: "/" },
            { label: "Work injuries", id: "work-injuries", url: "/" },
        ],
    },

    different: {
        title: "What makes chiropractic at Revibe different?",
        text: "Revibe is a performance therapy clinic. Chiropractic here is one tool among several, used when it is the right one and combined with the others when that gets you better faster.",
        licensed: {
            title: "Licensed, experienced",
            text: "Every chiropractor at Revibe holds a Doctor of Chiropractic degree and is licensed by the College of Chiropractors of Ontario.",
        },
        hands: {
            title: "Adjust and strengthen",
            text: "An adjustment restores movement. The exercise that follows keeps it. Every plan here includes both, so you are not back every week for the same thing.",
            image: "/assets/images/chiropractic/adjust-strengthen.jpg",
            alt: "Dr. Trevor D'Souza, chiropractor, adjusting a client on her side",
            position: "55% 40%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, massage therapists, osteopaths and naturopathic doctors under one roof at every Revibe clinic, treating the same case together when that is what gets you better.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. It tells your chiropractor what is driving the pain, and tells you when the answer is a different service.",
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
        text: "Two chiropractors across our clinics, licensed by the College of Chiropractors of Ontario. You see the same chiropractor for the whole plan.",
        members: ["trevor-dsouza", "morgan-millard"],
    },

    reviews: {
        title: "What do clients say about chiropractic at Revibe?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        items: [
            {
                name: "Thea M.",
                initials: "TM",
                quote: "I’ve been seeing Dr. Morgan for chiropractic sessions over the past three years, and he’s been such a huge support in helping me manage my back pain and TMJ issues. You’ll truly be taken care of here. Highly recommend booking a visit if you’re in the GTA area!",
            },
            {
                name: "Celest J.",
                initials: "CJ",
                quote: "Love the atmosphere and people here! You HAVE to do osteo with the lovely Erica Runnalls - she’s professional and friendly and overall got the magic touch. Also, chiro with Morgan Millard is a MUST! He’ll crack you back into feeling human again (physically and metaphorically). Overall couldn’t recommend Revibe more!",
            },
            {
                name: "Sarah A.",
                initials: "SA",
                quote: "Dr. Trevor D'Souza who works here at Revibe is the best chiropractor I have ever been to. He is kind and works hard. I would highly recommend you to go to him if you have any issues. He really listens and has the desire to help you. He is not in and out of the office after 2 mins. Go see him !! you will thank me",
            },
        ],
    },

    statement: {
        image: "/assets/images/chiropractic/statement-neck.jpg",
        alt: "A chiropractor's hands at a client's neck",
        position: "center 45%",
    },

    insurance: {
        title: "Is chiropractic covered by insurance?",
        text: "Most extended health plans in Ontario cover chiropractic care. Check your plan or ask us before your first session and we will tell you what is covered.",
        cardTitle: "We bill most insurers directly",
        cardText: "Bring your card and we handle the claim at the front desk.",
        linkLabel: "See which plans we bill",
        linkUrl: "/direct-billing/",
    },

    related: {
        title: "Chiropractic is one part of performance therapy",
        items: [
            { label: "Physiotherapy", url: "/services/physiotherapy/", image: "/assets/images/services/physiotherapy.jpg", alt: "Michael Leung, physiotherapist, working a client's hip on the table", position: "center 55%" },
            { label: "Massage therapy", url: "/services/massage/", image: "/assets/images/services/massage-hands.jpg", alt: "A massage therapist's hands working into a client's shoulder", position: "center 45%" },
            { label: "Osteopathy", url: "/services/osteopathy/", image: "/assets/images/services/osteopathy-leg.jpg", alt: "A Revibe osteopathic practitioner lifting a client's leg on the table", position: "center 35%" },
            { label: "Stretch therapy", url: "/stretch-spa/", image: "/assets/images/services/stretch-therapy-leg.jpg", alt: "A Revibe practitioner stretching a client's leg on the table", position: "60% 18%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If the answer is not chiropractic, it will say so.",
        button: "Take the Care Map",
    },

    locations: {
        title: "Where can I see a chiropractor?",
        serviceLabel: "Chiropractic",
        locationPage: "chiropractic",
    },

    faq: {
        title: "Chiropractic FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What should I expect during a chiropractic appointment?",
                a: "Your first session at any Revibe clinic is an assessment: your history, a physical and movement exam, and an explanation of what the chiropractor found. Where it is appropriate, your first adjustment happens in the same session, along with any soft tissue work, and you leave with a plan and home exercises.",
            },
            {
                q: "Can chiropractic treatment help with chronic lower back pain?",
                a: "Yes. Your chiropractor finds which segment is restricted and why, adjusts it to restore movement and adds the exercise that keeps it moving. For long-standing pain the plan combines manual therapy with active rehab over months, not endless adjustments, with a clear point where we reassess.",
            },
            {
                q: "Does chiropractic work for neck pain and stiffness?",
                a: "Yes. Neck pain and stiffness, like not being able to turn your head to check your blind spot, is one of the problems our chiropractors see most. Treatment combines adjustments to the restricted joints, soft tissue work and home exercises that keep the movement you get back.",
            },
            {
                q: "Can chiropractic help with headaches and migraines?",
                a: "It can, especially for headaches that start at the base of the skull. Treatment uses upper neck adjustments and release of the muscles at the base of the skull. The assessment comes first, so your chiropractor can tell you whether your headaches are the kind this approach helps.",
            },
            {
                q: "Does chiropractic treatment work for sciatica?",
                a: "For many people, yes. Movement, joint and nerve tests find where the pain is coming from, then your chiropractor treats it with adjustments, flexion-distraction and soft tissue work. If a physiotherapist or massage therapist should see you first or alongside, they are in the same building.",
            },
            {
                q: "Is chiropractic treatment safe during pregnancy?",
                a: "Chiropractic in pregnancy at Revibe uses modified, lighter techniques with supported positioning for the back and pelvis. Everything is explained before anything happens, and if your chiropractor thinks someone else in the building should see you first or alongside, they will tell you at the assessment.",
            },
            {
                q: "Can chiropractic help with sports injuries?",
                a: "Yes. Sports injuries are treated with joint manipulation, soft tissue work and corrective exercise to reduce re-injury. Our chiropractors work with the physiotherapists and massage therapists at every Revibe clinic, treating the same case together when that is what gets you better faster.",
            },
            {
                q: "How many chiropractic sessions will I need?",
                a: "It depends on the problem, and you find out at your first appointment. Your plan sets a target number of sessions, home exercises and a clear point where we reassess rather than carry on indefinitely.",
            },
            {
                q: "Is chiropractic covered by insurance?",
                a: "Most extended health plans in Ontario cover chiropractic care. Check your plan or ask us before your first session and we will tell you what is covered. We bill most insurers directly at every Revibe clinic: bring your card and we handle the claim at the front desk.",
            },
            {
                q: "Does an adjustment hurt?",
                a: "Your chiropractor explains every adjustment before anything happens, and lighter techniques are available for anyone who prefers them.",
            },
        ],
    },

    stickyLabel: "Book chiropractic",
};
