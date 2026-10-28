// Revibe Markham performance training page, from the dev handover. Rendered by layouts/location.html.
// Clinic details (address, hours, nearby areas) come from _data/clinics.js. Links to unbuilt pages are "/".
module.exports = {
    metaTitle: "Performance Training in Markham | Revibe",
    metaDescription: "Performance training in Markham at Revibe Markham. Strength and conditioning for athletes and active adults, built on force plate testing.",
    title: "Performance training",
    text: "Strength and conditioning in Markham for athletes and active adults. Tested, coached and programmed by the same team that treats you, so training and rehab never pull in different directions.",
    requestService: "Not sure yet",
    images: [
        {
            src: "/assets/images/performance/hero-force-plate.jpg",
            alt: "An athlete mid-jump above the force plates while a coach records the test",
            position: "center 40%"
        },
        {
            src: "/assets/images/performance/hero-coaching.jpg",
            alt: "Zeeruk Rehman coaching an athlete on the treadmill",
            position: "center 40%"
        }
    ],
    treat: {
        title: "What we train in Markham",
        text: "Every block is built from your testing, your sport and your history.",
        items: [
            {
                title: "Speed and power",
                text: "Faster, more explosive, measured on force plates.",
                url: "/performance-training/"
            },
            {
                title: "Strength",
                text: "Programs built around your sport and your body.",
                url: "/performance-training/"
            },
            {
                title: "Return to sport",
                text: "The bridge between rehab and full training.",
                url: "/performance-training/"
            },
            {
                title: "Team training",
                text: "Off-season blocks and combines for teams.",
                url: "/performance-training/"
            }
        ],
        conditionsTitle: "Where does it hurt?",
        conditions: [
            {
                label: "Knee pain",
                url: "/where-does-it-hurt/knee/"
            },
            {
                label: "Hip pain",
                url: "/where-does-it-hurt/hip/"
            },
            {
                label: "Foot and ankle pain",
                url: "/where-does-it-hurt/foot-ankle/"
            }
        ]
    },
    steps: {
        title: "How it starts",
        items: [
            {
                title: "Free consult",
                text: "Talk about your sport, your history and your goals."
            },
            {
                title: "Test",
                text: "Force plate and movement testing for a real starting point."
            },
            {
                title: "Train",
                text: "A coached block, retested as you go."
            }
        ]
    },
    billing: false,
    regulators: false,
    nearText: "Guests come to us for performance training from across Markham.",
    faq: {
        title: "Performance training in Markham FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "How do I book performance training in Markham?",
                a: "Use Request to book at the top of this page and the Markham team will call you back, book online, or call Revibe Markham at (289) 806-5123. You can also email hello@revibeto.com."
            },
            {
                q: "How much does performance training cost in Markham?",
                a: "It depends on the format, 1 on 1 or small group, and the length of your block. Your coach takes you through the options at your free consult."
            },
            {
                q: "Who is performance training for?",
                a: "Athletes, teams and active adults who want to get faster, stronger and more resilient, including people coming back from injury."
            },
            {
                q: "Do you test athletes?",
                a: "Yes. Every block starts with force plate and movement testing, so you have a starting point and can see real progress."
            },
            {
                q: "Is it 1 on 1 or in a group?",
                a: "Both. Train 1 on 1 with a coach or in a small group, and teams can book their own blocks and combines."
            },
            {
                q: "I am coming back from an injury. Can I train?",
                a: "Yes. Your coach works with your physiotherapist, so training picks up where rehab ends."
            },
            {
                q: "Do I need to be an athlete?",
                a: "No. Plenty of our clients are busy adults who want to move better, get stronger and stay pain free."
            },
            {
                q: "How long is a block?",
                a: "Most blocks run six to twelve weeks, with retesting so you can see what changed."
            },
            {
                q: "Do you train teams?",
                a: "Yes. We run off-season blocks, combines and testing days for teams and clubs."
            },
            {
                q: "What are your hours in Markham?",
                a: "Monday to Friday, 9 am to 7 pm. Saturday, 10 am to 4 pm. Book ahead for evenings and Saturdays, they fill first."
            },
            {
                q: "Where is Revibe Markham?",
                a: "220 Torbay Rd, Markham, ON L3R 1G6, inside Recess on Torbay Road, near Highway 7. Free parking at Recess. Easy to reach from Highway 7, Highway 404 and Highway 407."
            },
            {
                q: "Which areas do you serve?",
                a: "Guests come to Revibe Markham from Unionville, Markville, Cornell, Berczy Wismer, Milliken, Stouffville, Vaughan and across the GTA."
            }
        ]
    },
    otherLabel: "Performance training in Mississauga",
    allAbout: {
        label: "All about performance training",
        url: "/performance-training/"
    }
};
