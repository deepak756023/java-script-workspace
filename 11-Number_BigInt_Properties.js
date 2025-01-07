//JavaScript Numbers are Always 64-bit Floating Point
//where the number (the fraction) is stored in 52bits 0 to 51, the exponent in 11bits 52 to 62, and the sign in 1bit 63
let a1 = 3;
let a2 = 3.14;
let a3 = 123e5;
let a4 = 123e-5;
let a5 = 12e500;

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits
let c1 = 999999999999999; // 999999999999999
let c2 = 9999999999999999; // 1000000000000000
let c3 = 0.2 + 0.1; //  0.30000000000000004(Floating point arithmetic is not always 100% accurate)
let c4 = (0.2 * 10 + 0.1 * 10) / 10; // 0.3

let d1 = 10 + 20 + "D";
let d2 = 10 + "D" + 20;
let d3 = "D" + 10 + 20;
let d4 = 10;
let d5 = 20;
//A common mistake is to expect this result to be 30
document.getElementById("demo1").innerHTML = "the result is" + d4 + d5;

//JavaScript will try to convert strings to numbers in all numeric operations
let b1 = "100";
let b2 = "10";
let b3 = b1 / b2; // 10
let b4 = b1 * b2;
let b5 = b1 - b2; //90
let b6 = b1 + b2; //But this will not work(string concatination)
let b7 = 200 / "10"; // 20

// NaN is a JavaScript reserved word indicating that a number is not a legal number
//use the global JavaScript function isNaN() to find out if a value is a not a number
let b8 = b1 / "Apple"; // NaN
document.getElementById("demo2").innerHTML = isNaN(b8);
let b9 = NaN + 5; // NaN
let b10 = NaN + "5"; // NaN5
let b11 = typeof NaN; //Number

//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "<br>"
}
// 4
// 16
// 256
// 65536
// 4294967296
// 18446744073709552000
// 3.402823669209385e+38
// 1.157920892373162e+77
// 1.3407807929942597e+154
//Infinity
let numb1 = 1 / 0;
let numb2 = -1 / 0;
let numb3 = typeof Infinity;

let e = 32;
let e1 = 0xFF;
//use the toString() method to output numbers from base 2 to base 36
document.getElementById("demo3").innerHTML = "Decimal 32 = " + "<br><br>" +
    "Hexatrigesimal (base 36): " + e.toString(36) + "<br>" +
    "Duotrigesimal (base 32): " + e.toString(32) + "<br>" +
    "Hexadecimal (base 16): " + e.toString(16) + "<br>" +
    "Duodecimal (base 12): " + e.toString(12) + "<br>" +
    "Decimal (base 10): " + e.toString(10) + "<br>" +
    "Octal (base 8): " + e.toString(8) + "<br>" +
    "Binary (base 2): " + e.toString(2);

//   Normally JavaScript numbers are primitive values created from literals
//But numbers can also be defined as objects with the keyword (new)
//The new keyword complicates the code and slows down execution speed
//Number Objects can produce unexpected results(so, don't use)
let x = 100;
let x1 = typeof x;
let y = new Number(100);
let y1 = typeof y;
let z = new Number(100);
let result1 = x == y;
let result2 = x === y;
//Comparing two JavaScript objects always returns false
let result3 = y == z;
let result4 = y === z;

//JavaScript integers are only accurate up to 15 digits
//Integer values outside this range lose precision
//typeof a BigInt is "bigint"
// BigInt is the second numeric data type in JavaScript (after Number)
//A BigInt can not have decimals
//BigInt can also be written in hexadecimal, octal, or binary notation
let big1 = 99999999999999999n; // 99999999999999999
let big2 = BigInt("99999999999999999"); //99999999999999999
let big3 = BigInt("456522222222376856675347867");
let big = typeof big1;
let big4 = big1 * big3;
let big41 = big1 / big2; // 0
let big5 = 0xFFn;
let big6 = 0o326446476746545646456454n;
let big7 = 0b100000000000000000000000000000000000000000000000000011n;
//Precision Curiosity(Rounding can compromise program security)
let big8 = 90071992547400992 === 90071992547400993; // TRUE
let big9 = 90071992547400992n === 90071992547400993n; // FALSE
//Arithmetic between a BigInt and a Number is not allowed (type conversion lose information)
//Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width)
let big14 = 5n;
let big15 = 5n / 2;//Error: Cannot mix BigInt and other types, use explicit conversion
let big16 = Number(big14) / 2; //2.5(Converting BigInt to Number)



 //***Number Methods Cannot be Used on Variables***
//The number methods above belong to the JavaScript Number Object.
// These methods can only be accessed like [Number.isInteger()].
// Using X.isInteger() where X is a variable, will result in an error:
// TypeError X.isInteger is not a function.
let min = Number.MIN_SAFE_INTEGER;//-9007199254740991
let max = Number.MAX_SAFE_INTEGER;//9007199254740991
let big10 = Number.isInteger(10);
let big11 = Number.isInteger(10.33);//False
document.getElementById("demo4").innerHTML = typeof 10.33;//Number
let big12 = Number.isSafeInteger(100);
let big13 = Number.isSafeInteger(65677785786738689487589876);//False


let num = Number.EPSILON;//difference between the smallest floating point number greater than 1 and 1
document.getElementById("demo5").innerHTML = num;
let num1 = Number.MAX_VALUE;//largest possible number in JavaScript(1.7976931348623157e+308)
let num2 = Number.MIN_VALUE;//smallest possible number in JavaScript(5e-324)
let num3 = Number.POSITIVE_INFINITY;
let num4 = Number.NEGATIVE_INFINITY;//-Infinity
let num5 = Number.NaN;//NaN

