// Content for the about page, /about-us/ (content/pages/about-us.html, about.less, about.js).
// Each milestone has a photo gallery; photos are in src/assets/images/about/.
// {word} in a title is wrapped in green by the page.
const img = (file, alt, width, height) => ({ src: `/assets/images/about/${file}.webp`, alt, width, height });

module.exports = {
    hero: {
        title: "Moments that {shaped} Revibe.",
        text: "Revibe started with a simple moment: a rolled ankle that led Justice into Josh's small Etobicoke clinic. What followed has been a journey of growth, hard lessons, and an unshakeable belief in one mission: empowering communities through wellness.",
        image: { src: "/assets/images/careers/meet-the-team.webp", alt: "" },
    },
    milestones: [
        {
            date: "June 2019",
            title: "Revibe opens its doors",
            text: "Revibe officially opened its first location with a simple idea: create a place where people could move better, recover properly, and feel supported. What started as a vision between two young entrepreneurs quickly became a space where community and care naturally came together. From day one, the goal was bigger than just treatment. It was about helping people feel capable again.",
            images: [
                img("revibe-coming-soon-sign-storefront-june-2019", "The Revibe coming soon sign on the storefront in June 2019", 4032, 3024),
                img("revibe-toronto-event-photo-backdrop", "A Revibe event photo backdrop in Toronto", 3024, 4032),
                img("revibe-interior-space-work-area", "Inside the first Revibe space", 10144, 3736),
            ],
        },
        {
            date: "January 2020",
            title: "The world changes",
            text: "Only a few months after opening, COVID hit and the world slowed down. Like many small businesses, we had to adapt quickly and navigate uncertainty. It was a challenging time, but it strengthened our belief in the importance of health, movement, and community. The experience made us more resilient and more focused on our mission.",
            images: [
                img("revibe-time-to-revive-neon-sign-unboxing", "Unboxing the Time to Revibe neon sign", 4032, 3024),
                img("revibe-brand-storytelling-presentation-event", "A Revibe brand storytelling presentation", 1145, 2206),
                img("revibe-team-working-laptop-in-clinic", "The team working on a laptop in the clinic", 1600, 1066),
                img("revibe-team-meeting-recovery-lounge", "A team meeting in the recovery lounge", 1599, 899),
                img("revibe-normatec-recovery-area-clinic-interior", "The Normatec recovery area inside the clinic", 4032, 3024),
            ],
        },
        {
            date: "2022 to 2023",
            title: "A hard lesson downtown",
            text: "We opened a downtown location with big hopes for expanding the Revibe community. Ultimately, it didn't work out the way we planned. It was a tough chapter, but an important one. The lessons we learned there shaped how we think about growth today.",
            images: [
                img("revibe-studio-floor-plan-layout-diagram", "The floor plan for the downtown studio", 1284, 814),
                img("recess-logo-lit-wall-sign", "The lit Recess logo on the wall", 5472, 3648),
                img("revibe-training-area-gym-equipment-strength", "The strength training area downtown", 4000, 6000),
                img("revibe-treatment-room-physio-tables-interior", "A treatment room with physio tables", 4000, 6000),
                img("revibe-treatment-bays-curtain-privacy-physio", "Curtained treatment bays", 3024, 4032),
            ],
        },
        {
            date: "October 2023",
            title: "A new believer joins the mission",
            text: "Former NBA player Andrew Nicholson joined Revibe as an investor. Having someone who understands performance and recovery at the highest level believe in the vision meant a lot to our team. His support helped reinforce what we were building. It gave us confidence to keep pushing forward.",
            images: [
                img("andrew-nicholson-canada-basketball-player-headshot-jersey-44", "Andrew Nicholson in his Canada basketball jersey", 800, 1200),
                img("revibe-realign-therapy-station-sign-hallway", "The Realign therapy station sign in the hallway", 3024, 4032),
                img("revibe-relax-membership-team-photo-graphic", "A Relax membership graphic with the team", 1284, 2282),
            ],
        },
        {
            date: "2024 to today",
            title: "Growing the vision",
            text: "Revibe expanded with the opening of our Markham location. Since then, the business has continued to reach new financial and community milestones. Each step forward has helped strengthen the foundation we started building in 2019. And we remain focused on delivering athlete-grade care, reimagined for everyBody.",
            images: [
                img("recess-athletics-club-merch-shirt-hallway", "Recess Athletics Club shirt hanging in the hallway", 943, 1409),
                img("revibe-team-working-collaboration-table", "The team working together at a table", 1366, 2048),
                img("revibe-community-event-group-photo-outside-clinic", "A community event group photo outside the clinic", 1366, 2048),
            ],
        },
    ],
    // the last card, with the buttons
    outro: {
        title: "The story is still being {written}",
        text: "What started with two treatment tables has grown into something bigger, a community built around one idea:",
        callout: "Athlete-grade care, reimagined for everyBody.",
        after: "Every day, new guests, clinicians, and partners become part of what Revibe is building. If our story resonates with you, we'd love to have you along for the journey.",
        primary: { label: "Join our community", url: "https://www.instagram.com/timetorevibe/", external: true },
        secondary: [
            { label: "Join our team", url: "/join-our-team/" },
            { label: "Explore partnerships", url: "/contact-us/" },
        ],
        images: [
            img("revibe-2026-brand-photo", "The Revibe team in 2026", 943, 938),
            img("revibe-raptors-905-team-photo-treatment-room", "The Raptors 905 with the Revibe team in a treatment room", 1536, 2048),
            img("revibe-event-booth-tent-community-outreach", "A Revibe booth at a community event", 1080, 1350),
            img("revibe-athlete-grade-care-for-everybody-pattern-graphic", "Athlete-grade care for everyBody graphic", 375, 668),
        ],
    },
};
