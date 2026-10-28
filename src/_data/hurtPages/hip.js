// "Where does it hurt" page for hip pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/hip-anatomy.html and hip-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Hip Pain Treatment in Mississauga and Markham | Revibe",
    metaDescription: "Hip pain treatment in Mississauga and Markham with a week by week plan. Arthritis, labral tears, outer hip pain, tight hip flexors and hip replacement rehab.",
    title: "Hip pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week. How often you come in, what changes, and when walking, running and getting out of the car feel easy again.",
    requestService: "Physiotherapy",
    requestMessage: "Hip pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common hip problems",
    problems: [
        {
            key: "arthritis",
            label: "Hip arthritis",
            text: "Stiff in the morning, sore in the groin after walking, hard to put socks on.",
            outlook: "Strength and movement keep you active and doing more."
        },
        {
            key: "labrum",
            label: "Labral tear",
            text: "A deep pinch or click in the front of the hip when you squat or twist.",
            outlook: "Many settle without surgery once the hip moves better."
        },
        {
            key: "outer",
            label: "Outer hip pain",
            text: "Sore on the side of the hip, worse lying on it or climbing stairs.",
            outlook: "Usually a tendon load problem, and very treatable."
        },
        {
            key: "flexor",
            label: "Tight hip flexors",
            text: "A tight, achy front of hip from sitting all day or running.",
            outlook: "Release and strength so it stops pulling on your back."
        },
        {
            key: "surgery",
            label: "After hip surgery",
            text: "Hip replacement, scope or labral repair.",
            outlook: "We pick up once your surgeon clears you and see it through."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your hip is stronger."
        },
        {
            q: "How long until I am better?",
            a: "6 to 12 weeks",
            note: "For most hips. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your hip assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your hip, week by week",
    planText: "A typical plan for hip pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 15,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full hip assessment, hands-on treatment to ease the pain, and a short home plan you can actually do.",
            image: "/assets/images/services/physiotherapy.jpg",
            alt: "Michael Leung, physiotherapist, working a client's hip on the table",
            position: "center 55%"
        },
        {
            week: "3",
            phase: "Relieve",
            angle: 35,
            perWeek: 2,
            title: "Walking feels easier",
            text: "Stairs, the car and long walks start to come back. We add simple glute and core work.",
            image: "/assets/images/stretch/step-plan.jpg",
            alt: "Anesto stretching a client's hip with the knee bent toward the chest",
            position: "center 45%"
        },
        {
            week: "5",
            phase: "Rebuild",
            angle: 60,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Squats, bridges and single leg work, progressed every session so the hip can take load again.",
            image: "/assets/images/physiotherapy/hero-squat.jpg",
            alt: "A Revibe coach guiding a client through a hip stretch on the rack",
            position: "center 45%"
        },
        {
            week: "8",
            phase: "Return",
            angle: 85,
            perWeek: 1,
            title: "Running and lifting",
            text: "Lunges, running and change of direction, with testing to check both sides match up.",
            image: "/assets/images/hurt/gym-split-squat.jpg",
            alt: "Michael Leung checking a client's split squat in the gym",
            position: "center 45%"
        },
        {
            week: "12",
            phase: "Return",
            angle: 100,
            perWeek: 1,
            title: "Back to what you love",
            text: "Sport, training and everyday life. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/services/performance-coaching.jpg",
            alt: "A Revibe coach watching an athlete run on the curved treadmill",
            position: "center 40%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book a hip assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Hip pain: causes and treatment",
    causes: {
        title: "Common causes of hip pain",
        paragraphs: [],
        items: [
            "Hip arthritis, with groin pain and stiffness in the morning",
            "Labral tears, with a deep pinch or click in the front of the hip",
            "Outer hip pain from tendons, worse lying on that side",
            "Tight hip flexors from sitting all day or running",
            "Recovery after hip replacement or hip arthroscopy"
        ]
    },
    treatment: {
        title: "How Revibe treats hip pain",
        paragraphs: [
            "We find whether the pain is coming from the joint, the tendons or your back, then use hands-on treatment and strength work to get you moving freely again. Rehab after hip surgery follows your surgeon’s plan from the first weeks back to full activity.",
            "Book an assessment if your hip or groin hurts when you walk, climb stairs or sit for long, or if you have trouble lying on your side. No referral is needed."
        ],
        items: [],
        links: [
            {
                label: "Physiotherapy",
                url: "/services/physiotherapy/"
            },
            {
                label: "Chiropractic",
                url: "/services/chiropractic/"
            },
            {
                label: "Massage therapy",
                url: "/services/massage/"
            },
            {
                label: "Osteopathy",
                url: "/services/osteopathy/"
            },
            {
                label: "Physiotherapy in Mississauga",
                url: "/location/mississauga/physiotherapy/"
            },
            {
                label: "Physiotherapy in Markham",
                url: "/location/markham/physiotherapy/"
            }
        ]
    },
    warning: {
        title: "When to see a doctor first",
        paragraphs: [
            "Some symptoms need a doctor or the emergency department before physiotherapy. Get urgent care if you have:"
        ],
        items: [
            "Not being able to bear weight after a fall, especially in older adults",
            "Hip pain with a fever or feeling unwell",
            "A child with new groin or knee pain and a limp",
            "Severe pain at night that does not ease with rest"
        ]
    },
    faq: {
        title: "Hip pain questions",
        text: "Straight answers about hip pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does hip pain take to heal?",
                a: "Most hips move from relief to full activity over roughly 6 to 12 weeks, depending on the cause. Your assessment sets a realistic timeline for your hip."
            },
            {
                q: "Is my hip pain actually coming from my back?",
                a: "Sometimes. Pain in the buttock or down the leg can come from the low back. Your assessment checks both so we treat the right place."
            },
            {
                q: "Do I need a referral for hip physiotherapy at Revibe?",
                a: "No. You can book directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Do you do rehab after a hip replacement?",
                a: "Yes. We rehab hip replacements, scopes and labral repairs once your surgeon clears you, and build you back to walking, training and sport."
            },
            {
                q: "What causes hip pain?",
                a: "Common causes are arthritis, labral tears, tendon pain on the outside of the hip and tight hip flexors. Some hip pain actually comes from the low back."
            },
            {
                q: "Why does the side of my hip hurt at night?",
                a: "Outer hip pain usually comes from irritated tendons, and lying on that side squeezes them. A pillow between your knees often helps while you treat it."
            },
            {
                q: "Can physiotherapy help hip arthritis?",
                a: "Yes. Strength and movement work eases pain and keeps you active, and many people manage hip arthritis well for years with the right plan."
            },
            {
                q: "Can I keep walking or running with hip pain?",
                a: "Usually, with changes to distance, pace or terrain while you build strength. We tell you what to keep and what to pause."
            },
            {
                q: "Do you do rehab after hip replacement?",
                a: "Yes. We follow your surgeon’s protocol and help you walk, climb stairs and get back to the things you enjoy."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is hip pain treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    longTitle: false
};
