const MAXIMUM_FITNESS = 10;
const FITNESS_EFFECT_FROM_WALK = 4;
const MINIMUM_HUNGER = 0;
const FEED_EFFECT_ON_HUNGER = 3;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};
Pet.prototype.walk = function() {
  if ((this.fitness + FITNESS_EFFECT_FROM_WALK) <= MAXIMUM_FITNESS) {
    this.fitness += FITNESS_EFFECT_FROM_WALK;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
    
};
Pet.prototype.feed = function() {
    if (this.hunger  >= FEED_EFFECT_ON_HUNGER) {
      this.hunger -= FEED_EFFECT_ON_HUNGER;
    } else {
      this.hunger = MINIMUM_HUNGER;
    }
}
module.exports = Pet;