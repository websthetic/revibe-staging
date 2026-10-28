// Content for /direct-billing/, from the dev handover. Rendered by layouts/service.html.
module.exports = {
    name: "Direct billing",
    requestService: "Not sure yet",
    hero: {
        title: "Direct billing",
        text: "We submit the claim to your insurer after your appointment. You pay only what your plan does not cover, and there is no paperwork to chase afterwards.",
        proofBold: "22 insurers",
        proof: "direct billed at every Revibe clinic. Physiotherapy, massage, chiropractic, osteopathy and naturopathic medicine.",
        buttons: [
            {
                label: "Request to book",
                request: true
            },
            {
                label: "See if we bill your insurer",
                url: "#insurers",
                outline: true
            }
        ],
        images: [
            {
                src: "/assets/images/popup-forms/request-to-book.jpg",
                alt: "A client filling in his details in the Revibe lounge",
                position: "center 45%"
            },
            {
                src: "/assets/images/first-session/conversation.jpg",
                alt: "Zeeruk, physiotherapist, reviewing an assessment with a client",
                position: "center 45%"
            },
            {
                src: "/assets/images/services/massage.jpg",
                alt: "A registered massage therapist working on a client's upper back",
                position: "center 45%"
            }
        ]
    },
    firstAppointment: {
        title: "How does direct billing work at Revibe?",
        text: "You give your insurance card at check in, we confirm what your plan covers and submit the claim electronically after your appointment. The claim goes in the same day you are treated, so your remaining balance stays current and you are not guessing in December how much of your limit is left.",
        buttons: [
            {
                label: "Request to book",
                request: true
            },
            {
                label: "See if we bill your insurer",
                url: "#insurers"
            }
        ],
        steps: [
            {
                title: "Bring your card",
                text: "Your insurance card or plan details and photo ID at check in. First appointment only.",
                image: "/assets/images/direct-billing/front-desk-details.jpg",
                alt: "A client handing over his details at the front desk",
                position: "center 40%"
            },
            {
                title: "We check your plan",
                text: "The front desk confirms what your plan covers and whether your insurer accepts direct submission.",
                image: "/assets/images/thank-you/clinic-lounge.jpg",
                alt: "The front desk confirming a client's coverage",
                position: "center 35%"
            },
            {
                title: "We submit the claim",
                text: "The claim goes in the same day. You pay any balance, or get a receipt to submit yourself if your plan will not take a direct claim.",
                image: "/assets/images/thank-you/stretch-space.jpg",
                alt: "A Revibe practitioner talking with a client in the lounge",
                position: "center 40%"
            }
        ]
    },
    types: {
        title: "Which services can you direct bill?",
        text: "Each service draws on its own category in most plans, so physiotherapy, massage, chiropractic, osteopathy and naturopathic medicine usually have separate limits.",
        columns: 3,
        items: [
            {
                label: "Physiotherapy",
                text: "Back and neck pain, knee and shoulder injuries, sports rehab and post-surgical recovery, from a registered physiotherapist.",
                image: "/assets/images/services/physiotherapy.jpg",
                alt: "Michael Leung, physiotherapist, working a client's hip",
                position: "center 55%",
                link: {
                    label: "Book",
                    url: "/services/physiotherapy/"
                }
            },
            {
                label: "Massage therapy",
                text: "Deep tissue, therapeutic and sports massage from a registered massage therapist, so the receipt is accepted by every plan that covers massage.",
                image: "/assets/images/services/massage-hands.jpg",
                alt: "A massage therapist's hands working into a client's shoulder",
                position: "center 45%",
                link: {
                    label: "Book",
                    url: "/services/massage/"
                }
            },
            {
                label: "Chiropractic",
                text: "Back and neck pain, headaches, sciatica and joint stiffness, from a licensed chiropractor.",
                image: "/assets/images/services/chiropractic.jpg",
                alt: "Dr. Morgan, chiropractor, adjusting a client",
                position: "center 40%",
                link: {
                    label: "Book",
                    url: "/services/chiropractic/"
                }
            },
            {
                label: "Osteopathy",
                text: "Chronic tension, restricted movement and postural strain. Its own coverage category on many plans.",
                image: "/assets/images/osteopathy/step-listen.jpg",
                alt: "An osteopath cradling a client's head and neck",
                position: "center 45%",
                link: {
                    label: "Book",
                    url: "/services/osteopathy/"
                }
            },
            {
                label: "Naturopathic medicine",
                text: "Hormone and DUTCH testing, sleep and energy, IV therapy and meal plans. Its own category, so it does not draw down your physio or massage limits.",
                image: "/assets/images/naturopathic/step-listen.jpg",
                alt: "Dr. Jennifer Tang, naturopathic doctor, in a consult",
                position: "center 35%",
                link: {
                    label: "Book",
                    url: "/services/naturopathic-medicine/"
                }
            },
            {
                label: "Not covered",
                text: "Cold plunge, infrared sauna and memberships are not insurance eligible and cannot be direct billed.",
                link: {
                    label: "See memberships",
                    url: "/memberships/"
                },
                dark: true
            }
        ]
    },
    insurers: {
        title: "Which insurers do you direct bill?",
        items: [
            {
                name: "Canada Life",
                aliases: "great west life gwl",
                mono: "CL"
            },
            {
                name: "Sun Life Financial",
                aliases: "sunlife",
                mono: "SL"
            },
            {
                name: "Manulife Financial",
                aliases: "manulife",
                mono: "MF"
            },
            {
                name: "Desjardins Insurance",
                aliases: "desjardins",
                mono: "DJ"
            },
            {
                name: "Industrial Alliance",
                aliases: "ia ialliance",
                mono: "iA"
            },
            {
                name: "ClaimSecure",
                aliases: "",
                mono: "CS"
            },
            {
                name: "Cowan",
                aliases: "",
                mono: "CO"
            },
            {
                name: "Maximum Benefit",
                aliases: "",
                mono: "MB"
            },
            {
                name: "TELUS AdjudiCare",
                aliases: "telus health adjudicare",
                mono: "TA"
            },
            {
                name: "Johnson Inc.",
                aliases: "",
                mono: "JI"
            },
            {
                name: "Johnston Group Inc.",
                aliases: "",
                mono: "JG"
            },
            {
                name: "Group Source",
                aliases: "",
                mono: "GS"
            },
            {
                name: "Group HEALTH",
                aliases: "",
                mono: "GH"
            },
            {
                name: "Manion",
                aliases: "",
                mono: "MA"
            },
            {
                name: "First Canadian",
                aliases: "",
                mono: "FC"
            },
            {
                name: "BPA Benefit Plan Administrators",
                aliases: "benefit plan administrators",
                mono: "BPA"
            },
            {
                name: "CINUP",
                aliases: "",
                mono: "CI"
            },
            {
                name: "GMS Carrier 49",
                aliases: "",
                mono: "G49"
            },
            {
                name: "GMS Carrier 50",
                aliases: "",
                mono: "G50"
            },
            {
                name: "LIUNA Local 183",
                aliases: "",
                mono: "183"
            },
            {
                name: "LIUNA Local 506",
                aliases: "",
                mono: "506"
            },
            {
                name: "Canadian Construction Workers Union",
                aliases: "ccwu",
                mono: "CCW"
            }
        ],
        notListed: {
            title: "Not on the list?",
            text: "Call with your card in hand and we will check your plan before you book."
        }
    },
    statement: {
        image: "/assets/images/osteopathy/statement-plunge.jpg",
        alt: "A hand trailing through the cold plunge water",
        position: "center 45%"
    },
    careMap: {
        title: "How do I know which service is right for me?",
        text: "Seven questions, about two minutes. The Care Map asks how you sleep, move, recover and feel, then shows you which part of your routine actually needs attention first. It will tell you which service fits before you book.",
        button: "Take the Care Map"
    },
    // the handover links these cards to naturopathic medicine (a copy-paste slip); they go to direct billing
    locations: {
        title: "Where can I use direct billing?",
        serviceLabel: "Direct billing",
        locationPage: "direct-billing"
    },
    faq: {
        title: "Direct billing FAQ",
        text: "The questions people ask before they book, answered the way we would answer them at the front desk.",
        items: [
            {
                q: "Do you offer direct billing for massage therapy and physiotherapy in Mississauga?",
                a: "Yes, at every Revibe clinic, when your insurer accepts direct submission and your plan covers the service. We submit the claim after your appointment and you pay only the balance your plan does not cover."
            },
            {
                q: "What do I need to bring to my first appointment?",
                a: "Your insurance card or your plan and policy numbers, and photo ID. First appointment only. After that your details are on file."
            },
            {
                q: "Will I have to pay anything at the clinic?",
                a: "Only the portion your plan does not cover. Most plans reimburse a percentage or cap the amount per session, so the balance is usually a co-payment. The front desk tells you the amount before you pay."
            },
            {
                q: "Do I need a doctor’s referral?",
                a: "Not to book with us. Some extended health plans require one before they reimburse, which is your insurer’s rule, so check your plan booklet before your first appointment."
            },
            {
                q: "What if my plan does not allow direct billing?",
                a: "Nothing about your appointment changes. You pay at the clinic and get a receipt formatted for reimbursement, with the practitioner’s registration number and the service code already on it."
            },
            {
                q: "Can you check my coverage before I book?",
                a: "Coverage differs by plan and employer, so the reliable answer comes from your insurer. Call the clinic and we will tell you what we can see and exactly what to ask your provider."
            },
            {
                q: "Can I direct bill more than one service?",
                a: "Yes. Physiotherapy, massage, chiropractic and naturopathic medicine usually have separate limits in most plans, and we submit each claim under its own category."
            },
            {
                q: "Can my partner and I use the same plan?",
                a: "Often, if they are covered as a spouse or dependent. The rules differ between insurers, so bring both sets of details or call ahead and we will check."
            },
            {
                q: "Is cold plunge, sauna or a membership covered by insurance?",
                a: "No. Cold plunge, infrared sauna and memberships are not insurance eligible. Physiotherapy, massage, chiropractic, osteopathy and naturopathic medicine are."
            },
            {
                q: "Which insurance companies do you direct bill?",
                a: "The insurers listed on this page, which covers most major Canadian carriers. If yours is not listed, call the clinic, because participation changes and some plans under a listed carrier still do not allow direct submission."
            }
        ]
    },
    stickyLabel: "Book with direct billing"
};
