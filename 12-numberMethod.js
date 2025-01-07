// toString()	          Returns a number as a string
// toExponential()        returns a string, with a number rounded and written using exponential notation
// toFixed()	          returns a string, with the number written with a specified number of decimals
// toPrecision()	      returns a string, with a number written with a specified length
// valueOf()	          Returns a number as a number

//All number methods can be used on any type of numbers (literals, variables, or expressions)
let x = 123;
document.getElementById("demo1").innerHTML =
    x.toString() + "<br>" +     //123
    (123).toString() + "<br>" + //123
    (100 + 23).toString();      //123

let y = 9.656;// try y = 200.654;
let y1 = y.toExponential();  //9.656e+0
let y2 = y.toExponential(2); //6.66e+0
let y3 = y.toExponential(4); //9.6560e+0
let y4 = y.toExponential(1); //9.7e+0
let y5 = y.toExponential(0); //1e+1


let y6 = y.toFixed();//let y7 = y.toFixed(0); //10
let y8 = y.toFixed(2);//9.66
let y9 = y.toFixed(4);//9.6560

let y10 = y.toPrecision(1);//1e+1
let y11 = y.toPrecision(2);//9.7
let y12 = y.toPrecision(4);//let y10 = y.toPrecision();//9.656
let y13 = y.toPrecision(6);//9.65600

let z = 123;

document.getElementById("demo2").innerHTML =
    z.valueOf() + "<br>" +     //123
    (123).valueOf() + "<br>" + //123
    (100 + 23).valueOf();      //123


//***Number Methods Cannot be Used on Variables***
//The number methods above belong to the JavaScript Number Object.
// These methods can only be accessed like [Number.isInteger()].
// Using X.isInteger() where X is a variable, will result in an error:
// TypeError X.isInteger is not a function.


// method can be used to convert JavaScript variables to numbers
document.getElementById("demo3").innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("10") + "<br>" +
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number(" 10  ") + "<br>" +
    Number("10.33") + "<br>" +
    Number("10,33") + "<br>" +//NaN
    Number("10 33") + "<br>" +//NaN
    Number("John") + "<br>" +//NaN
    Number("A");//NaN

//can also convert a date to a number
//The Date() method returns the number of milliseconds since 1.1.1970
let date = new Date("1970-01-02");
document.getElementById("demo4").innerHTML = Number(date);//86400000

//parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
//If the number cannot be converted, NaN (Not a Number) is returned
document.getElementById("demo5").innerHTML =
    parseInt("-10") + "<br>" +    //-10
    parseInt("-10.33") + "<br>" + //-10
    parseInt(" 10") + "<br>" +    //10
    parseInt("10.33") + "<br>" +  //10
    parseInt("10 6") + "<br>" +   //10
    parseInt(" 10 years") + "<br>" +//10
    parseInt("years 10");//NaN

document.getElementById("demo6").innerHTML =
    Number.parseInt("-10") + "<br>" +
    Number.parseInt("-10.33") + "<br>" +
    Number.parseInt("10") + "<br>" +
    Number.parseInt("10.33") + "<br>" +
    Number.parseInt("10 6") + "<br>" +
    Number.parseInt("10 years") + "<br>" +
    Number.parseInt("years 10");

// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned
document.getElementById("demo7").innerHTML =
    parseFloat("10") + "<br>" +//10
    parseFloat("10.33") + "<br>" +//10.33
    parseFloat("10 6") + "<br>" +//10
    parseFloat("10 years") + "<br>" +//10
    parseFloat("years 10");//NaN
document.getElementById("demo8").innerHTML =
    Number.parseFloat("10") + "<br>" +
    Number.parseFloat("10.33") + "<br>" +
    Number.parseFloat("10 20 30") + "<br>" +
    Number.parseFloat("10 years") + "<br>" +
    Number.parseFloat("years 10");
//The Number methods Number.parseInt() and Number.parseFloat() are the same as theGlobal methods parseInt() and parseFloat()
//The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser)