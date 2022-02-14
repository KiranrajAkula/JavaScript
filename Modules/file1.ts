//export let var_one:string = "Variable_1"

//  export let sub_one:string = "ReactJs";
//  export let sub_two:string = "Angular13";
//  export let sub_three:string = "Nodejs";

//export default let var_one:string = "Variable_1";
                                    // default keyword not supported in this type of syntax variables
                                    
// let var_one:string = "Variable_1"
// export default var_one;             // default supporting with variable by this type of syntax

// export default function fun_one():string{
//     return "This is module file_1"
// }

// export default class class_one{
//     var_one:string = "Class_one Variable_1";

//     fun_one():string{
//         return this.var_one;
//     }
// }

// export default interface interface1{
//     sub_one:string;
//     sub_two:string;
//     sub_three:string;
// }

// Multilevel

export class Parent{
    var_one:string = "Parent Variable_1"
}
 class Child extends Parent{
    var_two:string = "Child Variable_1"
}
 export  class SubChild extends Child{
    var_three:string = "SubChild Variable_1"
}