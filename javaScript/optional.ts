// function fun_one(arg1?: string, arg2?: string, arg3?: string): void {  //if the fun_one() wont or dont want to return anything at that time we need to go for the void
//     console.log(arg1, arg2, arg3);
// } fun_one() //undefined undefined undefined  bcz we are not specifying anything
// fun_one("Hello_1")  //Hello_1 undefined undefined
// fun_one(undefined, undefined, "Hello_3")  //undefined undefined Hello_3
// fun_one(null, null, null) //null null null   

// function fun_one(arg2:string,arg1?:string):void{  //  in general   regural parameters have first priority and optional parameters have last priority or second priority
// console.log(arg2,arg1)  //Hello undefined
// }fun_one("Hello")  // definitely we need to call the arg2 y bcz that is not an optional
// fun_one("hello_1","hello_2")  //hello_1 hello_2
// fun_one(undefined,undefined) //undefined undefined
// fun_one(null,null)  // null null
//   //fun_one()   //Expected 1-2 arguments, but got 0.


function fun_one( arg1:string, arg2?:string, arg3:string = "hello_3", ...arg4:string[]):any{ //optional papameter should have second priority compare to regular parameter
console.log(arg1,arg2,arg3,arg4)
}
//fun_one()        //hello_1 hello_2
fun_one("hello_1")     //hello_1 undefined hello_3 [] 
fun_one("hello_1","hello_2","hello_3","hello_4")    //hello_1 hello_2 hello_3 [ 'hello_4' ]
fun_one(undefined,undefined,undefined,undefined)  //undefined undefined hello_3 [ undefined ]
fun_one(null,null,null,null)  //null null null [ null ]