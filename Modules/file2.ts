// import { var_one } from "./file1";
// console.log(var_one)        //Variable_1 

// import { sub_one } from "./file1";           importing independently this is one type of syntax
// import { sub_two } from "./file1";           // independent import it will be called
// import { sub_three } from "./file1"; 

// import { sub_one,sub_two, sub_three } from "./file1";   // importing all in one line this is anotherway
                                                            // single line import
// import * as subjects from "./file1"
// console.log(subjects) 
// console.log(subjects.sub_one, subjects.sub_two, subjects.sub_three)
//                             //{__esModule: true, sub_one: 'ReactJs', sub_two: 'Angular13',sub_three: 'Nodejs'} 
//                             // here we got in the form of object notation and _esModule means this is updated topic or latest concept
//                             // this is alos anotherway to import a file in form of user_variable
//                             // storing all variable into one custome variable

// import var_one from "./file1";

// console.log(var_one)        //Variable_1

// import fun_one from "./file1";
// console.log(fun_one())      //This is module file_1

// import class_one from "./file1";
// let obj:class_one = new class_one()
// console.log(obj.var_one,obj.fun_one())          //Class_one Variable_1 Class_one Variable_1

// import interface1 from "./file1";

// let obj:interface1 = {
//     sub_one :"Angular13",
//     sub_two :"Nodejs",
//     sub_three : "reactjs"
// }

// console.log(obj.sub_one, obj.sub_two, obj.sub_three)
//                         //Angular13 Nodejs reactjs

import {Parent,SubChild} from "./file1";
let obj:SubChild = new SubChild();
console.log(obj.var_one, obj.var_two, obj.var_three)        //Parent Variable_1
                                                            //Parent Variable_1 Child Variable_1 SubChild Variable_1