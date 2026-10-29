// Revibe practitioners. photo is the tall portrait, face is the square head-and-shoulders crop.
// Keys are used by service pages (e.g. physiotherapy.js) to list who treats that service.
// pass hasFace: false when there is no square crop yet; the "licensed" card then skips that person
// url is their bio page once _data/therapistBios/<slug>.js exists, otherwise "/"
const fs = require("fs");
const path = require("path");
const hasBio = (slug) => fs.existsSync(path.join(__dirname, "therapistBios", `${slug}.js`));

const member = (slug, name, role, hasFace = true) => ({
    name,
    role,
    photo: `/assets/images/team/${slug}.jpg`,
    face: hasFace ? `/assets/images/team/${slug}-face.jpg` : null,
    url: hasBio(slug) ? `/therapists/${slug}/` : "/",
});

module.exports = {
    "scott-french": member("scott-french", "Scott French", "Physiotherapist"),
    "michael-leung": member("michael-leung", "Michael Leung", "Physiotherapist"),
    "mitalee-dalvi": member("mitalee-dalvi", "Mitalee Dalvi", "Physiotherapist"),
    "zeeruk-rehman": member("zeeruk-rehman", "Zeeruk Rehman", "Physiotherapist"),
    "michael-ross": member("michael-ross", "Michael Ross", "Physiotherapist"),
    "christine-barnuevo": member("christine-barnuevo", "Christine Barnuevo", "Physiotherapist"),
    "trevor-dsouza": member("trevor-dsouza", "Dr. Trevor D'Souza", "Chiropractor"),
    "morgan-millard": member("morgan-millard", "Dr. Morgan Millard", "Chiropractor"),
    "rachel-murray": member("rachel-murray", "Rachel Murray", "Registered massage therapist"),
    "kyle-sunga": member("kyle-sunga", "Kyle Sunga", "Registered massage therapist"),
    "winson-cheong": member("winson-cheong", "Winson Cheong", "Registered massage therapist"),
    "gauri-khandke": member("gauri-khandke", "Gauri Khandke", "Registered massage therapist"),
    "vincent-nguyen": member("vincent-nguyen", "Vincent Nguyen", "Registered massage therapist"),
    "joseph-de-leon": member("joseph-de-leon", "Joseph De Leon", "Registered massage therapist"),
    "angelii-mercurius": member("angelii-mercurius", "Angelii Mercurius", "Registered massage therapist", false),
    "anesto-charles": member("anesto-charles", "Anesto Charles", "Osteopathic manual practitioner"),
    "emily-wilson": member("emily-wilson", "Emily Wilson", "Osteopathic manual practitioner"),
    "erica-runnalls": member("erica-runnalls", "Erica Runnalls", "Osteopathic manual practitioner"),
    "jennifer-tang": member("jennifer-tang", "Dr. Jennifer Tang", "Naturopathic doctor"),
    "lisbeth-bitar-patino": member("lisbeth-bitar-patino", "Lisbeth Bitar Patino", "Naturopathic doctor"),
    // a full photo rather than the cut-out portraits above, until a matching one is taken
    "joshua-alferez": { ...member("joshua-alferez", "Joshua Alferez", "Registered massage therapist", false), photo: "/assets/images/team/joshua-alferez.webp" },
    // no photo yet: cards show initials instead
    "jaxon-forbes": { ...member("jaxon-forbes", "Jaxon Forbes", "Registered massage therapist", false), photo: null },
};
