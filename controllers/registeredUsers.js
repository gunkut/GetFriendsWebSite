const addUser = require("../controllers/addUser") 

exports.getRegisteredUsers = (req, res, next) => {
  const users = addUser.users;
  res.render("users", {
    pageTitle: "Users",
    users: users,
    path: "/users",
  });
};
