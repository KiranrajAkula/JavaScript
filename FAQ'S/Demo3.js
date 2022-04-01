let str = "KirnabcKirnabc";

console.log(Array.from(str).filter((element,index)=>{        // to apply the conditions we are taking filter() function
    return element == 'a' | element == 'b' | element == 'c';    // abcabc
}).join(''))

     
    //let str1 = "KiranrajNizamabad"      // { 'K', 'i', 'r', 'a', 'n', 'j', 'N', 'z', 'm', 'b', 'd' }  here all the duplicate elements are deleted
    
    /** 
        let arr = (Array.from(str1))
         console.log(arr)    //  [
        //     'K', 'i', 'r', 'a', 'n',
        //     'r', 'a', 'j', 'N', 'i',
        //     'z', 'a', 'm', 'a', 'b',
        //     'a', 'd'
        //   ]  this output for arr
        console.log([...new Set(arr)].join(''));  //join will be used to convert array to string      //KiranjNzmbd  // here we converted arr string to array with the help of square bracket and spread operator
    */

/** 
    let arr = Array.from(str)

console.log(
    arr.filter((element,index)=>{
        return arr.indexOf(element) === index;
    }).join('') // Kirnabc  this output for after adding the join() function
    );
    // [
    //     'K', 'i', 'r',
    //     'n', 'a', 'b',
    //     'c'
    //   ]   here we got this output for above programme here all the duplites are deleted
*/


    let str1 = "KiranrajNizamabad" 
    let i = str1.indexOf("r");
    console.log(i)

    while(true){
        let r1 = str.indexOf("r",i+1);
        if(r1>0){
            str.splice(r1, r1+1)
        i = r1+1;
    }else{
        //return str;
    }
    }
    
    