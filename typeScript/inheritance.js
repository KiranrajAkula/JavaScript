/**
 
   // Single level Inheritence

   class Parent{
       var_one:string = "Variable_1";
   }
   class Child extends Parent{
       var_two:string = "Variable_2";          // now it contain two variable bcz of variable inherited by child form parent
   }
   let obj1:Child = new Child()
   console.log(obj1.var_one,obj1.var_two);     //Variable_1 Variable_2

   let obj2:Parent = new Parent()
   console.log(obj2.var_one);                   //Variable_1

   let obj3:Parent = new Child()       //what is the meaning of this means Parent Class obj3 holding the child class object here we can only get one obj of child class bcz it contain only one object
   console.log(obj3.var_one);                  //Variable_1

   //let obj4:Child = new Parent()       // here we got an erroe y bcz child class can't hold parent class object
*/
/**
        class Parent{
            var_one:string = "Variable_1";
            fun_one(){
                return this.var_one;
            }
        }
        class Child extends Parent{
            var_two:string = "Variable_2";
            fun_two(){
                return this.var_two;
            }
        }
        let obj:Child = new Child();
        console.log(obj.fun_one(), obj.fun_two())   //Variable_1 Variable_2
*/
/**
    // multi level inheritence

    class Parent{
        var_one:string = "Variable_1"

        
    };
    class Child extends Parent{
        var_two: string = "Variable_2"

    }
    class Subchild extends Child{
        var_three:string = "Variable_3"     //
    }
    let obj1:Parent = new Parent()
    console.log(obj1.var_one);                              //Variable_1
        
    let obj2:Child = new Child()
    console.log(obj2.var_one, obj2.var_two)                 //Variable_1 Variable_2

    let obj3:Subchild = new Subchild()
    console.log(obj3.var_one, obj3.var_two, obj3.var_three) //Variable_1 Variable_2 Variable_3
*/
/**
    // Multiple inheritence
    class Parent1{

    }
    class Parent2{

    }
    class Child extends Parent1, Parent2{
        // Multiple Inheritence not supported by typescript
    }
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Heirarchical Inheritence 
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "Variable_1";
    }
    return Parent;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Variable_2";
        return _this;
    }
    return Child1;
}(Parent));
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_three = "Variable_3";
        return _this;
    }
    return Child2;
}(Parent));
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_four = "Variable_4";
        return _this;
    }
    return Child3;
}(Parent));
var obj1 = new Parent();
console.log(obj1.var_one);
var obj2 = new Child1();
console.log(obj2.var_one, obj2.var_two);
var obj3 = new Child2();
console.log(obj3.var_one, obj3.var_three);
var obj4 = new Child3();
console.log(obj4.var_one, obj4.var_four);
