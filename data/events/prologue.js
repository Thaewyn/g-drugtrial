import {Event, EventPage} from "../event";

let prologue = new Event("prologue", false);
prologue.addPage(1,new EventPage([
  {speaker:"thoughts", line:"Suddenly, it all became clear to me."},
  {speaker:"thoughts", line:"I knew what I had to do."},
  {speaker:"thoughts", line:"The only way to defeat the evil lord was to plunge the enchanted butter knife directly into his chest while atop a volcano."},
  {speaker:"thoughts", line:"There is no way I am going to lose to him this time."},
  {speaker:"thoughts", line:"If only I could find my pants..."},
  {speaker:"thoughts", line:"Wait."}
], "Wake up..."));

export default prologue;