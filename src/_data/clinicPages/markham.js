// Revibe Markham clinic page, from the dev handover. Rendered by layouts/clinic.html.
// Address, hours, nearby areas and the service list come from _data/clinics.js; the FAQ from _data/clinicFaq.js.
module.exports = {
    metaTitle: "Revibe Markham | Physio, Chiro and Massage at Recess",
    metaDescription: "Revibe Markham at 220 Torbay Rd, inside Recess: physiotherapy, chiropractic, massage, osteopathy and naturopathic care. Direct billing, no referral needed.",
    text: "Athlete-grade care inside Recess on Torbay Road. Hands-on treatment and rehab built to get you back to doing what you love, with Recess’s athletic facilities right outside the door.",
    images: [
        {
            src: "/assets/images/locations/markham.jpg",
            alt: "Inside Revibe Markham at Recess",
            position: "center 50%"
        },
        {
            src: "/assets/images/physiotherapy/hero-squat.jpg",
            alt: "A Revibe physiotherapist guiding a client through a loaded movement",
            position: "center 40%"
        }
    ],
    servicesTitle: "Services at Revibe Markham",
    servicesText: "Treatment, training and recovery, planned together. Pick a service, or take the Care Map and we will point you to the right one.",
    galleryTitle: "Inside Revibe Markham",
    galleryText: "A focused clinic inside Recess, with private treatment rooms and the same standard of care as our Mississauga flagship.",
    gallery: [
        {
            src: "/assets/images/locations/markham/inside-recess.jpg",
            alt: "The Revibe Markham hallway inside Recess",
            position: "center 50%",
            caption: "Inside Recess"
        },
        {
            src: "/assets/images/physiotherapy/hero-back.jpg",
            alt: "A physiotherapy session in a private treatment room",
            position: "center 50%",
            caption: "Private treatment rooms"
        },
        {
            src: "/assets/images/first-session/treatment.jpg",
            alt: "A registered massage therapist treating a client",
            position: "center 50%",
            caption: "Massage therapy"
        },
        {
            src: "/assets/images/performance/hero-force-plate.jpg",
            alt: "An athlete jumping on force plates during testing",
            position: "center 50%",
            caption: "Performance testing"
        }
    ],
    careMapTitle: "A system built for every body",
    careMapText: "Revibe does not do one-off treatments. Every guest starts with the Care Map, seven questions that show where your body needs support first, then a plan that ties every service together.",
    careMapButton: "Start my Care Map",
    nearText: "Guests come to us for care from across Markham."
};
