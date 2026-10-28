// Content for /performance-training/, from the dev handover. Rendered by layouts/training.html.
// "Request a free consult" buttons open components/popup-forms/free-consult.html.
const home = require("../home.js");

module.exports = {
    hero: {
        title: "Performance training",
        text: "Get faster, stronger and harder to injure. Coached strength and conditioning for athletes and active adults, tested on force plates so every block is built on your numbers. It starts with a free consultation.",
        proof: ["5.0 on Google from 600+ reviews", "CSCS certified coaches", "Coaches who work with our physiotherapists"],
        images: [
            { src: "/assets/images/performance/hero-force-plate.jpg", alt: "An athlete mid-jump above the force plates while a coach records the test", position: "center 40%" },
            { src: "/assets/images/performance/hero-coaching.jpg", alt: "Zeeruk Rehman coaching an athlete in the Revibe gym", position: "center 40%" },
        ],
    },

    goals: {
        title: "What do you want to get out of it?",
        // one tab each; buttons replace the free consult button (team training links to its own pages)
        items: [
            {
                id: "compete",
                title: "Compete at a higher level",
                text: "More speed, power and strength for your sport, planned around your season.",
                points: ["Force plate tested jump, power and speed", "Sprint mechanics and plyometrics", "Programs built around games and practices"],
                image: "/assets/images/performance/goal-compete.jpg",
                alt: "Athletes doing band resisted sprints on the track",
            },
            {
                id: "injury",
                title: "Come back from injury",
                text: "The bridge between rehab and full training, with coaches who work beside your physiotherapist.",
                points: ["Left and right balance tested before you load up", "Strength rebuilt in phases", "A clear point when you are ready for sport"],
                image: "/assets/images/performance/goal-injury.jpg",
                alt: "A Revibe coach guiding an athlete's knee through a single leg drill",
            },
            {
                id: "life",
                title: "Get strong for life",
                text: "For busy adults who want to move better, feel stronger and stay pain free.",
                points: ["Strength and mobility built for real life", "Two to three sessions a week", "Progress you can see on every retest"],
                image: "/assets/images/performance/goal-life.jpg",
                alt: "Michael Leung coaching a client through a squat at the rack",
            },
            {
                id: "team",
                title: "Train my team",
                text: "Testing, coaching and conditioning for teams and groups of five or more.",
                points: ["Team training blocks at Revibe or your facility", "Combine testing days with a live leaderboard", "A report for every athlete"],
                image: "/assets/images/performance/goal-team.jpg",
                alt: "An athlete on the force plates while a coach records the test",
                buttons: [
                    { label: "Team training", url: "/performance-training/team-training/" },
                    { label: "Team combine", url: "/team-combine/", outline: true },
                ],
            },
        ],
    },

    how: {
        title: "How it works",
        steps: [
            { title: "Free consult", text: "15 minutes, in person or virtual. Tell us your goal, your sport and your history, and we match you with a coach." },
            { title: "Baseline test", text: "Force plate and movement testing show where you stand today: power, speed and how evenly you load each side." },
            { title: "Coached block, then retest", text: "Your coach writes the program from your numbers, coaches every session and retests so you can see what changed." },
        ],
        report: {
            title: "Example baseline report",
            // value is how full the bar is, in percent
            bars: [
                { label: "Jump height", note: "Where you start", value: 62 },
                { label: "Sprint speed", note: "Where you start", value: 48 },
                { label: "Left and right balance", note: "Even is the goal", value: 80 },
            ],
            note: "Every athlete gets a report like this after testing. Example only.",
        },
    },

    reviews: {
        title: "What athletes say",
        rating: home.reviews.rating,
        note: "600+ Google reviews across both clinics",
        items: [
            { name: "K A.", quote: "If you're on the hunt for a top-notch physiotherapist / performance coach, Zeeruk is your guy! He not only knows the ins and outs of keeping your body in tip-top shape but also adds a whole new level of fun to workouts. I found him on social media; he's posting some pretty helpful things that have genuinely elevated my fitness game. Zeeruk is the real deal!" },
            { name: "Perry K.", quote: "I’ve had back problems so bad where I wouldn’t be able to get out of bed in the morning, but after working with Mike for a couple months I can now workout and move injury free! I am so grateful to Mike for allowing me to perform at my best self!" },
            { name: "Ramandeep B.", quote: "Excellent team ,they are very professional. Trevor(chiropractor ), Jennifer, zee all of them are really helpful and supportive. Highly recommend if you are an athlete and need help with rehab work and injury." },
        ],
    },

    blocks: {
        title: "How long do people train?",
        text: "Every block starts with a baseline test and most people train two to three times a week. Your coach recommends a length at your consult.",
        items: [
            { label: "Short term", figure: "12", unit: "sessions", text: "A focused block for one goal, like a stronger squat or a faster start." },
            { label: "Mid term", figure: "24", unit: "sessions", text: "The full test, train and retest cycle. Enough time to see real change.", popular: true, tag: "Most popular" },
            { label: "Long term", figure: "48", unit: "sessions", text: "A full season or year, planned in phases around your calendar." },
        ],
    },

    why: {
        title: "Why train at Revibe",
        items: [
            { title: "Tested, not guessed", text: "Force plates and timed drills show what to train first." },
            { title: "Coaches who work with physios", text: "If something hurts, the person coaching you can assess it." },
            { title: "Recovery on site", text: "Sauna, cold plunge and compression in the same building." },
            { title: "Progress you can see", text: "Retests turn effort into numbers you can track." },
        ],
    },

    final: {
        title: "Start with a free consult",
        text: "Fifteen minutes, in person or virtual. Tell us your goal and a coach will build the plan with you.",
    },

    faq: {
        title: "Performance training FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            { q: "Do I need to be an athlete?", a: "No, but we train everyone like one. Whether you compete at a high level, play rec league on weekends or just want to be in elite shape, your program is built around your testing and goals." },
            { q: "What is force plate testing?", a: "Force plates measure how much force you produce, how fast you produce it and how evenly you load each side. We use the data to build your program and track your progress." },
            { q: "Can this help me jump higher or run faster?", a: "Yes. Plyometrics, rate of force development training and sprint work target explosive power and speed directly, and retesting shows exactly how much you have improved." },
            { q: "Can I train in-season?", a: "Yes. Your coach plans the program around your games and practices, so in-season blocks keep you strong and powerful without leaving you flat on game day." },
            { q: "How is this different from a personal trainer?", a: "Performance training starts with force plate testing, follows a periodized plan built in phases and is coached by CSCS certified specialists. Typical personal training is planned session to session, without objective testing." },
            { q: "Is this good after physiotherapy or injury rehab?", a: "Yes, once you are ready to rebuild speed and power. Our coaches work alongside our physiotherapists, so training picks up where rehab finished. If you are earlier in recovery, start with Return to Sport and Life training." },
            { q: "How often should I train?", a: "Most people train two to three times a week. Your coach sets the right number around your goals, your experience and your season." },
            { q: "What happens in my first session?", a: "Force plate and athletic testing to find your strengths, gaps and asymmetries. Your coach uses the results to write your program before you lift a single set." },
            { q: "Can performance training help me build muscle or lose fat?", a: "Yes. Periodized strength work builds muscle and supports body composition, and your program is built around your goals as well as your testing." },
            { q: "How long is a training block?", a: "Blocks run 12, 24 or 48 sessions. Every block starts with a force plate baseline, and the longer blocks include a retest at each phase so you can see what changed." },
            { q: "Do you offer performance training near me?", a: "Yes, at Revibe Mississauga, 2290 Dixie Rd, and Revibe Markham, 220 Torbay Rd." },
        ],
    },

    locations: { title: "Where can I train?" },

    stickyLabel: "Free performance consult",
};
