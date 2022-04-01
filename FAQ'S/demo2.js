let arr = [10,20,30,40,50,60];
console.log(arr.reverse());         // this reverse function is used to reverse the array elements

let str = "Hello";
//console.log(str.reverse());     // Not Valid this code y bcz this code is in the string format not in array format

// In order to convert string to an array here we have a function Array.from(Var_name_of_string)
console.log(Array.from(str));           //[ 'H', 'e', 'l', 'l', 'o' ]


// In order to reverse this string array here we have a function .reverse()
console.log(Array.from(str).reverse());    //[ 'o', 'l', 'l', 'e', 'H' ]

// Now we need to convert Array to string then we have a one function join()
console.log(Array.from(str).reverse().join());      // o,l,l,e,H

// inorder to remove commas we need to use " " Double quatation marks
console.log(Array.from(str).reverse().join(""));        // olleH


// if we don't want to allocate the indexes for duplicate elements then we need to go for one function indexof()
let arr1 = [10,20,30,10,20,30,10,20,30,40]
        // 0  1  2   0  1  2  0 1  2  9     // here we are not allocating the original indexes allocating old indexes for duplicate elements
arr1.forEach((element, index)=>{
    console.log(arr1.indexOf(element), index);         // 0 1 2 0 1 2 0 1 2 9
});
// OutPut of the above programe     
// here in element variable each and every element will be stored and 
// here in index variable original indexes are stored 
// 0 0
// 1 1
// 2 2
// 0 3
// 1 4
// 2 5
// 0 6
// 1 7
// 2 8
// 9 9



let arr2 = [10, 20, 30, 10, 20 , 30 ,10 ,20 ,30 ,40];

console.log(arr2.indexOf(20,5))         // 7     //indexOf(searchElement: number, fromIndex?: number):
console.log(arr2.indexOf(30,6))         // 8
console.log(arr2.indexOf(10,0))         // 0 
console.log(arr2.indexOf(20,8))         // -1    // if the element is not available will get output as a -1
console.log(arr2.indexOf(10, -4))       // 6
console.log(arr2.indexOf(30,-10))       // 2



let fun_one = (arg1, arg2)=>{
    let count = 0 , i= 0;
    while(true){
       const r = arg1.indexOf(arg2,i)
       if(r !== -1 ){
           [count , i] = [count+1, r+1]
       }
       else{
           return count;
       }
    }
}
console.log(fun_one("KiranKiranKiranKiran", "Kiran"))       // 4 is the out put bcz Kiran is repeated 4 times
console.log(fun_one("123abc123abc123abc123","abc"))         // 3 


let arr3 = "abc123*#Abc123abc123"
arr3.indexOf("*#Abc",0) == -1 ? console.log("Not detected"):console.log("Detected");        // Detected


let str1 = "Kiran";
console.log(str1.split("").reverse())       // [ 'n', 'a', 'r', 'i', 'K' ]       

let str2 = "Kiranraj123Kiranraj123"
console.log(str2.split("123"))              // [ 'Kiranraj', 'Kiranraj', '' ] here the 123 is splitted remaing will be given as output