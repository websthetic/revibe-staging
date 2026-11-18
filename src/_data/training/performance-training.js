// Content for /performance-training/ (13 Nov 2026 round: "Performance, Zee edition"). Rendered by layouts/training.html.
// Every "Book a free consult" button opens components/popup-forms/free-consult.html.
const home = require("../home.js");
const instagramPost = (caption, kind, code) => ({ caption, url: `https://www.instagram.com/${kind}/${code}/`, image: `/assets/images/instagram/ig-${code}.jpg` });

module.exports = {
    consult: { label: "Book a free consult", variant: "individual" },

    // one large photo instead of the two-photo hero the team pages use
    hero: {
        layout: "photo",
        title: "Performance training",
        text: "Coached strength and conditioning for athletes and active adults in Mississauga and Markham. We test you first, train you from your numbers, then retest so you can see what changed.",
        note: "5.0 on Google from 700+ reviews. Coaches who work beside our physiotherapists.",
        images: [
            { src: "/assets/images/performance/pz-hero.jpg", alt: "An athlete mid-jump above the force plates while Zee records the test on a tablet", position: "60% 50%", width: 1800, height: 1200 },
        ],
    },

    // photo cards; the first three open the consult form with that goal picked, the team card links out
    goals: {
        title: "What do you want to get out of it?",
        cards: [
            { title: "Compete at a higher level", text: "Speed, power and strength planned around your season.", image: "/assets/images/performance/pz-compete.jpg", alt: "Zee coaching an athlete through a resisted band drill" },
            { title: "Come back from injury", text: "Coaching beside your physio, with numbers that show you are ready.", image: "/assets/images/performance/pz-injury.jpg", alt: "Zee guiding an athlete through a kettlebell hinge" },
            { title: "Get strong for life", text: "Train like an athlete without being one.", image: "/assets/images/performance/pz-strong2.jpg", alt: "A coach guiding a client through a banded squat at the rack", position: "46% 45%" },
            { title: "Train my team", text: "Combine days and team training with a recap for every athlete.", image: "/assets/images/performance/pz-team2.jpg", alt: "A full team and coaches together on centre court at the Raptors 905 clinic", url: "/team-combine/", linkLabel: "See team testing" },
        ],
    },

    // steps with a big photo each, on alternating sides
    how: {
        title: "How does it work?",
        layout: "photos",
        steps: [
            { title: "Free consult", text: "15 minutes, in person or virtual. You tell us your goal, your sport and your history, and we match you with a coach.", image: "/assets/images/performance/pz-consult.jpg", alt: "Zee and an athlete going over goals on a tablet" },
            {
                id: "force-plates",
                title: "Baseline test",
                text: "Five jumps on our force plates, timed sprints and strength testing, compared with a D1 and pro benchmark. The plates read each foot, so they show:",
                image: "/assets/images/performance/pz-test.jpg",
                alt: "An athlete set on the force plates while Zee records the test on a tablet",
                measures: [
                    { title: "Braking", text: "How you absorb force to stop, cut and land" },
                    { title: "Force", text: "How hard you drive into the ground" },
                    { title: "Elasticity", text: "How fast you turn the dip into the jump" },
                    { title: "Power", text: "Jump height and takeoff speed" },
                ],
            },
            { title: "Coached block, then retest", text: "Your coach writes the program from your numbers and coaches every session, two to three times a week. Then we run the same tests and you get a new report.", image: "/assets/images/performance/pz-board.jpg", alt: "Zee planning a training block on a whiteboard" },
        ],
    },

    // Zeeruk's real baseline report, name removed, rebuilt as a sheet (components/report-sheet.html)
    report: {
        title: "The report",
        text: "A real Revibe baseline report with the athlete's name removed. You get one after your first test and a new one after every retest.",
        notesLeft: [
            { title: "Profile", text: "A plain English read of how you move, compared with a D1 and pro benchmark." },
            { title: "Change since your first test", text: "Every retest shows what moved, so progress is a number, not a feeling." },
        ],
        notesRight: [
            { title: "Four categories", text: "Each graded against the benchmark, so you see what to keep and what to build." },
            { title: "Development priorities", text: "The lowest scores become the focus of your next training block." },
        ],
        sheet: {
            id: "baseline-report",
            label: "Sample baseline report",
            doc: "Baseline report",
            docSub: "Force plate and sprint testing",
            name: "Athlete name removed",
            pill: "5 CMJ reps on file",
            title: "The balanced competitor",
            text: "Grades good to elite across all four categories with no clear weak point. A well-rounded force plate profile rather than one built around a single standout strength.",
            compare: { title: "Pro comparison", text: "A steady, well-rounded two-way game without one loud standout physical trait." },
            stats: [
                { title: "Composite grade", value: "75", unit: "%", meta: "Vs. D1 and pro", bar: 75 },
                { title: "Vertical jump", value: "18.5", unit: "in", change: "+1.6 in (+9.2%)", facts: [["First test", "17.0 in"], ["Personal best", "18.5 in"]] },
                { title: "Top speed", value: "17.3", unit: "mph", change: "+2.3 mph (+15.3%)", facts: [["First test", "15.0 mph"], ["Personal best", "17.3 mph"]] },
            ],
            categories: {
                title: "Category breakdown",
                sub: "vs. D1 and pro benchmark",
                // value is the percent of the benchmark; elite grades show green
                rows: [
                    { label: "Braking ability", short: ["Braking", "ability"], value: 83, grade: "Elite" },
                    { label: "Force production", short: ["Force", "production"], value: 54, grade: "Good" },
                    { label: "Elasticity", short: ["Elasticity"], value: 81, grade: "Elite" },
                    { label: "Power expression", short: ["Power", "expression"], value: 81, grade: "Elite" },
                ],
            },
            takeaways: {
                strengthsTitle: "Strengths",
                strengths: [["Jump height", "Elite, 83rd pct"], ["Takeoff velocity", "Elite, 83rd pct"], ["mRSI", "Elite, 81st pct"]],
                nextTitle: "Development priorities",
                next: [["Avg propulsive force", "Below avg, 43rd pct"], ["Peak propulsive force", "Below avg, 32nd pct"]],
            },
            more: "Show the full report",
        },
    },

    reviews: {
        title: "What athletes say",
        rating: home.reviews.rating,
        note: "700+ Google reviews across both clinics",
        // Google reviews from the Mississauga listing; none name clinicians who have left
        items: [
            { name: "K A.", quote: "If you're on the hunt for a top-notch physiotherapist / performance coach, Zeeruk is your guy! He not only knows the ins and outs of keeping your body in tip-top shape but also adds a whole new level of fun to workouts. I found him on social media; he's posting some pretty helpful things that have genuinely elevated my fitness game. Zeeruk is the real deal!" },
            { name: "Jayden K.", quote: "As a former professional athlete, I’m very particular about who I trust with my body and recovery, and I couldn’t be happier with Revibe. From the quality of the treatments to the overall level of care, everything feels intentional and refined. The teams at both Markham and Mississauga are exceptionally knowledgeable, and each provider complements one another so well. Highly recommend." },
            { name: "Youssef H.", quote: "Zeeruk Rehman has been a revelation in my rehab, I’ve regained my confidence in my athletic ability after my injury, and highly recommend him. The facility and staff are top notch as well, and it’s great to be able to go to a resource like that when I need!" },
            { name: "Rachel D.", quote: "The key thing I wanted was someone who could give me a diagnosis on an ongoing pain I was having when working out. Zeeruk not only provided that for me, but created a sustainable plan to recovery that wasn’t just stretching and a waste of time. I have been back at the gym pain free for over a month now." },
            { name: "Omar M.", quote: "Had a great session with Zeeruk today. Worked on my unilateral stability in my legs as well as my conditioning. Highly recommend it!" },
            { name: "Perry K.", quote: "I’ve had back problems so bad where I wouldn’t be able to get out of bed in the morning, but after working with Mike for a couple months I can now workout and move injury free! I am so grateful to Mike for allowing me to perform at my best self!" },
        ],
    },

    // from Prince's pricing post; package totals and monthly payments are left off on purpose
    pricing: {
        title: "What does it cost?",
        text: "Pay per session, or save on every session with a block. Every block starts with a baseline test, and your coach recommends a length at your free consult.",
        cards: [
            { title: "Performance training", text: "Strength and conditioning with a CSCS certified coach.", prices: [["30 minutes", "60"], ["45 minutes", "80"], ["60 minutes", "100"]], note: "Per session, plus HST" },
            { title: "Performance rehab", text: "Training to get back from injury, led by a physiotherapist.", prices: [["45 minutes", "125"], ["60 minutes", "150"]], note: "Per session, no HST", dark: true },
        ],
        blocksTitle: "Save with a block",
        blocks: [
            { sessions: "12", off: "10% off" },
            { sessions: "24", off: "15% off", popular: true },
            { sessions: "48", off: "20% off" },
        ],
    },

    // "Inside the training", sections/home/instagram.html
    instagram: {
        ...home.instagram,
        title: "Inside the training",
        posts: [
            instagramPost("The MSBA Twins team combine", "reel", "Dfaz3jgRv9Q"),
            instagramPost("Alijah Martin after a summer of recovery", "p", "DfdGfMIo9nK"),
            instagramPost("Zee and Naz get active", "reel", "DbRbjz7xNZt"),
            instagramPost("Chance Adams recovers with Revibe", "reel", "DfOAP72xyjW"),
            instagramPost("Three exercises to improve your acceleration", "p", "DcG1iw4ETF0"),
            instagramPost("Skip drills on the track", "reel", "DcRyjBfRNsY"),
            instagramPost("Training for Hyrox", "reel", "DdNLXLwxxRL"),
            instagramPost("Strides to Sprints is back", "reel", "DbwVjiQRdOz"),
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
            { q: "How much does performance training cost?", a: "Performance training is $60 for 30 minutes, $80 for 45 minutes and $100 for 60 minutes, plus HST. Performance rehab with a physiotherapist is $125 for 45 minutes and $150 for 60 minutes, with no HST. Blocks save on every session: 10% off for 12 sessions, 15% off for 24 and 20% off for 48. The first consult is free." },
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

    cta: { text: "Start with a free performance consult" },

    // phones: one full-width button pinned to the bottom of the screen
    sticky: "solo",
};
