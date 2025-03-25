                                            //Alphabetic Sort//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();//sorts an array alphabetically
fruits.reverse();
//By combining sort() and reverse(), you can sort an array in descending order

//The difference between [toSorted(), toReversed()] and sort() is that the first method creates a new array,
// keeping the original array unchanged, while the last method alters the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
const reversed = months.toReversed();

                                              //Numeric Sort//
                                          
//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
//If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:                                         
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log(points);//[ 1, 5, 10, 25, 40, 100 ]
//Using a sort function, like explained above, you can sort an numeric array in random order
points.sort(function () { return 0.5 - Math.random() });

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(points));//1
console.log(myArrayMax(points));//100.

                                                  //Sorting Object Arrays//
 const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
////Comparing number properties
cars.sort(function (a, b) { return a.year - b.year });
//Comparing string properties
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
