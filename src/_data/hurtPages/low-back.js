// "Where does it hurt" page for low back pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/low-back-anatomy.html and low-back-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Low Back Pain Treatment | Mississauga and Markham | Revibe",
    metaDescription: "Low back pain treatment in Mississauga and Markham with a week by week plan. Muscle strain, disc pain, sciatica, SI joint pain and stiffness. No referral.",
    title: "Low back pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week. How often you come in, what changes, and when you get back to lifting, sitting and sleeping without thinking about it.",
    requestService: "Physiotherapy",
    requestMessage: "Low back pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common low back problems",
    problems: [
        {
            key: "strain",
            label: "Muscle strain",
            text: "A sharp grab after lifting, twisting or a long day bent over.",
            outlook: "Most strains settle quickly once you keep moving the right way."
        },
        {
            key: "disc",
            label: "Disc pain",
            text: "Deep, central pain that gets worse when you sit, bend or cough.",
            outlook: "Usually improves with the right loading, not bed rest."
        },
        {
            key: "sciatica",
            label: "Sciatica",
            text: "Pain, tingling or numbness running into the buttock and down the leg.",
            outlook: "We find what is irritating the nerve and calm it down."
        },
        {
            key: "si",
            label: "SI joint",
            text: "A one sided ache low down near the dimple, often after pregnancy or a fall.",
            outlook: "Hands-on work and hip strength usually settle it."
        },
        {
            key: "stiff",
            label: "Stiff, achy back",
            text: "Stiff in the morning, sore after sitting, eases once you get going.",
            outlook: "Movement and strength keep it loose for good."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your low back is stronger."
        },
        {
            q: "How long until I am better?",
            a: "4 to 8 weeks",
            note: "For most backs. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your low back assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your low back, week by week",
    planText: "A typical plan for low back pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 15,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full back assessment, hands-on treatment to ease the pain, and a few simple moves to do at home.",
            image: "/assets/images/stretch/statement-back.jpg",
            alt: "Hands working into a client's lower back",
            position: "center 45%"
        },
        {
            week: "2",
            phase: "Relieve",
            angle: 30,
            perWeek: 2,
            title: "Moving gets easier",
            text: "Getting out of bed and the car stops being a project. We add gentle core and hip work.",
            image: "/assets/images/services/chiropractic.jpg",
            alt: "A Revibe chiropractor adjusting a client's back on the table",
            position: "center 40%"
        },
        {
            week: "4",
            phase: "Rebuild",
            angle: 50,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Hinging, carrying and lifting patterns, built up session by session so your back can take load again.",
            image: "/assets/images/hurt/squat-coaching.jpg",
            alt: "A Revibe coach crouched beside a client at the squat rack, coaching the rep",
            position: "center 45%"
        },
        {
            week: "6",
            phase: "Return",
            angle: 65,
            perWeek: 1,
            title: "Back to full days",
            text: "Long drives, long shifts and full training sessions without your back setting the limits.",
            image: "/assets/images/hurt/barbell-cueing.jpg",
            alt: "A Revibe coach cueing an athlete at the barbell rack",
            position: "center 45%"
        },
        {
            week: "8",
            phase: "Return",
            angle: 75,
            perWeek: 1,
            title: "Back to what you love",
            text: "Lifting, sport and everyday life. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/performance/goal-life.jpg",
            alt: "Michael Leung coaching a client through a squat at the rack",
            position: "45% 50%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book a low back assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Low back pain: causes and treatment",
    causes: {
        title: "Common causes of low back pain",
        paragraphs: [],
        items: [
            "Muscle strain from lifting, twisting or a long day at a desk",
            "Disc pain, often worse with sitting and bending",
            "Sciatica, with pain, tingling or numbness running into the leg",
            "SI joint pain low on one side, near the dimple of the back",
            "Stiffness and arthritis that is worst first thing in the morning"
        ]
    },
    treatment: {
        title: "How Revibe treats low back pain",
        paragraphs: [
            "Your physiotherapist or chiropractor finds what is driving the pain, then combines hands-on treatment with exercises that build a stronger, more resilient back. Massage and osteopathy ease muscle guarding, and performance training rebuilds strength once you are moving well.",
            "Book an assessment if your back has not eased in a week or two, keeps coming back, wakes you at night, or sends pain or tingling into your leg. No referral is needed."
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
            }
        ]
    },
    warning: {
        title: "When to see a doctor first",
        paragraphs: [
            "Some symptoms need a doctor or the emergency department before physiotherapy. Get urgent care if you have:"
        ],
        items: [
            "Numbness around the groin or inner thighs",
            "New trouble controlling your bladder or bowels",
            "Weakness in the legs that is getting worse",
            "Back pain with a fever or unexplained weight loss"
        ]
    },
    faq: {
        title: "Low back pain questions",
        text: "Straight answers about low back pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does low back pain take to heal?",
                a: "Most low back pain moves from relief to full activity over roughly 4 to 8 weeks. Sciatica and disc pain can take longer. Your assessment sets a realistic timeline for your back."
            },
            {
                q: "Should I see a physiotherapist, chiropractor or massage therapist for back pain?",
                a: "Any of them is a good place to start, and at Revibe they work on the same plan. Your first assessment decides who leads and who supports, so you are not guessing."
            },
            {
                q: "Do I need a referral for back pain treatment at Revibe?",
                a: "No. You can book directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Should I rest my back?",
                a: "Short rest when it first flares, then gentle movement. Most backs recover faster when you keep moving the right way, and your plan shows you how."
            },
            {
                q: "What causes low back pain?",
                a: "Most low back pain comes from strained muscles, irritated joints or a sensitive disc, usually after lifting, twisting or long periods of sitting. Stress, poor sleep and low activity can make it worse."
            },
            {
                q: "Should I use heat or ice on my back?",
                a: "Use whichever feels better. Heat often eases stiff, guarded muscles and ice can calm a fresh flare up. Neither fixes the cause, so pair it with gentle movement."
            },
            {
                q: "Do I need an X-ray or MRI for back pain?",
                a: "Usually not. Most back pain gets better without imaging. Your clinician will tell you if your symptoms point to a scan or a referral to your doctor."
            },
            {
                q: "Can a chiropractor help with sciatica?",
                a: "Yes. Chiropractors and physiotherapists both treat sciatica with hands-on care, nerve mobility work and exercise. Your assessment shows which approach suits you."
            },
            {
                q: "Can I keep exercising with back pain?",
                a: "In most cases, yes. Staying active helps backs recover faster than rest. We show you which movements to keep, which to change for now, and how to build back up."
            },
            {
                q: "What is the best sleeping position for low back pain?",
                a: "On your side with a pillow between your knees, or on your back with a pillow under your knees. Both take pressure off the low back."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is back pain treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    // the area in running text: "Who will treat my low back?", "the week-by-week plan for your low back"
    area: "low back",
    // frames this area of the body in the week-by-week figure (low-back-figure.html)
    figureViewBox: "-50 -10 460 460",
    // "Who will treat my ...": Google reviews, then four clinicians (keys in _data/team.js)
    team: {
        title: "Who will treat my low back?",
        text: "Real Google reviews from clients we have treated, and the people you could see for your low back.",
        quotes: [
            {
                text: "I've been seeing Dr. Morgan for chiropractic sessions over the past three years, and he's been such a huge support in helping me manage my back pain and TMJ issues.",
                name: "Thea M.",
                meta: "Google review, saw Dr. Morgan Millard"
            },
            {
                text: "Rachel was a great help, very professional and knowledgeable! She explained what was causing the lower back pain in my exercise routine and how to adequately adjust my shoulders to reduce straining.",
                name: "tatiana j.",
                meta: "Google review, saw Rachel Murray"
            }
        ],
        members: ["morgan-millard", "trevor-dsouza", "erica-runnalls", "rachel-murray"]
    },
    longTitle: true
};
