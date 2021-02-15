module.exports = (app) => {
  // Base URLS
  app.use("/", require("./base.routes.js"));
  app.use("/", require("./auth.routes.js"));
  app.use("/stores", require("./stores.routes.js"));
  // app.use('/ghibliapi', require('./ghibliapi.routes.js'))
  // app.use('/search', require('./search.routes.js'))
  // app.use('/profile', require('./profile.routes.js'))
};
