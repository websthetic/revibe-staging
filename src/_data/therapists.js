// The therapists page, /therapists/ (content/pages/therapists.html, therapists.less, therapists.js).
// Names, roles and photos come from _data/team.js; each person here adds where they work,
// which service filters they show under, their Instagram and (optionally) a role shown on this page only.
// Order is the order on the page.
const ig = (handle) => `https://www.instagram.com/${handle}/`;

module.exports = {
    hero: {
        title: "Choose your service",
        text: "Registered physiotherapists, chiropractors, massage therapists, osteopaths and naturopathic doctors who work as one team. Pick a clinic and a service to see who treats it.",
    },
    // filter buttons; "all" is added by the page
    services: [
        { key: "physiotherapy", label: "Physiotherapy" },
        { key: "chiropractic", label: "Chiropractic" },
        { key: "massage", label: "Massage" },
        { key: "osteopathy", label: "Osteopathy" },
        { key: "naturopathic", label: "Naturopathic doctor" },
        { key: "performance", label: "Performance" },
    ],
    people: [
        { member: "scott-french", clinics: ["mississauga"], services: ["physiotherapy"], instagram: ig("scottrehab") },
        { member: "michael-leung", clinics: ["mississauga", "markham"], services: ["physiotherapy"], instagram: ig("physio.mic") },
        { member: "mitalee-dalvi", clinics: ["mississauga"], services: ["physiotherapy"] },
        { member: "zeeruk-rehman", clinics: ["mississauga"], services: ["physiotherapy", "performance"], instagram: ig("zrkperformance") },
        { member: "michael-ross", clinics: ["mississauga"], services: ["physiotherapy"], instagram: ig("motionwmike") },
        { member: "christine-barnuevo", clinics: ["mississauga"], services: ["physiotherapy"], instagram: ig("chreator"), role: "Pelvic floor physiotherapist" },
        { member: "trevor-dsouza", clinics: ["mississauga"], services: ["chiropractic"], instagram: ig("dr.trevordsouza") },
        { member: "morgan-millard", clinics: ["mississauga"], services: ["chiropractic"], instagram: ig("dr.morganmillard") },
        { member: "joshua-alferez", clinics: ["mississauga", "markham"], services: ["massage", "performance"], instagram: ig("joshprehab") },
        { member: "winson-cheong", clinics: ["mississauga"], services: ["massage"], instagram: ig("winson_thermt") },
        { member: "kyle-sunga", clinics: ["mississauga"], services: ["massage", "performance"], instagram: ig("zsupersunga") },
        { member: "rachel-murray", clinics: ["mississauga"], services: ["massage"], instagram: ig("rehabwithrachel") },
        { member: "vincent-nguyen", clinics: ["mississauga"], services: ["massage"] },
        { member: "gauri-khandke", clinics: ["mississauga"], services: ["massage"], instagram: ig("gauri_rmt") },
        { member: "joseph-de-leon", clinics: ["markham"], services: ["massage"], instagram: ig("rcvrwithjoey") },
        { member: "angelii-mercurius", clinics: ["markham"], services: ["massage"], instagram: ig("angeliibless") },
        { member: "jaxon-forbes", clinics: ["markham"], services: ["massage"] },
        { member: "anesto-charles", clinics: ["mississauga", "markham"], services: ["osteopathy"], instagram: ig("__anesto") },
        { member: "erica-runnalls", clinics: ["mississauga"], services: ["osteopathy"], instagram: ig("e__osteopathy") },
        { member: "emily-wilson", clinics: ["mississauga"], services: ["osteopathy"], instagram: ig("thriveosteopathy") },
        { member: "jennifer-tang", clinics: ["mississauga"], services: ["naturopathic"], instagram: ig("dr.jennifertang") },
        { member: "lisbeth-bitar-patino", clinics: ["mississauga"], services: ["naturopathic"] },
    ],
    cta: {
        title: "Not sure which therapist fits your {needs}?",
        text: "Tell us what is going on and the team will match you with the right person.",
        button: "Request a booking",
        image: { src: "/assets/images/careers/meet-the-team.webp", alt: "" },
    },
};
