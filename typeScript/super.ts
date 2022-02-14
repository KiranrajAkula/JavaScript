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

    class Parent{
        fun_one():any{
            return "fun_one";
        }
        //var_one:string = "Varaible_1";
    }
    class Child extends Parent{
        fun_two():any{
            return super.fun_one();
        }
        //var_two:string = super.var_one;       // through the super keyword we can't refer the variable
    }
    let obj:Child = new Child();
    console.log(obj.fun_two())      //fun_one