const { DateTime } = require("luxon");

// front matter dates (2025-05-15) are midnight UTC; reading them in UTC keeps the same day in Toronto

module.exports = function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
};
