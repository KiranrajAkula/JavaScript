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
/** 
     class class_one{
         fun_one(arg1:number , arg2:number):any;      // if we supply two numbers then autometically this function will called // declaration
        fun_one(arg1:string , arg2: string):any;      //if we supply two strings then autometically this function will called // declaration
        fun_one(arg1:boolean , arg2: boolean):any;    //if we supply two booleans then autometically this function will called  // these things we can call overloading in typescript
        fun_one(arg1:string, arg2:number):any;         // these all are the declarations below one is the implementation.      // declaration
        fun_one(arg1:any, arg2:any):any{ // this any changes dynamically changes based on our calling// implementation.// for (10,10) any behaves like number, number (20)// for ("10", "10") any behaves like string ,string,string(1010)
            return arg1+arg2;           //here the this any behaves like based on our declarations // for (true ,true) any behaves like boolean (1+0)=(1)
        }
    }
    let obj:class_one = new class_one();
    console.log(obj.fun_one(10,10 ))               // 20
    console.log(obj.fun_one("10","10"))            // 1010
    console.log(obj.fun_one(true, false))          // 1
    //console.log(obj.fun_one(10,"Hello"))         //No overload matches this call
 */