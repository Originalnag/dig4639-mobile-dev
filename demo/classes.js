class Pet {
    petSound;
    petFeeding;

    constructor (species) {
      this.species = species
    }

    speak () {
      return 'No words'
    }
}

class Cat extends Pet {
  constructor (props) {
    super('cat')
    this.props = props
  }

    clickHandler = parameter => parameter + this.props.name;
    speak () {
      this.clickHandler()
      return `${super.speak()} Meow, I am ${this.species}`
    }
}

function makePetSpeak (pet) {
  console.log(pet.speak())
}
var myPet = new Pet()
makePetSpeak(myPet)

var myCat = new Cat({ name: 'Luna LoveGood' })
makePetSpeak(myCat)
var newFunc = myCat.clickHandler
console.log(newFunc('My name is'))
