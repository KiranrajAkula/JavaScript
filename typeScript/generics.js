/**

    function fun_one<a,b>(arg1:a,arg2:b):void{       // here we need to take the datatypes dynamically.

    console.log(arg1,arg2)      // Parameter1 Parameter2    //100 100       //true true
    }
    fun_one<string,string>("Parameter1", "Parameter2 ")     // while calling the function we deciding the datatype tecnnically we can call generics
    fun_one<number,number>(100,100)
    fun_one<boolean ,boolean>(true ,true)
*/
/**
    function fun_one<x>(arg1:string,arg2:x):void{       // here one fixed datatype and another is generic
        console.log(arg1,arg2)          //Paramter_1 Parameter_2    //Paramter_1 11 //Paramter_1 true   //Parameter_1 Parameter_2
    }
    fun_one<string>("Paramter_1", "Parameter_2")
    fun_one<number>("Paramter_1",11)
    fun_one<boolean>("Paramter_1",true)
    fun_one<any>("Parameter_1","Parameter_2")
*/
/**
    class class_one<x,y,z>{
        var_one:x;
        var_two:y;
        var_three:z;
        constructor(arg1:x,arg2:y,arg3:z){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;        }
    }
    let obj:class_one<string ,string ,string> = new class_one("Parameter_1","Parameter_2","Paramter_3")
    console.log(obj.var_one, obj.var_two, obj.var_three)        //Parameter_1 Parameter_2 Paramter_3

    let obj1:class_one<number,number, number> = new class_one(100,100,100)
    console.log(obj1.var_one, obj1.var_two, obj1.var_three)     //100 100 100

    let obj2:class_one<boolean, boolean, boolean> = new class_one(true,true, true)
    console.log(obj2.var_one, obj2.var_two, obj2.var_three)     //true true true
*/
/**
    interface interface1<x,y,z>{
        var_one:x;
        var_two:y;
        var_three:z;
    }
    let obj1:interface1<string,string,string>= {
        var_one : "Variable_1",
        var_two : "variable_2",
        var_three : "Variable_3"
    }
    console.log(obj1.var_one, obj1.var_two , obj1.var_three)        //Variable_1 variable_2 Variable_3

    let obj2:interface1<number,number,number> = {
        var_one:100,
        var_two:200,
        var_three:300
    }
    console.log(obj2.var_one, obj2.var_two , obj2.var_three)            //100 200 300


    class class_one implements interface1<any,any,any>{
        var_one = "Hello";
        var_two = 100;
        var_three = true;
    }
    let obj3:class_one = new class_one()
    console.log(obj3.var_one, obj3.var_two, obj3.var_three)         //Hello 100 true
*/ 
