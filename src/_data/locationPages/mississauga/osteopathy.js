// Revibe Mississauga osteopath page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Osteopath in Mississauga | Osteopathy | Revibe",
    metaDescription: "Osteopathy in Mississauga at Revibe Mississauga. Gentle, whole-body manual therapy for back pain, neck pain and tension. Covered by most health plans.",
    title: "Osteopath",
    text: "Osteopathic manual practitioners in Mississauga for back pain, neck pain, headaches and chronic tension. Gentle, hands-on treatment that looks at the whole body, not just the sore spot.",
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
        title: "What our Mississauga osteopathic manual practitioners treat",
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
        title: "Your first session in Mississauga",
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
    team: {
        title: "Your Mississauga osteopathy team",
        text: "Every Revibe osteopath is registered with their college. Pick a practitioner when you book, and you see the same person for your whole plan.",
        members: [
            "anesto-charles",
            "emily-wilson",
            "erica-runnalls"
        ]
    },
    billing: true,
    regulators: true,
    nearText: "Guests come to us for osteopathy from across Mississauga.",
    faq: {
        title: "Osteopathy in Mississauga FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book osteopathy in Mississauga?",
                a: "Use Request to book at the top of this page and the Mississauga team will call you back, book online, or call Revibe Mississauga at (905) 783-8423. You can also email hello@revibeto.com."
            },
            {
                q: "How much does osteopathy cost at Revibe Mississauga?",
                a: "An initial 60 minute assessment is $125. Follow-ups are $90 for 30 minutes, $125 for 45 minutes and $150 for 60 minutes. Most extended health plans cover it, and we direct bill for you."
            },
            {
                q: "What does a osteopath treat?",
                a: "Back and neck pain, headaches, jaw tension, postural strain, sports injuries and chronic pain, using gentle hands-on treatment across the whole body."
            },
            {
                q: "Do I need a referral to see a osteopath in Mississauga?",
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
                q: "Where is Revibe Mississauga?",
                a: "2290 Dixie Rd, Mississauga, ON L4Y 1Z4, on Dixie Road in Applewood, close to Sherway and the QEW. Free parking on site. Easy to reach from the QEW, Highway 427 and Etobicoke, and a short drive from Brampton."
            },
            {
                q: "Which areas do you serve?",
                a: "Guests come to Revibe Mississauga from Cooksville, Erindale, East Credit, Erin Mills, Meadowvale, Applewood, Etobicoke, Brampton and across the GTA."
            }
        ]
    },
    otherLabel: "Osteopathy in Markham",
    allAbout: {
        label: "All about osteopathy",
        url: "/services/osteopathy/"
    }
};
