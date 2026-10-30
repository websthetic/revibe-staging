// "What happens in my first session?" on the Where does it hurt pages (layouts/hurt.html).
// The steps are the home page's (home.js firstSession); the last one points at the area's plan.
// {area} is replaced with the page's area name (hurtPages/<key>.js area).
const { firstSession } = require("./home.js");

module.exports = {
    title: "What happens in my first session?",
    text: "One hour, four parts. You leave knowing what is wrong and what to do about it.",
    steps: [
        ...firstSession.steps.slice(0, 3),
        {
            ...firstSession.steps[3],
            title: "Your plan",
            text: "The week-by-week plan for your {area}, so you know exactly what comes next.",
        },
    ],
};
