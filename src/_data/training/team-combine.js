// Content for /team-combine/, from the dev handover. Rendered by layouts/training.html.
// "Request a combine" buttons open the free consult pop-up in its combine version.
const home = require("../home.js");

module.exports = {
    // label and pop-up version of every "Request ..." button on the page
    consult: {
        label: "Request a combine",
        variant: "combine"
    },
    hero: {
        title: "Team combine",
        text: "A testing day for your whole team. Force plate jumps, acceleration, agility and strength, a post-event team recap and a report for every athlete. At Revibe or at your facility.",
        proof: [
            "10 to 20 athletes per session",
            "Force plates and timed drills",
            "A report for every athlete"
        ],
        images: [
            {
                src: "/assets/images/performance/tc-hero2.jpg",
                alt: "A young player jumping on the force plates at the Raptors 905 clinic while a Revibe coach records",
                position: "50% 12%"
            },
            {
                src: "/assets/images/performance/tc-small.jpg",
                alt: "Zee taking an athlete through his results on a tablet",
                position: "58% 40%"
            }
        ]
    },
    goals: {
        title: "Who is it for?",
        items: [
            {
                id: "club",
                title: "Club and rep teams",
                text: "A baseline before the season, and a retest to show who improved.",
                points: [
                    "Every athlete measured the same way",
                    "A recap the team will talk about",
                    "Reports for the coaching staff"
                ],
                image: "/assets/images/performance/tm-aus.jpg",
                alt: "The AUS Elite squad with Revibe staff at the clinic",
                position: "center 45%"
            },
            {
                id: "school",
                title: "School and youth teams",
                text: "Testing tailored to age and sport, run by coaches who treat injuries.",
                points: [
                    "Drills matched to the age group",
                    "Safe, coached testing",
                    "A fun, competitive day"
                ],
                image: "/assets/images/performance/tc-youth2.jpg",
                alt: "Young players lined up for force plate testing while a Revibe coach records on a laptop",
                position: "center 35%"
            },
            {
                id: "senior",
                title: "Senior and big rosters",
                text: "Larger rosters split across sessions so every athlete is properly tested.",
                points: [
                    "Rotations that keep the day moving",
                    "Recovery lounge between stations",
                    "One combined team report"
                ],
                image: "/assets/images/performance/tm-senior.jpg",
                alt: "A squad recovering in compression boots in the Revibe recovery lounge",
                position: "center 45%"
            }
        ]
    },
    how: {
        title: "What happens on combine day",
        steps: [
            {
                title: "Test",
                text: "Force plate jumps, acceleration, agility and strength in rotations."
            },
            {
                title: "Compete",
                text: "Every athlete is scored at every station. The team rankings come in the recap after the event."
            },
            {
                title: "Recover and debrief",
                text: "Recovery between stations, then the results and what they mean."
            }
        ],
        // the team recap, as the same sheet as the baseline report (components/report-sheet.html)
        sheet: {
            id: "team-recap",
            label: "Team recap",
            doc: "Team recap",
            docSub: "Combine testing",
            name: "Team name removed",
            pill: "18 athletes tested",
            title: "Quick off the mark",
            text: "A team that wins the first three steps. Sprint starts and agility are well above the benchmark, while lower body power has the most room to grow.",
            stats: [
                { title: "Team average vertical jump", value: "19.8", unit: "in", meta: "vs. D1 and pro benchmark: 71%" },
                { title: "Team average 10 m sprint", value: "1.84", unit: "s", meta: "vs. D1 and pro benchmark: 82%" },
                { title: "Athletes tested", value: "18", unit: "of 18", meta: "Every athlete gets their own report" }
            ],
            // players shown by jersey number
            ranking: {
                title: "Top of the roster",
                sub: "by test",
                rows: [
                    { test: "Jump height", places: [["24.1 in", "#07"], ["23.0 in", "#11"], ["22.6 in", "#03"]] },
                    { test: "10 m sprint", places: [["1.68 s", "#11"], ["1.71 s", "#05"], ["1.74 s", "#07"]] },
                    { test: "Agility", places: [["4.62 s", "#05"], ["4.70 s", "#14"], ["4.75 s", "#11"]] }
                ]
            },
            takeaways: {
                strengthsTitle: "Team strengths",
                strengths: [["10 m sprint", "Team average, 82%"], ["Agility", "Team average, 79%"]],
                nextTitle: "What the team works on next",
                next: [["Lower body power", "Team average, 64%"], ["Left and right balance", "6 athletes flagged"]]
            },
            note: "Coaches get this recap and a full report for every athlete after the event. Example data, shown for layout.",
            more: "Show the full team recap"
        }
    },
    // reviews removed: none were about team testing
    blocks: {
        title: "What coaches get afterwards",
        text: "A baseline for every athlete, so a second combine before next season shows who has really improved.",
        items: [
            {
                label: "Individual reports",
                figure: "Every",
                unit: "athlete",
                text: "Jump, speed, agility and strength, plus left and right balance."
            },
            {
                label: "Team recap",
                figure: "One",
                unit: "report",
                text: "Rankings, team averages and who to watch, sent after the event.",
                popular: true
            },
            {
                label: "Coach debrief",
                figure: "One",
                unit: "session",
                text: "What the numbers mean and what to train first."
            }
        ]
    },
    why: {
        title: "Why the Revibe combine",
        items: [
            {
                title: "Coaches who treat",
                text: "The people testing your athletes also treat injuries."
            },
            {
                title: "Real force plates",
                text: "Jump height, force and landing measured properly."
            },
            {
                title: "At your facility",
                text: "The plates and the timing setup travel to you."
            },
            {
                title: "Built to repeat",
                text: "Run it again next season and compare."
            }
        ]
    },
    final: {
        title: "Book your team combine",
        text: "Tell us about the team and preferred dates, and we reply by email to confirm."
    },
    faq: {
        title: "Team combine FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What is a team combine?",
                a: "A testing day for a whole team. Every athlete is measured on force plates and in timed drills for jump, acceleration, agility and strength, and after the event coaches get a team recap and each athlete gets an individual performance report. It is the same testing professional and varsity programs use, run for your team at a Revibe clinic or at your own facility."
            },
            {
                q: "How much does the team combine cost?",
                a: "Teams in our network can currently book the Team Combine Experience complimentary; ask when you request a date. Full terms are confirmed when the clinic replies to your request."
            },
            {
                q: "What does the combine test?",
                a: "Force plate jumps, acceleration, agility and strength. The force plates measure jump height, how much force each leg produces and how the athlete lands, which shows up left to right imbalances. The timed drills measure first-step speed and change of direction. The strength screen is matched to the sport, so a hockey team and a basketball team are not tested on the same battery."
            },
            {
                q: "How many athletes can take part?",
                a: "Between 10 and 20 athletes, plus coaches. That is the size where every athlete gets properly tested and the team recap still means something. A larger roster can be split across two sessions."
            },
            {
                q: "Which sports and age groups is it for?",
                a: "Any team sport. The testing is tailored to the team's sport and age group, so the drills and the strength screen change with the team."
            },
            {
                q: "How long does a combine take?",
                a: "It depends on the size of the roster. The day runs as a warm-up, testing in rotations with the recovery lounge between them, then the results reveal and debrief, and we confirm the timing for your team when we reply with a date."
            },
            {
                q: "Can you run the combine at our facility?",
                a: "Yes. The force plates travel, and so do the coaches. We bring the plates, the timing setup and the staff to your gym or field house if that is easier for the team than coming to a Revibe clinic."
            },
            {
                q: "What do coaches receive afterwards?",
                a: "An individual performance report for every athlete and the team recap, sent to the coaching staff. The reports give you a baseline for each athlete, so a second combine before next season shows who has actually improved."
            },
            {
                q: "What should athletes wear and bring?",
                a: "Training clothes they can jump and sprint in, clean indoor shoes, and water. Nothing else is needed. Athletes carrying an injury should tell the coach running the testing before they start, and we will adapt their stations."
            },
            {
                q: "How do I book a combine for my team?",
                a: "Fill in the request form on this page with your team name, sport, age group, roster size and a preferred location and dates, and we reply by email to confirm a date. Or call Mississauga on (905) 783-8423 or Markham on (289) 806-5123 and ask about the team combine."
            }
        ]
    },
    locations: {
        title: "Where can I train?"
    },
    cta: { text: "Get your team tested and coached" },
    stickyLabel: "Team combine"
};
