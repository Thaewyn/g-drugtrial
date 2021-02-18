
module.exports = function(app) {
  app.post("/api/test", function(req,res) {
    console.log("hit api/test");
    // req.session.shop = require("../engine/datastore.js");//new ShopEngine();
    res.send(true);
  });

  app.post("/api/newgame", function(req,res) {
    console.log("api/newgame");
    req.session.gamedata = {};
  });

  app.get("/api/event", function(req,res) {
    console.log("api/event - get the current event for this session's user.");
  })
}