const path = require('path');

module.exports = function(app) {
  app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
    //console.log("getting root");
    //let data = false;
    //res.render("menu", data);
  });
  app.get("/event", (req,res) => {
    res.sendFile(path.join(__dirname, '../pages/event.html'))
  });
  app.get("/plan", (req,res) => {
    res.sendFile(path.join(__dirname, '../pages/plan.html'))
  })
}