
// string
let sub_one:string = "Angular13";
let sub_two:string = "nodeJs" ;
let sub_three:string = " MangoDB";
let mean:string = ` MEAN Stack Development => ${ sub_one}... ${sub_two}..${sub_three}...`;

    console.log(mean);      // MEAN Stack Development => Angular13... nodeJs.. MangoDB...




    // number
let decimalNum:number = 100;
let doubleNum:number = 100.3456;
let hexadecimalNum:number = 0x12344;
let octalNum:number = 0o124;
let binaryNum: number = 0b1010;
console.log(decimalNum,doubleNum,hexadecimalNum,octalNum,binaryNum)     //100 100.3456 74564 84 10

    // boolean
let flag:boolean = true;
let flag1:boolean = false;

console.log(flag, flag1)    //true false

    // any - we can store any type of value (Global data type)
let data:any = "we can store any type of data ";


//arrays
//string array
// here we can declare arrays in two ways following are the two ways to define an arrays

let arr1:string[] = ["Angular","Noejs", "reactJS", "vueJs","MangoDB"]
let arr2: Array<string> = ["Angular","Noejs", "reactJS", "vueJs","MangoDB"]


// number array

let arr3:number[] = [10,20,30,40,50]
let arr4:Array<number> = [10,20,30,40,50]


//  boolean array
let arr5:boolean[] = [true,false,true,false,false]
let arr6:Array<boolean> = [true,false,true,false,false]


// json 
// any                  // the data type of json bydefault is any

let obj:any = {
    "sub_one":"Angular",
    "sub_two":"NodeJs",
    "sub_three": "MangoDB"
} 


// array of json objects

let obj1:any[] = [
    {"msg1":"hello_1"},
    {"msg2":"hello_2"},
    {"msg3":"hello_3"},
    {"msg4":"hello_4"},
    {"msg5":"hello_5"}
]


let v1:undefined = undefined;
let v2:null = null;


let arg1: string | number = "Hello";    // these type of terminalogy ww can call union in the typescript
    arg1 = 200 ;

let arg2: string | number | boolean = "hello";

arg2 = 2000;

arg2 = true;