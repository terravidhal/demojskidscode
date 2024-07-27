/**variables */

//string
var myStringVariable = "My name is Jeff!";
var password = "Password1234!";
console.log(myStringVariable); //My name is Jeff!

//number
var myNum = 5;
var myOtherNum = 10;
console.log(myNum); //5

// boolean
var mybool = true;
var myOtherBool = false;
console.log(mybool); //true

// undefined
var myVar;
console.log(myVar); //undefined would be printed to your console!

//Math Operations
//number
var myNum = 5;
var myOtherNum = 10;
console.log(myNum + myOtherNum);
console.log(myNum - myOtherNum);
console.log(myNum / myOtherNum);
console.log(myNum * myOtherNum);
console.log(5 % 2); //1

//String Operations
// concatenation : assemblage de strings
var greeting = "Hello ";
var myName = "Nick";
console.log(greeting + myName);

//Conditionals

var x = 25;
if (x > 50) {
  console.log("bigger than 50");
} else {
  console.log("smaller than 50");
}
// because x is not greater than 50, the second print statement, "smaller than 50", is the only line that will execute


var x = 75;
if (x > 100) {    
    console.log("bigger than 100");
}
else if (x > 50) {    
    console.log("bigger than 50");
}
else if(x > 25) {
    console.log("bigger than 25");
}
else {    
    console.log("small number");
}
