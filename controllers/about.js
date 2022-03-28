exports.getAboutPage = (req, res, next) => {
  res.render("about", {
    pageTitle: "About",
    path: "/about",
  });
};
