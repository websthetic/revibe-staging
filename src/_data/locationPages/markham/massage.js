// Revibe Markham massage therapy page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Massage Therapy in Markham | RMT | Revibe",
    metaDescription: "Registered massage therapy in Markham at Revibe Markham. Deep tissue, sports, prenatal and lymphatic massage. Direct billing to most insurers.",
    title: "Massage therapy",
    text: "Registered massage therapists (RMTs) in Markham for tension, recovery and pain. Deep tissue, sports, Swedish, prenatal and lymphatic drainage, direct billed to most extended health plans.",
    requestService: "Massage therapy",
    images: [
        {
            src: "/assets/images/services/massage.jpg",
            alt: "A massage therapist's hands working along a client's back",
            position: "center 45%"
        },
        {
            src: "/assets/images/first-session/treatment.jpg",
            alt: "A registered massage therapist working into a client's neck and shoulder",
            position: "center 40%"
        }
    ],
    treat: {
        title: "What our Markham registered massage therapists treat",
        text: "Pick what fits, or take the Care Map and we will point you to the right session.",
        items: [
            {
                title: "Deep tissue massage",
                text: "Firm, focused work on stubborn tension.",
                url: "/"
            },
            {
                title: "Sports massage",
                text: "Before or after training, to recover and move better.",
                url: "/"
            },
            {
                title: "Swedish massage",
                text: "Lighter, flowing work to relax and reset.",
                url: "/"
            },
            {
                title: "Prenatal massage",
                text: "Comfortable, safe massage through pregnancy.",
                url: "/"
            },
            {
                title: "Lymphatic drainage",
                text: "Gentle work for swelling and recovery after surgery.",
                url: "/"
            },
            {
                title: "Cupping",
                text: "Suction cups to lift and release tight tissue.",
                url: "/"
            }
        ],
        conditionsTitle: "Where does it hurt?",
        conditions: [
            {
                label: "Neck and mid back pain",
                url: "/where-does-it-hurt/neck/"
            },
            {
                label: "Low back pain",
                url: "/where-does-it-hurt/low-back/"
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
                title: "Check in",
                text: "A short health history so your RMT knows what to work on and what to avoid."
            },
            {
                title: "Treatment",
                text: "Focused hands-on work, with pressure you control the whole way."
            },
            {
                title: "Aftercare",
                text: "Simple stretches and advice so the session lasts longer."
            }
        ]
    },
    billing: true,
    regulators: true,
    nearText: "Guests come to us for massage therapy from across Markham.",
    faq: {
        title: "Massage therapy in Markham FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book massage therapy in Markham?",
                a: "Use Request to book at the top of this page and the Markham team will call you back, book online, or call Revibe Markham at (289) 806-5123. You can also email hello@revibeto.com."
            },
            {
                q: "How much does massage therapy cost at Revibe Markham?",
                a: "Prices for each session length show when you book online, or the front desk can tell you over the phone. Most extended health plans cover it, and we direct bill for you."
            },
            {
                q: "What can massage therapy help with?",
                a: "Muscle tension, neck and shoulder tightness, low back pain, sports recovery, stress, swelling after surgery, and aches through pregnancy."
            },
            {
                q: "Do I need a referral to see a registered massage therapist in Markham?",
                a: "No. Some insurance plans ask for a doctor’s note before they pay, so check your plan."
            },
            {
                q: "Is massage therapy covered by insurance?",
                a: "Most extended health plans cover massage therapy. We direct bill Canada Life, Sun Life, Manulife, Desjardins and many more, so you pay only what your plan does not cover."
            },
            {
                q: "How long is a session?",
                a: "Sessions run 30, 45, 60 or 90 minutes. Sixty minutes suits most people."
            },
            {
                q: "How many sessions will I need?",
                a: "For a specific problem, a few sessions close together works best. For recovery or stress, most people book every two to four weeks."
            },
            {
                q: "What should I bring to my first session?",
                a: "Comfortable clothes, any imaging or reports, and your insurance card if you want us to direct bill. Arrive about ten minutes early."
            },
            {
                q: "Can I combine massage therapy with other care at Revibe?",
                a: "Yes. Massage pairs well with physiotherapy, chiropractic and the sauna or cold plunge."
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
    otherLabel: "Massage therapy in Mississauga",
    allAbout: {
        label: "All about massage therapy",
        url: "/services/massage/"
    }
};
