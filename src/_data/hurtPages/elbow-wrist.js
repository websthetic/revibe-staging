// "Where does it hurt" page for elbow and wrist pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/elbow-wrist-anatomy.html and elbow-wrist-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Elbow and Wrist Pain Treatment | Mississauga, Markham",
    metaDescription: "Elbow and wrist pain treatment in Mississauga and Markham with a week by week plan. Tennis elbow, golfer’s elbow, carpal tunnel and wrist sprains.",
    title: "Elbow and wrist pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week. How often you come in, what changes, and when gripping, typing and lifting stop hurting.",
    requestService: "Physiotherapy",
    requestMessage: "Elbow and wrist pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common elbow and wrist problems",
    problems: [
        {
            key: "tennis",
            label: "Tennis elbow",
            text: "Pain on the outside of the elbow when you grip, lift a kettle or shake hands.",
            outlook: "Tendons respond well to the right load over time."
        },
        {
            key: "golfer",
            label: "Golfer's elbow",
            text: "Pain on the inside of the elbow from gripping, pulling or throwing.",
            outlook: "Same idea: settle it, then strengthen it."
        },
        {
            key: "carpal",
            label: "Carpal tunnel",
            text: "Tingling or numbness in the thumb and first fingers, often at night.",
            outlook: "Often eases with nerve and wrist work, splinting and less pressure."
        },
        {
            key: "thumb",
            label: "Thumb side wrist pain",
            text: "Sore where the thumb meets the wrist, often in new parents.",
            outlook: "Rest the right way, then build it back."
        },
        {
            key: "wrist",
            label: "Wrist sprain or fracture",
            text: "A fall on an outstretched hand, or stiffness after a cast.",
            outlook: "We get the movement and grip strength back."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your elbow and wrist is stronger."
        },
        {
            q: "How long until I am better?",
            a: "6 to 12 weeks",
            note: "For most elbows and wrists. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your elbow and wrist assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your elbow and wrist, week by week",
    planText: "A typical plan for elbow and wrist pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 20,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full elbow and wrist assessment, hands-on treatment to ease the pain, and changes to how you grip and type.",
            image: "/assets/images/chiropractic/step-listen.jpg",
            alt: "A Revibe chiropractor talking a client through his history on the table",
            position: "center 40%"
        },
        {
            week: "3",
            phase: "Relieve",
            angle: 45,
            perWeek: 2,
            title: "Gripping gets easier",
            text: "Mugs, bags and keyboards stop hurting as much. We start easy tendon loading.",
            image: "/assets/images/services/massage-hands.jpg",
            alt: "A massage therapist's hands working into a client's shoulder",
            position: "center 45%"
        },
        {
            week: "5",
            phase: "Rebuild",
            angle: 80,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Grip, wrist and forearm strength, progressed every session so the tendon can take real load.",
            image: "/assets/images/physiotherapy/statement-sprint.jpg",
            alt: "A Revibe coach cueing an athlete through a resistance band drill",
            position: "center 40%"
        },
        {
            week: "8",
            phase: "Return",
            angle: 110,
            perWeek: 1,
            title: "Lifting and sport",
            text: "Pulling, pressing, racquets and throwing, built up so the pain does not come back.",
            image: "/assets/images/hurt/barbell-cueing.jpg",
            alt: "A Revibe coach cueing an athlete at the barbell rack",
            position: "center 45%"
        },
        {
            week: "12",
            phase: "Return",
            angle: 130,
            perWeek: 1,
            title: "Back to what you love",
            text: "Sport, training, work and everyday life. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/hurt/shoulder-screen.jpg",
            alt: "A Revibe coach checking an athlete’s arm and shoulder during a strength screen",
            position: "center 45%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book an elbow and wrist assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Elbow and wrist pain: causes and treatment",
    causes: {
        title: "Common causes of elbow and wrist pain",
        paragraphs: [],
        items: [
            "Tennis elbow, with pain on the outside of the elbow when you grip",
            "Golfer’s elbow, with pain on the inside of the elbow",
            "Carpal tunnel, with tingling in the thumb and fingers, often at night",
            "Thumb side wrist pain from lifting, texting or caring for a baby",
            "Wrist sprains after a fall onto an outstretched hand"
        ]
    },
    treatment: {
        title: "How Revibe treats elbow and wrist pain",
        paragraphs: [
            "We find which tendons, nerves or joints are involved, then load the area the right way so it gets stronger. Hands-on treatment and massage ease tight forearm muscles, and we adjust your work and training so it can heal.",
            "Book an assessment if gripping, lifting or typing hurts for more than a couple of weeks, or if tingling in your hand is waking you at night. No referral is needed."
        ],
        items: [],
        links: [
            {
                label: "Physiotherapy",
                url: "/services/physiotherapy/"
            },
            {
                label: "Massage therapy",
                url: "/services/massage/"
            },
            {
                label: "Chiropractic",
                url: "/services/chiropractic/"
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
            "An obvious change in shape or not being able to move the wrist after a fall",
            "Numbness that is constant or a hand that is getting weaker",
            "A hot, swollen joint with a fever"
        ]
    },
    faq: {
        title: "Elbow and wrist pain questions",
        text: "Straight answers about elbow and wrist pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does tennis elbow take to heal?",
                a: "Most tennis and golfer's elbows improve over roughly 6 to 12 weeks of the right loading. Long-standing cases can take longer. Your assessment sets a realistic timeline."
            },
            {
                q: "Should I wear a brace for tennis elbow or carpal tunnel?",
                a: "Sometimes, for a short time. A strap or night splint can help while strength comes back, and your therapist will tell you if it is worth it."
            },
            {
                q: "Do I need a referral for elbow and wrist treatment at Revibe?",
                a: "No. You can book directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Do you rehab wrist fractures?",
                a: "Yes. Once your cast is off and you are cleared, we get back the movement, grip strength and confidence in the wrist."
            },
            {
                q: "What causes tennis elbow?",
                a: "Tennis elbow is tendon pain from repeated gripping and lifting, and most people who get it do not play tennis. Computer work, tools and lifting are common triggers."
            },
            {
                q: "Should I wear a brace for tennis elbow?",
                a: "A forearm strap can ease pain during activity for some people. The right strengthening exercises are what make it better long term."
            },
            {
                q: "Can physiotherapy help carpal tunnel?",
                a: "Yes. Splinting at night, nerve gliding, hand exercises and changes to your setup help many people. If it is not improving, we will suggest you see your doctor."
            },
            {
                q: "Why does my wrist hurt on the thumb side?",
                a: "Pain on the thumb side of the wrist is often a tendon problem from repeated lifting or texting, common in new parents. It responds well to treatment."
            },
            {
                q: "Can typing cause elbow and wrist pain?",
                a: "Yes. Long hours of typing and mouse use can irritate tendons and nerves. We show you simple changes to your setup and breaks."
            },
            {
                q: "Do I need an X-ray after falling on my wrist?",
                a: "If your wrist is swollen, very tender on the bone or you cannot move it, see a doctor for an X-ray first, because some wrist fractures are easy to miss."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is elbow and wrist treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    longTitle: true
};
