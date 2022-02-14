/** 
    class class_one{
        static var_one:string;
        constructor(){
            this.var_one = "Variable_1";        //we can't initialize static members by "constructor".
        }
    }
*/
/** 
    class class_one{
        static var_one:string = "Variable_1";
        static fun_one():string{
            return "Static fun_one()"
        }
    }
    let obj:class_one = new class_one() 
    console.log(obj.var_one, obj.fun_one()) //Property 'var_one' does not exist on type 'class_one'. 
                                            //Did you mean to access the static member 'class_one.var_one' instead?
                                            //Property 'fun_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.fun_one' instead?
*/
/** 
    class class_one{
        static var_one:string = "Variable";
        static fun_one():string{
            return "Static fun_one()"
        }
    }

    console.log(class_one.var_one, class_one.fun_one())     //Variable ,Static fun_one() hrre we accesses by class_name  
*/

    class class_one{
        private constructor(){}

        static fun_one(){
            return new class_one(); // this line we can call accessing the constructor
        }
        fun_two():any{
            return "fun_two "
        }
    }
    console.log(class_one.fun_one().fun_two())              // fun_two    