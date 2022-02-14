/**
    // Single interface may contain multiple implementaions
    // here interface we can also implement for classes also
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }

    let obj1:interface1 = {
    var_one:"Angular13",
    var_two:"NodeJs",
    var_three:"MangoDb"
    }

    console.log(obj1.var_one, obj1.var_two, obj1.var_three)     // Angular13 NodeJs MangoDb

    let obj2:interface1 = {
        var_one:"ReactJs",
        var_two:"NodeJs",
        var_three:"MangoDB"
    }
    console.log(obj2.var_one,obj2.var_two, obj2.var_three)      // ReactJs NodeJs MangoDb

    class Class_one implements interface1{
        var_one: string = "VueJs";
        var_two: string = "NodeJs";
        var_three: string = "MangoDB";
    }
    let obj:Class_one = new Class_one()
    console.log(obj.var_one, obj.var_two, obj.var_three)        // VueJs NodeJs MangoDB
*/
/**
    interface interface1{       // here we know only the declaration
        fun_one():void;
        fun_two():void;
        fun_three():void;
    }
        // implementaion known by the json or class
    class Class_one implements interface1{
        fun_one(): void {
            console.log("fun_one");     //fun_one
        };
        fun_two(): void {
            console.log("fun_two");     //fun_two
        };
        fun_three(): void {
            console.log("fun_three");      //fun_three
        };
    }
    let obj:Class_one = new Class_one();
    obj.fun_one(),obj.fun_two(), obj.fun_three()

    let obj2:interface1 = {
        fun_one:():void=>{
            console.log("fun_one")      // fun_one
        },
        fun_two:():void =>{
            console.log("fun_two")      //fun_two
        },
        fun_three:():void =>{
            console.log("fun_three")    //fun_three
        }
    }
    obj2.fun_one(),obj2.fun_two() , obj2.fun_three()
*/
/**
    // Single level inheritence in interfacees
    interface interface1{
        var_one:string;
    };
    interface interface2 extends interface1{
        var_two:string;
    };

        let obj:interface2 = {
            var_one:"Variable_1",
            var_two:"Variable_2 "
        };
        console.log(obj.var_one,obj.var_two)    //Variable_1 Variable_2
*/
/**
        // implementation of multi level inheritence in interface
        interface interface1{
            var_one:string;
        }
        interface interface2 extends interface1{
            var_two:string;
        }
        interface interface3 extends interface2{
            var_three:string;
        }

        let obj:interface3 = {
            var_one: "Variable_1",
            var_two: "Variable_2",
            var_three: "Variable_3"
        }

        console.log(obj.var_one, obj.var_two, obj.var_three)        //Variable_1 Variable_2 Variable_3
*/
;
;
;
var obj1 = {
    var_one: "Parent_1",
    var_two: "Parent_2",
    var_three: "Child_1"
};
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
