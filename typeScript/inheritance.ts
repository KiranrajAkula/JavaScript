 /**  
  
    // Single level Inheritence

    class Parent{
        var_one:string = "Variable_1";
    }
    class Child extends Parent{
        var_two:string = "Variable_2";          // now it contain two variable bcz of variable inherited by child form parent
    }
    let obj1:Child = new Child()
    console.log(obj1.var_one,obj1.var_two);     //Variable_1 Variable_2

    let obj2:Parent = new Parent()
    console.log(obj2.var_one);                   //Variable_1

    let obj3:Parent = new Child()       //what is the meaning of this means Parent Class obj3 holding the child class object here we can only get one obj of child class bcz it contain only one object
    console.log(obj3.var_one);                  //Variable_1 

    //let obj4:Child = new Parent()       // here we got an erroe y bcz child class can't hold parent class object
 */
/** 
        class Parent{
            var_one:string = "Variable_1";
            fun_one(){
                return this.var_one;
            }
        }
        class Child extends Parent{
            var_two:string = "Variable_2";
            fun_two(){
                return this.var_two;
            }
        }
        let obj:Child = new Child();
        console.log(obj.fun_one(), obj.fun_two())   //Variable_1 Variable_2 
*/
/** 
    // multi level inheritence

    class Parent{
        var_one:string = "Variable_1"

        
    };
    class Child extends Parent{
        var_two: string = "Variable_2"

    }
    class Subchild extends Child{
        var_three:string = "Variable_3"     // 
    }
    let obj1:Parent = new Parent()
    console.log(obj1.var_one);                              //Variable_1
        
    let obj2:Child = new Child()
    console.log(obj2.var_one, obj2.var_two)                 //Variable_1 Variable_2 

    let obj3:Subchild = new Subchild()
    console.log(obj3.var_one, obj3.var_two, obj3.var_three) //Variable_1 Variable_2 Variable_3
*/
/**
    // Multiple inheritence
    class Parent1{

    }
    class Parent2{

    }
    class Child extends Parent1, Parent2{
        // Multiple Inheritence not supported by typescript
    }
 */
/** 
    // Heirarchical Inheritence 

    class Parent{
        var_one:string = "Variable_1";
    }
    class Child1 extends Parent{
        var_two:string = "Variable_2";
    }
    class Child2 extends Parent{
        var_three:string = "Variable_3";
    }
    class Child3 extends Parent{
        var_four:string = "Variable_4";
    }
     let obj1:Parent = new Parent()
     console.log(obj1.var_one)                  // Variable_1

     let obj2:Child1 = new Child1()
     console.log(obj2.var_one, obj2.var_two);   // Variable_1 Variable_2

     let obj3:Child2 = new Child2()
     console.log(obj3.var_one, obj3.var_three)  // Variable_1 Variable_3

     let obj4:Child3 = new Child3()
     console.log(obj4.var_one, obj4.var_four )  // Variable_1 Variable_4
*/
/** 
    // hybrid inheritence
    class Parent{}

    class Child1 extends Parent{}

    class Child2 extends Parent{}

    class Subchild extends  Child1 , Child2{}  // here we got error bcz Hybrid inheritence not supported by typescript.
*/