// Thank you pages, from the dev handover. Each key is one page, rendered by layouts/thank-you.html.
// A page sets thankYou: "<key>" in its front matter (layouts/thank-you.html). Links to pages that are not built yet are "/".
module.exports = {
    "chiropractic-care": {
        intro: "Your chiropractic request is in. The clinic will reach out to confirm your first session with a licensed chiropractor.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Assessment first.", text: "Your history, how you move and what hurts, before any adjustment." },
            { title: "Come ready.", text: "Wear clothes you can move in, and bring your insurance card. We direct bill most plans." },
        ],
        // "While you wait:" links
        more: [
            { label: "Read how chiropractic works at Revibe", url: "/services/chiropractic/" },
            { label: "check direct billing", url: "/direct-billing/" },
        ],
        images: [
            { src: "/assets/images/services/chiropractic-side.jpg", position: "center 40%" },
            { src: "/assets/images/chiropractic/step-assess.jpg", position: "center 40%" },
            { src: "/assets/images/services/chiropractic.jpg", position: "center 40%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "cold-plunge": {
        intro: "Your cold plunge request is in. The clinic will reach out to confirm your session, and the team will guide your first plunge.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Thirty seconds counts.", text: "A first plunge of thirty seconds is normal. Most people double it within a month." },
            { title: "Come ready.", text: "Swimwear, a towel and a change of clothes. Showers are on site." },
        ],
        more: [
            { label: "See memberships from $79 a month", url: "/memberships/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/services/recovery.jpg", position: "center 75%" },
            { src: "/assets/images/recovery/plunge-above-2.jpg", position: "center 40%" },
            { src: "/assets/images/osteopathy/statement-plunge.jpg", position: "center 45%" },
        ],
        instagramLine: "See the recovery space before you come.",
    },
    "infrared-sauna": {
        intro: "Your infrared sauna request is in. The clinic will reach out to confirm your session.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Twelve to fifteen minutes.", text: "Long enough to get properly warm. Pair it with the cold plunge for contrast therapy." },
            { title: "Come ready.", text: "Swimwear, a towel, a change of clothes and water. Showers are on site." },
        ],
        more: [
            { label: "See memberships from $79 a month", url: "/memberships/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/recovery/sauna-solo.jpg", position: "center 45%" },
            { src: "/assets/images/recovery/sauna-group.jpg", position: "center 50%" },
            { src: "/assets/images/recovery/sauna-warm.jpg", position: "center 40%" },
        ],
        instagramLine: "See the recovery space before you come.",
    },
    "massage-therapy": {
        intro: "Your massage therapy request is in. The clinic will reach out to confirm your session with a registered massage therapist.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Tell us what you need.", text: "Deep tissue, therapeutic, sports or relaxation. Your RMT adjusts pressure as you go." },
            { title: "Come ready.", text: "Bring your insurance card. Massage is direct billed to most extended health plans." },
        ],
        more: [
            { label: "Read how massage works at Revibe", url: "/services/massage/" },
            { label: "check direct billing", url: "/direct-billing/" },
        ],
        images: [
            { src: "/assets/images/services/massage.jpg", position: "center 45%" },
            { src: "/assets/images/first-session/treatment.jpg", position: "center 45%" },
            { src: "/assets/images/services/massage-hands.jpg", position: "center 45%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "naturopathic": {
        intro: "Your naturopathic request is in. The clinic will reach out to confirm your consult with a naturopathic doctor, in person or virtual.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "A full health history.", text: "Sleep, energy, digestion, hormones and stress, looked at together." },
            { title: "Come ready.", text: "Recent bloodwork if you have it, and a list of what you take. Neither is required." },
        ],
        more: [
            { label: "Read how naturopathic care works", url: "/services/naturopathic-medicine/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/naturopathic/hero-tincture.jpg", position: "center 40%" },
            { src: "/assets/images/thank-you/naturopathic-lisbeth.jpg", position: "center 50%" },
            { src: "/assets/images/thank-you/naturopathic-kitchen.jpg", position: "55% 60%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "osteopathy": {
        intro: "Your osteopathy request is in. The clinic will reach out to confirm your first session.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Whole body assessment.", text: "Your osteopathic practitioner looks past the sore spot to what is loading it." },
            { title: "Come ready.", text: "Wear clothes you can move in, and bring your insurance card. Osteopathy has its own category on many plans." },
        ],
        more: [
            { label: "Read how osteopathy works at Revibe", url: "/services/osteopathy/" },
            { label: "check direct billing", url: "/direct-billing/" },
        ],
        images: [
            { src: "/assets/images/services/osteopathy.jpg", position: "55% 40%" },
            { src: "/assets/images/osteopathy/step-listen.jpg", position: "center 45%" },
            { src: "/assets/images/stretch/hero-leg.jpg", position: "center 45%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "pelvic": {
        intro: "Your pelvic physiotherapy request is in. The clinic will reach out to confirm your session with a pelvic physiotherapist.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "A private room, at your pace.", text: "Your physiotherapist explains every step first, and nothing happens without your consent." },
            { title: "Come ready.", text: "Bring your insurance card. Pelvic physiotherapy is billed as physiotherapy on most plans." },
        ],
        more: [
            { label: "Read how pelvic physiotherapy works", url: "/services/pelvic-physiotherapy/" },
            { label: "check direct billing", url: "/direct-billing/" },
        ],
        images: [
            { src: "/assets/images/pelvic/lounge-corner.jpg", position: "center 50%" },
            { src: "/assets/images/services/recovery.jpg", position: "center 75%" },
            { src: "/assets/images/thank-you/clinic-space.jpg", position: "center 50%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "physiotherapy": {
        intro: "Your physiotherapy request is in. The clinic will reach out to confirm your assessment with a registered physiotherapist.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Assessment and treatment.", text: "Your history, how you move, hands-on treatment and a plan, in the first session." },
            { title: "Come ready.", text: "Wear clothes you can move in, and bring your insurance card. We direct bill most plans." },
        ],
        more: [
            { label: "Read how physiotherapy works at Revibe", url: "/services/physiotherapy/" },
            { label: "check direct billing", url: "/direct-billing/" },
        ],
        images: [
            { src: "/assets/images/services/physiotherapy.jpg", position: "center 55%" },
            { src: "/assets/images/first-session/conversation.jpg", position: "center 45%" },
            { src: "/assets/images/physiotherapy/step-treat.jpg", position: "center 45%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "recovery-lounge": {
        intro: "Your recovery lounge request is in. The clinic will reach out to confirm your session.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "The team sets you up.", text: "Someone walks you through the space and the equipment on your first session." },
            { title: "Come ready.", text: "Comfortable clothes. Add swimwear and a towel if you plan to use the plunge or sauna." },
        ],
        more: [
            { label: "See memberships from $79 a month", url: "/memberships/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/pelvic/lounge.jpg", position: "center 55%" },
            { src: "/assets/images/pelvic/seating-nook.jpg", position: "center 50%" },
            { src: "/assets/images/recovery/plunge-lean.jpg", position: "center 45%" },
        ],
        instagramLine: "See the recovery space before you come.",
    },
    "relax-spa": {
        intro: "Your relax spa request is in. The clinic will reach out to confirm your session and walk you through what is included.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "We walk you through it.", text: "What your session includes and how long it runs, before you arrive." },
            { title: "Come ready.", text: "Comfortable clothes, a towel and water." },
        ],
        more: [
            { label: "See memberships from $79 a month", url: "/memberships/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/recovery/sauna-solo.jpg", position: "center 45%" },
            { src: "/assets/images/pelvic/lounge.jpg", position: "center 55%" },
            { src: "/assets/images/osteopathy/statement-plunge.jpg", position: "center 45%" },
        ],
        instagramLine: "See the recovery space before you come.",
    },
    "stretch-therapy": {
        intro: "Your stretch therapy request is in. The clinic will reach out to confirm your assisted stretch session.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Assisted, not forced.", text: "Your therapist takes you into each stretch and works with your breathing, never past what feels right." },
            { title: "Come ready.", text: "Wear clothes you can move in. No need to warm up first." },
        ],
        more: [
            { label: "Read how stretch therapy works at Revibe", url: "/stretch-spa/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/stretch/hero-leg.jpg", position: "center 45%" },
            { src: "/assets/images/physiotherapy/step-treat.jpg", position: "center 45%" },
            { src: "/assets/images/thank-you/stretch-space.jpg", position: "center 40%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "thermal-spa": {
        intro: "Your thermal spa request is in. The clinic will reach out to confirm your session.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you within one business day to confirm a time at Mississauga or Markham." },
            { title: "Heat, then cold.", text: "Infrared sauna and cold plunge in rounds. The team guides your first one." },
            { title: "Come ready.", text: "Swimwear, a towel and a change of clothes. Showers are on site." },
        ],
        more: [
            { label: "See memberships from $79 a month", url: "/memberships/" },
            { label: "take the two minute Care Map", url: "/#care-map" },
        ],
        images: [
            { src: "/assets/images/recovery/sauna-warm.jpg", position: "center 40%" },
            { src: "/assets/images/recovery/plunge-above-2.jpg", position: "center 40%" },
            { src: "/assets/images/recovery/sauna-group.jpg", position: "center 50%" },
        ],
        instagramLine: "See the recovery space before you come.",
    },
    "general": {
        intro: "Your message is in. Someone from the Revibe team will get back to you by phone or email within one business day.",
        steps: [
            { title: "We read it.", text: "Your message goes to the clinic you chose, and the right person picks it up." },
            { title: "We reply.", text: "By phone or email, with an answer or a time that works for you." },
            { title: "Or book now.", text: "If you already know what you need, book directly at either clinic below." },
        ],
        more: [
            { label: "Take the two minute Care Map", url: "/#care-map" },
            { label: "meet the team", url: "/" },
        ],
        images: [
            { src: "/assets/images/locations/mississauga.jpg", position: "center 50%" },
            { src: "/assets/images/thank-you/clinic-lounge.jpg", position: "center 35%" },
            { src: "/assets/images/pelvic/seating-nook.jpg", position: "center 50%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
    "therapy-20-off": {
        intro: "Your 20% off request is in. Our team will reach out by phone or email to confirm your first session and your 20% off.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you to confirm a time that works for you." },
            { title: "Your first session.", text: "A short intake on what hurts and what you need, then the full treatment time. Wear clothing you can move in and bring your insurance card." },
            { title: "20% off at the clinic.", text: "The discount comes off your first session when you pay. Full terms are confirmed when the clinic calls you." },
        ],
        more: [
            { label: "see the insurers we bill directly", url: "/direct-billing/" },
            { label: "browse all services", url: "/services-amenities/" },
        ],
        images: [
            { src: "/assets/images/services/massage-hands.jpg", position: "center 45%" },
            { src: "/assets/images/physiotherapy/fit-hip.jpg", position: "center 22%" },
            { src: "/assets/images/thank-you/chiro-neck.jpg", position: "60% 55%" },
        ],
        instagramLine: "See the treatment rooms before you come.",
    },
    "recovery-10-pack": {
        intro: "Your Recovery 10 pack request is in. We will reach out by phone or email to set it up.",
        steps: [
            { title: "We confirm the details.", text: "Expect to hear from the clinic within one business day to confirm the pack, take payment and, if it is a gift, sort out the recipient details." },
            { title: "Book your first session.", text: "Once the pack is set up, choose a clinic below and pick cold plunge, infrared sauna or a contrast session. Thirty minutes each, valid for six months." },
            { title: "Bring a swimsuit.", text: "Towels are provided. Arrive five minutes early and start the plunge at thirty seconds if it is your first time." },
        ],
        // replaces "While you wait:" and the closing full stop
        morePrefix: "Thinking about going weekly?",
        moreAfter: ", from $79 a month.",
        more: [
            { label: "See the memberships", url: "/memberships/" },
        ],
        images: [
            { src: "/assets/images/osteopathy/statement-plunge.jpg", position: "center 45%" },
            { src: "/assets/images/thank-you/recovery-room.jpg", position: "center 60%" },
            { src: "/assets/images/recovery/sauna-warm.jpg", position: "center 40%" },
        ],
        instagramLine: "See the recovery room before you come.",
    },
    "free-consultation": {
        intro: "Your free performance consultation request is in. A performance coach will reach out by phone or email to confirm your time, in person or virtual.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you to confirm a time that works for you." },
            { title: "Fifteen minutes with a coach.", text: "Your goal, your history, what has been getting in the way. A conversation, not a workout." },
            { title: "You decide.", text: "You leave with a recommended plan. Starting a 12, 24 or 48 session block is your call, after the consultation." },
        ],
        more: [
            { label: "take the two minute Care Map", url: "/#care-map" },
            { label: "read how performance training works", url: "/performance-training/" },
        ],
        images: [
            { src: "/assets/images/physiotherapy/statement-sprint.jpg", position: "center 10%" },
            { src: "/assets/images/services/performance-coaching.jpg", position: "center 40%" },
            { src: "/assets/images/hurt/gym-coaching.jpg", position: "40% 60%" },
        ],
        instagramLine: "See the gym before you come.",
    },
    // /services/naturopathic-medicine/free-consultation/thank-you/
    "naturopathic-consultation": {
        intro: "Your free naturopathic consultation request is in. A naturopathic doctor will reach out by phone or email to confirm your consultation, in person or virtual.",
        steps: [
            { title: "We confirm your time.", text: "The clinic will call or email you to confirm a time that works for you." },
            { title: "Your consultation.", text: "A naturopathic doctor goes through what you are dealing with and what to look at first. Bring any recent bloodwork if you have it." },
            { title: "You decide.", text: "You leave with a recommendation. Any testing or plan is your call after the consultation, not during it." },
        ],
        more: [
            { label: "take the two minute Care Map", url: "/#care-map" },
            { label: "read about naturopathic medicine at Revibe", url: "/services/naturopathic-medicine/" },
        ],
        images: [
            { src: "/assets/images/naturopathic/hero-tincture.jpg", position: "center 45%" },
            { src: "/assets/images/naturopathic/fit-tang.jpg", position: "center 40%" },
            { src: "/assets/images/naturopathic/step-test.jpg", position: "center 40%" },
        ],
        instagramLine: "See the clinic before you come.",
    },
};
