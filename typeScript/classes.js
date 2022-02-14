/**
        class class_one{
        var_one:string = "Hello_1";
        var_two:string = "Hello_2";
        var_three:string = "Hello_3";
        };
        let obj:class_one = new class_one()       // created object to the class that obj name is obj // here obj:class_one tells about relation b/w both of them
                                                // that means obj is related to that class_one object it is the typescript notation.
                                                // through that obj we can access three variables
        console.log(obj.var_one,obj.var_two , obj.var_three)        // Hello_1 Hello_2 Hello_3
 */
/**
    
    class class_one{
        var_one:string;                     // to this variables need to initialize dynamically then we need to go for constructor.
        var_two:string;                     // in order to initialize dynamically then we need to take the constructor.
        var_three:string;
        
        constructor (arg1:string, arg2:string, arg3:string){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;          // here we need to refer the current class members with help of this keyword
        }
    };
        let obj1:class_one = new class_one("agr1","arg2","arg3")
        console.log(obj1.var_one, obj1.var_two, obj1.var_three)     //agr1 arg2 arg3 here we supplying the data while crating an object.

        let obj2:class_one = new class_one("arg3","arg4","arg5")
        console.log(obj2.var_one, obj2.var_two, obj2.var_three)     //arg3 arg4 arg5   // here we can create more than one objects
*/
/**
        class class_one{
            private sub_one:string;
            private sub_two:string;
            private sub_three:string;

            constructor(){
                this.sub_one = "Angular";
                this.sub_two = "NodeJs";
                this.sub_three = "MangoDB";
            }
          public  getSubOne(){
                return this.sub_one
            }
           public getSubTwo(){
                return this.sub_two
            }
           public getSubThree(){
             return this.sub_three
            }
        }
        let obj1:class_one = new class_one()                                     // here through objects here we can call only public members private members we can't call
        console.log(obj1.getSubOne(), obj1.getSubTwo(), obj1.getSubThree())      // Angular NodeJs MangoDB
                                                                                 // we can access only public members we can't access private members we can access public member through the class objects we can access public members
*/
/**
    class class_one{
        constructor(public arg1:any, public arg2:any, public arg3:any){}
    };
    let obj1:class_one = new class_one("Hello_1","Hello_2","Hello_3")
    console.log(obj1.arg1,obj1.arg2,obj1.arg3)                          //Hello_1 Hello_2 Hello_3

    let obj2:class_one = new class_one("Hello_4","Hello_5","Hello_6")
    console.log(obj2.arg1,obj2.arg2,obj2.arg3)                          //Hello_4 Hello_5 Hello_6
*/
/**
    class class_one{
        constructor(public arg1:any ){}
    }
    class class_two{
        var_one:string = "Hello";   // if we forget place the modifier the default modifier is public
    }
    let obj1:class_one = new class_one( new class_two())
    console.log(obj1.arg1.var_one)          // Hello
*/
/**
    class class_one{
        constructor(public obj1:any, public obj2:any, public obj3:any){
        }
    };
    class class_two{
        var_one :string = "am from class two";
    }

    class class_three{
        var_two:string = "am from class Three";
    }
    class class_four{
        var_three:string = "am from class four";
    }

    let obj:class_one = new class_one(new class_two(), new class_three, new class_four)

    console.log(obj.obj1.var_one, obj.obj2.var_two, obj.obj3.var_three) //am from class two am from class Three am from class four
*/
/**     class class_one{
       fun_one(){
           return "This is fun_one()";
       };
       fun_two(){
           return "This is fun_two()";
       };
       fun_three(){
           return "This is fun_three()";
       }
   }
   let obj:class_one = new class_one()
   console.log(obj.fun_one(),obj.fun_two(), obj.fun_three())//This is fun_one() This is fun_two() This is fun_three()
*/
var class_one = /** @class */ (function () {
    // but with in the class we can access the members
    function class_one(arg1) {
        this.var_one = arg1;
    }
    class_one.prototype.fun_one = function () {
        return this.var_one;
    };
    return class_one;
}());
var obj = new class_one("This is Var_one's Argument");
console.log(obj.fun_one()); // This is Var_one's Argument
