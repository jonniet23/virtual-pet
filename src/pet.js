const MAXIMUM_FITNESS = 10;
const FITNESS_EFFECT_FROM_WALK = 4;
const MINIMUM_HUNGER = 0;
const FEED_EFFECT_ON_HUNGER = 3;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.childrenNames = ['Amelia' , 'Lassie'];
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };
    
Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};
Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.fitness + FITNESS_EFFECT_FROM_WALK) <= MAXIMUM_FITNESS) {
    this.fitness += FITNESS_EFFECT_FROM_WALK;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
    
};
Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if (this.hunger  >= FEED_EFFECT_ON_HUNGER) {
      this.hunger -= FEED_EFFECT_ON_HUNGER;
    } else {
      this.hunger = MINIMUM_HUNGER;
    }
}
Pet.prototype.checkUp = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if (this.hunger >= 5 && this.fitness <=3) {
      return 'I am hungry AND I need a walk';
    } else if(this.fitness <= 3) {
        return 'I need a walk';
    } else if( this.hunger >= 5) {
        return 'I am hungry';
    } return 'I feel great!';
    
};

module.exports = Pet;