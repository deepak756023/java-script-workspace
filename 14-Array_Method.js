const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;//4
fruits.toString();//Banana,Orange,Apple,Mango//toString() converts an array to a string of (comma separated) array values.

let fruit1 = fruits[2];
let fruit2 = fruits.at(2);
//The at() method returns the same as []. BUT
//Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string
//This is not possible in JavaScript, because [] is used for accessing both arrays and objects.
//  obj[-1] refers to the value of key -1, not to the last property of the object.
// so, at() method was introduced in ES2022 to solve this problem.
let fruit3 = fruits.at(-2);// Apple

fruits.join(" * ");// Banana * Orange * Apple * Mango//join() method also joins all array elements into a string.

fruits.pop();//Mango// removes the last element from an array
console.log(fruits);//[ 'Banana', 'Orange', 'Apple' ]
let newLength = fruits.push("Kiwi");//adds a new element to an array (at the end) and returns the new array length
console.log(newLength);//4
console.log(fruits);//[ 'Banana', 'Orange', 'Apple', 'Kiwi' ]

//Shifting is equivalent to popping, but working on the first element instead of the last
//Unshifting is equivalent to pushing, but working on the first element instead of the last
fruits.shift();//Banana
fruits.unshift("Lemon");//4

//Warning !Using delete() leaves undefined holes in the array.Use pop() or shift() instead.
const cars = ["Audi", "BMW", "Tata", "Honda"];
delete fruits[0];
console.log(fruits[0]);//Undefined


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//concat() method creates a new array by merging (concatenating) existing arrays
//The concat() method does not change the existing arrays. It always returns a new array
//The concat() method can take any number of array arguments.
const myChildren = arr1.concat(arr2, arr3);
const myUpdatedChildren = arr1.concat("Peter");//The concat() method can also take strings as arguments

//Flattening an array is the process of reducing the dimensionality of an array
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat());//[ 1, 2, 3, 4, 5, 6 ]

//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr1.flatMap(x => [x, x * 10]);//[[1, 10], [2, 20], [3, 30], [4, 40], [5, 50], [6, 60]]
console.log(newArr1);//[  1,  10,  2, 20,  3,  30,  4,  40,  5, 50,  6,  60]

                                                 // Splicing and Slicing Arrays//
const newfruits = ["Banana", "Orange", "Apple", "Mango"];
newfruits.splice(2, 0, "Lemon", "Kiwi");  //The splice() method can be used to add new items to an array
console.log(newfruits); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items: //[]
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: 
console.log(newfruits.splice(0, 2));  //[ 'Banana', 'Orange' ]
console.log(newfruits); //[ 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

const laptop = ["ACER", "Lenevo", "HP", "ASUS", "MacBook"];
const citrus = laptop.slice(1);//The slice() method slices out a piece of an array into a new array
console.log(citrus);//[ 'Lenevo', 'HP', 'ASUS', 'MacBook' ]
console.log(laptop);//[ 'ACER', 'Lenevo', 'HP', 'ASUS', 'MacBook' ]
console.log(laptop.slice(1, 3));//[ 'Lenevo', 'HP' ][1,3)






