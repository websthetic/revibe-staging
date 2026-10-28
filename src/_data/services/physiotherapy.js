// Content for /services/physiotherapy/, from the dev handover. Rendered by layouts/service.html.
// Internal links are "/" until the real pages exist.
module.exports = {
    name: "Physiotherapy",
    // preselected in the Request to book form
    requestService: "Physiotherapy",

    hero: {
        title: "Physiotherapy",
        text: "Registered physiotherapists who find the reason you hurt, treat it with their hands and give you the exercise that keeps it fixed. Book an assessment at any Revibe clinic.",
        proofBold: "5.0 on Google",
        proof: "from 600+ reviews. No referral needed, and we bill most insurers directly.",
        // three stacked photos, echoing the three waves of the Revibe monogram
        images: [
            { src: "/assets/images/physiotherapy/hero-squat.jpg", alt: "Michael Leung, physiotherapist, taking a client on crutches back through a loaded squat", position: "center 45%" },
            { src: "/assets/images/physiotherapy/hero-back.jpg", alt: "Scott French treating a client's back", position: "center 70%" },
            { src: "/assets/images/services/performance-coaching.jpg", alt: "Zeeruk Rehman assessing an athlete's running on the curved treadmill", position: "center 55%" },
        ],
    },

    fit: {
        title: "Is physiotherapy right for me?",
        text: "If one of these sounds like you, it is worth an assessment. Each one is a thing we hear at the front desk every week, and each has a physiotherapy answer. If it turns out not to be a physio problem, the assessment is where you find that out and get pointed to the right person in the same building.",
        photo: { src: "/assets/images/physiotherapy/fit-hip.jpg", alt: "Scott French treating a client's hip" },
        // area places the tile in the desktop mosaic; colour is white (default), green, black or mint
        tiles: [
            { area: "a", colour: "white", wide: true, quote: "My lower back goes out every few months.", topic: "Back and neck pain", url: "/" },
            { area: "b", colour: "green", quote: "I cannot reach the top shelf without wincing.", topic: "Shoulder and rotator cuff", url: "/" },
            { area: "c", colour: "black", quote: "My knee has not been right since the game.", topic: "Knee, hip and ankle", url: "/" },
            { area: "d", colour: "mint", quote: "I had surgery and I am scared to move.", topic: "Post-operative rehabilitation", url: "/" },
            { area: "e", colour: "white", quote: "I am back to running and something keeps nagging.", topic: "Sports injuries", url: "/" },
            { area: "f", colour: "white", quote: "I got hurt weeks ago and it is not healing on its own.", topic: "Injury rehabilitation", url: "/" },
            { area: "g", colour: "green", wide: true, quote: "I have been told to rest it, and resting is not working.", topic: "Chronic pain and arthritis", url: "/" },
            { area: "h", colour: "black", quote: "My ankle keeps rolling since that sprain.", topic: "Sports physiotherapy", url: "/" },
        ],
    },

    firstAppointment: {
        title: "What happens at my first appointment?",
        text: "One appointment, four parts. You leave knowing what is wrong, what we are going to do about it and what you do at home between sessions.",
        steps: [
            {
                title: "We listen",
                text: "Your history, how it started, what makes it better and worse, and what you want to get back to. This is most of the diagnosis.",
                image: "/assets/images/first-session/conversation.jpg",
                alt: "Zeeruk Rehman, physiotherapist, taking notes with a client",
                position: "45% 55%",
            },
            {
                title: "We assess",
                text: "How you move, what is strong, what is tight and what is not doing its job. Physical tests on the table and on the floor, not guesswork.",
                image: "/assets/images/first-session/assessment.jpg",
                alt: "Zeeruk Rehman, physiotherapist, assessing a client's knee",
                position: "center 45%",
            },
            {
                title: "We treat",
                text: "Hands-on work starts in the first session: manual therapy, joint mobilization and soft tissue release aimed at the cause, not the sore spot.",
                image: "/assets/images/physiotherapy/step-treat.jpg",
                alt: "Michael Leung, physiotherapist, stretching a client's hip on the table",
                position: "center 55%",
            },
            {
                title: "We plan",
                text: "A plan with a target number of sessions and a short home program. Progress is measured against it at each session, not assumed.",
                image: "/assets/images/physiotherapy/step-plan.jpg",
                alt: "A Revibe physiotherapist talking a client through the plan",
                position: "40% 45%",
            },
        ],
    },

    types: {
        title: "Which type of physiotherapy do I need?",
        text: "Most people start with a general assessment and the physiotherapist steers from there. If you already know what you are dealing with, these are the areas our physiotherapists focus on. Each one has its own page.",
        items: [
            { label: "Sports physiotherapy", url: "/" },
            { label: "Manual therapy", url: "/" },
            { label: "Post-operative rehabilitation", url: "/" },
            { label: "Chronic pain", url: "/" },
            { label: "Pelvic physiotherapy", url: "/services/pelvic-physiotherapy/" },
            { label: "Vestibular rehabilitation", url: "/" },
            { label: "Neurological physiotherapy", url: "/" },
            { label: "Pediatric physiotherapy", url: "/" },
        ],
    },

    different: {
        title: "What makes physiotherapy at Revibe different?",
        text: "Revibe is a performance therapy clinic, not a physio room. The physiotherapy here is hands-on, measured and connected to everything else in the building.",
        licensed: {
            title: "Licensed, experienced",
            text: "Every physiotherapist at Revibe is registered with the College of Physiotherapists of Ontario, and most of them also coach",
            linkLabel: "performance training",
            linkUrl: "/performance-training/",
            // starts with a space; "." on its own works too
            textAfter: " and work with competitive athletes. You are treated by someone who understands load, not just pain.",
        },
        hands: {
            title: "Hands on, day one",
            text: "Treatment starts in the assessment: manual therapy, joint mobilization and soft tissue work with the physiotherapist's hands, then exercise that holds the change. Not a sheet of exercises and a follow-up in three weeks.",
            image: "/assets/images/physiotherapy/hands-on.jpg",
            alt: "A Revibe physiotherapist testing a client's leg on the table",
            position: "65% 45%",
        },
        coTreat: {
            title: "Clinicians who co-treat",
            text: "Physiotherapists, chiropractors, massage therapists, osteopaths and naturopathic doctors under one roof at every Revibe clinic, working the same case together when that is what gets you better. One assessment, one plan, and nobody asks you to start your story over.",
        },
        careMap: {
            title: "The Care Map",
            text: "Seven questions on how you sleep, move, recover and feel. Your physiotherapist uses it to see what is driving the pain, and it is how we tell you when the answer is a different service rather than more physio.",
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
        text: "Six registered physiotherapists across our clinics, licensed by the College of Physiotherapists of Ontario. You see the same physiotherapist for the whole plan.",
        members: ["scott-french", "michael-leung", "mitalee-dalvi", "zeeruk-rehman", "michael-ross", "christine-barnuevo"],
    },

    reviews: {
        title: "What do clients say about physiotherapy at Revibe?",
        rating: "5.0",
        count: "600+",
        allLabel: "Read every review on Google",
        // the first review is shown large, in green
        items: [
            {
                name: "Craig B.",
                initials: "CB",
                quote: "Revibe is the best physio place I've been to, my physiotherapist is Scott French and he is amazing. Gives great feedback and the progress I've been making after a knee surgery is tremendous. The staff here makes sure to get to know you and you're not treated like just another body everyone is extremely friendly.",
            },
            {
                name: "Youssef S.",
                initials: "YS",
                quote: "Michael Ross is an excellent physiotherapist, extremely knowledgeable, answered all my questions, developed a personalized treatment plan for me, and addressed the root cause of my problem. I feel better than ever. I highly recommend booking with him.",
            },
            {
                name: "Maria I.",
                initials: "MI",
                quote: "Went to see Zeeruk for physiotherapy regarding some shoulder pain, he was amazing and I felt a big difference after seeing him a few times. The clinic is also super warm and aesthetically pleasing, I’ve stayed after a session and enjoyed a smoothie in the waiting area!! Couldn’t recommend this clinic enough",
            },
        ],
    },

    statement: {
        image: "/assets/images/physiotherapy/statement-sprint.jpg",
        alt: "An athlete doing a resisted sprint",
        position: "center 35%",
    },

    insurance: {
        title: "Is physiotherapy covered by insurance?",
        text: "Most extended health plans in Ontario cover physiotherapy. Some plans ask for a doctor's note before they reimburse, so check yours or ask us before your first session.",
        cardTitle: "We bill most insurers directly",
        cardText: "Bring your card and we handle the claim at the front desk.",
        linkLabel: "See which plans we bill",
        linkUrl: "/direct-billing/",
    },

    related: {
        title: "Physiotherapy is one part of performance therapy",
        items: [
            { label: "Chiropractic", url: "/services/chiropractic/", image: "/assets/images/services/chiropractic-side.jpg", alt: "A Revibe chiropractor positioning a client on her side for an adjustment", position: "center 40%" },
            { label: "Massage therapy", url: "/services/massage/", image: "/assets/images/services/massage-hands.jpg", alt: "A massage therapist's hands working into a client's shoulder", position: "center 45%" },
            { label: "Osteopathy", url: "/services/osteopathy/", image: "/assets/images/services/osteopathy-leg.jpg", alt: "A Revibe osteopathic practitioner lifting a client's leg on the table", position: "center 35%" },
            { label: "Stretch therapy", url: "/stretch-spa/", image: "/assets/images/services/stretch-therapy.jpg", alt: "A Revibe massage therapist treating a client's hamstring", position: "center 40%" },
        ],
    },

    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. If the answer is not physiotherapy, it will say so.",
        button: "Take the Care Map",
    },

    locations: {
        title: "Where can I see a physiotherapist?",
        // clinic details come from clinics.js
        serviceLabel: "Physiotherapy",
        locationPage: "physiotherapy",
    },

    faq: {
        title: "Physiotherapy FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "What happens during a physiotherapy appointment?",
                a: "Your first appointment at any Revibe clinic is an assessment and a first treatment. The physiotherapist takes your history, tests how you move and what is strong or tight, starts hands-on treatment in the same session and leaves you with a plan and a short home program. Follow-up sessions are shorter and build on that plan.",
            },
            {
                q: "Do I need a referral to see a physiotherapist?",
                a: "No. In Ontario you can book a physiotherapy assessment at any Revibe clinic without a doctor's referral. The one exception is your insurance: some extended health plans ask for a doctor's note before they reimburse, so check your plan or ask us at the front desk before your first session.",
            },
            {
                q: "Does physiotherapy help with chronic lower back pain?",
                a: "Yes. Chronic lower back pain usually has a movement reason behind it, and that is what the physiotherapist treats: manual therapy for the stiff joints and tight tissue, then a short program that builds the strength and control that stops it coming back. Most people notice a change within the first few sessions.",
            },
            {
                q: "What types of physiotherapy treat knee injuries?",
                a: "Sports physiotherapy, manual therapy and post-operative rehabilitation all treat knee injuries. Ligament sprains, meniscus injuries, patellar tendinopathy and knee replacements each follow their own plan, but all combine hands-on treatment with progressive strengthening. Your physiotherapist at any Revibe clinic tells you which path fits your knee at the assessment.",
            },
            {
                q: "Can physiotherapy help neck pain?",
                a: "Yes. Neck pain from desk posture, whiplash, headaches or wear and tear responds well to physiotherapy. Treatment combines manual therapy for the neck and upper back, exercise for the deep neck muscles and shoulders, and practical changes to how you sit and sleep.",
            },
            {
                q: "How does physiotherapy treat rotator cuff injuries?",
                a: "Treatment starts by settling the pain and restoring range, then rebuilds strength in the rotator cuff and the muscles that control the shoulder blade. The last stage corrects the movement habits that overloaded the tendon in the first place, so the injury does not come back when you return to lifting, throwing or reaching overhead.",
            },
            {
                q: "How does post-operative physiotherapy work?",
                a: "It starts as soon as your surgeon clears you, often within the first week or two. Early sessions protect the healing tissue and reduce swelling, then range of motion, strength and everyday function are added in stages. Your physiotherapist follows your surgeon's protocol and tracks progress against it at every session.",
            },
            {
                q: "Can physiotherapy manage arthritis pain?",
                a: "Yes. Physiotherapy cannot reverse arthritis, but it can reduce pain and keep the joint moving. Gentle manual therapy, strengthening the muscles around the joint and changing how you load it through the day all lower the strain on it, which is what makes the difference day to day.",
            },
            {
                q: "Does physiotherapy help with balance problems?",
                a: "Yes. Balance problems from vertigo, inner ear conditions, neurological conditions or simply getting older are treated with vestibular rehabilitation and balance training. Sessions combine targeted exercises, strength work and gait practice, with the aim of reducing dizziness and the risk of a fall.",
            },
            {
                q: "What should I look for in a physiotherapy clinic?",
                a: "Look for registered physiotherapists licensed by the College of Physiotherapists of Ontario, experience with your specific condition, hands-on treatment rather than exercise sheets alone, a clear plan with a target number of sessions, and direct billing to your insurer. At every Revibe clinic you get all five, and the same physiotherapist for the whole plan.",
            },
        ],
    },

    // mobile bar fixed to the bottom of the screen
    stickyLabel: "Book physiotherapy",
};
