//Creating an Array
const cars = ["Toyata", "BMW", "Audi", "Volvo"];
const cars1 = [
  "Toyota",
  "BMW",
  "Audi",
  "Volvo"
];
const cars2 = [];
cars2[0] = "Toyta";
cars2[1] = "BMW";
cars2[2] = "Audi";
cars2[3] = "Volvo";
//There is no need to use new Array().For simplicity, readability and execution speed
//JavaScript has a built-in array constructor new Array()
const cars3 = new Array("Toyata", "BMW", "Audi", "Volvo");
const points1 = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];
const points = new Array(40);//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
document.getElementById("demo").innerHTML = points[0];


let car = cars[0];    // Accessing Array Elements
cars.push("Hyundai");//cars[cars.length] = "Hyundai";//Adding an array element at last
cars[0] = "Honda";//Changing an Array Element
cars[7] = "KIA";
document.getElementById("demo1").innerHTML = cars.toString();//toString() converts an array to a string of (comma separated) array values
document.getElementById("demo2").innerHTML = cars;//the full array can be accessed by referring to the array name

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays
//But, JavaScript arrays are best described as arrays
const person1 = ["Deepak", "Nayak", 23];
let length = person1.length;
let last = person1[person1.length - 1];//Accessing the Last Array Element
const person2 = { firstname: "Deepak", lastname: "Nayak", age: 23 };

let len = cars.length;
let text = "";
for (let i = 0; i < len; i++) {
  text += "<li>" + cars[i] + "</li>";
}
document.getElementById('demo3').innerHTML = text;

//Associative Arrays
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes. 

const person3 = [];
person3[0] = "John";
person3[1] = "Doe";
person3[2] = 46;
document.getElementById("demo4").innerHTML = person3[0] + " " + person3.length;//John 3
const person4 = [];
person4["firstName"] = "John";
person4["lastName"] = "Doe";
person4["age"] = 46;
document.getElementById("demo5").innerHTML = person4[0] + " " + person4.length;//undefined 0

document.getElementById("demo6").innerHTML = Array.isArray(person3);//Recognize an Array
document.getElementById("demo7").innerHTML = "Array: " + (person3 instanceof Array);//Recognize an Array

const myObj = {
  name: "John",
  age: 30,
  cars: [//Array Elements Can Be Objects
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] }
  ]
}
let x = "";
for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}




const bus = ["Volvo", "Tata", "Mahindra"];
//An array declared with const cannot be reassigned but using var can possible
// bus = ["Honda", "Suzuki"];

//const variables must be assigned a value when they are declared
//const bus;
//bus = ["Volvo", "Tata", "Mahindra"];
bus[0] = "Maruti";
bus.push("Benz");
document.getElementById("demo8").innerHTML = bus;

//const has Block Scope(Redeclaring an array with const, in another scope, or in another block, is allowed) similar to let but var has global scope
const buses = ["Saab", "Volvo", "BMW"];
// Here buses[0] is "Saab"
{
  const buses = ["Toyota", "Volvo", "BMW"];
  // Here buses[0] is "Toyota"
}
// Here buses[0] is "Saab"

const carsnew = ["Volvo", "BMW"];   // Allowed
{
  const carsnew = ["Volvo", "BMW"]; // Allowed
}
{
  const carsnew = ["Volvo", "BMW"]; // Allowed
}



