/**
 * Superclass for all the girls.
 */
class Girl {
  /**
   * Girl's details should include name, age, birthday, isEmployed, job,
   * and baseline milkCapacity, fertility, and multiplesChance
   * @param {object} deets 
   */
  constructor(deets) {
    this.name = deets.name;
    this.age = deets.age;
    this.birthday = deets.birthday || "";
    this.isEmployed = deets.isEmployed || false;
    this.job = deets.job || "";
    this.loveLevel = deets.love || 0;
    this.milkCapacity = deets.milkCapacity || 0.5; //liters
    this.milkProduction = 0; //liters per day
    this.currentMilk = 0;
    this.wasMilkedThisWeek = false;
    this.isPregnant = false;
    this.currentPregNumChildren = 0;
    this.daysPregnant = 0;
    this.gestationLengthDays = 45;
    this.gaveBirthThisWeek = false;
    this.timesGivenBirth = 0;
    this.numChildren = 0;
    this.multiplesChance = deets.multiplesChance || 0;
    this.fertility = deets.fertility || 0.5;
  }
  /**
   * Given the MC's virility number, check to see if she got pregnant,
   * and if so, with how many kids.
   * @param {float} virility 
   */
  impregCheck(virility = 0) {
    if(this.isPregnant) {
      return false;
    } else if(Math.random() < (this.fertility + virility)) {
      //success! Now, with how many?
      let kids = 1 + Math.floor(Math.random() * this.multiplesChance);
      this.isPregnant = true;
      this.currentPregNumChildren = kids;
      if(this.fertility < 1) {
        this.fertility += 0.2;
      }
      this.multiplesChance += 0.5;
      return kids;
    } else {
      return false;
    }
  }
  /**
   * Called at the end of every week, see what happens. This should handle all state
   * changes not affected by outside events.
   */
  handleWeek() {
    this.handleGestation();
    this.handleMilkProduction();
  }
  endOfWeekCleanup() {
    this.wasMilkedThisWeek = false;
    this.gaveBirthThisWeek = false;
  }
  /**
   * Called whenever a girl is milked during the week. Calculate output, increased capacity,
   * adjust stats, etc. Return amount of milk produced.
   * @returns {number} amount of milk collected
   */
  handleMilking() {
    let milkQty = 0;
    if(this.milkProduction == 0) {
      return 0;
    } else {
      milkQty = this.currentMilk;
      this.currentMilk = 0;
      this.milkProduction += 0.1;
      this.milkCapacity += 0.5;
    }
    return milkQty;
  }
  /**
   * handle weekly output. Returns a count of the number of times the girl had to milk
   * this week to not become over-full.
   */
  handleMilkProduction() {
    let milkAmount = (this.milkProduction * 7);
    let timesMilked = Math.floor(milkAmount / this.milkCapacity);
    return timesMilked;
  }
  /**
   * Time passes, the baby(ies) grow. At a certain point (halfway?) increase lactation.
   * If it's time to give birth, call that as well
   * @returns {boolean} did she give birth?
   */
  handleGestation() {
    if(this.isPregnant) {
      this.daysPregnant += 7;
      if(this.daysPregnant > (this.gestationLengthDays * 0.6)) {
        //begin/increase lactation
        this.milkProduction += 1;
        this.milkCapacity += 1;
      }
      if(this.daysPregnant > this.gestationLengthDays) {
        this.handleBirth();
        return true;
      }
    }
    return false;
  }
  /**
   * Called from handleGestation if she's due. 
   */
  handleBirth() {
    this.numChildren += this.currentPregNumChildren;
    this.currentPregNumChildren = 0;
    this.isPregnant = false;
    this.timesGivenBirth++;
    this.gaveBirthThisWeek = true;
    if(this.gestationLengthDays > 9) {
      this.gestationLengthDays -= 5
    }
  }
}

export default Girl;