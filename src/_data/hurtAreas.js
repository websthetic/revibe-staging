// "Where does it hurt?" areas on the home page and the hub (/where-does-it-hurt/), listed top of the body to bottom.
// x and y place the hotspot on the x-ray body (components/hurt-figure.html, a 300 x 620 viewBox);
// labelSide is which side of the dot its name shows on.
module.exports = [
    { key: "neck", label: "Neck and mid back", url: "/where-does-it-hurt/neck/", x: 150, y: 112, labelSide: "left" },
    { key: "shoulder", label: "Shoulder", url: "/where-does-it-hurt/shoulder/", x: 214, y: 138, labelSide: "right" },
    { key: "elbow-wrist", label: "Elbow and wrist", url: "/where-does-it-hurt/elbow-wrist/", x: 238, y: 262, labelSide: "right" },
    { key: "low-back", label: "Low back", url: "/where-does-it-hurt/low-back/", x: 150, y: 290, labelSide: "left" },
    { key: "hip", label: "Hip", url: "/where-does-it-hurt/hip/", x: 111, y: 362, labelSide: "left" },
    { key: "knee", label: "Knee", url: "/where-does-it-hurt/knee/", x: 116, y: 474, labelSide: "left" },
    { key: "foot-ankle", label: "Foot and ankle", url: "/where-does-it-hurt/foot-ankle/", x: 188, y: 600, labelSide: "right" },
];
