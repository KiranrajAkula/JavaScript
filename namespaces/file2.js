var Transactions;
(function (Transactions) {
    Transactions.acc_bal = 100000;
    Transactions.credit_limit = 50000;
    Transactions.debit = 50000;
})(Transactions || (Transactions = {}));
var Functions;
(function (Functions) {
    function fun_one() {
        return "Hello_1";
    }
    Functions.fun_one = fun_one;
    function fun_two() {
        return "Hello_2";
    }
    Functions.fun_two = fun_two;
    function fun_three() {
        return "Hello_3";
    }
    Functions.fun_three = fun_three;
})(Functions || (Functions = {}));
var classes;
(function (classes) {
    var class_one = /** @class */ (function () {
        function class_one(arg1, arg2, arg3) {
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
        return class_one;
    }());
    classes.class_one = class_one;
})(classes || (classes = {}));
///<reference path="file1.ts" />
console.log(Transactions.acc_bal, Transactions.credit_limit, Transactions.debit); //100000 50000 50000
console.log(Functions.fun_one(), Functions.fun_two(), Functions.fun_three()); //Hello_1 Hello_2 Hello_3
// here by removing the classes.class_one to the obj also it will work as it as but here we need to follow the typescript standards.
var obj = new classes.class_one("Variable_1", "Variable_2", "Variable_3");
console.log(obj.var_one, obj.var_two, obj.var_three); // Variable_1 Variable_2 Variable_3
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Kiran_1";
        this.var_two = "Kiran_1";
        this.var_three = "Kiran_3";
    }
    return class_one;
}());
var obj1 = new class_one();
console.log(obj.var_one, obj1.var_two, obj1.var_three);
