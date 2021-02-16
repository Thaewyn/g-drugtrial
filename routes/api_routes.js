
module.exports = function(app) {
  app.post("/api/test", function(req,res) {
    console.log("hit api/test")
    // req.session.shop = require("../engine/datastore.js");//new ShopEngine();
    res.send(true);
  });
}