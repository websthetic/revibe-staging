// Revibe Mississauga direct billing page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Direct Billing in Mississauga | Physio, RMT, Chiro | Revibe",
    metaDescription: "Direct billing in Mississauga at Revibe Mississauga. We bill most health plans for physiotherapy, massage, chiropractic, osteopathy and naturopathic care.",
    title: "Direct billing",
    text: "We bill your insurer for you in Mississauga. Physiotherapy, massage therapy, chiropractic, osteopathy and naturopathic medicine, direct billed to most extended health plans.",
    requestService: "Not sure yet",
    images: [
        {
            src: "/assets/images/popup-forms/request-to-book.jpg",
            alt: "A client filling in his details in the Revibe lounge",
            position: "center 45%"
        },
        {
            src: "/assets/images/first-session/conversation.jpg",
            alt: "Zeeruk, physiotherapist, reviewing an assessment with a client",
            position: "center 40%"
        }
    ],
    treat: {
        title: "What we direct bill in Mississauga",
        text: "Each service has its own page for this clinic.",
        items: [
            {
                title: "Physiotherapy",
                text: "Including pelvic floor physiotherapy.",
                url: "/location/mississauga/physiotherapy/"
            },
            {
                title: "Massage therapy",
                text: "Registered massage therapists.",
                url: "/location/mississauga/massage/"
            },
            {
                title: "Chiropractic",
                text: "Licensed chiropractors.",
                url: "/location/mississauga/chiropractic/"
            },
            {
                title: "Osteopathy",
                text: "Check your plan for coverage.",
                url: "/location/mississauga/osteopathy/"
            },
            {
                title: "Naturopathic medicine",
                text: "Including acupuncture.",
                url: "/location/mississauga/naturopathic-medicine/"
            }
        ]
    },
    steps: {
        title: "How direct billing works",
        items: [
            {
                title: "Bring your card",
                text: "Your insurance card and photo ID at your first session."
            },
            {
                title: "We check your plan",
                text: "The front desk confirms what you are covered for."
            },
            {
                title: "We submit",
                text: "Same day. You pay only the balance, if there is one."
            }
        ]
    },
    billing: false,
    regulators: true,
    nearText: "Guests come to us for direct billing from across Mississauga.",
    faq: {
        title: "Direct billing in Mississauga FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book direct billing in Mississauga?",
                a: "Use Request to book at the top of this page and the Mississauga team will call you back, book online, or call Revibe Mississauga at (905) 783-8423. You can also email hello@revibeto.com."
            },
            {
                q: "Which insurers do you direct bill in Mississauga?",
                a: "Canada Life, Sun Life, Manulife, Desjardins, Industrial Alliance, ClaimSecure, Cowan, Maximum Benefit, TELUS AdjudiCare, Johnson Inc., Green Shield and many more. Ask the front desk if yours is not listed."
            },
            {
                q: "Which services can you direct bill?",
                a: "Physiotherapy, pelvic floor physiotherapy, massage therapy, chiropractic, osteopathy and naturopathic medicine, depending on your plan."
            },
            {
                q: "Do I pay anything up front?",
                a: "For most clients with active coverage, no. You pay only the balance your plan does not cover."
            },
            {
                q: "What do I need to bring?",
                a: "Your insurance card and photo ID. If you are a dependant, bring the plan member’s name and date of birth."
            },
            {
                q: "What if my insurer is not on the list?",
                a: "We give you a receipt after every session, so you can submit the claim yourself and get reimbursed."
            },
            {
                q: "Can you check my coverage before I book?",
                a: "Yes. Call or email us with your insurer and plan number and the front desk will check what you are covered for."
            },
            {
                q: "Do I need a doctor’s referral for coverage?",
                a: "Most plans do not need one. Some ask for a referral before they pay for physiotherapy or massage, so check your plan booklet."
            },
            {
                q: "What if my session costs more than my coverage?",
                a: "You pay the difference at the end of your session. The front desk tells you the amount before you leave."
            },
            {
                q: "What is your cancellation policy?",
                a: "Please give at least 24 hours’ notice to cancel or move a session. Late cancellations and missed sessions may be charged, and insurers do not cover them."
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
    otherLabel: "Direct billing in Markham",
    allAbout: {
        label: "All about direct billing",
        url: "/"
    }
};
