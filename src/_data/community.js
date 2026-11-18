// Content for /community/ (content/pages/community.html, community.less, community.js).
// Photos are from the Revibe Google Drive event folders, resized to 900px (assets/images/community/).
const img = (file) => `/assets/images/community/${file}`;

module.exports = {
    hero: {
        // {green} and [outlined] words in the heading
        titleStart: "Where the community",
        titleGreen: "moves,",
        titleOutline: "we show up.",
        text: "Tournaments, races, clubs, brands and our own free workshops. Revibe brings the clinicians and the recovery to wherever your people are.",
        image: { src: img("ev-s2s-group.jpg"), alt: "The whole Strides to Sprints group together in the bleachers at the track", width: 1600, height: 1067 },
        // the tilted green ticker across the bottom of the photo
        ticker: ["MSBA Team Combine", "Raptors 905 Clinic", "Jackalope Mississauga", "Hyrox Toronto", "Strides to Sprints", "Game Speaks Invitational", "Pilates by the Water", "Raptors 905 home opener", "Workplace wellness days"],
    },

    // "The highlight reel": newest first. kind "reel" links to /reel/ (play icon), "post" to /p/ (stacked cards).
    // To add one, copy an entry and change the link, date, title and line.
    // Pilates by the Water is off until there is a photo from that morning.
    highlights: {
        title: "The highlight reel",
        items: [
            { kind: "reel", code: "DfnV3V1BQZE", date: "Nov 2026", title: "Raptors 905 home opener", text: "The 905 coaching staff and front office came through for a recovery session before tip-off.", image: img("ev-905-4.jpg"), alt: "The Revibe table at the Raptors 905 Practice Facility", position: "center 55%" },
            { kind: "reel", code: "DeHezNBh1P7", date: "Oct 2026", title: "Game Speaks Invitational", text: "With NorthPole Hoops at RedCrest. A recovery zone with assisted stretching and compression boots for every player.", image: img("reel-boots.jpg"), alt: "Compression boots in a Revibe recovery zone", position: "center 60%" },
            { kind: "post", code: "DeQR_28EWT0", date: "Sep 2026", title: "Raptors 905 Clinic", text: "We led strength and conditioning and performance testing for the clinic, then an active cooldown to bring every athlete back to baseline.", image: img("ev-905-2.jpg"), alt: "A young athlete jumping on the force plates at the Raptors 905 Clinic", position: "center 45%" },
            { kind: "reel", code: "DcwXLB-usJo", date: "Sep 2026", title: "Jackalope", text: "Recovery for the athletes at Jackalope, an international event in the heart of Mississauga.", image: img("ev-jack-1.jpg"), alt: "The Jackalope vert ramp at Celebration Square under a big summer sky", position: "center 50%" },
            { kind: "reel", code: "DbwVjiQRdOz", date: "Aug 2026", title: "Strides to Sprints", text: "Our free community track workshop, fourth edition. Coaching, games, recovery and goodies from 2XU.", image: img("reel-track.jpg"), alt: "A group running drills together on a track", position: "center 55%" },
            { kind: "reel", code: "DdaGiZhRO_k", date: "Sep 2026", title: "Hyrox Toronto", text: "Our osteopath Anesto, a multi-time Hyrox finisher, on the months of work behind race day.", image: img("reel-anesto.jpg"), alt: "Anesto Charles, osteopath, treating a client", position: "center 35%" },
        ],
    },

    quote: {
        text: "It's more than just a place to do treatment. It's a home.",
        sourceBefore: "From the",
        sourceLabel: "Game Speaks Invitational recap",
        sourceUrl: "https://www.instagram.com/timetorevibe/reel/DeHezNBh1P7/",
        sourceAfter: "by NorthPole Hoops",
    },

    // "Photos from the day": one tab per event, first tab open. Six-photo grids lay out differently from five.
    gallery: {
        title: "Photos from the day",
        events: [
            {
                id: "r905",
                name: "Raptors 905 Clinic",
                when: "Raptors 905 Practice Facility. 5 September 2026",
                text: "Strength and conditioning, force plate testing and an active cooldown for a gym full of young players.",
                photos: [
                    [img("ev-905-1.jpg"), "Every player and coach at the Raptors 905 Clinic on centre court"],
                    [img("ev-905-2.jpg"), "A young athlete jumping on the force plates while a Revibe coach records"],
                    [img("ev-905-3.jpg"), "The Raptors 905 mascot hyping up a Revibe coach"],
                    [img("ev-905-5.jpg"), "Players warming up across the court"],
                    [img("ev-905-7.jpg"), "The Raptors 905 mascot joining a stretch with the young players"],
                ],
            },
            {
                id: "msba",
                name: "MSBA Team Combine",
                when: "At Revibe. 21 October 2026",
                text: "The Mississauga Southwest Twins through force plates, sprints, push-up and band tests, a talk on what the numbers mean, and a youth athlete sponsorship from Revibe.",
                photos: [
                    [img("msba-group.jpg"), "The whole MSBA team with Revibe coaches in front of the Revibe wall"],
                    [img("msba-plates.jpg"), "A young athlete jumping on the force plates while a coach records"],
                    [img("msba-sprint.jpg"), "A player sprinting through the cones on the turf"],
                    [img("msba-zee-floor.jpg"), "Zee down on the turf coaching a push-up test"],
                    [img("msba-kids.jpg"), "Players laughing while they wait for their turn"],
                    [img("msba-screen.jpg"), "The team watching a talk about what testing measures"],
                ],
            },
            {
                id: "jack",
                name: "Jackalope",
                when: "Celebration Square, Mississauga. Summer 2025",
                text: "Pro skaters on the vert ramp, a weekend crowd, and the Revibe tent working through tight legs all day.",
                photos: [
                    [img("ev-jack-3.jpg"), "A Revibe clinician walking past the Jackalope stage on the turf"],
                    [img("ev-jack-2.jpg"), "A skater catching air above the vert ramp"],
                    [img("ev-jack-4.jpg"), "The Revibe recovery tent and table at Jackalope"],
                ],
            },
            {
                id: "s2s",
                name: "Strides to Sprints",
                when: "Our free track workshop. 2025 and 2026",
                text: "Coaching on how you run, relay games with strangers, and recovery on the infield after.",
                photos: [
                    [img("ev-s2s-7.jpg"), "Two runners mid-stride on the track, smiling"],
                    [img("ev-s2s-6.jpg"), "Two participants shaking hands on the infield"],
                    [img("ev-s2s-8.jpg"), "Runners driving forward on a band resisted sprint drill"],
                    [img("ev-s2s-9.jpg"), "A kid leading the band sprint with the group behind him"],
                    [img("ev-s2s-1.jpg"), "The coach hyping the group from the track"],
                ],
            },
            {
                id: "nike",
                name: "Nike run club",
                when: "Revibe Mississauga. 1 October 2025",
                text: "A Nike run from our Dixie Road clinic, with a wall of fresh pairs to try on before heading out.",
                photos: [
                    [img("ev-nike-1.jpg"), "The whole run club lined up outside Revibe Mississauga"],
                    [img("ev-nike-2.jpg"), "The Revibe tent and the Nike shoe table outside the clinic"],
                    [img("ev-nike-4.jpg"), "Runners in bright new Nike shoes on the start line"],
                    [img("ev-nike-3.jpg"), "Rows of Nike running shoes ready to try"],
                    [img("ev-nike-5.jpg"), "A runner posing at the photo wall"],
                ],
            },
        ],
    },

    // ten logos: five across on phones and desktop. shape "sq" for square marks, "wide" for long wordmarks.
    brands: {
        title: "Brands we have worked with",
        items: [
            { file: "nike", name: "Nike", width: 268 },
            { file: "mlse", name: "MLSE", width: 188, shape: "sq" },
            { file: "raptors-905", name: "Raptors 905", width: 140, shape: "sq" },
            { file: "new-balance", name: "New Balance", width: 302 },
            { file: "on-running", name: "On", width: 108, shape: "sq" },
            { file: "lululemon", name: "lululemon", width: 136, shape: "sq" },
            { file: "linkedin", name: "LinkedIn", width: 400, height: 98, shape: "wide" },
            { file: "saje", name: "Saje", width: 224 },
            { file: "f45", name: "F45", width: 287 },
            { file: "jackalope", name: "Jackalope", width: 140, shape: "sq" },
        ],
    },

    // "Bring Revibe to your thing": each button opens the form with its type picked (type matches a form option value)
    picker: {
        title: "Bring Revibe to your thing",
        text: "Pick what you are planning. We bring the clinicians, the gear and the set-up.",
        options: [
            { title: "Tournament or race", text: "A recovery lounge between games, so players walk back on court fresher than they came off it.", points: ["Compression boots and assisted stretching", "Hydration and a hosted check-in", "Clinicians on hand for anything that tweaks"], button: "Plan an event", type: "Event or tournament activation", image: img("pick-lounge.jpg"), alt: "People relaxing in compression boots in a Revibe recovery lounge" },
            { title: "Team or club", text: "Recovery and testing built into your season, from the first practice to playoffs.", points: ["Combine days on our force plates", "Team recovery resets after big games", "A report for every athlete"], button: "Plan a season", type: "Team, club or league partnership", image: img("msba-team.jpg"), alt: "Players in team jerseys waiting their turn at a combine" },
            { title: "Brand activation", text: "A recovery space at your launch, run or pop-up, staffed by real clinicians.", points: ["Branded recovery zone and tent", "Boots, stretch and quick assessments", "Content your guests will want to post"], button: "Plan an activation", type: "Brand partnership", image: img("ev-nike-2.jpg"), alt: "The Revibe tent and a shoe table set up outside the clinic" },
            { title: "Workplace day", text: "A stretch station and a short talk your team will actually use at their desks.", points: ["Assisted stretch sessions", "A talk on posture, desk tension or recovery", "In your office or at our clinic"], button: "Plan a workplace day", type: "Workplace wellness day", image: img("pick-stretch.jpg"), alt: "A Revibe therapist guiding a client through an assisted stretch" },
        ],
    },

    // the partner enquiry pop-up. Netlify form "partner-enquiry" (name, email, organization, partnership_type, message)
    form: {
        name: "partner-enquiry",
        thankYouUrl: "/thank-you/",
        title: "Let's plan it",
        kicker: "Partner with Revibe",
        steps: ["Tell us the basics", "We reply within two business days", "We show up with the clinicians and the gear"],
        image: img("ev-s2s-group.jpg"),
        options: [
            { value: "Event or tournament activation", title: "Tournament or race", text: "Recovery lounge between games" },
            { value: "Team, club or league partnership", title: "Team or club", text: "Testing and recovery all season" },
            { value: "Brand partnership", title: "Brand activation", text: "A recovery space at your launch" },
            { value: "Workplace wellness day", title: "Workplace day", text: "Stretch station and a short talk" },
            { value: "Something else", title: "Something else", text: "Tell us below", wide: true },
        ],
        note: "For a recovery lounge we need about 10 by 20 feet, power for the boots and water nearby.",
    },

    instagram: { kicker: "Catch the next one on Instagram", handle: "@timetorevibe", url: "https://www.instagram.com/timetorevibe/" },
};
