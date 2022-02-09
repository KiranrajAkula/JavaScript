var x ;
console.log(x)     //undefined bcz object is present but no use with that but it occupies the memory
x = null;
console.log(x)   // null  actullay it is no part of the current object bcz defined null(removed from the job)

console.log(undefined == undefined) // true ==(job)
console.log(undefined === undefined) // true ===( both friends have the job, but no work)

console.log(null == null)   // true (both dont have the job)
console.log(null === null)  //true (both dont have job and work)

console.log(undefined == null) // true
console.log(undefined === null) //false 

var bigint = 12345678800987766554433322322212344555678789064535364675878679023453546564775n;
console.log(bigint)

var type ="hello";
console.log(typeof(type))   //string
console.log(typeof 100);   //number
console.log(typeof true)   // boolean
console.log(typeof undefined); //undefined
console.log(typeof null)  // object
console.log(typeof []);  //object
console.log(typeof 1n)  // bigint

console.log(1n+2n) //3n
console.log(1n / 1n)