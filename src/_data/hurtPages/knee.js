// "Where does it hurt" page for knee pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/knee-anatomy.html and knee-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Knee Pain Treatment in Mississauga and Markham | Revibe",
    metaDescription: "Knee pain treatment in Mississauga and Markham with a week by week plan. ACL, kneecap pain, meniscus tears, arthritis and rehab after surgery. No referral.",
    title: "Knee pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week. How often you come in, what changes, and when you get back to sport, training and the stairs.",
    requestService: "Physiotherapy",
    requestMessage: "Knee pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common knee problems",
    problems: [
        {
            key: "kneecap",
            label: "Kneecap pain",
            text: "Runner's knee and patellofemoral pain. An ache at the front on stairs, squats and long sits.",
            outlook: "Usually a load problem, and very treatable."
        },
        {
            key: "acl",
            label: "ACL and ligaments",
            text: "A pop, a give, a swollen knee after a cut, twist or landing.",
            outlook: "We settle it, then rebuild control so the knee trusts you again."
        },
        {
            key: "meniscus",
            label: "Meniscus",
            text: "Catching, locking or sharp pain when you twist or squat deep.",
            outlook: "Many meniscus tears settle without surgery once strength comes back."
        },
        {
            key: "arthritis",
            label: "Knee arthritis",
            text: "Stiff in the morning, sore after walking, worse on cold days.",
            outlook: "Strength and movement work keep you active and doing more."
        },
        {
            key: "surgery",
            label: "After surgery",
            text: "ACL reconstruction, meniscus repair or knee replacement.",
            outlook: "We pick up once your surgeon clears you and see it through to sport."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your knee is stronger."
        },
        {
            q: "How long until I am better?",
            a: "6 to 12 weeks",
            note: "For most knees. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your knee assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your knee, week by week",
    planText: "A typical plan for knee pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 15,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full knee assessment, hands-on treatment to calm pain and swelling, and a short home plan you can actually do.",
            image: "/assets/images/hurt/knee-to-chest.jpg",
            alt: "A practitioner guiding a client's knee toward the chest",
            position: "center 40%"
        },
        {
            week: "3",
            phase: "Relieve",
            angle: 40,
            perWeek: 2,
            title: "Stairs feel easier",
            text: "Swelling is down and your knee bends further. We start loading it with simple strength work, session by session.",
            image: "/assets/images/physiotherapy/hands-on.jpg",
            alt: "A physiotherapist moving a client's leg on the treatment table",
            position: "center 40%"
        },
        {
            week: "5",
            phase: "Rebuild",
            angle: 75,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Squats, step-ups and single leg work, progressed every session so your knee can take real load again.",
            image: "/assets/images/performance/goal-injury.jpg",
            alt: "A Revibe coach guiding an athlete's knee through a step-up",
            position: "center 30%"
        },
        {
            week: "8",
            phase: "Return",
            angle: 105,
            perWeek: 1,
            title: "Running and jumping",
            text: "Hops, landings and change of direction. Force plate testing checks that both legs are matching up.",
            image: "/assets/images/hurt/sprint-start.jpg",
            alt: "An athlete testing a jump on a force plate while a Revibe coach records the result",
            position: "30% 45%"
        },
        {
            week: "12",
            phase: "Return",
            angle: 130,
            perWeek: 1,
            title: "Back to what you love",
            text: "Back to sport, training and everyday life. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/performance/goal-life.jpg",
            alt: "Michael Leung coaching a client through a squat at the rack",
            position: "45% 50%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book an assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Knee pain: causes and treatment",
    causes: {
        title: "Common causes of knee pain",
        paragraphs: [],
        items: [
            "Kneecap pain at the front of the knee, worse on stairs and squats",
            "ACL and other ligament injuries from twisting or landing",
            "Meniscus tears, with clicking, catching or swelling",
            "Knee arthritis, with stiffness and ache after activity",
            "Tendon pain below or above the kneecap from jumping and running"
        ]
    },
    treatment: {
        title: "How Revibe treats knee pain",
        paragraphs: [
            "Your physiotherapist tests the joint, ligaments and how you move, then builds a week by week plan to settle the pain and rebuild strength. We guide ACL and post-surgery rehab from the first week to the return to sport, with performance training for the final stage.",
            "Book an assessment if your knee swells, gives way, locks, or hurts on stairs, squats or runs for more than a couple of weeks. No referral is needed."
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
            }
        ]
    },
    warning: {
        title: "When to see a doctor first",
        paragraphs: [
            "Some symptoms need a doctor or the emergency department before physiotherapy. Get urgent care if you have:"
        ],
        items: [
            "Not being able to put weight on the leg after an injury",
            "An obvious change in shape of the knee",
            "A hot, red, swollen knee with a fever",
            "Calf pain and swelling, especially after surgery or a long flight"
        ]
    },
    faq: {
        title: "Knee pain questions",
        text: "Straight answers about knee pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does knee pain take to heal?",
                a: "Most knees we see move from pain relief to full activity over roughly 6 to 12 weeks, depending on the injury and how long it has been there. Your physiotherapy assessment sets a realistic timeline for your knee."
            },
            {
                q: "How many physiotherapy sessions a week do I need for knee pain?",
                a: "Most people start with two sessions a week while the knee settles and strength comes back, then drop to one a week as you return to running, sport or training."
            },
            {
                q: "Do I need a referral for knee physiotherapy at Revibe?",
                a: "No. You can book a knee assessment directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Do you do ACL and post-surgery knee rehab?",
                a: "Yes. We rehab ACL reconstructions, meniscus repairs and knee replacements once your surgeon clears you, and finish with force plate testing before you return to sport."
            },
            {
                q: "What causes knee pain?",
                a: "Common causes are kneecap pain, ligament sprains, meniscus tears, tendon pain and arthritis. How it started and where it hurts tell us which one it is."
            },
            {
                q: "Should I use a knee brace?",
                a: "A brace can help for a short time after an injury or during sport, but strength does more over the long run. We tell you if and when a brace makes sense."
            },
            {
                q: "Can physiotherapy help knee arthritis?",
                a: "Yes. Strength and movement training is one of the most effective treatments for knee arthritis, and it helps many people stay active and delay surgery."
            },
            {
                q: "Do I need an MRI for my knee?",
                a: "Not always. A hands-on assessment often tells us what is going on. If your knee locks, gives way or is not improving, we may suggest imaging through your doctor."
            },
            {
                q: "Can I run with knee pain?",
                a: "Often, with changes. We may cut your distance or pace for a while and add strength work so you can keep running while the knee settles."
            },
            {
                q: "How do I know if I tore my meniscus?",
                a: "Clicking, catching, locking or swelling after a twist are common signs. Your assessment checks the meniscus and tells you what to do next."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is knee pain treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    // the area in running text: "Who will treat my knee?", "the week-by-week plan for your knee"
    area: "knee",
    // frames this area of the body in the week-by-week figure (knee-figure.html)
    figureViewBox: "-30 40 360 470",
    // "Who will treat my ...": Google reviews, then four clinicians (keys in _data/team.js)
    team: {
        title: "Who will treat my knee?",
        text: "Real Google reviews from clients we have treated, and the people you could see for your knee.",
        quotes: [
            {
                text: "Revibe is the best physio place I've been to, my physiotherapist is Scott French and he is amazing. Gives great feedback and the progress I've been making after a knee surgery is tremendous.",
                name: "Craig B.",
                meta: "Google review, saw Scott French"
            }
        ],
        members: ["scott-french", "zeeruk-rehman", "michael-ross", "anesto-charles"]
    },
    longTitle: false
};
