
/** 
    public class class_one{

    };
    //'public' modifier cannot appear on a module or namespace element.
*/
/**
    // in following way we can apply the public modifier to the variable function and constructor
    class class_one{
        public var_one:string = "Variable_1";
        public constructor(){

        }
        public fun_one():string{
            return "fun_one"
        }
    }               // here by using obj we can access public variable and public function
    let obj:class_one = new class_one();
    console.log(obj.fun_one(), obj.var_one)     //fun_one Variable_
 */
/** 
        class class_one{
            public vae_one:string = "Public Variable_1";

            public fun_one():string{
                return "Public fun_one"
            }
        }
         class class_two extends class_one{}

         let obj2:class_two = new class_two();
         console.log(obj2.vae_one, obj2.fun_one());     //Public Variable_1 Public fun_one

        
*/
/** 
 * //1) here private modifier not applicable to the classess
        private class class_one{

        }   //'private' modifier cannot appear on a module or namespace element.
*/
/** 
        // 2)  the private variable appicable to the variables, constructor, and functions.
        class class_one{
            private var_one:string = "Variable_1"

            private constructor(){

            }

            private fun_one():string{
                return "Private fun_one()"
            }
        }
*/
/** 
     // 3) we can't create object to the private constructor

     class class_one{
         private constructor(){}
     }
     let obj:class_one = new class_one(); 
     // Constructor of class 'class_one' is private and only accessible within the class declaration.
*/

     //4) here we can access private members with in the class by using "this" keyword
/**          class class_one{
         private var_one:string;

         constructor(){
             this.var_one = "Variable_one";

         }
     }
*/

    // 5) we can't access private member by using class objects 
/** 
    class class_one{
        private var_one:string;

        constructor(){
            this.var_one = "Variable_1";
        }
    }
    let obj:class_one = new class_one();
    obj.var_one; //here we got an error bcz we can't access private member by using class objects
*/
/** 
    // 6) private members won't accessable to child classes 
     
    class class_one{
        private var_one:string = "Variable_1"; // here the class_one var_one wont available to the child class_two bcz of private variable
     }; 
     class class_two extends class_one{

     }
     let obj:class_two = new class_two();
     obj.var_one    //Property 'var_one' is private and only accessible within class 'class_one'
*/
     // protected 

     // 1) protected key word not applicable to class level
/** 
     protected class class_one{

     }  //'protected' modifier cannot appear on a module or namespace element.
*/
/** 
     // 2) protected modifier applicable to variables , functions and constructor also

     class class_one{
         protected var_one:string = "Variable_1";

         protected constructor(){

         };
         protected fun_one():string{
             return "Protected fun_one()"
         }
     };
*/
/** 
     // 3) we can't protected members by using  class objects.

     class class_one{
         protected var_one:string = "Variable_1";
     }
     let obj:class_one = new class_one()
     console.log(obj.var_one)       // Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses. 
*/
        // 4) we can't create object to protected constructor
 /**        
        class class_one{
            protected constructor(){

            }
        }
        let obj:class_one = new class_one() //Constructor of class 'class_one' is protected and only accessible within the class declaration
*/
        //  5) protected members available to child classes.
/** 
        class class_one{
            protected var_one:string = "Variable_1";

        }
        class class_two extends class_one{
            public var_two:string = this.var_one;
        }
        let obj:class_two = new class_two()
        console.log(obj.var_two)            //Variable_1
*/