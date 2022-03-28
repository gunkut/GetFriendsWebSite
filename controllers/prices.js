exports.getPricePage = (req, res) => {
  res.render("prices", {
    pageTitle: "Prices",
    path: "/prices",
  });
};
