// "Where does it hurt" page for shoulder pain, from the dev handover. Rendered by layouts/hurt.html.
// Drawings: components/hurt-pages/shoulder-anatomy.html and shoulder-figure.html. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Shoulder Pain Treatment | Mississauga and Markham | Revibe",
    metaDescription: "Shoulder pain treatment in Mississauga and Markham with a week by week plan. Rotator cuff, impingement, frozen shoulder, dislocations and AC joint injuries.",
    title: "Shoulder pain",
    subtitle: "treatment in Mississauga and Markham",
    text: "Here is the plan, week by week. How often you come in, what changes, and when you can reach, lift and throw without thinking twice.",
    requestService: "Physiotherapy",
    requestMessage: "Shoulder pain",
    proof: "from 600+ reviews. No referral needed. We bill most insurers directly.",
    ask: "Where does it hurt? Tap a spot.",
    problemsLabel: "Common shoulder problems",
    problems: [
        {
            key: "cuff",
            label: "Rotator cuff",
            text: "An ache on the outside of the shoulder, worse reaching overhead or lying on it.",
            outlook: "Most cuff problems get better with the right strength work."
        },
        {
            key: "bursa",
            label: "Impingement",
            text: "A pinch at the top of the shoulder as your arm lifts past shoulder height.",
            outlook: "We open up the space and change how the shoulder moves."
        },
        {
            key: "frozen",
            label: "Frozen shoulder",
            text: "Stiff and painful in every direction, getting slowly worse over months.",
            outlook: "It does thaw. We help it move sooner and hurt less."
        },
        {
            key: "labrum",
            label: "Dislocation and instability",
            text: "The shoulder has popped out, or feels like it might.",
            outlook: "We rebuild control so you can trust it again."
        },
        {
            key: "ac",
            label: "AC joint",
            text: "A sore bump on top of the shoulder after a fall or a hit.",
            outlook: "Settles with the right load and taping early on."
        }
    ],
    answersTitle: "The short answers",
    answers: [
        {
            q: "How often do I come in?",
            a: "Twice a week to start",
            note: "Then once a week once your shoulder is stronger."
        },
        {
            q: "How long until I am better?",
            a: "8 to 16 weeks",
            note: "For most shoulders. Frozen shoulder can take longer. Your assessment gives you your own timeline."
        },
        {
            q: "Do I need a doctor's referral?",
            a: "No",
            note: "Book your shoulder assessment directly."
        },
        {
            q: "Will my insurance cover it?",
            a: "Most plans do",
            note: "We bill most insurers directly, so you pay less at the desk."
        }
    ],
    planTitle: "Your shoulder, week by week",
    planText: "A typical plan for shoulder pain at Revibe. Your assessment sets your own timeline, and some people move faster.",
    weeks: [
        {
            week: "1",
            phase: "Relieve",
            angle: 20,
            perWeek: 2,
            title: "You know what is wrong",
            text: "A full shoulder assessment, hands-on treatment to ease the pain, and a few moves you can do at home.",
            image: "/assets/images/massage/step-treat.jpg",
            alt: "A massage therapist working through a client's shoulder as she lies on her side",
            position: "center 45%"
        },
        {
            week: "3",
            phase: "Relieve",
            angle: 50,
            perWeek: 2,
            title: "Reaching gets easier",
            text: "Sleeping on that side and reaching behind your back start to come back. We add gentle strength work.",
            image: "/assets/images/osteopathy/hero-ribs.jpg",
            alt: "Anesto, osteopathic practitioner, treating a client's ribs and shoulder",
            position: "center 45%"
        },
        {
            week: "6",
            phase: "Rebuild",
            angle: 95,
            perWeek: 2,
            title: "Strength is coming back",
            text: "Rotator cuff and shoulder blade strength, progressed every session so the shoulder can take real load.",
            image: "/assets/images/hurt/shoulder-screen.jpg",
            alt: "A Revibe coach kneeling to check an athlete's shoulder during a strength screen",
            position: "center 40%"
        },
        {
            week: "10",
            phase: "Return",
            angle: 140,
            perWeek: 1,
            title: "Overhead again",
            text: "Pressing, throwing and pulling overhead, with testing to check both sides match up.",
            image: "/assets/images/physiotherapy/statement-sprint.jpg",
            alt: "A Revibe coach cueing an athlete through a resistance band drill",
            position: "center 40%"
        },
        {
            week: "16",
            phase: "Return",
            angle: 170,
            perWeek: 1,
            title: "Back to what you love",
            text: "Sport, training and everyday life. Keep it strong with performance training if you want to go further.",
            image: "/assets/images/hurt/barbell-cueing.jpg",
            alt: "A Revibe coach cueing an athlete at the barbell rack",
            position: "center 45%"
        }
    ],
    startTitle: "Week 1 starts this week",
    startText: "Book a shoulder assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
    causesTitle: "Shoulder pain: causes and treatment",
    causes: {
        title: "Common causes of shoulder pain",
        paragraphs: [],
        items: [
            "Rotator cuff strain or tendon pain, often from lifting overhead",
            "Impingement, a pinch at the top of the shoulder when you raise your arm",
            "Frozen shoulder, with stiffness that builds over months",
            "Dislocation or instability after a fall or a hit in sport",
            "AC joint injuries at the top of the shoulder"
        ]
    },
    treatment: {
        title: "How Revibe treats shoulder pain",
        paragraphs: [
            "Your physiotherapist tests strength and movement to find the cause, then builds a plan that calms the pain and rebuilds strength around the joint. Massage and hands-on care ease tight muscles, and performance training gets you back to lifting, throwing and swimming.",
            "Book an assessment if your shoulder hurts when you lift your arm, wakes you at night, feels weak or loose, or has not settled in two weeks. No referral is needed."
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
            "Shoulder pain with chest pain or shortness of breath",
            "An obvious change in shape after a fall",
            "Suddenly being unable to lift your arm after an injury",
            "A hot, swollen shoulder with a fever"
        ]
    },
    faq: {
        title: "Shoulder pain questions",
        text: "Straight answers about shoulder pain treatment, sessions and timelines.",
        items: [
            {
                q: "How long does shoulder pain take to heal?",
                a: "Most shoulders move from relief to full activity over roughly 8 to 16 weeks. Frozen shoulder and post-surgery rehab take longer. Your assessment sets a realistic timeline for your shoulder."
            },
            {
                q: "Do I need a scan before I come in?",
                a: "No. A good assessment tells us most of what we need. If something points to a scan, we tell you and help you get one."
            },
            {
                q: "Do I need a referral for shoulder physiotherapy at Revibe?",
                a: "No. You can book directly at any Revibe clinic. Some insurance plans ask for a doctor's note, so check your plan if you are claiming."
            },
            {
                q: "Do you do rehab after shoulder surgery?",
                a: "Yes. We rehab rotator cuff repairs, stabilizations and other shoulder surgeries once your surgeon clears you, and see it through to sport."
            },
            {
                q: "What causes shoulder pain?",
                a: "The most common causes are rotator cuff strain, impingement, frozen shoulder and old injuries like a dislocation. Repetitive overhead work and sport are frequent triggers."
            },
            {
                q: "Why does my shoulder hurt at night?",
                a: "Lying on the sore side squeezes irritated tendons, and many shoulder problems feel worse when you are still. Sleeping with a pillow hugged to your chest often helps."
            },
            {
                q: "Can a rotator cuff tear heal without surgery?",
                a: "Many partial tears and some full tears do well with physiotherapy and strength work. Your assessment shows whether a surgical opinion is worth getting."
            },
            {
                q: "How long does frozen shoulder last?",
                a: "Frozen shoulder can take many months to fully settle. Treatment keeps you moving and eases pain through each stage."
            },
            {
                q: "Should I stop going to the gym with shoulder pain?",
                a: "Usually not. We adjust the lifts that hurt and keep the ones that do not, so you stay strong while the shoulder recovers."
            },
            {
                q: "What happens at my first session?",
                a: "Your clinician asks about your history, tests how you move, and treats you in the same session. You leave knowing what is wrong and what to do next."
            },
            {
                q: "Is shoulder pain treatment covered by insurance?",
                a: "Most extended health plans cover physiotherapy, chiropractic, massage and osteopathy, and we direct bill most insurers. An initial physiotherapy assessment is $125."
            }
        ]
    },
    longTitle: true
};
