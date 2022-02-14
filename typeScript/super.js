/**
    class Parent {
        constructor(public arg1:any){   // why we are placing arg as a public in constructoe means inorder to access the that varaiable by taken class obj

        }
    };
    class Child extends Parent{
        constructor(public arg1:any , public arg2:any){         // here child class constructor will call the parent class constructoe it will be done by declaring super keyword
            super(arg1);

        }
    };
    class Subchild extends Child{
        constructor(public arg1:any, public arg2:any, public arg3:any){
            super(arg1, arg2)
        }
    }
    let obj:Subchild = new Subchild("arg_1","arg_2","arg_3");
    console.log(obj.arg1,obj.arg2,obj.arg3)         // arg_1 arg_2 arg_3
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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.fun_one = function () {
        return "fun_one";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.fun_two = function () {
        return _super.prototype.fun_one.call(this);
    };
    return Child;
}(Parent));
var obj = new Child();
console.log(obj.fun_two()); //fun_one
