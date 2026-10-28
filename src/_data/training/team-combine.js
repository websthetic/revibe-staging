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
        text: "A testing day for your whole team. Force plate jumps, acceleration, agility and strength, a live leaderboard and a report for every athlete. At Revibe or at your facility.",
        proof: [
            "10 to 20 athletes per session",
            "Force plates and timed drills",
            "A report for every athlete"
        ],
        images: [
            {
                src: "/assets/images/hurt/sprint-start.jpg",
                alt: "An athlete testing a jump on the force plates",
                position: "center 40%"
            },
            {
                src: "/assets/images/performance/goal-team.jpg",
                alt: "An athlete on the force plates while a coach records the test",
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
                text: "A baseline before the season, and a retest to show who improved.",
                points: [
                    "Every athlete measured the same way",
                    "Leaderboard the team will talk about",
                    "Reports for the coaching staff"
                ],
                image: "/assets/images/performance/goal-compete.jpg",
                alt: "Athletes doing band resisted sprints on the track"
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
                image: "/assets/images/hurt/gym-coaching.jpg",
                alt: "A young athlete working through a single leg drill"
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
                image: "/assets/images/hurt/barbell-cueing.jpg",
                alt: "A Revibe coach cueing an athlete at the rack"
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
                text: "Scores go on a live team leaderboard as they happen."
            },
            {
                title: "Recover and debrief",
                text: "Recovery between stations, then the results and what they mean."
            }
        ],
        report: {
            title: "Example leaderboard",
            bars: [
                {
                    label: "Jump height",
                    note: "Top of the roster",
                    value: 88
                },
                {
                    label: "10 metre sprint",
                    note: "Top of the roster",
                    value: 74
                },
                {
                    label: "Agility",
                    note: "Top of the roster",
                    value: 66
                }
            ],
            note: "Coaches receive the leaderboard and a report for every athlete. Example only."
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
                name: "Ricardo B.",
                quote: "If you’re looking for a place to improve your self I would say this is it. From their highly skilled and knowledgeable staff to their various different facilities, private gym, sauna, cold plunge, recovery room etc. it’s a great place to be. Clean and tidy. Highly recommend"
            },
            {
                name: "David G.",
                quote: "I’ve been dealing with knee issues and Michael was incredibly helpful. He took the time to assess my situation and created a clear plan to mobilize and strengthen my knee. The difference has been night and day. He is very knowledgeable, professional and understands the struggles of athletes. Highly recommend!"
            }
        ]
    },
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
                label: "Team leaderboard",
                figure: "Live",
                unit: "on the day",
                text: "Scores update as athletes test, station by station.",
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
                a: "A testing day for a whole team. Every athlete is measured on force plates and in timed drills for jump, acceleration, agility and strength, the scores go on a team leaderboard as they happen, and each athlete gets an individual performance report afterwards. It is the same testing professional and varsity programs use, run for your team at a Revibe clinic or at your own facility."
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
                a: "Between 10 and 20 athletes, plus coaches. That is the size where every athlete gets properly tested and the leaderboard still means something. A larger roster can be split across two sessions."
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
                a: "An individual performance report for every athlete and the team leaderboard, sent to the coaching staff. The reports give you a baseline for each athlete, so a second combine before next season shows who has actually improved."
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
    stickyLabel: "Team combine"
};
