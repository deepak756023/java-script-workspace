let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
//Templates are strings enclosed in backticks (`This is a template string`).Templates allow single and double quotes inside a string:
let text = `He's often called "Johnny"`;
let length = text.length;

// let txt1 = "We are the so-called "Vikings" from the north.";// wrong
let txt1 = "We are the so-called \"Vikings\" from the north.";// (\') (\\)

//Templates are strings enclosed in backticks (`This is a template string`).Templates allow multiline strings:
let txt2 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(txt2);

let x = "John";// String
let y = new String("John"); // Object
let z = new String("John");
console.log(x == y);// true
console.log(x === y);//false
//Do not create String objects.The new keyword complicates the code and slows down execution speed.String objects can produce unexpected results:

//Comparing two JavaScript objects always returns false.
console.log(z == y);// false
console.log(z === y);// false




