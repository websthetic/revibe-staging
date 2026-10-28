// "Where does it hurt" page for foot and ankle pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/foot-ankle-anatomy.html and foot-ankle-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Foot and Ankle Pain Treatment | Mississauga, Markham",
    metaDescription: "Foot and ankle pain treatment in Mississauga and Markham with a week by week plan. Ankle sprains, Achilles pain, plantar fasciitis and shin splints.",
    title: "Foot and ankle pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week. How often you come in, what changes, and when you get back to running, jumping and long days on your feet.",
    requestService: "Physiotherapy",
    requestMessage: "Foot and ankle pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common foot and ankle problems",
    problems: [
        {
            key: "sprain",
            label: "Ankle sprain",
            text: "Rolled it, heard a pop, now it is swollen and does not feel stable.",
            outlook: "We settle it, then rebuild balance so it stops rolling."
        },
        {
            key: "achilles",
            label: "Achilles pain",
            text: "Stiff and sore at the back of the heel, worst first thing in the morning.",
            outlook: "Tendons love the right load, so we build it up."
        },
        {
            key: "plantar",
            label: "Plantar fasciitis",
            text: "Sharp heel pain with your first steps out of bed.",
            outlook: "Very treatable with loading, release and the right footwear."
        },
        {
            key: "shin",
            label: "Shin splints",
            text: "An ache along the inside of the shin that builds as you run.",
            outlook: "Usually a training load problem we can fix."
        },
        {
            key: "surgery",
            label: "After surgery or a fracture",
            text: "A broken ankle, Achilles repair or ankle surgery.",
            outlook: "We pick up once you are cleared and see it through to sport."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your foot and ankle is stronger."
        },
        {
            q: "How long until I am better?",
            a: "6 to 12 weeks",
            note: "For most feet and ankles. Achilles pain can take longer. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your foot and ankle assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your foot and ankle, week by week",
    planText: "A typical plan for foot and ankle pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 10,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full foot and ankle assessment, hands-on treatment to calm pain and swelling, and a short home plan.",
            image: "/assets/images/physiotherapy/hands-on.jpg",
            alt: "A physiotherapist moving a client's leg on the treatment table",
            position: "center 40%"
        },
        {
            week: "3",
            phase: "Relieve",
            angle: 20,
            perWeek: 2,
            title: "Walking feels easier",
            text: "Swelling is down and first steps in the morning hurt less. We start calf, foot and balance work.",
            image: "/assets/images/osteopathy/step-treat.jpg",
            alt: "A Revibe osteopathic practitioner working on a client's leg on the table",
            position: "center 45%"
        },
        {
            week: "5",
            phase: "Rebuild",
            angle: 30,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Calf raises, single leg balance and hopping drills, progressed every session.",
            image: "/assets/images/hurt/gym-coaching.jpg",
            alt: "An athlete working through a single leg reach in the Revibe gym",
            position: "40% 60%"
        },
        {
            week: "8",
            phase: "Return",
            angle: 38,
            perWeek: 1,
            title: "Running and jumping",
            text: "Running, landings and change of direction. Force plate testing checks both sides match up.",
            image: "/assets/images/hurt/sprint-start.jpg",
            alt: "An athlete driving out of a sprint start on the force plates while a Revibe coach records the test",
            position: "30% 45%"
        },
        {
            week: "12",
            phase: "Return",
            angle: 42,
            perWeek: 1,
            title: "Back to what you love",
            text: "Sport, training and long days on your feet. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/performance/goal-compete.jpg",
            alt: "Athletes doing band resisted sprints in pairs on the track",
            position: "center 45%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book a foot and ankle assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Foot and ankle pain: causes and treatment",
    causes: {
        title: "Common causes of foot and ankle pain",
        paragraphs: [],
        items: [
            "Ankle sprains from rolling the ankle in sport or on a curb",
            "Achilles tendon pain, worse first thing in the morning",
            "Plantar fasciitis, with sharp heel pain on your first steps",
            "Shin splints from running more than your legs are ready for",
            "Recovery after ankle fractures and surgery"
        ]
    },
    treatment: {
        title: "How Revibe treats foot and ankle pain",
        paragraphs: [
            "Your physiotherapist checks the ankle, foot and how you walk and run, then builds strength and balance so it holds up under load. We adjust your training so you stay active, and performance training takes you back to full speed.",
            "Book an assessment if an ankle keeps rolling, a sprain has not settled in two weeks, or heel, Achilles or shin pain is stopping you from walking or running. No referral is needed."
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
                label: "Osteopathy",
                url: "/services/osteopathy/"
            },
            {
                label: "Performance training",
                url: "/performance-training/"
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
            "Not being able to take four steps after an injury",
            "Tenderness right on the ankle bones after a fall",
            "A foot that is cold, pale or numb",
            "Calf pain and swelling, or redness and heat with a fever"
        ]
    },
    faq: {
        title: "Foot and ankle pain questions",
        text: "Straight answers about foot and ankle pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does an ankle sprain take to heal?",
                a: "A mild sprain usually settles in a few weeks. A bad sprain, Achilles pain or plantar fasciitis often takes 6 to 12 weeks to get back to full sport. Your assessment sets a realistic timeline."
            },
            {
                q: "Should I keep running with plantar fasciitis or Achilles pain?",
                a: "Often yes, at the right amount. Stopping completely can make tendons weaker. Your plan tells you how much is right each week."
            },
            {
                q: "Do I need a referral for foot and ankle physiotherapy at Revibe?",
                a: "No. You can book directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Do you rehab broken ankles and Achilles repairs?",
                a: "Yes. Once you are cleared out of the boot or cast, we rebuild strength and balance and finish with force plate testing before you return to sport."
            },
            {
                q: "What causes heel pain?",
                a: "The most common cause is plantar fasciitis, an irritated band of tissue under the foot. It is often linked to more walking or running, tight calves or new shoes."
            },
            {
                q: "Should I wear a brace or tape for my ankle?",
                a: "Tape or a brace can help when you first return to sport. Strength and balance work does more to stop the ankle rolling again."
            },
            {
                q: "Can I keep running with Achilles pain?",
                a: "Often, with changes. We adjust your running and add calf loading so the tendon gets stronger while you keep moving."
            },
            {
                q: "Do I need orthotics?",
                a: "Not always. Strength, footwear and training changes fix many foot problems. We tell you if orthotics are likely to help."
            },
            {
                q: "Do I need an X-ray after rolling my ankle?",
                a: "If you cannot walk four steps or the ankle bones are very tender, see a doctor for an X-ray first. Otherwise an assessment is a good place to start."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is foot and ankle treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    longTitle: true
};
