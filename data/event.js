/**
 * Superclass for events.
 */
class Event {
  /**
   * Create a new event, given a name and an (optional) boolean if the
   * event is repeatable or not. Event pages and trigger conditions must
   * be added separately.
   * @param {string} name name of the event, to display on the header
   * @param {boolean} repeat is this event repeatable?
   */
  constructor(name, repeat = false) {
    this.name = name;
    this.isRepeatable = repeat;
    this.pages = {};
    this.triggers = [];
  }
  /**
   * retrieves the EventPage for a given page number.
   * @param {int} pageNum 
   */
  getPage(pageNum) {
    return this.pages[pageNum];
  }
  /**
   * add a new page to this event after construction.
   * @param {int} pageNum 
   * @param {EventPage} newPage 
   */
  addPage(pageNum, newPage) {
    this.pages[pageNum] = newPage;
  }
  /**
   * Set or update an unlock trigger for the event to display.
   * @param {string} property the trigger property to check
   * @param {number} reqValue the required, or minimum value of that property
   */
  setTrigger(property, reqValue) {

  }
  /**
   * Returns all triggers to be checked by somewhere else. GameController
   * will need to check these and then handle adding the event properly.
   */
  getTriggers() {
    return this.triggers;
  }
}

class EventPage {
  /**
   * A new single page for a given event.
   * @param {array} script array of objects, each one representing a paragraph, and with a property defining the speaker (css class)
   * @param {string} buttonText the string to display on the ending button. Default is 'Continue'
   * @param {string} imageUrl the relative file path to any image that should be displayed with the page.
   */
  constructor(script, buttonText = "Continue", imageUrl = null) {
    this.hasImage = false;
    this.imageUrl = "";
    if(imageUrl) {
      this.hasImage = true;
      this.imageUrl = imageUrl;
    }
    this.script = script;
    this.buttonText = buttonText;
  }
}

export {Event, EventPage};