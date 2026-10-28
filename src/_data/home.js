// Content for the lower home page sections, from the dev handover.
// Internal links are "/" until the real pages exist; external links (Google, Instagram, regulators) are live.
const googleReviewsUrl =
    "https://www.google.com/maps/place/Revibe/@43.6033296,-79.5760288,17z/data=!4m8!3m7!1s0x882b47f56521157b:0x5cb57ef412a42783!8m2!3d43.6033296!4d-79.5760288!9m1!1b1!16s%2Fg%2F11hz7f621d";

module.exports = {
    firstSession: {
        title: "Your first session",
        text: "One hour, four parts. You leave with answers and a plan, not a sheet of exercises and a goodbye.",
        button: { label: "Book your first session", url: "/" },
        steps: [
            {
                title: "Conversation",
                text: "Your goals, your history and your week, before anything else.",
                image: "/assets/images/first-session/conversation.jpg",
                width: 1200,
                height: 800,
                alt: "Zeeruk, physiotherapist, taking notes with a client",
            },
            {
                title: "Assessment",
                text: "How you move, where it hurts and what is holding you back.",
                image: "/assets/images/first-session/assessment.jpg",
                width: 800,
                height: 1200,
                alt: "Zeeruk Rehman, physiotherapist, assessing a client's knee",
            },
            {
                title: "Treatment",
                text: "Hands-on care where it helps, in the first session.",
                image: "/assets/images/first-session/treatment.jpg",
                width: 1200,
                height: 800,
                alt: "A registered massage therapist working into a client's neck and shoulder",
            },
            {
                title: "Your Care Map",
                text: "A clear plan you leave with, so you know exactly what comes next.",
                image: "/assets/images/first-session/care-map.jpg",
                width: 1200,
                height: 800,
                alt: "A Revibe coach going through results on a tablet with two athletes",
            },
        ],
    },

    billing: {
        title: "We bill your insurer for you",
        text: "Physiotherapy, massage, chiropractic, osteopathy and naturopathic medicine, direct billed to most extended health plans. You pay only what your plan does not cover.",
        button: { label: "See if we bill your insurer", url: "/direct-billing/" },
        steps: [
            { title: "Bring your card", text: "Your insurance card and photo ID at your first session." },
            { title: "We check your plan", text: "The front desk confirms what you are covered for." },
            { title: "We submit the claim", text: "Same day. You pay the balance, if there is one." },
        ],
        insurers: [
            "Canada Life",
            "Sun Life",
            "Manulife",
            "Desjardins",
            "Industrial Alliance",
            "ClaimSecure",
            "Cowan",
            "Maximum Benefit",
            "TELUS AdjudiCare",
            "Johnson Inc.",
            "Johnston Group",
            "Group Source",
            "Group HEALTH",
            "Manion",
            "First Canadian",
            "BPA",
            "CINUP",
            "GMS",
            "LiUNA Local 183",
            "LiUNA Local 506",
        ],
    },

    reviews: {
        title: "What clients say",
        rating: "5.0",
        count: "600+ Google reviews",
        note: "Across every Revibe clinic",
        allUrl: googleReviewsUrl,
        writeUrl: googleReviewsUrl,
        items: [
            {
                name: "Craig B.",
                service: "Physiotherapy",
                quote: "Revibe is the best physio place I've been to, my physiotherapist is Scott French and he is amazing. Gives great feedback and the progress I've been making after a knee surgery is tremendous.",
            },
            {
                name: "Shiyamala D.",
                service: "Massage therapy",
                quote: "Winson Cheong (RMT) got me running pain free again in just a couple of weeks! He combined different types of treatments and even adapted and re-wrote my marathon plan to help me get back on the road in time for my race.",
            },
            {
                name: "Celest J.",
                service: "Osteopathy and chiropractic",
                quote: "Love the atmosphere and people here! You HAVE to do osteo with the lovely Erica Runnalls - she’s professional and friendly and overall got the magic touch. Also, chiro with Morgan Millard is a MUST!",
            },
            {
                name: "Neesha G.",
                service: "Osteopathy",
                quote: "Anesto is an excellent osteopath who’s been a huge help in my ankle injury recovery. He’s knowledgeable, attentive, and takes the time to explain everything clearly.",
            },
            {
                name: "laura B.",
                service: "Naturopathic medicine",
                quote: "Dr. Jennifer Tang is absolutely amazing, she has changed my way of living. I feel like a whole new person after taking all her recommendations.",
            },
            {
                name: "Ismael Y.",
                service: "Physiotherapy",
                quote: "Zeeruk is an outstanding physiotherapist! His expertise and dedication made a significant impact on my recovery. I highly recommend him for his exceptional skills and personalized care.",
            },
            {
                name: "tatiana j.",
                service: "Massage therapy",
                quote: "Rachel was a great help, very professional and knowledgeable! She explained what was causing the lower back pain in my exercise routine and how to adequately adjust my shoulders to reduce straining.",
            },
            {
                name: "Charla C.",
                service: "Recovery",
                quote: "It’s my first time ever trying out an infrared sauna and I am loving every second of it. The cold water plunge is no joke but after awhile your body really gets use it and the benefits are endless.",
            },
            {
                name: "Kimberley B.",
                service: "Revibe",
                quote: "Revibe wellness has it all under one roof for all your therapy, healing, wellness needs. The therapists are competent and committed. The space is friendly and welcoming.",
            },
        ],
    },

    // shape sets the logo height: "square" logos run taller, "wide" ones shorter
    brands: {
        title: "Worked with",
        logos: [
            { name: "Nike", image: "/assets/images/brands/nike.png", width: 268, height: 140 },
            { name: "MLSE", image: "/assets/images/brands/mlse.png", width: 188, height: 140, shape: "square" },
            { name: "Raptors 905", image: "/assets/images/brands/raptors-905.png", width: 140, height: 140, shape: "square" },
            { name: "New Balance", image: "/assets/images/brands/new-balance.png", width: 302, height: 140 },
            { name: "On", image: "/assets/images/brands/on-running.png", width: 108, height: 140, shape: "square" },
            { name: "lululemon", image: "/assets/images/brands/lululemon.png", width: 136, height: 140, shape: "square" },
            { name: "LinkedIn", image: "/assets/images/brands/linkedin.png", width: 572, height: 140, shape: "wide" },
            { name: "Saje", image: "/assets/images/brands/saje.png", width: 224, height: 140 },
            { name: "F45", image: "/assets/images/brands/f45.png", width: 287, height: 140 },
            { name: "Jackalope", image: "/assets/images/brands/jackalope.png", width: 140, height: 140, shape: "square" },
        ],
    },

    regulators: {
        title: "Licensed care",
        text: "Every Revibe practitioner is registered with the college or body that governs their profession. Search any name on the public register.",
        items: [
            { profession: "Physiotherapy", name: "College of Physiotherapists of Ontario", url: "https://collegept.org/", image: "/assets/images/regulators/cpo.png", width: 574, height: 160 },
            { profession: "Chiropractic", name: "College of Chiropractors of Ontario", url: "https://cco.on.ca/", image: "/assets/images/regulators/cco.png", width: 382, height: 58, short: true },
            { profession: "Massage therapy", name: "College of Massage Therapists of Ontario", url: "https://www.cmto.com/", image: "/assets/images/regulators/cmto.png", width: 241, height: 130 },
            { profession: "Naturopathic medicine", name: "College of Naturopaths of Ontario", url: "https://www.collegeofnaturopaths.on.ca/", image: "/assets/images/regulators/cono.png", width: 379, height: 160 },
            { profession: "Performance training", name: "National Strength and Conditioning Association", url: "https://www.nsca.com/", image: "/assets/images/regulators/nsca.png", width: 571, height: 160 },
        ],
    },

    instagram: {
        title: "Moving better, together",
        handle: "@timetorevibe",
        url: "https://www.instagram.com/timetorevibe/",
        posts: [
            { caption: "Box breathing in the cold plunge", url: "https://www.instagram.com/p/DC19pudRJTT/", image: "/assets/images/instagram/cold-plunge-box-breathing.jpg" },
            { caption: "The infrared sauna room at Revibe", url: "https://www.instagram.com/p/DA85Kp4R15k/", image: "/assets/images/instagram/infrared-sauna-room.jpg" },
            { caption: "Plunging with physio Benson", url: "https://www.instagram.com/p/C19_uv1u5Hx/", image: "/assets/images/instagram/cold-plunge-physio-benson.jpg" },
            { caption: "Infrared sauna warms the body", url: "https://www.instagram.com/p/DT3k4IMERDo/", image: "/assets/images/instagram/infrared-sauna-benefits.jpg" },
            { caption: "Benefits of the cold plunge", url: "https://www.instagram.com/p/C1sRsA9JglI/", image: "/assets/images/instagram/cold-plunge-benefits.jpg" },
            { caption: "A guest relaxing in the infrared sauna", url: "https://www.instagram.com/p/DTlARA7kaBK/", image: "/assets/images/instagram/infrared-sauna-session.jpg" },
            { caption: "Getting into the cold plunge after a session", url: "https://www.instagram.com/p/C3bpA9HML2E/", image: "/assets/images/instagram/cold-plunge-recovery-session.jpg" },
            { caption: "Friday night in the sauna", url: "https://www.instagram.com/p/DVt23TpAWAG/", image: "/assets/images/instagram/infrared-sauna-relaxation.jpg" },
            { caption: "A calm cold plunge", url: "https://www.instagram.com/p/DVn_ENRjrK6/", image: "/assets/images/instagram/cold-plunge-relaxation.jpg" },
            { caption: "Red light in the infrared sauna", url: "https://www.instagram.com/p/DR2YLH5ERLW/", image: "/assets/images/instagram/woman-infrared-sauna.jpg" },
            { caption: "The Coldture control panel", url: "https://www.instagram.com/p/DP9qq_qj8Yv/", image: "/assets/images/instagram/coldture-infrared-sauna-control-panel.jpg" },
        ],
    },
};
