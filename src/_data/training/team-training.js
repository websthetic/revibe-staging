// Content for /performance-training/team-training/, from the dev handover. Rendered by layouts/training.html.
// "Request a team consult" buttons open the free consult pop-up in its team version.
const home = require("../home.js");

module.exports = {
    // label and pop-up version of every "Request ..." button on the page
    consult: {
        label: "Request a team consult",
        variant: "team"
    },
    hero: {
        title: "Team training",
        text: "Coached strength, speed and conditioning for teams and groups of five or more. One program built around your season, coached athlete by athlete, at Revibe or at your own facility.",
        proof: [
            "Testing at the start and end of every block",
            "CSCS certified coaches",
            "Coaches who can assess injuries on the spot"
        ],
        images: [
            {
                src: "/assets/images/performance/tt-hero2.jpg",
                alt: "Zee coaching an athlete through a strength test while the group watches",
                position: "62% 50%"
            },
            {
                src: "/assets/images/performance/tt-small2.jpg",
                alt: "Coaches and players huddled together on the court",
                position: "50% 40%"
            }
        ]
    },
    goals: {
        title: "Who is it for?",
        items: [
            {
                id: "club",
                title: "Club and rep teams",
                text: "Off-season and in-season blocks that keep the whole roster strong and fresh.",
                points: [
                    "Built around games and practices",
                    "Speed, power and injury prevention",
                    "Athletes coached one by one"
                ],
                image: "/assets/images/performance/tm-aus.jpg",
                alt: "The AUS Elite squad with Revibe staff at the clinic",
                position: "center 40%"
            },
            {
                id: "school",
                title: "School teams",
                text: "Safe, coached strength and conditioning for student athletes.",
                points: [
                    "Programs matched to age and experience",
                    "Testing that shows real progress",
                    "At your school or at Revibe"
                ],
                image: "/assets/images/performance/tt-school.jpg",
                alt: "A young athlete grinning through a push-up test with Zee beside him",
                position: "center 45%"
            },
            {
                id: "run",
                title: "Run clubs",
                text: "Strength and mobility that keep runners on the road.",
                points: [
                    "Strength for hips, knees and ankles",
                    "Mobility and running drills",
                    "Fewer setbacks through the season"
                ],
                image: "/assets/images/performance/tt-run.jpg",
                alt: "The Strides to Sprints run group together at the track",
                position: "center 45%"
            },
            {
                id: "work",
                title: "Workplaces and groups",
                text: "Coached group sessions for teams that want to move and feel better together.",
                points: [
                    "Sessions at your office or our gym",
                    "For every fitness level",
                    "Built around your schedule"
                ],
                image: "/assets/images/performance/tt-work.jpg",
                alt: "A group of adults laughing through a team session at Revibe",
                position: "center 45%"
            }
        ]
    },
    how: {
        title: "What a team block looks like",
        steps: [
            {
                title: "Team consult",
                text: "We learn about the group, the sport, the season and where you want to train."
            },
            {
                title: "Test everyone",
                text: "Each athlete is measured at the start, so the coach knows who needs what."
            },
            {
                title: "Coach and retest",
                text: "One program for the team, coached person by person, and retested at the end of the block."
            }
        ],
        // the team report, as the same sheet as the baseline report (components/report-sheet.html)
        sheet: {
            id: "team-report",
            label: "Team report",
            doc: "Team report",
            docSub: "Start of block to retest",
            name: "Team name removed",
            pill: "16 athletes, 8 week block",
            title: "Faster and more available",
            text: "The whole roster tested at the start and end of the block. Speed and power moved for most of the team, and more athletes finished ready for full training.",
            stats: [
                { title: "Team average vertical jump", value: "21.3", unit: "in", change: "+1.4 in", meta: "First test 19.9 in" },
                { title: "Team average 10 m sprint", value: "1.79", unit: "s", change: "0.06 s faster", meta: "First test 1.85 s" },
                { title: "Ready for full training", value: "15", unit: "of 16", change: "+3 athletes", meta: "First test 12 of 16" }
            ],
            // players shown by jersey number
            ranking: {
                title: "Most improved",
                sub: "start to retest",
                rows: [
                    { test: "Jump height", places: [["+3.2 in", "#09"], ["+2.7 in", "#02"], ["+2.4 in", "#14"]] },
                    { test: "10 m sprint", places: [["0.12 s", "#04"], ["0.10 s", "#09"], ["0.09 s", "#12"]] }
                ]
            },
            takeaways: {
                strengthsTitle: "Team strengths",
                strengths: [["Sprint speed", "Up for 14 of 16"], ["Availability", "15 of 16 ready"]],
                nextTitle: "What the team works on next",
                next: [["Upper body strength", "Next block focus"], ["Two athletes", "Back in rehab with our physios"]]
            },
            note: "Coaches get this report and a report for every athlete at the end of each block. Example data, shown for layout.",
            more: "Show the full team report"
        }
    },
    // reviews removed: none were about team training
    blocks: {
        title: "How long is a block?",
        text: "The coach sets the length around your season dates and talks it through at your consult.",
        items: [
            {
                label: "Pre-season",
                figure: "6 to 8",
                unit: "weeks",
                text: "Build strength, speed and fitness before the first game."
            },
            {
                label: "In-season",
                figure: "Ongoing",
                unit: "",
                text: "Short, sharp sessions that keep athletes fresh and healthy.",
                popular: true
            },
            {
                label: "Off-season",
                figure: "8 to 12",
                unit: "weeks",
                text: "The longest block, for the biggest gains in strength and power."
            }
        ]
    },
    why: {
        title: "Why teams train with Revibe",
        items: [
            {
                title: "Coaches who can assess",
                text: "Most of our coaches are physiotherapists too."
            },
            {
                title: "Person by person",
                text: "One plan for the team, adjusted for every athlete."
            },
            {
                title: "Your field or ours",
                text: "We bring the coaches and the equipment to you."
            },
            {
                title: "Measured at both ends",
                text: "Testing at the start and end shows what changed."
            }
        ]
    },
    final: {
        title: "Start with a team consult",
        text: "Tell us about the group and a coach will reply within one business day."
    },
    faq: {
        title: "Team training FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What is team training at Revibe?",
                a: "Coached strength, speed and conditioning for a group of five or more who train together. A Revibe coach writes one program for the team around the season and the sport, then coaches it person by person, at a Revibe clinic or at your own facility."
            },
            {
                q: "How many people do I need?",
                a: "Five or more. Team training is built for a group that trains together, from a squad of five to a full roster of more than 30. Club and rep teams, school teams, run clubs, workplaces and groups of friends all qualify."
            },
            {
                q: "Where do the sessions happen?",
                a: "In one of three places: Revibe Mississauga at 2290 Dixie Rd, Revibe Markham at 220 Torbay Rd, or your own facility. For your facility, we bring the coaches and the equipment to your gym, field or track."
            },
            {
                q: "How much does team training cost?",
                a: "Blocks are priced per group, not per head, so the price depends on the group, the length of the block and where you train. Tell us about the group with the request form and a coach will call or email within one business day with a block and a quote."
            },
            {
                q: "How long is a team session?",
                a: "It depends on the group and the block. The coach sets the length of each session, how often the group trains and how long each block runs around your season dates, and talks it through with you when they call about the block."
            },
            {
                q: "Who coaches the sessions?",
                a: "A Revibe coach who is CSCS certified, and most of our coaches are also physiotherapists. That means if something starts hurting mid-season, the person running the session can assess it on the spot rather than guess."
            },
            {
                q: "Do you test the athletes first?",
                a: "Yes. Every block starts and ends with a measurement, so the coach and the athletes can see what changed."
            }
        ]
    },
    locations: {
        title: "Where can I train?"
    },
    cta: { text: "Get your team tested and coached" },
    stickyLabel: "Team training"
};
