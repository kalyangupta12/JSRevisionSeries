//Example of hoisting with var
console.log(a); //output: undefined
var a = 5;
//Explanation: JS hoists the variable 'a' declaration to the top,
//but its initialization (a=5) remains in place. So, 'a' is declared but not initialized at this point.

console.log(b); //ReferenceError: b is not defined
//Explanation: Variables declared with 'let' and 'const' are not hoisted in the same way.
//Accessing 'b' before its declaration causes a ReferenceError.
// Example of hoisting with var
console.log(a); // Output: undefined
var a = 5; 
// Explanation: JavaScript hoists the variable 'a' declaration to the top, 
// but its initialization (a = 5) remains in place. So, 'a' is declared but not initialized at this point.

console.log(b); // ReferenceError: b is not defined
// Explanation: Variables declared with 'let' and 'const' are not hoisted in the same way. 
// Accessing 'b' before its declaration causes a ReferenceError.

let b = 10; 
// Explanation: The declaration of 'let' and 'const' variables is hoisted, 
// but they remain uninitialized (in the temporal dead zone) until the code execution reaches their declaration.

hoistedFunction(); // Output: "I am a hoisted function"
// Explanation: Function declarations are fully hoisted, including their definition, so they can be called before being declared.

function hoistedFunction() {
  console.log("I am a hoisted function");
}

// Example of hoisting in a function scope
function example() {
  console.log(x); // Output: undefined
  var x = 3; 
  // Explanation: Inside the function, 'x' is hoisted and declared at the top of the function scope,
  // but its initialization (x = 3) happens after the console.log statement.
}

example();

// Example showing function expression hoisting
console.log(hoistedFunctionExpression); // Output: undefined
// Explanation: The variable 'hoistedFunctionExpression' is hoisted, but the function assignment is not. 
// So it is undefined at this point.
hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function

var hoistedFunctionExpression = function() {
  console.log("I am a function expression");
};
// Explanation: In the case of function expressions, the variable is hoisted but its value (the function) is not.
// Hence, 'hoistedFunctionExpression' is undefined until the function is assigned to it.



