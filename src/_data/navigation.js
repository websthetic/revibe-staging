// Every url is "/" until the real pages exist. Templates skip active-state checks for "/".
module.exports = {
    services: {
        // the "See all services" link at the bottom of the menu
        allUrl: "/services-amenities/",
        columns: [
            {
                heading: "Treatment",
                links: [
                    { label: "Physiotherapy", url: "/services/physiotherapy/" },
                    { label: "Chiropractic", url: "/services/chiropractic/" },
                    { label: "Massage therapy", url: "/services/massage/" },
                    { label: "Osteopathy", url: "/services/osteopathy/" },
                    { label: "Pelvic physiotherapy", url: "/services/pelvic-physiotherapy/" },
                    { label: "Naturopathic medicine", url: "/services/naturopathic-medicine/" },
                ],
            },
            {
                heading: "Recovery",
                links: [
                    { label: "Cold plunge", url: "/cold-plunge/" },
                    { label: "Infrared sauna", url: "/infrared-sauna/" },
                    { label: "Recovery lounge", url: "/recovery-lounge/" },
                    { label: "Stretch therapy", url: "/stretch-spa/" },
                    { label: "Memberships", url: "/memberships/" },
                ],
            },
            {
                heading: "Training",
                links: [
                    { label: "Performance training", url: "/performance-training/" },
                    { label: "Return to sport and life", url: "/" },
                    { label: "Pre and post surgical rehab", url: "/" },
                    { label: "Team training", url: "/performance-training/team-training/" },
                    { label: "Team combine", url: "/team-combine/" },
                ],
            },
        ],
        promo: {
            eyebrow: "Not sure where to start?",
            title: "Take the care map",
            text: "Seven questions, two minutes.",
            url: "/",
        },
    },
    whereDoesItHurt: [
        { label: "Low back", url: "/where-does-it-hurt/low-back/" },
        { label: "Neck and mid back", url: "/where-does-it-hurt/neck/" },
        { label: "Shoulder", url: "/where-does-it-hurt/shoulder/" },
        { label: "Elbow and wrist", url: "/where-does-it-hurt/elbow-wrist/" },
        { label: "Hip", url: "/where-does-it-hurt/hip/" },
        { label: "Knee", url: "/where-does-it-hurt/knee/" },
        { label: "Foot and ankle", url: "/where-does-it-hurt/foot-ankle/" },
    ],
    locations: [
        { label: "Mississauga", url: "/locations/mississauga/" },
        { label: "Markham", url: "/markham/" },
    ],
    about: [
        { label: "Our team", url: "/therapists/" },
        { label: "Our story", url: "/about-us/" },
        { label: "Direct billing", url: "/direct-billing/" },
    ],
    // listed under About on desktop, as their own rows in the mobile menu
    company: [
        { label: "Careers", mobileLabel: "Careers", url: "/join-our-team/" },
        { label: "Contact", mobileLabel: "Contact Us", url: "/contact-us/" },
    ],
    book: { label: "Book now", url: "/" },
    footer: {
        tagline: "Your home for social well-being.",
        columns: [
            {
                heading: "Services",
                links: [
                    { label: "Osteopathy", url: "/services/osteopathy/" },
                    { label: "Massage", url: "/services/massage/" },
                    { label: "Chiropractic", url: "/services/chiropractic/" },
                    { label: "Physiotherapy", url: "/services/physiotherapy/" },
                    { label: "Pelvic Physiotherapy", url: "/services/pelvic-physiotherapy/" },
                    { label: "Naturopathic Medicine", url: "/services/naturopathic-medicine/" },
                    { label: "Performance Training", url: "/performance-training/" },
                    { label: "Stretch Therapy", url: "/stretch-spa/" },
                    { label: "All services", url: "/services-amenities/" },
                ],
            },
            {
                heading: "About",
                links: [
                    { label: "Our Story", url: "/about-us/" },
                    { label: "Careers", url: "/join-our-team/" },
                    { label: "Team", url: "/therapists/" },
                    { label: "Google Business", url: "/" },
                ],
            },
            {
                heading: "Contact",
                links: [
                    { label: "Contact us", url: "/contact-us/" },
                    { label: "Locations", url: "/" },
                    { label: "Instagram", url: "/" },
                    { label: "LinkedIn", url: "/" },
                ],
            },
            {
                heading: "Learn",
                links: [
                    { label: "Memberships", url: "/memberships/" },
                    { label: "Direct billing", url: "/direct-billing/" },
                    { label: "FAQ", url: "/" },
                    { label: "Blogs", url: "/" },
                ],
            },
        ],
        legal: [{ label: "Terms of Use & Privacy", url: "/" }],
    },
};
