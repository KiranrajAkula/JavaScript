/***
    let fun_one = (arg1:string, arg2:string , arg3:string):any => {
            console.log(arg1, arg2 , arg3)
    }
        //fun_one()                                 //Expected 3 arguments, but got 0
        fun_one("Hello_1", "Hello_2", "Hello_3")    //Hello_1 Hello_2 Hello_3
 */
/***
    let fun_one = (arg1:any, arg2:any , arg3:any): any =>{
            console.log(arg1.msg, arg2.msg, arg3.msg)
    }
     fun_one({"msg":"Hello_4"},{"msg":"Hello_5"},{"msg":"Hello_6"})     //Hello_4 Hello_5 Hello_6
 */
/** 
     let netWorkCall = (successCallBack:any,errorCallBack:any):any =>{
        console.log(successCallBack() , errorCallBack())    // spring boot integration soon... error
     }
        netWorkCall(()=>{
            return "spring boot integration soon..."
        }, ()=>{
            return "error"
        })
*/
/** 
    let fun_one = ():string =>{
        return "Hello Wellcome to arraow functions";
    }
    console.log(fun_one());     //Hello Wellcome to arraow functions

*/
/** 
    let fun_one = (): void => console.log("This statement is with out braces")   //This statement is with out braces    
                        // if we have only one statement no need to keep curly brackets
    fun_one()
*/
/** 
    let fun_one = (arg1:string,arg2:string,arg3:string):void => console.log(arg1, arg2, arg3);
    //fun_one()       //Expected 3 arguments, but got 0
    fun_one("One","two","three")    //  One two three
*/

    // typeof
    console.log(typeof "angular")                   // dadta type of angular is "string"
    console.log(toString.call("angular"))           // [object String]

    console.log(typeof 100)                         // number
    console.log(toString.call(100))                 // [object Number

    console.log(typeof true)                        // boolean
    console.log(toString.call(false))               // [object Boolean]

    console.log(typeof undefined)                   // undefined
    console.log(toString.call(undefined))           // [object Undefined]

    console.log( typeof null)                       // object
    console.log(toString.call(null))                // [object Null]

    console.log( typeof [])                         // object       // here the array also internally object in javascript
    console.log(toString.call([]))                  // [object Array]

    console.log(typeof {})                          // object
    console.log(toString.call({}))                  // [object Object]

    console.log(typeof function fun_one(){})        // function
    console.log(toString.call(function fun_one(){})) // [object Function]

    