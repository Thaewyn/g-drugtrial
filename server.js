const express = require("express");
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use(session({
  secret: 'fertilitydrugtrial',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}))

require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});