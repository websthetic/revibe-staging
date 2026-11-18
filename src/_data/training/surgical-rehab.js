// Content for /pre-post-surgical-rehabilitation/ (same address as the old site), ported from the old
// "Pre & Post Surgical Rehab" page. Rendered by layouts/training.html.
// Consult buttons open the free consult pop-up with "Come back from injury" picked.

module.exports = {
    consult: {
        label: "Book a free consult",
        variant: "individual",
        goal: "Come back from injury"
    },
    // the "players from" leagues strip does not fit this page
    leagues: false,
    hero: {
        title: "Pre and post surgical rehab",
        text: "Surgery is only one step in recovery. The results depend on what you do before and after. We help you prepare for surgery and recover safely, restoring mobility, rebuilding strength and getting you back to daily life with a clear, structured plan.",
        proof: [
            "Prehab before surgery, rehab after",
            "A plan tailored to your procedure",
            "Physiotherapy and strength coaching together"
        ],
        images: [
            {
                src: "/assets/images/physiotherapy/hands-on.jpg",
                alt: "A physiotherapist moving a client's leg on the treatment table",
                position: "center 45%"
            },
            {
                src: "/assets/images/first-session/assessment.jpg",
                alt: "Zeeruk Rehman, physiotherapist, assessing a client's knee",
                position: "center 45%"
            }
        ]
    },
    goals: {
        title: "What is included?",
        items: [
            {
                id: "prehab",
                title: "Before surgery",
                text: "Prehabilitation improves your strength, mobility and readiness, for a smoother recovery after.",
                points: [
                    "Mobility, strength and movement preparation",
                    "Targeted muscle activation around the surgical area",
                    "Education, so you know what recovery looks like"
                ],
                image: "/assets/images/performance/goal-life.jpg",
                alt: "Michael Leung coaching a client through a squat at the rack",
                position: "center 40%"
            },
            {
                id: "rehab",
                title: "After surgery",
                text: "Post-surgical rehabilitation restores movement, rebuilds strength and supports your return to activity.",
                points: [
                    "Range of motion restoration",
                    "Manual therapy and joint mobilization",
                    "Progressive strength rebuilding",
                    "Movement re-education"
                ],
                image: "/assets/images/physiotherapy/step-treat.jpg",
                alt: "Michael Leung, physiotherapist, stretching a client's hip on the table",
                position: "center 45%"
            },
            {
                id: "return",
                title: "Back to activity",
                text: "Functional training takes you from recovery to confidence in daily life and sport.",
                points: [
                    "Functional training",
                    "Better movement patterns and control",
                    "Confidence in daily life and sport"
                ],
                image: "/assets/images/performance/goal-injury.jpg",
                alt: "A Revibe coach guiding an athlete's knee through a step-up",
                position: "center 40%"
            },
            {
                id: "after",
                title: "After rehab",
                text: "Recovery does not end when the pain goes. Many clients move into performance training and strength and conditioning to prevent re-injury.",
                points: [
                    "Reduce the risk of future injury",
                    "Improve strength and stability",
                    "Build long-term resilience"
                ],
                image: "/assets/images/performance/pz-strong2.jpg",
                alt: "A coach guiding a client through a banded squat at the rack",
                position: "center 40%",
                buttons: [{ label: "See performance training", url: "/performance-training/" }]
            }
        ]
    },
    how: {
        title: "Your path through recovery",
        steps: [
            {
                title: "Prehab",
                text: "Build strength, improve mobility and prepare how you move before the procedure."
            },
            {
                title: "Post-surgical rehab",
                text: "Restore range of motion, rebuild strength and retrain how you move, at the pace your surgeon clears."
            },
            {
                title: "Strength training",
                text: "Rebuild strength safely and progress toward full function."
            },
            {
                title: "Return to activity",
                text: "Get back to daily life and sport with confidence, then keep building with performance training."
            }
        ]
    },
    why: {
        title: "Why it matters",
        items: [
            {
                title: "Before surgery",
                text: "Building strength and mobility first means a faster recovery, better surgical outcomes and fewer complications."
            },
            {
                title: "After surgery",
                text: "Restoring movement and rebuilding strength improves mobility, lowers the risk of re-injury and gets you back to activity with confidence."
            },
            {
                title: "Without rehab",
                text: "Limited preparation and recovery mean slower progress, lingering weakness and an incomplete recovery."
            },
            {
                title: "One team, one plan",
                text: "Physiotherapy, chiropractic care, osteopathy, massage therapy and strength coaching, all on the same plan."
            }
        ]
    },
    final: {
        title: "Plan your recovery",
        text: "Whether your surgery is coming up or behind you, tell us about the procedure and a coach will call you to book your free 15 minute consult."
    },
    faq: {
        title: "Surgical rehab FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What is pre and post surgical rehab?",
                a: "A structured physiotherapy and rehabilitation process that prepares your body before surgery and guides your recovery after. Pre-surgical physiotherapy (prehabilitation) improves strength, mobility and readiness. Post-surgical rehabilitation restores movement, rebuilds strength and supports your return to activity."
            },
            {
                q: "What surgeries do you support?",
                a: "ACL reconstruction, meniscus surgery, shoulder and rotator cuff surgery, hip surgery, knee replacement and spinal surgery, among others. Each program is tailored to your procedure, your stage of recovery and your goals."
            },
            {
                q: "Why start rehab before surgery?",
                a: "Your outcome is shaped before and after surgery. Building strength and mobility beforehand, and knowing what to expect, leads to a faster recovery, better outcomes and fewer complications."
            },
            {
                q: "Who is it for?",
                a: "People preparing for orthopedic surgery, patients recovering from surgery or injury, and anyone who wants guided rehab to regain strength and mobility safely."
            },
            {
                q: "What happens after rehab?",
                a: "Recovery does not end when the pain disappears. Once mobility and strength return, many clients move into performance training and strength and conditioning to prevent re-injury, improve strength and stability, and build long-term resilience."
            },
            {
                q: "How does this fit into my Care Map?",
                a: "Rehab focuses on restoring movement quality, rebuilding strength safely and progressing toward full function. As you recover, your plan evolves into strength training, performance training and injury prevention."
            }
        ]
    },
    locations: {
        title: "Where can I do my rehab?"
    },
    cta: { text: "Prepare for surgery and recover with a plan" },
    stickyLabel: "Surgical rehab"
};
