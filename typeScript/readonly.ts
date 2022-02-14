class class_one{
    readonly var_one:string = "readonly_Variable_1"     // why this readonly means we can't declare variables let ,var ,const, insted we using readonly meands we can't update
}
let obj:class_one = new class_one();
console.log(obj.var_one)        // readonly_Variable_1

//obj.var_one = "variable_valuechange"   //here we can't update data like constant keyword     //Cannot assign to 'var_one' because it is a read-only property