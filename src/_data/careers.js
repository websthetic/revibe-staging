// Content for the careers page, /join-our-team/ (content/pages/careers.html, careers.less, careers.js).
// "Apply to join Revibe" buttons open the careers pop-up (components/popup-forms/careers-popup-form.html).
// {accent} words in a title are wrapped in green by the page.
module.exports = {
    hero: {
        title: "Build the future of {performance} for real life",
        text: [
            "Revibe is a social wellness house delivering athlete-grade care, reimagined for everyone.",
            "We help people train, recover, and perform better, while building a culture where clinicians grow, collaborate, and genuinely enjoy the work they do.",
        ],
        primary: { label: "View open roles", url: "#open-roles" },
        secondary: { label: "Learn about Revibe", url: "/about-us/" },
        image: { src: "/assets/images/careers/meet-the-team.webp", alt: "The Revibe team in matching black shirts in front of the Revibe logo" },
    },

    whyJoin: {
        title: "A team you'll be {proud} to build with",
        belief: "Revibe was built around a simple belief: great care comes from great teams.",
        text: [
            "We've created an environment where clinicians support each other, learn from each other, and celebrate wins together.",
            "You'll work alongside people who care deeply about their craft, push each other to improve, and genuinely enjoy showing up to work every day.",
        ],
        image: { src: "/assets/images/careers/team-meeting-outside.webp", alt: "Revibe team members talking around a table outdoors at the team retreat" },
        caption: "Because when the team is strong, the care becomes exceptional.",
    },

    // same shape as home.instagram, shown with sections/home/instagram.html
    instagram: {
        title: "Moving better, together",
        handle: "@timetorevibe",
        url: "https://www.instagram.com/timetorevibe/",
        posts: [
            { caption: "Revibe awards night", url: "https://www.instagram.com/p/DUvwbW3kWb7/", image: "/assets/images/instagram/careers/revibe-awards-night.webp" },
            { caption: "The Revibe team retreat", url: "https://www.instagram.com/reel/DRcmqonkaxF/", image: "/assets/images/instagram/careers/revibe-team-retreat.webp" },
            { caption: "A Revibe team meeting", url: "https://www.instagram.com/reel/DI9CrettEo5/", image: "/assets/images/instagram/careers/revibe-team-meeting.webp" },
            { caption: "Team feature with Emily and Emilie", url: "https://www.instagram.com/reel/DFd8JJHMEkW/", image: "/assets/images/instagram/careers/revibe-team-feature-emily-emilie.webp" },
            { caption: "A treadmill workout in the gym", url: "https://www.instagram.com/reel/DFk9FVTR3Dd/", image: "/assets/images/instagram/careers/revibe-gym-treadmill-workout.webp" },
            { caption: "A Revibe community event", url: "https://www.instagram.com/reel/DEvE_PZx4NY/", image: "/assets/images/instagram/careers/revibe-community-event.webp" },
            { caption: "A Revibe community social night", url: "https://www.instagram.com/reel/C8nn6EzsjyH/", image: "/assets/images/instagram/careers/revibe-community-social-event.webp" },
            { caption: "Meet a Revibe team member", url: "https://www.instagram.com/reel/C8QE5q3P261/", image: "/assets/images/instagram/careers/revibe-team-member.webp" },
            { caption: "A Revibe team training session", url: "https://www.instagram.com/reel/C6zQSh6vYu8/", image: "/assets/images/instagram/careers/revibe-team-training-session.webp" },
        ],
    },

    culture: {
        title: "A culture that feels like a {team}",
        text: [
            "One of the first things people notice about Revibe is the energy in the clinics.",
            "People collaborate between rooms, share ideas, celebrate progress, and support each other when things get challenging.",
            "We take our work seriously, but we don't take ourselves too seriously.",
        ],
        listTitle: "Expect to see",
        list: ["Clinicians helping each other solve cases", "Team workouts and recovery", "Lots of laughter between treatments", "Teammates who want each other to succeed"],
        image: { src: "/assets/images/instagram/careers/revibe-team-meeting.webp", alt: "Revibe clinicians at an in-house education session" },
        quote: "It's a professional environment, but it feels more like a team than a job.",
    },

    // member keys are from _data/team.js (photo and name); role here is the one shown on the card
    inside: {
        title: "Inside {Revibe}",
        text: "The best way to understand Revibe is to hear from the people building it every day.",
        people: [
            {
                member: "scott-french",
                name: "Scott",
                role: "Physiotherapist",
                quote: "I've been at Revibe for almost 5 years, so I've had the chance to see the team grow, change, and really become what it is now. Through all of that, the culture and team dynamic have always stayed really great. One of the things I've appreciated most is the balance of having autonomy while also feeling supported to keep growing and take on different opportunities, whether that's leading run season programming, hosting workshops, collaborating with partners, and now, helping with clinician education and mentorship. It's been a place where I've felt trusted and encouraged to keep building. That's a big part of what makes it stand out.",
            },
            {
                member: "winson-cheong",
                name: "Winson",
                role: "Registered massage therapist",
                quote: "Revibe has been different from anywhere I've worked before. The support here is real, not just words on a wall, and I've actually been given the space to grow into the kind of clinician I want to be. I get to work with athletes, take on cases that challenge me, and there's always someone in your corner when you need it. The team culture is just genuinely good people who care about doing right by their patients, and that makes a difference every single day. I'm proud to be part of it.",
            },
            {
                member: "emily-wilson",
                name: "Emily",
                role: "Osteopathic manual practitioner",
                quote: "Being a part of the team at Revibe has been such a positive and rewarding experience for me. It has provided me with a space to grow as a practitioner, make connections with members of the community, and learn from a wonderful group of therapists. The team culture is collaborative, supportive, and fun, making it a place I look forward to being each day. Overall, Revibe is an environment that truly values professional growth, patient care and recovery, and a strong sense of connection within the team.",
            },
            {
                member: "michael-ross",
                name: "Michael",
                role: "Physiotherapist",
                quote: "Revibe has completely elevated my career, giving me the space to step into a more fulfilling and impactful role. Coming from a more traditional setting, I now have the opportunity to lead, educate, and continuously grow as both a clinician and professional. The environment encourages progression, autonomy, and innovation, which has accelerated my development in ways I didn't expect. The team is highly driven, collaborative, and aligned, creating a culture where high performance feels natural. It's a place where you're challenged, supported, and genuinely excited to show up every day.",
            },
        ],
    },

    growth: {
        title: "Learn {faster}, grow {faster}",
        text: [
            "One of the biggest advantages of joining Revibe, especially for new graduates, is access to structured education and mentorship.",
            "You won't be left to figure things out alone.",
        ],
        list: ["Weekly education sessions", "Mentorship from experienced clinicians", "In-house courses and skill training", "Collaborative case discussions", "Teach and mentor others"],
        image: { src: "/assets/images/careers/revibe-growth-development.webp", alt: "Two Revibe team members looking at a phone together on a deck" },
        goalLabel: "The goal is simple",
        goal: "Help clinicians become the best in their craft while building long-term careers in healthcare.",
    },

    different: {
        title: "What makes Revibe {different}",
        items: [
            { title: "Integrated care", text: "Our clinics bring together physiotherapists, chiropractors, massage therapists, osteopaths, and performance specialists working collaboratively." },
            { title: "Meaningful client outcomes", text: "Our treatment philosophy prioritizes quality over volume, allowing clinicians to build stronger relationships with guests." },
            { title: "Leadership opportunities", text: "Team members can grow into mentorship, education, leadership, and operational roles." },
            { title: "Long-term career paths", text: "Revibe is designed to support careers that evolve from clinical excellence into leadership and business growth." },
        ],
    },

    pathways: {
        steps: ["Start", "Grow", "Lead"],
        text: "At Revibe, your first role is just the beginning. As the company grows, so do the opportunities for our team.",
        tracks: [
            { key: "clinical", label: "Clinical", roles: ["Clinician", "High performing clinician", "Lead clinician", "Clinical director", "Partner / practice leader"] },
            { key: "performance", label: "Performance", roles: ["Performance coach", "High performance coach", "Lead coach", "Director of performance"] },
            { key: "operations", label: "Operations", roles: ["Guest experience coordinator", "Guest experience lead", "Operations manager", "Regional operations manager", "Regional operations leader"] },
        ],
    },

    thrive: {
        title: "You'll {thrive} at Revibe if you…",
        text: "We're building a team that genuinely loves what they do. If any of these sound like you, we'd love to connect.",
        list: [
            "Care deeply about helping people move and feel better",
            "Enjoy learning from other clinicians",
            "Value collaboration and shared knowledge",
            "Take pride in delivering exceptional care",
            "Want to grow alongside a fast-evolving wellness company",
        ],
        image: { src: "/assets/images/careers/two-women-smiling-outdoors.webp", alt: "Two Revibe team members smiling together on a park bench" },
    },

    // each role links to its job page (content/pages/job-listings/, _data/jobListings.js);
    // url "/" means the role has no page: the row opens the careers pop-up with the role picked
    roles: {
        title: "We're hiring {exceptional} practitioners",
        text: "Bring your expertise to a team that puts client experience first.",
        list: [
            { title: "Guest experience coordinator", team: "Operations", type: "Full-time / Part-time", url: "/join-our-team/guest-experience-coordinator/" },
            { title: "Massage therapist (RMT)", team: "Clinical", type: "Full-time / Part-time", url: "/join-our-team/massage-therapist/" },
            { title: "Chiropractor", team: "Clinical", type: "Full-time / Part-time", url: "/join-our-team/chiropractor/" },
            { title: "Physiotherapist", team: "Clinical", type: "Full-time / Part-time", url: "/join-our-team/physiotherapist/" },
            { title: "Osteopathic manual practitioner", team: "Clinical", type: "Full-time / Part-time", url: "/join-our-team/osteopathic-manual-practitioner/" },
            { title: "Naturopathic doctor", team: "Clinical", type: "Full-time / Part-time", url: "/join-our-team/naturopathic-doctor/" },
            { title: "Student / volunteer", team: "Open position", type: "Open roles", url: "/" },
        ],
    },

    cta: {
        title: "Come build something {with us}",
        text: [
            "Revibe is growing, and we're always looking for people who want to make a meaningful impact in healthcare.",
            "If you want to work in an environment where you can grow, collaborate, and help people perform better in life, we'd love to meet you.",
        ],
    },

    apply: "Apply to join Revibe",
};
