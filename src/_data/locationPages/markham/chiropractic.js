// Revibe Markham chiropractor page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Chiropractor in Markham | Chiropractic Care | Revibe",
    metaDescription: "Chiropractor in Markham at Revibe Markham. Adjustments for back pain, neck pain, headaches and sciatica. Direct billing to most insurers.",
    title: "Chiropractor",
    text: "Licensed chiropractors in Markham for back pain, neck pain, headaches and sciatica. Adjustments, soft tissue work and exercise, planned around how you live and train.",
    requestService: "Chiropractic",
    images: [
        {
            src: "/assets/images/services/chiropractic.jpg",
            alt: "A Revibe chiropractor adjusting a client on the table",
            position: "center 45%"
        },
        {
            src: "/assets/images/chiropractic/hero-trevor.jpg",
            alt: "Dr. Trevor D'Souza, chiropractor, treating a client",
            position: "center 40%"
        }
    ],
    treat: {
        title: "What our Markham chiropractors treat",
        text: "Pick what fits, or take the Care Map and we will point you to the right session.",
        items: [
            {
                title: "Spinal adjustments",
                text: "Precise adjustments to restore movement in the spine and joints.",
                url: "/"
            },
            {
                title: "Sciatica",
                text: "Relief for nerve pain running into the hip and leg.",
                url: "/"
            },
            {
                title: "Headaches and migraines",
                text: "Care for tension headaches that start in the neck.",
                url: "/"
            },
            {
                title: "Sports injuries",
                text: "Back in the game with adjustments and rehab.",
                url: "/"
            },
            {
                title: "Posture correction",
                text: "For desk-bound backs and stiff necks.",
                url: "/"
            },
            {
                title: "Pregnancy chiropractic",
                text: "Gentle care for back and pelvic pain in pregnancy.",
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
                label: "Shoulder pain",
                url: "/where-does-it-hurt/shoulder/"
            },
            {
                label: "Hip pain",
                url: "/where-does-it-hurt/hip/"
            }
        ]
    },
    steps: {
        title: "Your first session in Markham",
        items: [
            {
                title: "Talk it through",
                text: "Your chiropractor asks about your pain, your work and your training."
            },
            {
                title: "Assess",
                text: "Posture, movement, joint and nerve tests to find what is driving it."
            },
            {
                title: "Adjust and plan",
                text: "Treatment in the same session, plus a plan and exercises to hold the change."
            }
        ]
    },
    billing: true,
    regulators: true,
    nearText: "Guests come to us for chiropractic from across Markham.",
    faq: {
        title: "Chiropractic in Markham FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book chiropractic in Markham?",
                a: "Use Request to book at the top of this page and the Markham team will call you back, book online, or call Revibe Markham at (289) 806-5123. You can also email hello@revibeto.com."
            },
            {
                q: "How much does chiropractic cost at Revibe Markham?",
                a: "An initial 60 minute assessment is $125. Follow-ups are $90 for 30 minutes, $125 for 45 minutes and $150 for 60 minutes. Most extended health plans cover it, and we direct bill for you."
            },
            {
                q: "What does a chiropractor treat?",
                a: "Low back pain, neck pain, sciatica, tension headaches, stiffness from desk work, sports injuries, and back and pelvic pain in pregnancy."
            },
            {
                q: "Do I need a referral to see a chiropractor in Markham?",
                a: "No. Some insurance plans ask for a doctor’s note before they pay, so check your plan."
            },
            {
                q: "Is chiropractic covered by insurance?",
                a: "Most extended health plans cover chiropractic. We direct bill Canada Life, Sun Life, Manulife, Desjardins and many more, so you pay only what your plan does not cover."
            },
            {
                q: "How long is a session?",
                a: "Your first assessment is 60 minutes. Follow-ups are usually 30 minutes."
            },
            {
                q: "How many sessions will I need?",
                a: "Many people feel better within a few sessions. Your chiropractor gives you a plan after the assessment, and it tapers off as you improve."
            },
            {
                q: "What should I bring to my first session?",
                a: "Comfortable clothes, any imaging or reports, and your insurance card if you want us to direct bill. Arrive about ten minutes early."
            },
            {
                q: "Can I combine chiropractic with other care at Revibe?",
                a: "Yes. Chiropractic pairs well with massage and physiotherapy, and the team shares notes so your plan stays joined up."
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
    otherLabel: "Chiropractic in Mississauga",
    allAbout: {
        label: "All about chiropractic",
        url: "/services/chiropractic/"
    }
};
