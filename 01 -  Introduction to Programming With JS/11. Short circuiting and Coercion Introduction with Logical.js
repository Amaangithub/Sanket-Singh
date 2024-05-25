/*

falsy Values in Javascript :-
 - null
 - undefined
 - '' (empty string)
 - -0
 - +0
 - NaN
 - false

 except above all are Truthy value
 
coercion => converting one data type to another

*/

/*

&& Operator :-
  In And operator if the first input is false, then it doesn't evaluate the 2nd input and immediately returns the first input.
  As well as if the first input is true, then the 2nd input has to be evaluated. And then second input is returned.

*/

console.log(0 && 5); // 0 as 0 is a falsy value
console.log(1 && -1);
console.log(10 > 5 && 50 < 100); // true

/*
|| Operator :-
  In our gate, if the first input is true, then it does not evaluates the 2nd input and immediately return the 1st input. 
  Whereas if the first input is false, then it returns the 2nd input.
 */

console.log(2 || 0);
console.log(0 || -0);
console.log(0 || 5);
console.log(10 < 0 || 1 < 2);
