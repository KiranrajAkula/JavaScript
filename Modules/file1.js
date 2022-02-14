"use strict";
//export let var_one:string = "Variable_1"
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
exports.__esModule = true;
exports.SubChild = exports.Parent = void 0;
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
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "Parent Variable_1";
    }
    return Parent;
}());
exports.Parent = Parent;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Child Variable_1";
        return _this;
    }
    return Child;
}(Parent));
var SubChild = /** @class */ (function (_super) {
    __extends(SubChild, _super);
    function SubChild() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_three = "SubChild Variable_1";
        return _this;
    }
    return SubChild;
}(Child));
exports.SubChild = SubChild;
