for(let i=0;i<5;i++){ //scoope of the i is the with in the curly braces
    console.log(i); // fisrst 0 will be printed ofter that it takes 1 to iterate0,1,2,3,4
}
//console.log(i) // this invalid actually i.e we have the drawback with var key word to overcome this problem let will be used
                    //ReferenceError: i is not defined with let key word

// var data = 100 ;   var sub = "javascript"
// var data = 200 ;    var sub ="vennila javascript"// duplicate variables  //vennila javascript
// console.log(sub) // var  lastly stored duplicate value will be printed if they have same variable or duplicate is created then


var data1 = 100;
console.log(data1)// 100

{
    let data1 = 200 ;
    console.log(data1)// 200
}

console.log(data1) //[var 200]  because of bug we getting 200 place the let key word [let 100]

// if any block of code effecting global member  called as global polluting issue
// global polluting issue is raised becauese of var keyword
//we can overcome global polluting issue by using  let keyword


//variable declarization = vaiable initialization
var msg ="Hello";
console.log(msg) //Hello  // variable accessing

console.log(data2) // var: undefined (variable hoisting)let: ReferenceError: cannot access "data" 
var data2=100;
//   gettiing undefined before declaration and initialization called as variable hoisting 
// variable hoisting is raised because of var keyword
// we can overcome variable hoisting with the help of let key word


const arr = [1,2,3,4,5] //arr is land and values are rooms  we cannot modified the whole arr 
//arr= [];// Type Error

arr[0] = 100;
arr[3] = 400;
arr[5] = 800;  //added into an array 

console.log(arr);  //[ 100, 2, 3, 400, 5, 800 ]

arr.pop()
console.log(arr); //[ 100, 2, 3, 400, 5 ] stored end of the arr value deleted
arr.shift()
console.log(arr)    //[ 2, 3, 400, 5 ] stored 1 value deleted  

const obj ={
    "sub_one": "angular",
    "sub_two":"reactjs"}  // json object open ng closing the curly brackets is called json object
console.log(obj)  //{ sub_one: 'angular', sub_two: 'reactjs' } before modification that is exist object or initial obj

obj.sub_one = "java";
obj.sub_two = "nodejs" // {sub_one: 'java', sub_two: 'nodejs' } modified json objects

console.log(obj) // {sub_one: 'java', sub_two: 'nodejs' }



