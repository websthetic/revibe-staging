// Content for /services/pelvic-physiotherapy/, from the dev handover. Rendered by layouts/service.html.
// Internal links are "/" until the real pages exist. This page has no reviews section (no reviews key).
module.exports = {
    name: "Pelvic physiotherapy",
    // preselected in the Request to book form
    requestService: "Pelvic floor physiotherapy",

    hero: {
        title: "Pelvic physiotherapy",
        text: "Registered pelvic floor physiotherapists for leaking, pelvic pain, pregnancy and postpartum recovery, prolapse and men's pelvic health. Private, unhurried care at every Revibe clinic.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. Your session is in a closed room, and an internal assessment is always optional.",
        images: [
            { src: "/assets/images/pelvic/hero-stretch.jpg", alt: "A woman stretching her arms overhead", position: "center 35%" },
            { src: "/assets/images/services/pelvic-health.jpg", alt: "Christine Barnuevo, pelvic floor physiotherapist, walking a client through a model of the pelvis", position: "92% 52%" },
            { src: "/assets/images/pelvic/hip.jpg", alt: "A practitioner’s hand at a woman’s hip during treatment", position: "center 58%" },
        ],
    },

    fit: {
        title: "Is pelvic physiotherapy right for me?",
        text: "Most people wait years before they book, because they think it is normal or they are embarrassed. It is common and it is treatable. If one of these sounds like you, book an assessment. Everything you tell us stays in the room.",
        photo: { src: "/assets/images/pelvic/welcome-desk.jpg", alt: "The welcome desk at Revibe", position: "center 45%" },
        // each tile jumps to its card in "What does pelvic physiotherapy treat?"
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "I leak when I cough, laugh or run.", topic: "Urinary incontinence", url: "#incontinence" },
            { area: "b", colour: "green", quote: "I always need to know where the bathroom is.", topic: "Urinary incontinence", url: "#incontinence" },
            { area: "c", colour: "black", quote: "Something feels heavy or like it is falling.", topic: "Prolapse", url: "#prolapse" },
            { area: "d", colour: "mint", quote: "Sex hurts.", topic: "Pelvic pain", url: "#pelvic-pain" },
            { area: "e", colour: "white", quote: "I had a baby and nothing feels the same.", topic: "Postpartum recovery", url: "#postpartum" },
            { area: "f", colour: "white", quote: "I am pregnant and want to prepare for birth.", topic: "Pregnancy", url: "#pregnancy" },
            { area: "g", colour: "green", wide: true, quote: "I had prostate surgery and I am leaking.", topic: "Men's pelvic health", url: "#mens-health" },
            { area: "h", colour: "black", quote: "I strain, or I cannot fully empty.", topic: "Bowel concerns", url: "#bowel" },
        ],
    },

    firstAppointment: {
        title: "What happens at my first pelvic physiotherapy appointment?",
        text: "A long, private first session. Nothing happens without your consent, and an internal assessment is optional.",
        steps: [
            {
                title: "We listen",
                text: "Your history, bladder and bowel habits, pain, pregnancies, surgeries and what you want to get back to. This is most of the picture.",
                image: "/assets/images/pelvic/seating-nook.jpg",
                alt: "A quiet seating nook at Revibe",
                position: "center 40%",
            },
            {
                title: "We assess",
                text: "Posture, breathing, how your core and pelvic floor work together. An internal assessment only if you want it, explained first.",
                image: "/assets/images/pelvic/hip.jpg",
                alt: "A practitioner's hand at a woman's hip as she lies on the table",
                position: "center 50%",
            },
            {
                title: "We treat",
                text: "Manual therapy, pelvic floor training with biofeedback where it helps, and bladder or bowel retraining.",
                image: "/assets/images/first-session/treatment.jpg",
                alt: "A practitioner's hands at a woman's neck and shoulder as she lies on her side",
                position: "center 50%",
            },
            {
                title: "We plan",
                text: "A home program and a plan with a target number of sessions. Most people start to notice change within a few weeks.",
                image: "/assets/images/pelvic/lounge.jpg",
                alt: "The bright, open lounge at Revibe Mississauga",
                position: "center 55%",
            },
        ],
    },

    types: {
        title: "What does pelvic physiotherapy treat?",
        text: "The assessment decides the plan. These are the conditions our pelvic floor physiotherapists treat most.",
        items: [
            { label: "Urinary incontinence", id: "incontinence", text: "Stress, urge and mixed incontinence, overactive bladder, incomplete emptying." },
            { label: "Pelvic pain", id: "pelvic-pain", text: "Painful intercourse, chronic pelvic pain, endometriosis and vulvodynia support." },
            { label: "Pregnancy", id: "pregnancy", text: "Pelvic girdle and back pain, preparing the pelvic floor for labour and delivery." },
            { label: "Postpartum recovery", id: "postpartum", text: "Diastasis recti, C-section and perineal scar tissue, return to exercise." },
            { label: "Prolapse", id: "prolapse", text: "Strengthening and movement strategies to reduce symptoms, often without surgery." },
            { label: "Bowel concerns", id: "bowel", text: "Constipation, straining and fecal incontinence, through coordination and mechanics." },
            { label: "Men's pelvic health", id: "mens-health", text: "Post-prostatectomy incontinence, chronic pelvic pain and erectile dysfunction linked to muscle tension." },
            { label: "Menopause", id: "menopause", text: "Dryness, discomfort and changes in bladder control." },
        ],
    },

    different: {
        title: "What makes pelvic physiotherapy at Revibe different?",
        text: "Pelvic health at Revibe sits inside a performance therapy clinic, so the care is private and unhurried, and the rest of your body is treated by the same team.",
        licensed: {
            title: "Licensed, experienced",
            text: "Registered physiotherapists with additional training in pelvic health, licensed by the College of Physiotherapists of Ontario.",
        },
        hands: {
            title: "Private, your pace",
            text: "A closed room, a long first session, and nothing that happens without your consent. An internal assessment is optional, always.",
            image: "/assets/images/pelvic/lounge-corner.jpg",
            alt: "A quiet corner of the Revibe lounge",
            position: "center 55%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, chiropractors, massage therapists, osteopaths and naturopathic doctors under one roof at every Revibe clinic, treating the same case together when that is what gets you better.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. It helps your physiotherapist see what else is contributing, and tells you when another service should be involved.",
            linkLabel: "Take the Care Map",
        },
        billing: {
            title: "Direct billing",
            text: "Pelvic physiotherapy is billed as physiotherapy. We bill most extended health insurers directly.",
            linkLabel: "See which plans we bill",
            linkUrl: "/direct-billing/",
        },
    },

    team: {
        title: "Who will treat me?",
        text: "Christine Barnuevo and Mitalee Dalvi, registered pelvic floor physiotherapists, with the Revibe physiotherapy team behind them. You see the same physiotherapist for the whole plan.",
        members: ["christine-barnuevo", "mitalee-dalvi"],
        // shown to screen readers after each name instead of their usual role
        role: "Pelvic floor physiotherapist",
    },

    statement: {
        image: "/assets/images/osteopathy/statement-plunge.jpg",
        alt: "A hand trailing through the cold plunge water",
        position: "center 45%",
    },

    insurance: {
        title: "Is pelvic physiotherapy covered by insurance?",
        text: "Pelvic physiotherapy is physiotherapy, so most extended health plans in Ontario cover it. Check your plan or ask us before your first session and we will tell you what is covered.",
        cardTitle: "We bill most insurers directly",
        cardText: "Bring your card and we handle the claim at the front desk.",
        linkLabel: "See which plans we bill",
        linkUrl: "/direct-billing/",
    },

    related: {
        title: "Pelvic health is one part of performance therapy",
        items: [
            { label: "Physiotherapy", url: "/services/physiotherapy/", image: "/assets/images/services/physiotherapy.jpg", alt: "Michael Leung, physiotherapist, working a client's hip on the table", position: "center 55%" },
            { label: "Chiropractic", url: "/services/chiropractic/", image: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 40%" },
            { label: "Massage therapy", url: "/services/massage/", image: "/assets/images/services/massage-hands.jpg", alt: "A massage therapist's hands working into a client's shoulder", position: "center 45%" },
            { label: "Osteopathy", url: "/services/osteopathy/", image: "/assets/images/services/osteopathy-leg.jpg", alt: "A Revibe osteopathic practitioner lifting a client's leg on the table", position: "center 35%" },
            { label: "Stretch therapy", url: "/stretch-spa/", image: "/assets/images/services/stretch-therapy.jpg", alt: "A Revibe therapist stretching a client's leg up from the table", position: "center 32%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If something else is contributing, it will say so.",
        button: "Take the Care Map",
    },

    locations: {
        title: "Where can I see a pelvic physiotherapist?",
        serviceLabel: "Pelvic floor physio",
        locationPage: "pelvic-floor",
    },

    faq: {
        title: "Pelvic physiotherapy FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What happens during a pelvic floor assessment?",
                a: "Your first session at any Revibe clinic is in a private room. The physiotherapist takes your history, including bladder and bowel habits, pain and any pregnancies or surgeries, then looks at your posture, breathing and how your core and pelvic floor work together. An internal assessment may be recommended but it is optional and only happens with your consent. You leave with a plan.",
            },
            {
                q: "When should I see a pelvic floor physiotherapist?",
                a: "When leaking, urgency, heaviness, pelvic pain, pain with sex, straining or trouble emptying is part of your life, or when you are pregnant or recovering after birth or prostate surgery. Most people wait years because they think it is normal. It is common and it is treatable, so there is no need to wait.",
            },
            {
                q: "Will pelvic floor physiotherapy be uncomfortable?",
                a: "It should not be. Your session is in a closed room, everything is explained before it happens and nothing happens without your consent. An internal assessment is optional, always. Much of the first session is a conversation about your history and what you want to get back to.",
            },
            {
                q: "Can pelvic floor physiotherapy help with prolapse?",
                a: "Yes. Treatment uses strengthening and movement strategies to reduce the heaviness and other symptoms of prolapse, often without surgery. Your physiotherapist looks at how your core and pelvic floor work together, then builds a home program around it.",
            },
            {
                q: "Do men need pelvic floor physiotherapy?",
                a: "Men have a pelvic floor too. Men's pelvic health at Revibe covers post-prostatectomy incontinence, chronic pelvic pain and erectile dysfunction linked to muscle tension, as well as bowel and bladder concerns. The assessment is private and nothing happens without your consent.",
            },
            {
                q: "How long does pelvic floor physiotherapy take?",
                a: "It depends on what you are treating, which is why your first session ends with a plan and a target number of sessions. Most people start to notice change within a few weeks, and progress is checked against the plan as you go.",
            },
            {
                q: "Can I do pelvic floor exercises at home?",
                a: "Yes, and they are a big part of the plan. Your physiotherapist gives you a home program after the assessment. Getting the exercises right on your own is harder than it sounds, which is what the assessment, and biofeedback where it helps, is for.",
            },
            {
                q: "What should I wear to pelvic floor physiotherapy?",
                a: "Comfortable clothes you can move in, because your physiotherapist will look at your posture, breathing and how you move.",
            },
            {
                q: "Is pelvic floor physiotherapy covered by insurance?",
                a: "Pelvic physiotherapy is billed as physiotherapy, so most extended health plans in Ontario cover it. We bill most insurers directly at every Revibe clinic: bring your card and we handle the claim at the front desk. Check your plan or ask us before your first session.",
            },
            {
                q: "How do I prepare for my first appointment?",
                a: "Bring your insurance card and think ahead about your history: bladder and bowel habits, pain, pregnancies, surgeries and what you want to get back to, because that is where the first session starts. Wear comfortable clothes. If you have questions about the internal assessment, ask first; it is optional.",
            },
        ],
    },

    stickyLabel: "Book pelvic physiotherapy",
};
