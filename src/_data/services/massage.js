// Content for /services/massage/, from the dev handover. Rendered by layouts/service.html.
// Internal links are "/" until the real pages exist.
module.exports = {
    name: "Massage therapy",
    // preselected in the Request to book form
    requestService: "Massage therapy",

    hero: {
        title: "Massage therapy",
        text: "Registered massage therapists who work the muscle, not just the surface. Deep tissue, sports, Swedish and prenatal massage at every Revibe clinic, planned around what hurts and what you do all day.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. Every massage therapist here is a registered RMT, and we bill most insurers directly.",
        images: [
            { src: "/assets/images/services/massage.jpg", alt: "A massage therapist's hands working along a client's back", position: "center 55%" },
            { src: "/assets/images/first-session/treatment.jpg", alt: "A registered massage therapist working into a client's neck and shoulder", position: "center 45%" },
            { src: "/assets/images/massage/hero-cupping.jpg", alt: "A massage therapist placing a cup during a cupping session", position: "center 55%" },
        ],
    },

    fit: {
        title: "Is massage therapy right for me?",
        text: "If one of these sounds like you, book an assessment with a registered massage therapist. Each one is something we hear at the front desk every week. If what you need is a physiotherapist or a chiropractor instead, your RMT will say so and they are down the hall.",
        // no photo: the eight tiles fill the mosaic; each jumps to its row in "Which type of massage do I need?"
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "I carry all my stress in my neck and shoulders and they never let go.", topic: "Trigger point therapy", url: "#trigger-point" },
            { area: "b", colour: "green", quote: "My back is tight by the end of every workday.", topic: "Deep tissue massage", url: "#deep-tissue" },
            { area: "c", colour: "black", quote: "I train hard, my legs never fully recover and I feel it every session.", topic: "Sports massage", url: "#sports" },
            { area: "d", colour: "mint", quote: "I get tension headaches that start in my neck.", topic: "Trigger point therapy", url: "#trigger-point" },
            { area: "e", colour: "white", quote: "I stand all day at work and by the end my legs and feet are done.", topic: "Myofascial release", url: "#myofascial" },
            { area: "f", colour: "white", quote: "I am pregnant and cannot get comfortable.", topic: "Prenatal and postnatal massage", url: "#prenatal" },
            { area: "g", colour: "green", wide: true, quote: "My muscles are always tight and I want to try cupping.", topic: "Cupping", url: "#cupping" },
            { area: "h", colour: "black", quote: "I need an hour where I can finally switch off.", topic: "Swedish massage", url: "#swedish" },
        ],
    },

    firstAppointment: {
        title: "What happens at my first massage?",
        text: "Fifteen minutes of talking, then the table. You leave knowing what your therapist found and what to do between sessions.",
        steps: [
            {
                title: "We listen",
                text: "Where it hurts, how long, what you do for work and training, and anything we should avoid. Your RMT reads this before you are on the table.",
                image: "/assets/images/massage/step-listen.jpg",
                alt: "A Revibe massage therapist talking with a client as she works his leg",
                position: "58% 30%",
            },
            {
                title: "We check",
                text: "A few movement and pressure tests to find what is actually tight and what is referring pain from somewhere else.",
                image: "/assets/images/services/massage-hands.jpg",
                alt: "A massage therapist's hands working into a client's shoulder",
                position: "center 45%",
            },
            {
                title: "We treat",
                text: "Hands-on treatment matched to the finding: deep tissue, trigger point, sports or Swedish technique, with the pressure you ask for.",
                image: "/assets/images/massage/step-treat.jpg",
                alt: "A massage therapist working through a client's shoulder as she lies on her side",
                position: "center 40%",
            },
            {
                title: "We plan",
                text: "Stretches or self-care for between sessions, and an honest view on how often to come back. Many people need less than they expect.",
                image: "/assets/images/massage/step-plan.jpg",
                alt: "A massage therapist using cups along a client's back",
                position: "center 50%",
            },
        ],
    },

    types: {
        title: "Which type of massage do I need?",
        text: "You do not have to choose. Book a massage and tell your RMT what you want from it; they pick the technique. If you already know, these are the ones we offer.",
        items: [
            { label: "Deep tissue massage", id: "deep-tissue", url: "/" },
            { label: "Sports massage", id: "sports", url: "/" },
            { label: "Swedish massage", id: "swedish", url: "/" },
            { label: "Trigger point therapy", id: "trigger-point", url: "/" },
            { label: "Prenatal and postnatal", id: "prenatal", url: "/" },
            { label: "Myofascial release", id: "myofascial", url: "/" },
            { label: "Lymphatic drainage", id: "lymphatic", url: "/" },
            { label: "Cupping", id: "cupping", url: "/" },
        ],
    },

    different: {
        title: "What makes massage at Revibe different?",
        text: "Revibe is a performance therapy clinic. Massage here is treatment with a plan behind it, not a spa session, and it is connected to everything else in the building.",
        licensed: {
            title: "Registered therapists",
            text: "Every massage therapist at Revibe is a registered RMT with the College of Massage Therapists of Ontario. Your plan covers it, and your therapist knows anatomy, not just technique.",
        },
        hands: {
            title: "Treatment, not pampering",
            text: "You come in with a problem and leave with it addressed: a finding, the pressure that matches it, and what to do between sessions.",
            image: "/assets/images/massage/treatment-hands.jpg",
            alt: "A massage therapist's hands working into a client's back",
            position: "center 50%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, chiropractors, osteopaths and naturopathic doctors under one roof at every Revibe clinic, treating the same case together when that is what gets you better.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. It tells your RMT what is driving the tension, and tells you when the answer is a different service.",
            linkLabel: "Take the Care Map",
        },
        billing: {
            title: "Direct billing",
            text: "We bill most extended health insurers directly. Bring your card, we handle the claim, and you leave without the paperwork.",
            linkLabel: "See which plans we bill",
            linkUrl: "/direct-billing/",
        },
    },

    team: {
        title: "Who will treat me?",
        text: "Seven registered massage therapists across our clinics, registered with the College of Massage Therapists of Ontario.",
        // desktop: one row that slides sideways while the section stays pinned (team-scroll.js)
        scroll: true,
        members: ["rachel-murray", "kyle-sunga", "winson-cheong", "gauri-khandke", "vincent-nguyen", "joseph-de-leon", "angelii-mercurius"],
    },

    reviews: {
        title: "What do clients say about massage therapy at Revibe?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        items: [
            {
                name: "Noel",
                initials: "N",
                quote: "I’ve been working with RMT Kyle for a while now to deal with a nagging groin injury. Kyle has been able help me heal my injury with his incredible massages and has given me exercises on how to loosen up my groin. I’m glad to have found an RMT that is so skilled in his craft, his massage techniques are truly magical.",
            },
            {
                name: "Shiyamala D.",
                initials: "SD",
                quote: "Winson Cheong (RMT) got me running pain free again in just a couple of weeks! He combined different types of treatments and even adapted and re-wrote my marathon plan to help me get back on the road in time for my race. He goes above and beyond for his patients. I can’t recommend him enough!",
            },
            {
                name: "Edith F.",
                initials: "EF",
                quote: "If you’re looking for a massage therapist, I highly recommend Rachel Murray at Revibe. I’ve received the most amazing deep tissue and relaxation massages recently and can’t wait to go back!",
            },
        ],
    },

    statement: {
        image: "/assets/images/massage/statement-shoulder.jpg",
        alt: "A massage therapist's hands at a client's shoulder blade",
        position: "center 50%",
    },

    insurance: {
        title: "Is massage therapy covered by insurance?",
        text: "Most extended health plans in Ontario cover massage therapy by a registered massage therapist. Check your plan or ask us before your first session and we will tell you what is covered.",
        cardTitle: "We bill most insurers directly",
        cardText: "Bring your card and we handle the claim at the front desk.",
        linkLabel: "See which plans we bill",
        linkUrl: "/direct-billing/",
    },

    related: {
        title: "Massage is one part of performance therapy",
        items: [
            { label: "Physiotherapy", url: "/services/physiotherapy/", image: "/assets/images/services/physiotherapy.jpg", alt: "Michael Leung, physiotherapist, working a client's hip on the table", position: "center 55%" },
            { label: "Chiropractic", url: "/services/chiropractic/", image: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 40%" },
            { label: "Osteopathy", url: "/services/osteopathy/", image: "/assets/images/services/osteopathy-leg.jpg", alt: "A Revibe osteopathic practitioner lifting a client's leg on the table", position: "center 35%" },
            { label: "Stretch therapy", url: "/stretch-spa/", image: "/assets/images/services/stretch-therapy-leg.jpg", alt: "Rachel Murray, massage therapist, stretching a client's leg on the table", position: "60% 30%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If the answer is not massage, it will say so.",
        button: "Take the Care Map",
    },

    locations: {
        title: "Where can I book a massage?",
        serviceLabel: "Massage therapy",
        locationPage: "massage",
    },

    faq: {
        title: "Massage therapy FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What should I expect during a massage therapy appointment?",
                a: "Your first appointment at any Revibe clinic starts with a short conversation about what hurts, your history and what you want from the session, then a few quick checks before you are on the table. Treatment is matched to what the therapist finds, at the pressure you ask for, and you leave with simple self-care for between sessions.",
            },
            {
                q: "Can massage therapy help with chronic back pain?",
                a: "Yes. Chronic back tension usually sits in the deeper layers of muscle, which is what deep tissue, trigger point and myofascial work reach. Your RMT checks what is actually tight and what is referring pain from somewhere else, treats it at the pressure you ask for and gives you self-care for between sessions. If a physiotherapist or chiropractor should see you as well, they are down the hall.",
            },
            {
                q: "Is massage therapy good for neck and shoulder tension?",
                a: "Yes. Neck and shoulder tension is one of the things we hear at the front desk every week. Your RMT finds the tight muscles and the knots that refer pain to your head and shoulders, treats them with deep tissue or trigger point work and gives you stretches to keep the tension down between sessions.",
            },
            {
                q: "Does massage help with sports injuries and recovery?",
                a: "Yes. Sports massage uses stretching, trigger point and compression work for athletes before and after training. For an injury, your RMT works with the physiotherapists and chiropractors at every Revibe clinic, so the massage fits the rest of your rehab rather than running separately.",
            },
            {
                q: "Can massage therapy relieve sciatica?",
                a: "It can help. Pain that runs from the hip down the leg is often driven by tight muscles around the hip and lower back, which your RMT can treat directly. A few movement and pressure tests show what is tight and what is referring pain from somewhere else. If the cause needs a physiotherapist or chiropractor, your RMT will say so.",
            },
            {
                q: "Is massage effective for tension headaches?",
                a: "Yes, for headaches that start in the neck. Trigger point therapy releases the knots that refer pain to your head, shoulders and back, and deep tissue work eases the neck and upper back tension behind them. Your RMT also gives you simple self-care for between sessions.",
            },
            {
                q: "Is massage safe during pregnancy?",
                a: "Prenatal massage at every Revibe clinic uses safe positioning for pregnancy discomfort, and postnatal massage helps with recovery after birth. Tell the front desk you are pregnant when you book so you are matched with an RMT who does prenatal work, and tell your therapist anything we should avoid.",
            },
            {
                q: "How often should I get a massage?",
                a: "It depends on what you are coming in for. At the end of your session your RMT gives you an honest view on how often to come back, along with stretches or self-care for between sessions. Many people need less than they expect.",
            },
            {
                q: "Is massage therapy covered by insurance?",
                a: "Most extended health plans in Ontario cover massage therapy by a registered massage therapist. Check your plan or ask us before your first session and we will tell you what is covered. We bill most insurers directly at every Revibe clinic: bring your card and we handle the claim at the front desk.",
            },
            {
                q: "Why choose Revibe for massage therapy?",
                a: "Every massage therapist at Revibe is registered with the College of Massage Therapists of Ontario, and massage here is treatment with a plan behind it, not pampering. Your RMT works under one roof with physiotherapists, chiropractors, osteopaths and naturopathic doctors at every Revibe clinic, and we bill most extended health insurers directly.",
            },
        ],
    },

    stickyLabel: "Book massage therapy",
};
