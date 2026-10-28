// Revibe Markham osteopath page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Osteopath in Markham | Osteopathy | Revibe",
    metaDescription: "Osteopathy in Markham at Revibe Markham. Gentle, whole-body manual therapy for back pain, neck pain and tension. Covered by most health plans.",
    title: "Osteopath",
    text: "Osteopathic manual practitioners in Markham for back pain, neck pain, headaches and chronic tension. Gentle, hands-on treatment that looks at the whole body, not just the sore spot.",
    requestService: "Osteopathy",
    images: [
        {
            src: "/assets/images/services/osteopathy.jpg",
            alt: "A Revibe osteopathic practitioner working gently at a client's neck",
            position: "center 45%"
        },
        {
            src: "/assets/images/osteopathy/hero-ribs.jpg",
            alt: "Anesto, osteopathic practitioner, treating a client's ribs and shoulder",
            position: "center 40%"
        }
    ],
    treat: {
        title: "What our Markham osteopathic manual practitioners treat",
        text: "Pick what fits, or take the Care Map and we will point you to the right session.",
        items: [
            {
                title: "Structural osteopathy",
                text: "Joints, muscles and posture.",
                url: "/"
            },
            {
                title: "Cranial osteopathy",
                text: "Very gentle work for headaches and tension.",
                url: "/"
            },
            {
                title: "Visceral osteopathy",
                text: "Gentle work around the abdomen and organs.",
                url: "/"
            },
            {
                title: "Sports osteopathy",
                text: "Recovery and movement for athletes.",
                url: "/"
            },
            {
                title: "Pediatric osteopathy",
                text: "Gentle care for babies and children.",
                url: "/"
            },
            {
                title: "Chronic pain",
                text: "For pain that has not settled with other care.",
                url: "/"
            }
        ],
        conditionsTitle: "Where does it hurt?",
        conditions: [
            {
                label: "Low back pain",
                url: "/where-does-it-hurt/low-back/"
            },
            {
                label: "Neck and mid back pain",
                url: "/where-does-it-hurt/neck/"
            },
            {
                label: "Hip pain",
                url: "/where-does-it-hurt/hip/"
            },
            {
                label: "Shoulder pain",
                url: "/where-does-it-hurt/shoulder/"
            }
        ]
    },
    steps: {
        title: "Your first session in Markham",
        items: [
            {
                title: "Talk it through",
                text: "Your osteopath asks about your pain and your whole health history."
            },
            {
                title: "Assess",
                text: "Posture, movement and hands-on assessment of the whole body."
            },
            {
                title: "Treat and plan",
                text: "Gentle treatment in the same session and a plan for what comes next."
            }
        ]
    },
    billing: true,
    regulators: true,
    nearText: "Guests come to us for osteopathy from across Markham.",
    faq: {
        title: "Osteopathy in Markham FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book osteopathy in Markham?",
                a: "Use Request to book at the top of this page and the Markham team will call you back, book online, or call Revibe Markham at (289) 806-5123. You can also email hello@revibeto.com."
            },
            {
                q: "How much does osteopathy cost at Revibe Markham?",
                a: "An initial 60 minute assessment is $125. Follow-ups are $90 for 30 minutes, $125 for 45 minutes and $150 for 60 minutes. Most extended health plans cover it, and we direct bill for you."
            },
            {
                q: "What does a osteopath treat?",
                a: "Back and neck pain, headaches, jaw tension, postural strain, sports injuries and chronic pain, using gentle hands-on treatment across the whole body."
            },
            {
                q: "Do I need a referral to see a osteopath in Markham?",
                a: "No. Some insurance plans ask for a doctor’s note before they pay, so check your plan."
            },
            {
                q: "Is osteopathy covered by insurance?",
                a: "Most extended health plans cover osteopathy. We direct bill Canada Life, Sun Life, Manulife, Desjardins and many more, so you pay only what your plan does not cover."
            },
            {
                q: "How long is a session?",
                a: "Your first assessment is 60 minutes. Follow-ups are 30 to 60 minutes."
            },
            {
                q: "How many sessions will I need?",
                a: "Many people need three to five sessions. Your osteopath reviews progress at each session and spaces them out as you improve."
            },
            {
                q: "What should I bring to my first session?",
                a: "Comfortable clothes, any imaging or reports, and your insurance card if you want us to direct bill. Arrive about ten minutes early."
            },
            {
                q: "Can I combine osteopathy with other care at Revibe?",
                a: "Yes. Osteopathy pairs well with physiotherapy and massage, and your practitioners work from the same plan."
            },
            {
                q: "What is your cancellation policy?",
                a: "Please give at least 24 hours’ notice to cancel or move a session. Late cancellations and missed sessions may be charged."
            },
            {
                q: "Where is Revibe Markham?",
                a: "220 Torbay Rd, Markham, ON L3R 1G6, inside Recess on Torbay Road, near Highway 7. Free parking at Recess. Easy to reach from Highway 7, Highway 404 and Highway 407."
            },
            {
                q: "Which areas do you serve?",
                a: "Guests come to Revibe Markham from Unionville, Markville, Cornell, Berczy Wismer, Milliken, Stouffville, Vaughan and across the GTA."
            }
        ]
    },
    otherLabel: "Osteopathy in Mississauga",
    allAbout: {
        label: "All about osteopathy",
        url: "/services/osteopathy/"
    }
};
