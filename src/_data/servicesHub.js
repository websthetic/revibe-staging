// Content for /services-amenities/ (all services), from the dev handover.
// Links to pages that are not built yet are "/".
module.exports = {
    hero: {
        title: "Care, designed for how you live",
        text: "Performance, recovery and health services that work better together, under one roof at every Revibe clinic.",
    },

    // one section per pillar; alternate sections swap sides and use the off-white background
    pillars: [
        {
            id: "therapy",
            title: "Performance therapy",
            text: "Hands-on, evidence-based care that reduces pain, restores movement and gets your body working the way it should, whether the problem came from sport, work or life.",
            bookFor: "Pain, injuries, after surgery, stiffness, moving less than you used to.",
            image: "/assets/images/services/physiotherapy.jpg",
            alt: "Michael Leung, physiotherapist, working a client's hip on the table",
            position: "center 55%",
            services: [
                { label: "Physiotherapy", text: "Find the cause, treat it with hands-on care and build you back with a plan.", url: "/services/physiotherapy/" },
                { label: "Massage therapy", text: "Registered massage therapists for tension, soreness and recovery.", url: "/services/massage/" },
                { label: "Chiropractic", text: "Adjustments and movement work for back pain, neck pain and headaches.", url: "/services/chiropractic/" },
                { label: "Osteopathy", text: "Gentle, whole-body manual care for pain and restricted movement.", url: "/services/osteopathy/" },
                { label: "Stretch therapy", text: "Assisted stretching to free up tight muscles and range of motion.", url: "/stretch-spa/" },
                { label: "Pelvic physiotherapy", text: "Pregnancy, postpartum, bladder control and pelvic pain.", url: "/services/pelvic-physiotherapy/" },
            ],
        },
        {
            id: "recovery",
            title: "Recovery and regeneration",
            text: "Help your body reset and recharge so you can keep up with training, work and life without burning out.",
            bookFor: "Soreness, fatigue, high stress, heavy training, general recovery.",
            image: "/assets/images/services/recovery.jpg",
            alt: "A guest sitting calmly in the cold plunge",
            position: "center 75%",
            services: [
                { label: "Cold plunge", text: "Cold water immersion to calm inflammation and reset your system.", url: "/cold-plunge/" },
                { label: "Infrared sauna", text: "Gentle heat that relaxes muscles and boosts circulation.", url: "/infrared-sauna/" },
                { label: "Recovery lounge", text: "Compression boots that flush tired legs after training or long days.", url: "/recovery-lounge/" },
                { label: "Memberships", text: "Cold plunge and sauna from $79 a month.", url: "/memberships/" },
            ],
        },
        {
            id: "coaching",
            title: "Performance coaching",
            text: "Build a body that can handle more, safely. Whether you are coming back from injury, training for a goal or want to feel stronger, coaching turns intention into progress.",
            bookFor: "Performance goals, injury prevention, back to sport, longevity.",
            image: "/assets/images/performance/hero-coaching.jpg",
            alt: "Zeeruk Rehman high fiving a client in the Revibe gym",
            position: "center 40%",
            services: [
                { label: "Performance training", text: "Force plate tested, coached by CSCS coaches, retested.", url: "/performance-training/" },
                { label: "Return to sport and life", text: "Rebuild strength and confidence step by step after injury.", url: "/" },
                { label: "Pre and post surgical rehab", text: "Get ready for surgery, then recover safely and fully.", url: "/" },
                { label: "Team training and combine", text: "Testing and training for teams, clubs and groups.", url: "/performance-training/team-training/" },
            ],
        },
        {
            id: "health",
            title: "Naturopathic and integrated health",
            text: "For when low energy, poor sleep, digestion or inflammation hold you back even though you are doing all the right things.",
            bookFor: "Low energy, hormones, digestion, inflammation, sleep.",
            image: "/assets/images/services/naturopathic.jpg",
            alt: "Lisbeth Bitar Patino, naturopathic doctor, listening with a stethoscope during an assessment",
            position: "62% 42%",
            services: [
                { label: "Naturopathic medicine", text: "Find the root cause, then treat it with a plan.", url: "/services/naturopathic-medicine/" },
                { label: "DUTCH test", text: "A full day of hormone data, collected at home.", url: "/services/naturopathic-medicine/dutch-test/" },
                { label: "IV therapy", text: "Prescribed after a consult, never off a menu.", url: "/services/naturopathic-medicine/iv-therapy/" },
                { label: "Meal plans", text: "Built around what you actually eat and how you train.", url: "/services/naturopathic-medicine/meal-plans/" },
                { label: "Sleep and energy", text: "Find why you are tired before changing anything.", url: "/services/naturopathic-medicine/sleep-and-energy/" },
            ],
        },
    ],

    careMap: {
        title: "Not sure where to start?",
        text: "Revibe does not do one-off treatments. Every guest starts with the Care Map, seven questions that show where your body needs support first, then a plan that ties every service together.",
        button: "Start my Care Map",
    },
};
