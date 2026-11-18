// Content for /return-to-life-training/ (same address as the old site), ported from the old
// "Return to Sport & Life Training" page. Rendered by layouts/training.html.
// Consult buttons open the free consult pop-up with "Come back from injury" picked.

module.exports = {
    consult: {
        label: "Book a free consult",
        variant: "individual",
        goal: "Come back from injury"
    },
    hero: {
        title: "Return to sport and life",
        text: "Recovering from injury is only the first step. Return to sport and life training rebuilds the strength, confidence and capacity your body needs for sport, training and everyday life, bridging the gap between physiotherapy and full performance.",
        proof: [
            "Guided by physiotherapy and strength coaching",
            "A structured progression, not a guess",
            "For sport, running, the gym and daily life"
        ],
        images: [
            {
                src: "/assets/images/performance/goal-injury.jpg",
                alt: "A Revibe coach guiding an athlete's knee through a step-up",
                position: "center 40%"
            },
            {
                src: "/assets/images/hurt/sprint-start.jpg",
                alt: "An athlete driving out of a sprint start on the force plates while a Revibe coach records the test",
                position: "center 50%"
            }
        ]
    },
    goals: {
        title: "What does it include?",
        items: [
            {
                id: "strength",
                title: "Strength and power",
                text: "Rebuild strength and develop power, so your body produces force again and holds up under load.",
                points: ["Strength rebuilding", "Power development", "Improved force production and resilience"],
                image: "/assets/images/performance/pz-strong2.jpg",
                alt: "A coach guiding a client through a banded squat at the rack",
                position: "center 40%"
            },
            {
                id: "control",
                title: "Movement control",
                text: "Retrain how you move and build the stability to control it, for better coordination and control.",
                points: ["Movement retraining", "Stability work", "Better coordination and control"],
                image: "/assets/images/hurt/gym-split-squat.jpg",
                alt: "Michael Leung checking a client's split squat in the gym",
                position: "center 40%"
            },
            {
                id: "speed",
                title: "Speed and agility",
                text: "Plyometrics, agility drills and reaction training, so you move fast again with confidence.",
                points: ["Plyometrics", "Agility drills", "Reaction training"],
                image: "/assets/images/performance/goal-compete.jpg",
                alt: "Athletes doing band resisted sprints in pairs on the track",
                position: "center 45%"
            },
            {
                id: "sport",
                title: "Sport-specific training",
                text: "Drills built around your sport or activity, for a smooth transition back to play.",
                points: ["Drills tailored to your sport", "Built around how you play", "A smooth transition back"],
                image: "/assets/images/performance/pz-compete.jpg",
                alt: "Zee coaching an athlete through a resisted band drill",
                position: "center 40%"
            },
            {
                id: "load",
                title: "Load progression",
                text: "Training intensity goes up step by step, so you return without setting yourself back.",
                points: ["A gradual increase in intensity", "Progress you can see", "Reduced risk of re-injury"],
                image: "/assets/images/performance/pz-board.jpg",
                alt: "Zee planning a training block on a whiteboard",
                position: "center 40%"
            }
        ]
    },
    how: {
        title: "Your path back",
        steps: [
            {
                title: "Injury care",
                text: "Your physiotherapist settles the injury and works out what is holding you back."
            },
            {
                title: "Rehab",
                text: "Movement and control come back, with exercises matched to where you are."
            },
            {
                title: "Strength",
                text: "Strength, power and capacity are rebuilt with a coach, so your body can handle real demands again."
            },
            {
                title: "Return to sport",
                text: "Speed, agility and sport-specific work take you back to play, or back to the run, the gym or the trail."
            }
        ]
    },
    why: {
        title: "Why it matters",
        items: [
            {
                title: "After rehab",
                text: "Pain settles, but strength and control may not be back yet. Returning too early raises the risk of re-injury."
            },
            {
                title: "Without return training",
                text: "Missing strength, stability and movement control lead to poorer performance and injuries that come back."
            },
            {
                title: "With a structured return",
                text: "Strength, movement and capacity are rebuilt first, for a safer return and better performance."
            },
            {
                title: "One team, one plan",
                text: "Physiotherapy, strength and conditioning coaching, movement retraining and recovery tools, all working together."
            }
        ]
    },
    final: {
        title: "Come back stronger",
        text: "The goal is not just to get you back to activity, but to get you back stronger. Tell us what you are coming back from and a coach will call you to book your free 15 minute consult."
    },
    faq: {
        title: "Return to sport FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What is return to sport training?",
                a: "A structured training process that takes you from injury recovery back into sport, exercise and daily activity. Return to sport training focuses on athletic performance, speed and power. Return to activity training focuses on everyday movement like running, gym training and recreational sport."
            },
            {
                q: "What is return to life training?",
                a: "Not everyone is returning to competitive sport. Return to life training helps you safely get back to running, gym workouts, hiking, recreational sport and daily physical activity, and rebuilds your confidence in how you move."
            },
            {
                q: "Who is it for?",
                a: "Athletes recovering from ACL or ligament injuries, people returning to running or sport after an injury, clients finishing physiotherapy rehab, and active adults rebuilding strength and movement capacity."
            },
            {
                q: "Why not go straight back once the pain is gone?",
                a: "Pain usually settles before strength and control are fully back. Many people return to activity before their body is ready, which is the most common reason injuries come back. A structured return rebuilds strength, movement and capacity first."
            },
            {
                q: "What results can I expect?",
                a: "More confidence returning to activity, better strength, speed and coordination, a lower risk of re-injury, and better performance in sport or daily life."
            },
            {
                q: "Who guides the training?",
                a: "All training is guided by physiotherapy and strength coaching, so every step forward is a safe one. Your progression can also draw on movement retraining and recovery tools at Revibe."
            }
        ]
    },
    locations: {
        title: "Where can I train?"
    },
    cta: { text: "Get back to sport and life, stronger" },
    stickyLabel: "Return to sport"
};
