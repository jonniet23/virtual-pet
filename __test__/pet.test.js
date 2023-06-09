const Pet = require('../src/pet');

describe('constructor', () => {
    
    it('sets the name property', () => {
     const pet = new Pet('Fido')
        expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');

      expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
      const pet = new Pet('Fido');

      expect(pet.fitness).toEqual(10);
    });

    it('sets a child name', () => {
      const pet = new Pet('Fido');
      expect(pet.childrenNames[0]).toBe('Amelia', 'Lassie');
    });
  });

    describe('growUp', () => {
      it('increments the age by 1', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
        });
     
      it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
        });

        it('decreases the fitness by 3', () => {
          const pet = new Pet('Fido');
      
          pet.growUp();
      
          expect(pet.fitness).toEqual(7);
          });

          it('throws an error if the pet is not alive', () => {
            const pet = new Pet('Fido');
      
            pet.age = 35;
      
            expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
          });

          describe('walk', () => {
            it('increases fitness by 4', () => {
              const pet = new Pet('fido');
          
              pet.fitness = 4;
              pet.walk();
          
              expect(pet.fitness).toEqual(8);
            });

            it('increases fitness by to a maximum of 10', () => {
              const pet = new Pet('fido');
          
              pet.fitness = 8;
              pet.walk();
          
              expect(pet.fitness).toEqual(10);
            });
            
            it('throws an error if the pet is not alive', () => {
              const pet = new Pet('Fido');
        
              pet.fitness = 0;
        
              expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
            });

            describe('feed', () => {
              it('decreases hunger level by 3', () => {
                const pet = new Pet('fido');
            
                pet.hunger = 6;
                pet.feed();
            
                expect(pet.hunger).toEqual(3);
              });

              it('decreases hunger to a minimum of 0', () => {
                const pet = new Pet('fido');
            
                pet.hunger = 2;
                pet.feed();
            
                expect(pet.hunger).toEqual(0);
              }); 

              it('throws an error if the pet is not alive', () => {
                const pet = new Pet('Fido');
          
                pet.age = 30;
          
                expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
              });
            });
          
          describe('checkUp', () => {
            it('decribes whether the pet needs exercise', () => {
              const pet = new Pet('fido');
          
              pet.fitness = 3;
              pet.checkUp();
          
              expect(pet.checkUp()).toBe('I need a walk');
            });

            it('decribes whether the pet needs exercise', () => {
              const pet = new Pet('fido');
          
              pet.fitness = 4;
              pet.checkUp();
          
              expect(pet.checkUp()).toBe('I feel great!');
            });

            it('describes whether the pet feels hungry', () => {
              const pet = new Pet('fido');
          
              pet.hunger = 5;
              pet.checkUp();
          
              expect(pet.checkUp()).toBe('I am hungry');
            });

            it('describes whether the pet feels hungry', () => {
              const pet = new Pet('fido');
          
              pet.hunger = 3;
              pet.checkUp();
          
              expect(pet.checkUp()).toBe('I feel great!');
            });
  
            it('describes whether the pet feels hungry and needs exercise', () => {
              const pet = new Pet('fido');
          
             pet.fitness = 3; 
             pet.hunger = 5;
              pet.checkUp();
          
              expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
            });
            
            it('throws an error if the pet is not alive', () => {
              const pet = new Pet('Fido');
        
              pet.age = 30;
        
              expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
            });
          });
  });
});
