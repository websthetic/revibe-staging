// Revibe Mississauga massage therapy page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Massage Therapy in Mississauga | RMT | Revibe",
    metaDescription: "Registered massage therapy in Mississauga at Revibe Mississauga. Deep tissue, sports, prenatal and lymphatic massage. Direct billing to most insurers.",
    title: "Massage therapy",
    text: "Registered massage therapists (RMTs) in Mississauga for tension, recovery and pain. Deep tissue, sports, Swedish, prenatal and lymphatic drainage, direct billed to most extended health plans.",
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
        title: "What our Mississauga registered massage therapists treat",
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
        title: "Your first session in Mississauga",
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
    team: {
        title: "Your Mississauga massage therapy team",
        text: "Every Revibe registered massage therapist is registered with their college. Pick a practitioner when you book, and you see the same person for your whole plan.",
        members: [
            "rachel-murray",
            "kyle-sunga",
            "winson-cheong",
            "gauri-khandke",
            "vincent-nguyen",
            "joseph-de-leon",
            "angelii-mercurius"
        ]
    },
    billing: true,
    regulators: true,
    nearText: "Guests come to us for massage therapy from across Mississauga.",
    faq: {
        title: "Massage therapy in Mississauga FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book massage therapy in Mississauga?",
                a: "Use Request to book at the top of this page and the Mississauga team will call you back, book online, or call Revibe Mississauga at (905) 783-8423. You can also email hello@revibeto.com."
            },
            {
                q: "How much does massage therapy cost at Revibe Mississauga?",
                a: "Prices for each session length show when you book online, or the front desk can tell you over the phone. Most extended health plans cover it, and we direct bill for you."
            },
            {
                q: "What can massage therapy help with?",
                a: "Muscle tension, neck and shoulder tightness, low back pain, sports recovery, stress, swelling after surgery, and aches through pregnancy."
            },
            {
                q: "Do I need a referral to see a registered massage therapist in Mississauga?",
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
                q: "Where is Revibe Mississauga?",
                a: "2290 Dixie Rd, Mississauga, ON L4Y 1Z4, on Dixie Road in Applewood, close to Sherway and the QEW. Free parking on site. Easy to reach from the QEW, Highway 427 and Etobicoke, and a short drive from Brampton."
            },
            {
                q: "Which areas do you serve?",
                a: "Guests come to Revibe Mississauga from Cooksville, Erindale, East Credit, Erin Mills, Meadowvale, Applewood, Etobicoke, Brampton and across the GTA."
            }
        ]
    },
    otherLabel: "Massage therapy in Markham",
    allAbout: {
        label: "All about massage therapy",
        url: "/services/massage/"
    }
};
