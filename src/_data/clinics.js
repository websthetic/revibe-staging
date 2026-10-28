const fs = require("fs");
const path = require("path");

// Revibe clinic details, from the dev handover. Service and booking links are "/" until those pages exist.
// janeUrl is the live Jane booking page, used by the "Book your session" pop-up.
const services = [
    "Physiotherapy",
    "Massage therapy",
    "Chiropractic",
    "Osteopathy",
    "Naturopathic medicine",
    "Pelvic floor physio",
    "Performance training",
    "Cold plunge",
    "Infrared sauna",
    "Recovery lounge",
    "Direct billing",
];

// service tags that have a page link to it; the rest stay "/" for now
const serviceUrls = {
    Physiotherapy: "/services/physiotherapy/",
    "Massage therapy": "/services/massage/",
    Chiropractic: "/services/chiropractic/",
    Osteopathy: "/services/osteopathy/",
    "Naturopathic medicine": "/services/naturopathic-medicine/",
    "Pelvic floor physio": "/services/pelvic-physiotherapy/",
    "Cold plunge": "/cold-plunge/",
    "Infrared sauna": "/infrared-sauna/",
    "Recovery lounge": "/recovery-lounge/",
    "Performance training": "/performance-training/",
};

// service tag label -> location page slug; a clinic's tag links to /location/<clinic>/<slug>/
// once _data/locationPages/<clinic>/<slug>.js exists, otherwise to the service page above
const locationSlugs = {
    Physiotherapy: "physiotherapy",
    "Massage therapy": "massage",
    Chiropractic: "chiropractic",
    Osteopathy: "osteopathy",
    "Naturopathic medicine": "naturopathic-medicine",
    "Pelvic floor physio": "pelvic-floor",
    "Performance training": "performance-training",
    "Cold plunge": "cold-plunge",
    "Infrared sauna": "infrared-sauna",
    "Recovery lounge": "recovery-lounge",
    "Direct billing": "direct-billing",
};
const tagsFor = (key) =>
    services.map((label) => {
        const slug = locationSlugs[label];
        const built = slug && fs.existsSync(path.join(__dirname, "locationPages", key, slug + ".js"));
        return { label, url: built ? `/location/${key}/${slug}/` : serviceUrls[label] || "/" };
    });

const hours = ["Monday to Friday, 9 am to 7 pm", "Saturday, 10 am to 4 pm"];

// location service pages (/location/<clinic>/<slug>/, content in _data/locationPages/<clinic>/),
// in the order the "More at Revibe <clinic>" list shows them; label is followed by " in <clinic name>".
// blurb is the one-liner on the clinic page's service list.
const locationPages = [
    { slug: "physiotherapy", label: "Physiotherapy", blurb: "Injury, pain and rehab after surgery" },
    { slug: "massage", label: "Massage therapy", blurb: "Registered massage therapists" },
    { slug: "chiropractic", label: "Chiropractic", blurb: "Back pain, neck pain and headaches" },
    { slug: "osteopathy", label: "Osteopathy", blurb: "Gentle, whole-body manual care" },
    { slug: "naturopathic-medicine", label: "Naturopathic medicine", blurb: "Hormones, gut, sleep and energy" },
    { slug: "pelvic-floor", label: "Pelvic floor physiotherapy", blurb: "Pregnancy, postpartum and pelvic pain" },
    { slug: "performance-training", label: "Performance training", blurb: "Strength and conditioning, force plate tested" },
    { slug: "cold-plunge", label: "Cold plunge", blurb: "Ice bath therapy, 1 to 3 minutes" },
    { slug: "infrared-sauna", label: "Infrared sauna", blurb: "Red light heat for deeper recovery" },
    { slug: "recovery-lounge", label: "Recovery lounge", blurb: "Normatec compression and recliners" },
    { slug: "direct-billing", label: "Direct billing", blurb: "We bill most insurers for you" },
];

module.exports = [
    {
        name: "Mississauga",
        key: "mississauga",
        // the clinic page (layouts/clinic.html); the handover gives the two clinics different URL patterns
        pageUrl: "/locations/mississauga/",
        street: "2290 Dixie Rd",
        janeUrl: "https://revibeto.janeapp.com/locations/revibe-mississauga-sherway/book",
        address: "2290 Dixie Rd, Mississauga, ON L4Y 1Z4",
        phone: "(905) 783-8423",
        phoneForTel: "+19057838423",
        hours,
        image: "/assets/images/locations/mississauga.jpg",
        width: 1200,
        height: 800,
        alt: "Revibe Mississauga on Dixie Road",
        services: tagsFor("mississauga"),
        bookUrl: "/",
        // "Getting to Revibe Mississauga" on the location pages
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Revibe+2290+Dixie+Rd+Mississauga",
        intro: "Our flagship clinic: treatment rooms, a performance gym, a recovery lounge, cold plunge and infrared sauna under one roof.",
        travel: "Free parking on site. Easy to reach from the QEW, Highway 427 and Etobicoke, and a short drive from Brampton.",
        otherClinic: "markham",
        nearby: {
            title: "Serving Mississauga and nearby",
            // neighbourhood pages are not built yet
            areas: ["Cooksville", "Brightwater", "Erindale", "Mississauga Road", "East Credit", "Clarkson", "Malton", "Erin Mills", "Meadowvale"].map((label) => ({ label, url: "/" })),
            also: "Also close to Applewood, Etobicoke and Brampton.",
        },
        locationPages,
    },
    {
        name: "Markham",
        key: "markham",
        pageUrl: "/markham/",
        street: "220 Torbay Rd",
        janeUrl: "https://revibeto.janeapp.com/locations/revibe-markham-recess/book",
        address: "220 Torbay Rd, Markham, ON L3R 1G6",
        phone: "(289) 806-5123",
        phoneForTel: "+12898065123",
        hours,
        image: "/assets/images/locations/markham.jpg",
        width: 736,
        height: 1097,
        alt: "Inside Revibe Markham",
        services: tagsFor("markham"),
        bookUrl: "/",
        // "Getting to Revibe Markham" on the location pages
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Revibe+220+Torbay+Rd+Markham",
        intro: "A focused clinic inside Recess, with private treatment rooms and the same standard of care as our Mississauga flagship.",
        travel: "Free parking at Recess. Easy to reach from Highway 7, Highway 404 and Highway 407.",
        otherClinic: "mississauga",
        nearby: {
            title: "Serving Markham and nearby",
            // neighbourhood pages are not built yet
            areas: ["Unionville", "Milliken", "Markville", "Thornhill", "Berczy Wismer", "Richmond Hill", "Cornell"].map((label) => ({ label, url: "/" })),
            also: "Also close to Vaughan and Stouffville.",
        },
        locationPages,
    },
];
