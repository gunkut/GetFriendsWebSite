const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const addUser = require("./routes/addUser");
const registeredUsers = require("./routes/registeredUsers");
const about = require("./routes/about");
const errorPageController = require("./controllers/error");
const prices = require("./routes/prices");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));

app.use(addUser.routes);
app.use(registeredUsers);
app.use(about);
app.use(prices);

app.use(errorPageController.get404);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
