const hbs = require("hbs");
hbs.registerHelper("formatDate", (date) =>
  new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
);
module.exports = hbs;
