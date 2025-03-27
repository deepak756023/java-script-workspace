// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.
function Person(first, last, age, eye) {//In the constructor function, (this) has no value.The value of (this) will become the new object when a new object is created.
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";//A value given to a property will be a (default value) for all objects created by the constructor
}
const myFather = new Person("Dhananjay", "Nayak", 58, "black");
const myMother = new Person("Bharati", "Nayak", 48, "blue");
const myBrother = new Person("Saroj", "Nayak", 28, "grey");
const mySelf = new Person("Deepak", "Nayak", 24, "black");

myFather.location = "English";//// Add location to myFather (only)

//You can NOT add a new property to an object constructor:
Person.nationality = "English";// Wrong
//To add a new property, you must add it to the constructor function (prototype):
Person.prototype.nationality = "English";

                                                 //A constructor function can also have methods//
 function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName
  };
}

// Create a Person object
const myFriend = new Person("John", "Doe", 50, "blue"); 
console.log(myFriend.fullName());   

// Add a Name Method
myFriend.changeName = function (name) {
  this.lastName = name;
}
// Change Name
myFriend.changeName("Salt");                                            
console.log(myFriend.lastName); 

///The new method will be added to myFriend. Not to any other Person Objects.
//TypeError: myMother.changeName is not a function

// Person.changeName = function (name) {// WRONG
//   this.lastName = name;
// }

// myFriend.changeName("Doe");

//Adding a new method must be done to the constructor function prototype
Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myFriend.changeName("Dash");
console.log(myFriend.lastName);