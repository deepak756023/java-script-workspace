const fruits = ["Apple", "Orange", "Apple", "Mango", NaN];
//array.indexOf(item, start)
//item	Required. The item to search for.
//start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
//Array.indexOf() returns -1 if the item is not found
fruits.indexOf("Apple");//0
let position = fruits.indexOf(NaN);// -1
console.log(position);
//array.lastIndexOf(item, start)
let lastPosition = fruits.lastIndexOf("Apple");//2

//Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
fruits.includes("Mango"); // true
fruits.includes(NaN);// false



const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);//The find() method returns the value of the first array element that passes a test function
console.log(numbers.findIndex(myFunction));//returns the index of the first array element that passes a test function
console.log("First number over 18 is " + first);//First number over 18 is 25

function myFunction(value, index, array) {//Note that the function takes 3 arguments:The item value ,The item index, The array itself
  return value > 18;
}

//findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
//The findLastIndex() method finds the index of the last element that satisfies a condition



