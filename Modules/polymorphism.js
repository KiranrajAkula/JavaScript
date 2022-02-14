// polymorphism
// one thing behaves like many called as polymorphism
// 1) function overloading:-
//     => same funtion_name with different parameters called as function overloading // this is valid in java but not in typescript
//     => same function_name with same "parameters" called as "function overloading".
// 2) function overriding:- overriding is nothing but enhancement (occupying old function value with new function value )
//    => overriding or overrided parent class functionality with child class functionality called as funciton overriding.
//    => to implement function overriding inheritence is required or mandatory.
//    => and parent and child should contain same function then only we can implement function overriding.
/**
    class Parent{
        earn():any{
            return "Parent Earned 1Cr"
        }
    }
    class Child extends Parent{
        earn():any{
            return "Child Earned 10Cr"      // overriding means here this 10cr replaced with 1cr
        }
    }
    let obj:Child = new Child();
    console.log(obj.earn())     // Child Earned 10Cr here we got child only child value bcz of function overriding
*/
/**
        class Parent{
            dbFun():string{
                return "Oracle Connection Soon...."
            }
        }
        class Child extends Parent{
            dbFun(): string {
                return "MangoDB Connection Soon...."        // this child funtion enhaced with parent
            }
        }

        class SubChild extends Child{
        dbFun():string{
            return "RabbitQ Connection Soon...."            // this subchild enhanced with child
        }
             }
         let obj:SubChild = new SubChild();
        console.log(obj.dbFun())                //RabbitQ Connection Soon....
*/
// Function overloading
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function (arg1, arg2) {
        return arg1 + arg2; // for (true ,true) any behaves like boolean (true , false)
    };
    return class_one;
}());
var obj = new class_one();
console.log(obj.fun_one(10, 10));
console.log(obj.fun_one("10", "10"));
console.log(obj.fun_one(true, false));
