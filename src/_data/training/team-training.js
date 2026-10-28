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
                src: "/assets/images/performance/team-track-drills.jpg",
                alt: "A group of athletes running drills together on the track",
                position: "center 40%"
            },
            {
                src: "/assets/images/performance/team-band-sprint.jpg",
                alt: "Two athletes laughing through a band resisted sprint",
                position: "center 40%"
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
                image: "/assets/images/performance/goal-compete.jpg",
                alt: "Athletes doing band resisted sprints on the track"
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
                image: "/assets/images/hurt/gym-coaching.jpg",
                alt: "A young athlete working through a single leg drill"
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
                image: "/assets/images/services/performance-coaching.jpg",
                alt: "Zeeruk Rehman assessing an athlete's running on the curved treadmill"
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
                image: "/assets/images/hurt/barbell-cueing.jpg",
                alt: "A Revibe coach cueing an athlete at the rack"
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
        report: {
            title: "Example team report",
            bars: [
                {
                    label: "Team jump height",
                    note: "Start of block",
                    value: 58
                },
                {
                    label: "Team sprint speed",
                    note: "Start of block",
                    value: 52
                },
                {
                    label: "Athletes ready for full training",
                    note: "Share of roster",
                    value: 86
                }
            ],
            note: "Coaches get a team summary and a report for every athlete. Example only."
        }
    },
    reviews: {
        title: "What athletes say",
        rating: home.reviews.rating,
        note: "600+ Google reviews across both clinics",
        items: [
            {
                name: "5.0600+ Google reviews across both clinics\n      KK A.",
                quote: "If you're on the hunt for a top-notch physiotherapist / performance coach, Zeeruk is your guy! He not only knows the ins and outs of keeping your body in tip-top shape but also adds a whole new level of fun to workouts. I found him on social media; he's posting some pretty helpful things that have genuinely elevated my fitness game. Zeeruk is the real deal!"
            },
            {
                name: "David G.",
                quote: "I’ve been dealing with knee issues and Michael was incredibly helpful. He took the time to assess my situation and created a clear plan to mobilize and strengthen my knee. The difference has been night and day. He is very knowledgeable, professional and understands the struggles of athletes. Highly recommend!"
            },
            {
                name: "Ramandeep B.",
                quote: "Excellent team ,they are very professional. Trevor(chiropractor ), Jennifer, zee all of them are really helpful and supportive. Highly recommend if you are an athlete and need help with rehab work and injury."
            }
        ]
    },
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
    stickyLabel: "Team training"
};
