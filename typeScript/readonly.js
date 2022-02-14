var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Variable_1";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one);
//obj.var_one = "variable_valuechange"        //Cannot assign to 'var_one' because it is a read-only property
