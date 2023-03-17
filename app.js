// class Hamster {
//     constructor(name){
//         this.owner = ""
//         this.name = name 
//         this.price = 15
//     }
//     wheelRun() {console.log('squeak squeak')}
//     eatFood() {rconsole.log( "nibble nibble")}
//     getPrice() {console.log(this.price)}
// }

// class Person {
//     constructor(name, personAge, personEat){
//         this.name1 = name
//         this.age = personAge
//         this.height = 0
//         this.weight = personEat
//         this.mood = 0
//         this.hamsters = ""
//         this.bankAccount = 0
//     }
//     getName() {console.log(this.name1)}
//     getAge() {console.log(++this.age)}
//     getWeight() {console.log(this.weight)}
//     greet() {console.log('Hello '+ this.name1)}
//     eat() {console.log(++this.weight, ++this.mood)}
//     exercise(){console.log(--this.weight)}
//     ageUp(){console.log(this.age + (Number), this.height + (Number), this.weight + (Number), this.mood + 10, this.bankAccount - getPrice(Hamster.this.price))}
    
// }

// let Timmy = new Person('Timmy',5, 5);
// Timmy.exercise()
// Timmy.exercise()
// Timmy.exercise()
// Timmy.exercise()
// Timmy.exercise()

// Timmy.getAge()
// Timmy.getAge()
// Timmy.getAge()
// Timmy.getAge()

// let Gus = new Hamster('Gus')
// this.owner = Timmy

// Timmy.getAge()
// Timmy.getAge()
// Timmy.getAge()
// Timmy.getAge()
// Timmy.getAge()
// Timmy.getAge()

// Timmy.eat()
// Timmy.eat()

// Timmy.exercise()
// Timmy.exercise()


// Chef Make Dinners

class dinner {
    constructor (appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree
      this.dessert = dessert
    }
  }

class chefFactory{
        constructor(chef){
        this.chef = chef
        this.dinner = []
        }
    newDinner()  { 
            const meal1 = new dinner(this.appetizer, this.entree, this.dessert)
            // const meal2 = new Dinner('PB and J', 'Cereal', 'milk')
            // const meal3 = new Dinner('gum', 'cake', 'stomach ach')  
            this.dinner.push(meal1)
       }
       findDinner (index){
        return this.dinner[index]
       }
   }

   const Beth = new chefFactory('Beth')
   Beth.findDinner()
   Beth.findDinner()
   Beth.findDinner()
   
  console.log(Beth)
    




// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code