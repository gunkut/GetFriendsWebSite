const users = [];

exports.getAddUser = (req, res, next) => {
  res.render("form", {
    pageTitle: "Form",
    path: "/users-form",
  });
};

exports.postAddUser = (req, res, next) => {
  users.push({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  });
  res.redirect("/users");
};

exports.users = users;
