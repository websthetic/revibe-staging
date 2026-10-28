// Revibe Markham physiotherapy page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Physiotherapy in Markham | Physiotherapists | Revibe",
    metaDescription: "Physiotherapy in Markham at Revibe Markham. Physiotherapists for back pain, sports injuries and rehab after surgery. Direct billing, no referral.",
    title: "Physiotherapy",
    text: "Registered physiotherapists in Markham for pain, injury and recovery after surgery. A 60 minute assessment, hands-on treatment and a plan you can follow, with direct billing to most insurers.",
    requestService: "Physiotherapy",
    images: [
        {
            src: "/assets/images/physiotherapy/hero-squat.jpg",
            alt: "Michael Leung, physiotherapist, taking a client through a loaded squat",
            position: "center 40%"
        },
        {
            src: "/assets/images/physiotherapy/hero-back.jpg",
            alt: "Scott French treating a client's back",
            position: "center 45%"
        }
    ],
    treat: {
        title: "What our Markham physiotherapists treat",
        text: "Pick what fits, or take the Care Map and we will point you to the right session.",
        items: [
            {
                title: "Sports physiotherapy",
                text: "Injury rehab and return to sport for athletes and active people.",
                url: "/"
            },
            {
                title: "Manual therapy",
                text: "Joint mobilization, soft tissue and trigger point work to restore movement.",
                url: "/"
            },
            {
                title: "Post-operative rehab",
                text: "Strength and mobility back after ACL, hip, knee or shoulder surgery.",
                url: "/"
            },
            {
                title: "Chronic pain",
                text: "Long-term plans for pain that has hung around for months.",
                url: "/"
            },
            {
                title: "Vestibular rehab",
                text: "Dizziness, vertigo and balance problems.",
                url: "/"
            },
            {
                title: "Pelvic floor",
                text: "Pregnancy, postpartum, incontinence and pelvic pain.",
                url: "/location/markham/pelvic-floor/"
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
                label: "Knee pain",
                url: "/where-does-it-hurt/knee/"
            },
            {
                label: "Hip pain",
                url: "/where-does-it-hurt/hip/"
            },
            {
                label: "Foot and ankle pain",
                url: "/where-does-it-hurt/foot-ankle/"
            },
            {
                label: "Elbow and wrist pain",
                url: "/where-does-it-hurt/elbow-wrist/"
            }
        ]
    },
    steps: {
        title: "Your first session in Markham",
        items: [
            {
                title: "Talk it through",
                text: "Your physiotherapist asks about your pain, your history and what you want to get back to."
            },
            {
                title: "Move and test",
                text: "Strength, range and movement tests to find the cause, not just the sore spot."
            },
            {
                title: "Treat and plan",
                text: "Hands-on treatment in the same session and a clear plan with home exercises."
            }
        ]
    },
    billing: true,
    regulators: true,
    nearText: "Guests come to us for physiotherapy from across Markham.",
    faq: {
        title: "Physiotherapy in Markham FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book physiotherapy in Markham?",
                a: "Use Request to book at the top of this page and the Markham team will call you back, book online, or call Revibe Markham at (289) 806-5123. You can also email hello@revibeto.com."
            },
            {
                q: "How much does physiotherapy cost at Revibe Markham?",
                a: "An initial 60 minute assessment is $125. Follow-ups are $90 for 30 minutes, $125 for 45 minutes and $150 for 60 minutes. Most extended health plans cover it, and we direct bill for you."
            },
            {
                q: "What does a physiotherapist treat?",
                a: "Back and neck pain, sports injuries, sprains and strains, knee, hip and shoulder pain, sciatica, arthritis, recovery after surgery, dizziness and balance problems, and pain that has hung around for months."
            },
            {
                q: "Do I need a referral to see a physiotherapist in Markham?",
                a: "No. Some insurance plans ask for a doctor’s note before they pay, so check your plan."
            },
            {
                q: "Is physiotherapy covered by insurance?",
                a: "Most extended health plans cover physiotherapy. We direct bill Canada Life, Sun Life, Manulife, Desjardins and many more, so you pay only what your plan does not cover."
            },
            {
                q: "How long is a session?",
                a: "Your first assessment is 60 minutes. Follow-ups are 30, 45 or 60 minutes, depending on your plan."
            },
            {
                q: "How many sessions will I need?",
                a: "It depends on the injury. Many people feel a real change in three to six sessions, and your physiotherapist sets out the plan at your first session."
            },
            {
                q: "What should I bring to my first session?",
                a: "Comfortable clothes, any imaging or reports, and your insurance card if you want us to direct bill. Arrive about ten minutes early."
            },
            {
                q: "Can I combine physiotherapy with other care at Revibe?",
                a: "Yes. Many plans pair physiotherapy with massage, performance training or the recovery lounge, and your practitioners talk to each other."
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
    otherLabel: "Physiotherapy in Mississauga",
    allAbout: {
        label: "All about physiotherapy",
        url: "/services/physiotherapy/"
    }
};
