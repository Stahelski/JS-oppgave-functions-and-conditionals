// Functions and Conditionals assignment
// Read the assignment text CAREFULLY

/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/

//! code here
let num = 88;
const checkOddEven = (num) => {
return num % 2 === 0 ? "even" : "odd";
};



console.log(checkOddEven(99)); 


console.log(num % 2) 
if (num % 2 === 0) {
    console.log("even")
} else  {
    console.log("odd")
};



num % 2? console.log("odd") : console.log("even");




  /*
  2.
 
  Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
  or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:
 
  const variable = statement ? "this if true" : "this if not true"
 
  Try changing userMale to both true and false and console.log your new variable,
  to see that your conditional is working.
  */

//! code here
//! enda usikker på detta, må øve mere.
let userMale = true;
console.log(userMale ? "Mr." : "Mrs.");


let userMale2 = false;
let userTitle;
if (userMale2) {
    userTitle = "Mr.";
} else {
    userTitle = "Mrs."
};
console.log(userTitle);


let userMale3 = true;
const userTitle2 = userMale3 ? "Mr." : "Mrs.";
console.log(userTitle2);




  /*
  3.
 
  Write a function that takes in 2 parameters:
 
   - A name (string)
   - An hour of the day (number)
 
  The function should return:
  "Good night (name received)" if the hour received is 0-6
  "Good morning (name received)" if the hour received is 6-12
  "Good day (name received)" if the hour received is 12-18
  "Good evening (name received)" if the hour received is 18-24
  "Invalid time" if the hour received is greater than 24
 
  Use whichever function syntax you want.
  Use template literal in your return: `This is a template literal ${variable}`
 
  Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
  Console log the function a few times to show that it's working.
  */
 
//! code here
// fail nr.1

// const greetUser = (names, hour) => {}



// fail nr.2
//   let names = Jeff;
// function greetUser (){
//   let result;
//   if (num === 6){ 

//   }

//   }


// fail nr.3
//   console.logg('Good night ${names}!'); 
//   if 
//   console.logg("Good morning"); 
//   console.logg("Good day"); 
//   console.logg("Good evening"); 
//   console.logg("Invalid time"); 

// greetUser("Jeff", 25);



function greet(name, hour) {
  if (hour >= 0 && hour < 6) {
      return `Good night ${name}`;

  } else if (hour >= 6 && hour < 12) {
    return `Good morning ${name}`;

  } else if (hour >= 12 && hour < 18) {
    return `Good evening ${name}`;

  } else if (hour >= 18 && hour < 25) {
    return `Good night ${name}`;  

  } else {
    return `Invalid time ${name}`;
  }
}

console.log(greet("Jeff", 2));
console.log(greet("Jeff", 18));
console.log(greet("Jeff", 24));
console.log(greet("Jeff", 25));




  /*
 
  4.
 
  Write a function that takes in 2 numbers as parameters.
 
  In your function, check which of the numbers received is the largest,
  then return the sum of the largest number divided by the smaller.
 
  Use arrow function syntax.
 
  Example: your function receives 13 and 24, it should return the sum of 24/13
 
  */
 
//! code here 
// fail nr.1
// function divider(num1, num2) {
//   if (num1 => num2)
//   return num1 / num2
// }

// console.log()


const divider = (num1, num2) => {
  if (num1 >= num2) {
    return num1 / num2; 
  } else {
    return num2 / num1;}
}; 

console.log(divider(16, 44))
console.log(divider(2, 44))
console.log(divider(75, 10))




  /*
  5.
 
  Write an IF/ELSE conditional statement that checks whether username is empty,
  that the user age is 18+, and that userIsBlocked is false.
 
  (HINT: Use the && (logical AND) to check several things in one IF statement)
 
  If all of these conditions are true, change the userIsLoggedIn variable to true and
  and the goToPage variable to "/home" then console.log a welcome message.
 
  If any of the conditions for logging in are not met, console.log an error message.
 
  Try changing the values of the variables to make sure your IF/ELSE conditional
  can handle all cases correctly
  */
 
//! code here
//! jeg skjønner ikke.. Har brukt AI til å hjelpe meg, gjøre oppgaven for meg å forklare løsningen. Jeg står fast på hvordan jeg skal tenke, eller strukturere det som står i oppgaven i kode.  
//! Tilbakemelding på oppgave. For min del for å forstå hvordan jeg skal går fremm for å løse den, at det var en rekkefølge på hvordan den skulle/kunne løses. 1 definer variabler (username, age osv). Også kommer IF/ELSE statment. 
let username = "JohnDoe"; 
let userAge = 20;         
let userIsBlocked = false; 

let userIsLoggedIn = false;
let goToPage = "";

 if (username !== "" && useAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console-log("Welcome to your homepage");
 } else {
  console.log("Error: Access denied. Please check your credentials.");
 }


 console.log("userIsLoggedIn:");
 console.log("goToPage:", goToPage);





  /*
  6.
 
  EXTRA CHALLENGE
 
  This is not mandatory, only for those who want an extra challenge.
 
  Make a function called coolMaker that takes in 1 parameter.
 
  If the parameter received is a string:
  Return the string with "😎" added to the beginning and end
 
  If the parameter received is a number:
  Double it, convert it to a string and return it with "😎" added to the beginning and end.
 
  If the parameter received is a boolean:
  If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
  return "😎Chill😎"
 
  If the parameter received is any other datatype:
  Return "😎Primitive values only😎"
 
  Use arrow function syntax.
 
  Console log the function call with a few different datatypes to show that it's working
  */
 
//! code here
 
  /*
  7.
 
  EXTRA CHALLENGE
 
  fix dette så man får ut: the number 9 was found!
   tips: legg det i en funksjon og lag en konsoll log som kjøres når loopen er ferdig
  */
 
 
  //  let randomNum = Math.ceil(Math.random() * 10) // expected output: 1-10
 
  //  let x = 1
  
  //  //! change the code below
  //  while (x != randomNum) {
  //    console.log("trying to find the number.. " + x)
  //    if (x === 9) break;
  //    x++
  //  }
  
   /*
   8.
  
   EXTRA CHALLENGE
  
    lag while loopen over til en fungerende for loop:
    */
 
    //! code here
 