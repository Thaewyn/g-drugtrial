const gd = require("../data/gamedata");

module.exports = function(app) {

  function sessionPrep(req,res,next) {
    //make sure session has baseline before moving on.
    if(!req.session.gamedata) {
      req.session.gamedata = new gd();
    }
    next();
  }
  app.use(sessionPrep);

  app.post("/api/test", function(req,res) {
    console.log("hit api/test");
    // req.session.shop = require("../engine/datastore.js");//new ShopEngine();
    res.send("test response");
  });

  app.post("/api/newgame", function(req,res) {
    console.log("api/newgame");
    req.session.gamedata = {};
  });

  app.get("/api/event", function(req,res) {
    console.log("api/event - get the current event for this session's user.");
    //console.log(req.session.gamedata);
    //console.log(req.session.gamedata.currentEvent);
    let pageData = req.session.gamedata.currentEvent.pages[req.session.gamedata.currentPage];
    //let singlePageJson = eventData.event.getPage(eventData.page);
    //console.log(eventData);
    let response = {
      eventName: req.session.gamedata.currentEvent.name,
      page: req.session.gamedata.currentPage,
      data: pageData
    }
    res.send(response);
  })
}