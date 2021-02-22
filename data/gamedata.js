const prologue = require("./events/prologue");

class GameData {
  //standard datastore attached to session
  constructor(data) {
    this.mcName = "Zack";
    //this.currentEventId = "prologue1";
    this.currentEvent = prologue;
    this.currentPage = 1;
  }
  getCurrentEvent() {
    return {event: this.currentEvent, page:this.currentPage};
  }
}

module.exports = GameData;