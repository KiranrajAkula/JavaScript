let x = true;
x == 2 ? console.log("one"):console.log("zero");

let y = true;
y === true ? console.log("one"):console.log("zero");

let str = "Kiranraj"
let Greet = `Hello , How are you ${str}`
console.log(Greet)

let arr = [1,2,3,4,5]
arr[2] = 300;
arr[4] = 500;

console.log(arr)        //[ 1, 2, 300, 4, 500 ]

arr.push(6)
console.log(arr)        // [ 1, 2, 300, 4, 500, 6 ]

arr.unshift(0)
console.log(arr)        // [ 0,   1, 2, 300, 4, 500, 6]

arr.pop()
console.log(arr)        //[ 0, 1, 2, 300, 4, 500 ]

arr.shift()
console.log(arr)        // [ 1, 2, 300, 4, 500 ]

let tech = {"tech_one":"Angular", tech_two:"Reactjs"}
console.log(tech)       //{ tech_one: 'Angular', tech_two: 'Reactjs' }

tech.tech_one = "Java";
tech.tech_two = "Nodejs";
console.log(tech)   //{ tech_one: 'Java', tech_two: 'Nodejs' }


function Greeting(){
    return "Hey ,Hello Gd mrng Kiranraj";
}
console.log(Greeting())     //Hey ,Hello Gd mrng Kiranraj

function Greeting1(stu,sir,madam){
    console.log(stu,sir,madam)
}Greeting1("Gd mrng by student","Gd Afternoon by sir","Gd Evening by madam")    //Gd mrng by student Gd Afternoon by sir Gd Evening by madam
 Greeting1('sir1', "stu1", 'madam')     //sir1 stu1 madam

 let arr1 = [];
 function fun_one(){
     return "kiranraj"
}
for(let i=0;i<8;i++){
    arr1.push(fun_one)
}
console.log(arr1[0]())
for(let j=0; j<=arr1.length;j++){
console.log(arr1[j]())
}
console.log(arr1)

