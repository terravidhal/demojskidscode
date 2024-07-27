/**variables */

// Camel Case
// style de notation gnralment utilise en js qui consiste..

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

// length d'une chaine
var myString = "ssssssssssskhjfjfdjjf";
 console.log(myString.length);

// obtenir un caractere
var myStrings = "Nick";
//console.log(myStrings[0]); // 1

// retirer un catactere
//"slice()"methode native(q js ns fournis)

var myFirstName = "My long string is long";
console.log(myFirstName.slice(0, 1));


//CONDITIONALS
var x = 25;
if (x > 50) {
  console.log("bigger than 50");
} else {
  console.log("smaller than 50");
}



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

// comparaisons
// operateurs mathematiques
/*
Operator	Description	                 Examples
==	         equal	                     1 == 2 => false; 1 == 1 => true
!=	         not equal	                 1 != 2 => true; 1 != 1 => false
>	         greater than	             1 > 2 => false; 2 > 1 => true
<	         less than	                 1 < 2 => true; 2 < 1  => false
>=	         greater than or equal to	 1 >= 2 => false; 2 >= 2 => true
<=	         less than or equal to	     1 <= 2 => true; 2 <= 2 => true
*/

// operateurs logiques

//&&(AND)

var iHaveAShoe = true;
var iHaveAWatch = false;

console.log(iHaveAShoe && iHaveAWatch);

//   || (OR)

var iHaveAPen = true;
var iHaveABag = false;

console.log(iHaveAPen || iHaveABag);



// BOUCLES (LOOP)
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// jusqu'a 100

//While Loops (boucle while)
/*
while (condition) {    
      //  que continuer à faire tant que la condition est vraie 
    }  */ 
    //  on arrive à cette ligne lorsque la condition dans la boucle est fausse 

    
    var num = 0;    
    while (num <= 5) {    
        num=num+1;       
    }
    console.log(num);    
    
// For Loops (boucle For)

for (var num = 0; num <= 5; num = num +1) {    
       console.log(num);
}

// difference
// ex1: compter de 1 à 4 
for (let num = 0; num <= 4; num++) {
    console.log(num);
}
//for : utilisée lorsque vous souhaitez répéter un processus un nombre de fois connu


//ex2 :  trouver le 1er nombre impair qui est superieur à 10
var num = 11;
while (num % 2 !== 0) {
    num++;
}
console.log(num);   
// while : répéter un processus jusqu'à ce qu'une condition soit remplie 



//ARRAYS