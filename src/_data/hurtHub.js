// The "Where does it hurt" hub, /where-does-it-hurt/ (content/pages/where-does-it-hurt/index.html), from the dev handover.
// The areas, their body hotspots and the problems on each card come from hurtAreas.js and hurtPages/<key>.js.
module.exports = {
    title: "Where does it hurt?",
    text: "Point to it. Every area has its own page: what usually causes the pain, how we treat it, and a week-by-week plan to get you back to what you love.",
    statement: {
        label: "Pain tells you where. We find out why.",
        left: { small: "Pain tells you", big: "where" },
        right: { small: "We find out", big: "why" },
    },
    how: {
        title: "How does it work?",
        steps: [
            {
                title: "Point to it",
                text: "Pick the area that hurts. Each page starts with the problems we see most there, so you can find yours.",
            },
            {
                title: "See what is underneath",
                text: "One side of the body shows bone and joint, the other shows muscle and fascia. Most pain involves both, so we assess both.",
            },
            {
                title: "Follow the plan",
                text: "Every page shows a typical plan, week by week: how often you come in and when you get back to sport, work and sleep.",
            },
        ],
    },
    pickTitle: "Pick your area",
    careMapCard: {
        title: "Not sure?",
        text: "Take the Care Map. Two minutes, and it points you to the right care.",
        label: "Take the Care Map",
    },
    team: {
        title: "What do clients say?",
        text: "Real Google reviews from clients we have treated.",
        quotes: [
            {
                text: "Revibe is the best physio place I've been to, my physiotherapist is Scott French and he is amazing. Gives great feedback and the progress I've been making after a knee surgery is tremendous.",
                name: "Craig B.",
                meta: "Google review, knee pain",
            },
            {
                text: "Went to see Zeeruk for physiotherapy regarding some shoulder pain, he was amazing and I felt a big difference after seeing him a few times.",
                name: "Maria I.",
                meta: "Google review, shoulder pain",
            },
        ],
    },
    faq: {
        title: "Where does it hurt? Questions",
        text: "Straight answers about pain, sessions and timelines.",
        items: [
            {
                q: "What is the Where does it hurt guide?",
                a: "It is one page for each part of the body we treat most often. Each page shows the common problems in that area, how we treat them, a typical week-by-week plan and when to see a doctor first.",
            },
            {
                q: "Why does the body show bone on one side and muscle on the other?",
                a: "Most pain involves both. One side shows the bones and joints, the other shows the muscles and fascia around them. Your assessment looks at both, so the plan treats the cause and not only the sore spot.",
            },
            {
                q: "Which areas do you treat?",
                a: "Neck and mid back, shoulder, elbow and wrist, low back, hip, knee, and foot and ankle each have their own page. If your pain is somewhere else, book an assessment or take the Care Map and we will point you to the right service.",
            },
            {
                q: "Do I need a doctor's referral?",
                a: "No. You can book an assessment directly at any Revibe clinic.",
            },
            {
                q: "Will my insurance cover it?",
                a: "Most extended health plans cover physiotherapy, chiropractic, osteopathy and massage. We bill most insurers directly, so you pay less at the desk.",
            },
            {
                q: "How long until I feel better?",
                a: "It depends on the area and the problem. Each page shows a typical timeline, and your assessment gives you your own, with how often to come in and when you can get back to what you love.",
            },
            {
                q: "What if I do not know what is causing my pain?",
                a: "That is what the first session is for. We talk through your history, assess how you move and find what is driving the pain. If you are not sure where to start, take the Care Map first.",
            },
            {
                q: "When should I see a doctor first?",
                a: "If the pain started after a serious fall or accident, or comes with a fever, numbness or weakness that is spreading, or changes in bladder or bowel control, see a doctor or go to emergency before booking with us.",
            },
        ],
    },
    startTitle: "Start this week",
    startText: "Book an assessment at any Revibe clinic. No referral needed, and we bill most insurers directly.",
};
