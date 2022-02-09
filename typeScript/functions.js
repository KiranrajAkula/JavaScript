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
var netWorkCall = function (successCallBack, errorCallBack) {
    console.log(successCallBack(), errorCallBack());
};
netWorkCall(function () {
    return "spring boot integration soon...";
}, function () {
    return "error";
});
