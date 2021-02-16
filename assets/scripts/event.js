import GameController from "./gameController";

function init() {
  console.log("init on event page. which event?");
  let gc = new GameController();
  let gameData = localStorage.getItem("gdt-gameData");
  if (gameData) {
    gameData = JSON.parse(gameData);
  } else {
    console.log("no gamedata. Default to Prologue 1");
    gc.loadEventPage("prologue",1);
  }
}

init();