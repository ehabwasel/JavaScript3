/**common things [name,age,preferences,work,favoriteEat]

different things for Abdulkareem one [city ,status,children,KindOfSmoking]

different things for Adel [animalName ,ColorOfAnimal,KindOfSmoking]
 */

class Person {
  constructor(name,age,preferences,work){
    this.name=name,
    this.age=age,
    this.preferences=preferences
    this.work=work
  }

  get happyLife(){
    console.log(`${this.name} is living a happy life`)

  }
}

class Human extends Person {
 constructor(name,age,preferences,work,city ,status,children,KindOfSmoking){
 super(name,age,preferences,work)
 this.city=city
 this.status=status
 this.children=children
 this.KindOfSmoking=KindOfSmoking
 }
}
class Animal extends Person {
 constructor(name,age,preferences,work ,ColorOfAnimal,animalOwner){
 super(name,age,preferences,work)
 this.ColorOfAnimal=ColorOfAnimal
 this.animalOwner=animalOwner
  }
}

const Abdulkareem = new Human(`Abdulkareem`,35,`eating dates`,`a construction worker`,`Riyadh`,`married`,3,'smoking water pipe')
const horsOfAdel= new Animal(`hors`,15,`eating grass`,`helps with transporting materials`,`brown`,`Adel`)
console.log(Abdulkareem)
console.log(horsOfAdel)