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
    this.milkCapacity = deets.milkCapacity || 0.5;
    this.milkProduction = 0;
    this.isPregnant = false;
    this.currentPregNumChildren = 0;
    this.daysPregnant = 0;
    this.gestationLengthDays = 45;
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
   * Called at the end of every week, see what happens. Might need to pass
   * a reference to the event controller?
   */
  handleWeek() {

  }
}

export default Girl;