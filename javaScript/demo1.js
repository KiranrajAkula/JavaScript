var var_one = "Hello one";
console.log(var_one); // Hello

var abc123 ;//right
//var 123abc //wrong
var abc$123// valid
var _123//valid

var decimal_num = 100;
var double_num = 100.11234  ;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;

console.log(decimal_num, double_num, hexadecimal_num,octal_num,binary_num)

var flag = true;
console.log(flag) //true

console.log(1+true) //2

console.log(true + true) //2
 
console.log(true - false) // 1

console.log( "1" + true) // 1true

console.log(+ "1" + true) // by prefixing with another + impilcitly it converts the string to number i.e +"1"+ true = 2 

var x = true;
x == true ?console.log("hello"):console.log("bye") // compares only values
x === false ?console.log("hello"):console.log("bye") // compares the value and datatypes