// "Where does it hurt" page for neck pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/neck-anatomy.html and neck-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Neck Pain Treatment in Mississauga and Markham | Revibe",
    metaDescription: "Neck and mid back pain treatment in Mississauga and Markham with a week by week plan. Stiff neck, tension headaches, pinched nerves and desk posture.",
    title: "Neck pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week, for neck pain, tension headaches and mid back pain. How often you come in, what changes, and when your neck stops running your day.",
    requestService: "Physiotherapy",
    requestMessage: "Neck and mid back pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common neck problems",
    problems: [
        {
            key: "stiff",
            label: "Stiff neck",
            text: "Hard to turn your head, checking your blind spot hurts, worse after sleeping wrong.",
            outlook: "Usually settles fast with hands-on work and the right movement."
        },
        {
            key: "headache",
            label: "Tension headaches",
            text: "A band of pressure at the base of the skull or behind the eyes, worse late in the day.",
            outlook: "Often driven by the neck, and very treatable."
        },
        {
            key: "traps",
            label: "Tight shoulders",
            text: "Knots across the top of the shoulders from screens, stress and carrying.",
            outlook: "Release first, then strength so they stay down."
        },
        {
            key: "nerve",
            label: "Pinched nerve",
            text: "Pain, tingling or numbness running from the neck into the arm or hand.",
            outlook: "We calm the nerve and open up the space around it."
        },
        {
            key: "mid",
            label: "Mid back pain",
            text: "An ache between the shoulder blades from long hours at a desk.",
            outlook: "Mobility and upper back strength fix the posture part."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your neck is stronger."
        },
        {
            q: "How long until I am better?",
            a: "4 to 8 weeks",
            note: "For most necks. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your neck assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your neck, week by week",
    planText: "A typical plan for neck pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 10,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full neck assessment, hands-on treatment to ease the pain, and a short plan for your desk and your pillow.",
            image: "/assets/images/chiropractic/statement-neck.jpg",
            alt: "A chiropractor's hands at a client's neck",
            position: "center 45%"
        },
        {
            week: "2",
            phase: "Relieve",
            angle: 20,
            perWeek: 2,
            title: "Turning gets easier",
            text: "Headaches ease off and you can check your blind spot again. We add gentle neck and upper back work.",
            image: "/assets/images/services/osteopathy.jpg",
            alt: "A Revibe osteopathic practitioner working gently at a client's neck",
            position: "55% 40%"
        },
        {
            week: "4",
            phase: "Rebuild",
            angle: 32,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Deep neck and shoulder blade strength, so your posture holds through a full workday.",
            image: "/assets/images/first-session/treatment.jpg",
            alt: "A registered massage therapist working into a client's neck and shoulder",
            position: "center 45%"
        },
        {
            week: "6",
            phase: "Return",
            angle: 40,
            perWeek: 1,
            title: "Long days, no headache",
            text: "Full workdays, training and sleep without your neck pulling you back.",
            image: "/assets/images/physiotherapy/statement-sprint.jpg",
            alt: "A Revibe coach talking an athlete through a band exercise",
            position: "center 40%"
        },
        {
            week: "8",
            phase: "Return",
            angle: 45,
            perWeek: 1,
            title: "Back to what you love",
            text: "Sport, training and everyday life. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/pelvic/hero-stretch.jpg",
            alt: "A woman stretching her arms overhead",
            position: "center 40%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book a neck assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Neck and mid back pain: causes and treatment",
    causes: {
        title: "Common causes of neck and mid back pain",
        paragraphs: [],
        items: [
            "A stiff neck after sleeping awkwardly or a long day at the computer",
            "Tension headaches that start at the base of the skull",
            "Tight shoulders and upper back from stress and posture",
            "A pinched nerve with pain or tingling into the arm",
            "Whiplash after a car accident or a fall"
        ]
    },
    treatment: {
        title: "How Revibe treats neck and mid back pain",
        paragraphs: [
            "We find which joints and muscles are involved, then use hands-on treatment and simple exercises to free up the neck and strengthen the upper back. Chiropractic, massage and osteopathy ease stiffness, and we help you set up your desk and sleep so it does not come back.",
            "Book an assessment if your neck is stiff for more than a week, you keep getting tension headaches, or pain or tingling runs into your arm. No referral is needed."
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
            "Neck pain after a car accident or a hard fall",
            "Numbness or weakness in both arms or hands",
            "Trouble walking or keeping your balance",
            "A severe headache with a stiff neck and fever"
        ]
    },
    faq: {
        title: "Neck pain questions",
        text: "Straight answers about neck pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does neck pain take to heal?",
                a: "Most neck pain moves from relief to full activity over roughly 4 to 8 weeks. Pinched nerves can take longer. Your assessment sets a realistic timeline for your neck."
            },
            {
                q: "Can neck pain cause headaches?",
                a: "Yes. Tension in the neck and upper shoulders is one of the most common causes of headaches. Treating the neck often brings the headaches down with it."
            },
            {
                q: "Do I need a referral for neck pain treatment at Revibe?",
                a: "No. You can book directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Is it my posture?",
                a: "Sometimes, but rarely only that. Your assessment looks at how you sit, sleep, train and carry stress, then fixes the parts that matter."
            },
            {
                q: "What causes neck pain?",
                a: "Most neck pain comes from stiff joints and tight muscles, often from long hours at a screen, poor sleep, stress or a sudden movement. A pinched nerve or whiplash can cause pain into the arm."
            },
            {
                q: "What is the best pillow and sleeping position for neck pain?",
                a: "A pillow that keeps your head level with your spine, on your back or side. Sleeping on your stomach twists the neck and often makes it worse."
            },
            {
                q: "Should I see a chiropractor or physiotherapist for my neck?",
                a: "Both treat neck pain well. Chiropractors often use adjustments, physiotherapists use hands-on care and exercise, and many people do best with a mix. Your assessment points you to the right one."
            },
            {
                q: "Can my desk setup cause neck pain?",
                a: "Yes. A screen that is too low or too far away pulls the head forward for hours. We show you simple changes to your desk and breaks that take the load off."
            },
            {
                q: "Do you treat whiplash after a car accident?",
                a: "Yes. We assess and treat whiplash and other injuries after a collision. See your doctor first if you have severe pain, numbness or weakness."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is neck pain treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    longTitle: false
};
