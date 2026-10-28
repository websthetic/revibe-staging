// Popup content for each Care Map circle. Keys match data-node in components/care-map-svg.html.
// Nodes with no "feel" list show the tools under "What it gives you" instead of "Revibe tools that help".
module.exports = {
    url: "/",
    nodes: {
        performance: {
            title: "Performance for real life",
            text: "The Care Map is how we understand your body clearly and completely. Instead of chasing symptoms, we look at what is limiting you right now and build a plan around it.",
            feel: [],
            tools: ["Your Care Map", "One plan across every service"],
        },
        readiness: {
            title: "Readiness",
            text: "What your body can handle today. Some days you are ready to push, other days you need support first.",
            feel: ["Your body feels tight, heavy or off", "Pain or stiffness shows up without warning", "Energy is low before you even start"],
            tools: ["Massage therapy and hands-on care", "Osteopathy", "Sauna and cold plunge"],
        },
        recovery: {
            title: "Recovery",
            text: "How well your body recharges. Effort only becomes progress when recovery happens.",
            feel: ["Sore or stiff most days", "Progress has stalled", "Sleep or energy is inconsistent"],
            tools: ["Cold plunge", "Infrared sauna", "Massage and recovery planning"],
        },
        activity: {
            title: "Activity",
            text: "How much stress your body is under: training, work, sleep and mental load. The goal is managing demand, not doing more.",
            feel: ["Always pushing with little recovery", "Fatigue builds faster than expected", "Unsure how much is too much"],
            tools: ["Performance training", "Strength and conditioning", "Load management"],
        },
        health: {
            title: "Health",
            text: "What is happening inside your body. Internal systems drive healing, energy and adaptation.",
            feel: ["Energy goes up and down", "Recovery feels slow", "Progress feels harder than it should"],
            tools: ["Naturopathic medicine", "Nutrition guidance", "Supplement strategy"],
        },
        capacity: {
            title: "Capacity",
            text: "What your body can sustain long term. Can it handle repeated effort without breaking down?",
            feel: ["Weakness or instability", "Injuries that keep coming back", "Tiring quickly under load"],
            tools: ["Physiotherapy", "Chiropractic care", "Progressive strength work"],
        },
        mindset: {
            title: "Mindset",
            text: "How you respond to pressure. Confidence and clarity shape consistency.",
            feel: ["Stress affects your motivation", "Fear slows your progress", "Frustration with your body"],
            tools: ["Coaching conversations", "Care Map planning", "Education in every session"],
        },
    },
};
