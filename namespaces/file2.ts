///<reference path="file1.ts" />
console.log(
    Transactions.acc_bal,
    Transactions.credit_limit,
    Transactions.debit
) //100000 50000 50000

console.log(
    Functions.fun_one(),
    Functions.fun_two(),
    Functions.fun_three()
    )       //Hello_1 Hello_2 Hello_3
    // here by removing the classes.class_one to the obj also it will work as it as but here we need to follow the typescript standards.
let obj:classes.class_one  = new classes.class_one("Variable_1", "Variable_2", "Variable_3")

console.log(obj.var_one,obj.var_two, obj.var_three);    // Variable_1 Variable_2 Variable_3



class class_one implements Example.Interface2{
    var_one:string = "Kiran_1";
    var_two:string = "Kiran_2";
    var_three:string = "Kiran_3"
}
let obj1:class_one = new class_one()
console.log(obj1.var_one, obj1.var_two, obj1.var_three)// Kiran_1 Kiran_2 Kiran_3
