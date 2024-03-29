import {expect} from 'chai'

describe('Classes', () => {

  it('has a constructor for initialization', ()=> {

    class Animal {
      constructor(name) {
        this.name = name
      }
    }

    let animal = new Animal()
    let dog = new Animal('Dog')

    expect(animal.name).to.be.undefined
    expect(dog.name).to.equal('Dog')
  })

  it('constructor can have default param values', ()=> {

    class Animal {
      constructor(name = 'Honey Badger'){
        this.name = name
      }
    }

    let animal = new Animal()
    let dog = new Animal('Dog')

    expect(animal.name).to.equal('Honey Badger')
    expect(dog.name).to.equal('Dog')
  })

  it('can have instance methods', ()=> {

    class Animal {
      constructor(name = 'Honey Badger') {
        this.name = name
      } 
      sayName() {
        return 'My name is: ' + this.name
      }
    }

    let animal = new Animal()

    expect(animal.sayName).to.exist
    expect(Animal.sayName).to.be.undefined
    expect(animal.sayName()).to.equal('My name is: Honey Badger')
  })


  it('can have static methods', ()=> {

    class Animal {
      constructor(name = 'Honey Badger') {
        this.name = name
      } 
      sayName() {
        console.log('My name is: ' + this.name)
      }
      static create(name){
        return new Animal(name)
      }
    }

    let animal = new Animal()

    expect(animal.create).to.be.undefined
    expect(Animal.create).to.exist

    let createdAnimal = Animal.create('Snake')
    expect(createdAnimal.name).to.be.equal('Snake')
  })

  it('can extend another class', ()=> {

    // Create an Animal class
    // Create a Dog class that extends Animal
    // Add sayName to Animal
    class Animal {
      constructor(name = 'Honey Badger') {
        this.name = name
      } 
      sayName() {
        console.log('My name is: ' + this.name)
      }
    }
      class Dog extends Animal {
        constructor(name){
         super(name)
        }
      }
    
    let dog = new Dog('Fido')

    expect(dog instanceof Dog).to.be.true
    expect(dog instanceof Animal).to.be.true
  })

  it('can use property setters and getters', ()=> {

    class Animal {

      set name(name){
        this._name = name
      }
    

      get name(){
      return this._name + ' type of animal'
      }
    }


    let animal = new Animal()
    animal.name = 'Dog'
    expect(animal.name).to.equal('Dog type of animal')
    animal.name = 'Cat'
    expect(animal.name).to.equal('Cat type of animal')
  })

})
