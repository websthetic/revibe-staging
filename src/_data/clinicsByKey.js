// The clinics in clinics.js looked up by key, e.g. clinicsByKey.markham (used by layouts/location.html).
const clinics = require("./clinics.js");

module.exports = Object.fromEntries(clinics.map((clinic) => [clinic.key, clinic]));
