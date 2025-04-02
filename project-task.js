/*
Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions. This activity reinforces
skills in defining functions with no parameters, single parameters,
and multiple parameters, as well as using return statements effectively
to produce reusable and modular code.



Instructions:
    Analyze the provided script, which performs a series of repetitive tasks.
    Identify sections of the code that can be improved using functions.
    Write reusable functions with appropriate parameters and return statements to simplify and organize the code.
    Refactor the script to use the new functions.
    Test your refactored script to ensure it produces the same output as the original.
*/



//Original Code:
// Script 1
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

// Script 2
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Script 3
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 4
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



/*
Steps for Refactoring

Break Down Tasks into Functions:
    Identify repetitive tasks (e.g., printing greetings, performing calculations, iterating through arrays).
    Define functions for each task.

Write Functions with Appropriate Parameters and Return Values:
    Use parameters to generalize functions (e.g., greet a name, calculate the sum of two numbers).
    Use return statements to produce reusable outputs.

Refactor the Original Code:
    Replace repetitive or redundant sections with function calls.
*/
