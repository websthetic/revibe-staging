// Content for the Care Map quiz pop-up (components/popup-forms/caremap-popup-quiz.html, /assets/js/caremap-quiz.js).
// Area keys match careMap.nodes and data-node in components/care-map-svg.html; the area panels reuse careMap.nodes.
module.exports = {
    intro: {
        topper: "Revibe Care Map",
        title: "Your body's been telling you something.",
        titleAccent: "Let's figure out what.",
        text: "7 questions that reveal which areas of your body are ready to perform, which need attention, and exactly which tools can help you get back to feeling like yourself.",
        pills: ["Under 2 minutes", "No sign-up required", "Personalized results"],
        button: "Let's go",
    },

    // each answer scores 0, 0.5, 1 or 2 towards its area; the three highest areas become the focus areas
    questions: [
        {
            area: "readiness",
            text: "How does your body usually feel when you wake up in the morning?",
            options: [
                { text: "Ready to move and start the day", score: 0 },
                { text: "A little stiff but loosens up quickly", score: 0.5 },
                { text: "Tight, sore, or uncomfortable most mornings", score: 1 },
                { text: "Already fatigued or in pain before the day starts", score: 2 },
            ],
        },
        {
            area: "activity",
            text: "How often does your work, training, or daily life push your body to its limits, physically or mentally?",
            options: [
                { text: "Rarely, my load feels manageable", score: 0 },
                { text: "Occasionally, I push hard but recover well", score: 0.5 },
                { text: "Often, I'm running close to my limit most days", score: 1 },
                { text: "Almost always, I'm constantly running on empty", score: 2 },
            ],
        },
        {
            area: "capacity",
            text: "How strong and capable does your body feel for the demands of your life right now?",
            options: [
                { text: "Strong and capable, I can do what I want to do", score: 0 },
                { text: "Mostly capable, with some minor limitations", score: 0.5 },
                { text: "I notice real weaknesses or things I've had to stop doing", score: 1 },
                { text: "My body feels fragile, unreliable, or frequently injured", score: 2 },
            ],
        },
        {
            area: "recovery",
            text: "After a tough day or workout, how does your body feel the next morning?",
            options: [
                { text: "Recovered and ready to go", score: 0 },
                { text: "A bit tired but functional", score: 0.5 },
                { text: "Still sore, stiff, or sluggish, it takes days", score: 1 },
                { text: "I'm almost never fully recovered before the next demand hits", score: 2 },
            ],
        },
        {
            area: "health",
            text: "How well are sleep, nutrition, and energy working together to support your body right now?",
            options: [
                { text: "Very well, I feel supported and consistent", score: 0 },
                { text: "Mostly well, with occasional dips", score: 0.5 },
                { text: "Inconsistently, one or more of these is regularly off", score: 1 },
                { text: "Poorly, my body feels under-supported most of the time", score: 2 },
            ],
        },
        {
            area: "mindset",
            text: "How confident do you feel about your body when it comes to pain, injury, or performance?",
            options: [
                { text: "Very confident, I trust my body", score: 0 },
                { text: "Mostly confident, with some hesitation", score: 0.5 },
                { text: "Somewhat unsure, I second-guess my body often", score: 1 },
                { text: "Frustrated or worried, recurring pain or setbacks have shaken my confidence", score: 2 },
            ],
        },
        {
            area: "readiness",
            text: "Overall, how well is your body keeping up with the life you want to live?",
            options: [
                { text: "Keeping up well, I feel capable and in control", score: 0 },
                { text: "Mostly keeping up, with some areas holding me back", score: 0.5 },
                { text: "Struggling to keep up, my body is limiting what I can do", score: 1 },
                { text: "Falling behind, my body feels like it's working against me", score: 2 },
            ],
        },
    ],

    // the order of the six areas in the report grid, and which wins when two areas score the same
    areas: ["readiness", "activity", "capacity", "recovery", "health", "mindset"],
    tieOrder: ["recovery", "health", "activity", "capacity", "readiness", "mindset"],

    // two tools per area: the first tool of each focus area comes first, then second tools, up to four
    tools: {
        recovery: ["Cold plunge & sauna", "Massage therapy"],
        health: ["Naturopathic medicine", "Massage therapy"],
        activity: ["Performance training", "Massage therapy"],
        capacity: ["Physiotherapy", "Chiropractic care"],
        readiness: ["Massage therapy", "Osteopathy"],
        mindset: ["Care planning", "Goal-setting session"],
    },

    // three or more answers from the bottom two options count as high stress; {areas} becomes "readiness, recovery, and mindset"
    results: {
        topper: "Your Care Map results",
        title: "Here's where your body needs support right now.",
        ranks: ["1st priority", "2nd priority", "3rd priority"],
        highStress:
            "Your answers suggest your body may be under more pressure than it should be right now, and that can make everyday life feel tighter, more painful, or more exhausting than it needs to be. The areas asking for support right now are {areas}. By focusing on these areas, we can start reducing the strain on your body, rebuild a stronger foundation, and help you perform for real life.",
        solid: "Your answers show a solid foundation and tell us you're doing a lot right. The areas asking for support right now are {areas}, which can quietly make everything feel heavier and harder than it needs to be. We focus on using the right tools to reduce friction, restore balance, and help your body perform for real life.",
        hint: "Tap a circle to learn more.",
        toolsTitle: "Tools that can support these areas",
        nextTitle: "Your next step",
        nextText: "The best way to start improving these areas is with a first session where we review your Care Map and begin reducing the stress on your body.",
        nextBullets: [
            "Review your Care Map results with a clinician",
            "Understand your injury, pain, and recovery history",
            "Identify what may be limiting your performance",
            "Begin building a plan to help your body perform for real life",
        ],
        button: "Review my Care Map with a clinician",
        save: "Want to save these results?",
        saveLink: "Fill in your info",
        saveAfter: "and we'll include a downloadable copy.",
    },

    // the shorter wording used on the printable report and the copy sent with the lead
    report: {
        highStress:
            "Your answers suggest your body may be under more pressure than it should be right now. The areas asking for support are {areas}. By focusing on these areas, we can start reducing the strain on your body, rebuild a stronger foundation, and help you perform for real life.",
        solid: "Your answers show a solid foundation. The areas asking for support right now are {areas}, which can quietly make everything feel heavier than it needs to be. We focus on using the right tools to reduce friction, restore balance, and help your body perform for real life.",
        footer: "Your Care Map was generated by Revibe · Athlete-grade care, reimagined for everyBody.",
        website: { label: "revibeto.com", url: "https://revibeto.com" },
        social: [
            { label: "@timetorevibe", network: "Instagram", url: "https://instagram.com/timetorevibe" },
            { label: "Revibe", network: "Facebook", url: "https://www.facebook.com/timetorevibe/" },
            { label: "Revibe", network: "LinkedIn", url: "https://www.linkedin.com/company/revibetoinc/" },
        ],
    },

    lead: {
        title: "Review my Care Map",
        text: "Tell us a bit about yourself and we'll have a clinician review your Care Map results before your first session.",
        button: "Submit",
        note: "Your information is private and will only be used to prepare your session.",
        // LeadConnector (GoHighLevel) inbound webhook that receives the answers and an HTML copy of the report
        webhook: "https://services.leadconnectorhq.com/hooks/jPQ1VFQqkz0FnLBL1QoI/webhook-trigger/3923ad3e-aa07-4b70-ac5d-abdc2b2c4a94",
    },

    thanks: {
        title: "You're all set",
        text: "The Revibe team will be in touch shortly. Your personalized Care Map summary is below, save or print it for later.",
        button: "Save or print as PDF",
        scrollHint: "Your Care Map report is below",
    },

    quit: {
        title: "Are you sure you want to quit?",
        text: "Your progress will not be saved.",
        yes: "Yes, quit",
        no: "No, keep going",
    },
};
