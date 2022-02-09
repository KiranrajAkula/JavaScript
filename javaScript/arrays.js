 
/*  let arr = [1,2,3,4,5,6,7,8,9,0]
    console.log(arr.length);         //10   [var_name].length it is used inorder to know the length of the array

    console.log(arr[5]);      // 6   var_name[Required_num] is used inorder to get partucular element based on index

    console.log(arr[0],arr[3],arr[11]);  //1 4 undefined  //  here we can see undefined bcz we requested element not present in that array

    arr.length = 5 ;                       // here we reduced the array length from 10 to 5 

    console.log(arr[2],arr[4],arr[7],arr[-1]) //3 5 undefined undefined // here arr[7] is undefined y bcz we reuduced the array length
*/

/* let arr = [20,30]
    console.log(arr)                                //[ 20, 30 ]

    arr.push(40)
    console.log(arr)                                //[ 20, 30, 40 ]

    arr.pop()
    console.log(arr)                                //[ 20, 30 ]

    arr.unshift(10)
    console.log(arr)                                //[ 10, 20, 30 ]

    arr.shift()
    console.log(arr)                                //[ 20, 30 ]
*/


    /* let arr = [10,20,30,40,50];
    console.log(arr.length)                             //5


    delete arr[2]
    console.log(arr.length)                             //5 even though we deleted the 2 indexed element from the array
                                                        // still it is showing length is 5 bcz of drawb
    console.log(arr)                                    //[ 10, 20, <1 empty item>, 40, 50 ] here the element deleted but memory is not released or deleted that means memoey wasted
*/


/*
    let arr1 = [10,20,30,40];
    let arr2 = [10,20,30,40];
    let arr3 = [...arr1, ...arr2]                           // merging(concatinate) the array with "... operator" is called spread operator 

    console.log(arr3)                                       // [10, 20, 30, 40, 10, 20, 30, 40]
    */

/**
    let arr1 = [10,20,30];                                  //[ 10, 20, 30 ]//original copy
    let arr2 = [...arr1];                                  //[ 10, 20, 30 ]  //xerox copy
                                                            // here the above mentioned arrays both have separate memory locations and also independently each other

    console.log(arr1)
    console.log(arr2)

    arr1.push(40);
    console.log(arr2)                       //[ 10, 20, 30 ] here even though changes happen at arr1 which doesnot effect on arr2
                                            // it is called deep cloning  // generally this concept is called immutablility
    arr2.pop()

    console.log(arr1);                                             //[ 10, 20, 30, 40 ]
    console.log(arr2);                                              //[ 10, 20 ]
*/

/*  let arr1 = [10,20,30,40,50,60,70,80,90,100];

    //console.log(arr1.splice(4,3))               //[ 50, 60, 70 ] // this different approach from other to printing the deleted elements we used this approach and to know the remaining elements we used another approch

    //console.log(arr1.splice(1,2))                   //[ 20, 30 ]

    arr1.splice(1,2)   
    console.log(arr1)                           //[10, 40, 50,  60, 70, 80, 90, 100] // here we printed the elements after the deleting the elements from the array

    arr1.splice(7,1)   // inorder to delete the element 100
    console.log(arr1)  //[10, 40, 50, 60, 70, 80, 90]

    arr1.splice(2,2)   // inorder to delete the elements 50,60 
    console.log(arr1)   //[ 10, 40, 70, 80, 90 ]
    
    arr1.splice(0,1)  // inorder to delete the 10 element
    console.log(arr1)   //[ 40, 70, 80, 90 ]

    arr1.splice(1,0,50,60) 
    console.log(arr1)   //[ 40, 50, 60, 70, 80, 90 ]  here we added the two elements to the array with the 
                        //syntax of var_name.splice(positionOf_index_no,if_delete_any_element,inserting required elements) i.e arr.splice(1,0,50,60)

    arr1.splice(0,0,10,20,30)
    console.log(arr1)   //[ 10, 20, 30, 40, 50, 60, 70, 80, 90]  // here we added 10 ,20,30 into a array 

    arr1.splice(9,0,100)
    console.log(arr1)   //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]



*/

    /*let arr1 = [0,1,2,3,4,5,6,7,8,9];

    arr1.splice(0,1)
    console.log(arr1)           //[1,2,3,4,5,6,7,8,9]   here the 0 will be deleted

    arr1.splice(8,1)
    console.log(arr1)           //[1,2,3,4,5,6,7,8]      here 9 will be deleted

    arr1.splice(3,1)
    console.log(arr1)           //[1,2,3,5,6,7,8]        here 4 will be deleted

    arr1.splice(8,0,9)
    console.log(arr1)           //[1,2,3,5,6,7,8,9]

    arr1.splice(0,0,0)
    console.log(arr1)           //[0,1,2,3,5,6,7,8,9]

    arr1.splice(4,0,4)
    console.log(arr1)           //[0,1,2,3,4,5,6,7,8,9]
*/

//map()
/* 
        console.log(
            [1,2,3,4,5].map((elements,index)=>{
                return elements*100        //[ 100, 200, 300, 400, 500 ]
            })
        );


        console.log(
            [1,2,3,4,5].map((elements,index)=>{     // here  the index is not mandatory y bcz we are not using that any where
                return [elements];       //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
            })
        );


        console.log(
            [1,2,3,4,5].map((elements,index)=>{
                return [elements,index];                 //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]
            })
        );


        console.log(
            [1,2,3,4,5].map((elements,index)=>{         //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
                return {[index]:elements};          // the value should be reflected into json object index we need to do attribute binding i.e to convert array to json object
            })
        );
*/

//filter()

/** 
    console.log(
        [1,2,3,4,5].filter((element, index)=>{
            return element >=3;                 //[ 3, 4, 5 ]
        }).map((element,index)=>{
            return element * 100 ;     //[ 300, 400, 500 ]
        })
    );

    console.log(
        [
            {"e_id":11,"e_name":"e_one","e_sal":1000},
            {"e_id":22,"e_name":"e_two","e_sal":2000},
            {"e_id":33,"e_name":"e_three","e_sal":3000},
            {"e_id":44,"e_name":"e_four","e_sal":4000},
            {"e_id":55,"e_name":"e_five","e_sal":5000}
        ].filter((element,index)=>{
            return element.e_sal >= 3000;         //{ e_id: 33, e_name: 'e_three', e_sal: 3000 },{ e_id: 44, e_name: 'e_four', e_sal: 4000 },{ e_id: 55, e_name: 'e_five', e_sal: 5000 }
        }).map((element,index)=>{
        return element.e_name === "e_three" ?{"e_id":33,"e_name":"Employee_three","e_sal":3000}:element;
        })                      //[{ e_id: 33, e_name: 'Employee_three', e_sal: 3000 },{ e_id: 44, e_name: 'e_four', e_sal: 4000 }, { e_id: 55, e_name: 'e_five', e_sal: 5000 }]
    )
*/

//reduce()  funciotn:
/** 

    console.log(
        [1,2,3].reduce((firstElement, accumlator)=>{     //accumlator is a just type of variable i.e user defined not vendor and first element is also user defined
        return firstElement+accumlator;      //6           // acutally passed paremeters are performed as their type of function functionalitys like reduce,map, filter
        })
    );
*/

/** 
    console.log(
        [100,200,300,400,500].reduce((firstElement,secondElement)=>{
            return firstElement + secondElement;            //1500
        })
    );
    */


/**  
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100 ; //[ 100, 200, 300, 400, 500 ]
        }).filter((element,index)=>{
            return element>= 100; //[ 100, 200, 300, 400, 500 ]
        }).reduce((firstElement,secondElement)=>{
            return firstElement+secondElement;  //1500
        })
    )
*/ 
/** 
    console.log(
        ["javaScript","to","welcome"].reduceRight((firstElement,accumlator)=>{
            return firstElement+" "+accumlator;       //welcome to javaScript
        })  
    )
*/

/** 
    let arr1 = [10,20,30,40,50,60,70,80,90,100]

    console.log(arr1.slice(4,6));   //[ 50, 60 ]  here the 4th position of element will be included and 6th position of element will be excluded
        console.log(arr1.slice(7,9));    //[ 80, 90 ]
        console.log(arr1.slice(0,1));
        console.log(arr1.slice(9,10));  //100
        console.log(arr1.slice(9,10));  //100
        console.log(arr1.slice(1,4));   //[ 20, 30, 40 ]    negative indexes are starts with -1 to -10 in this situation
        console.log(arr1.slice(-6,-4)); //[ 50, 60 ]
        console.log(arr1.slice(-10,-9))  //10
        console.log(arr1.slice(-1))        //[ 100 ] if their are follwed element is not present then we no need to mention a elemnet indext if it is last element to print
        
*/

/** 
    console.log(
    // [[10],[20],[30]].flat(1)  //[ 10, 20, 30 ] It is used inorder to convert mul-array to single-array

        [[[[[[[[[11]]]]]]]],[[[[[[[[[[[22]]]]]]]]]]],[[[[[[[[[[[[[[33]]]]]]]]]]]]]]].flat(Infinity)  //[ 11, 22, 33 while we dont know the size Infinity will be used m-s array
    ) 
*/
/** 

        let arr1 = [1,2,3]
        let arr2 = ["one","two","three"]

        console.log(
            arr1.map((element,index)=>{
                return [element,arr2[index]];  //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
                
            }).flat(1)   //[ 1, 'one', 2, 'two', 3, 'three' ]  mul-arr to single-array
        )  //here no need to go for the two funcitons here we have flatMap() function it is collabration of flat and map function

        console.log(
            arr1.flatMap((element,index)=>{
                return [element,arr2[index]]  //[ 1, 'one', 2, 'two', 3, 'three' ]
            })
        )

*/


// findIndex():

 /**   
            console.log(
            [1,2,3,4,5,6].findIndex((element,index)=>{
                return element == 3;            //3

            })
        )

        console.log(
            [10,20,30,40,50,60,70,80,90,100].findIndex((element,index)=>{
                return element == 30;  //2              if no element is present we will get -1 as a output
            })
        )

            let arr = [10,20,30,40,50]

        // delete arr[2];
        // console.log(arr)   //[ 10, 20, <1 empty item>, 40, 50 ] by using delete key word i.e by deleting the element in this way the element memory is not released 

            arr.splice(arr.findIndex((element,index)=>{
                return element == 30;       // here we taking the indexed position dinamically bu using FindIndex
            }),1)
            console.log(arr)              //  [ 10, 20, 40, 50 ]

*/

/** 
     let arr2 = [10,100,1000,10000,20,200,2000,20000]

    arr2.splice(arr2.findIndex((element,index)=>{
        return element == 20;
    }),1);

    console.log(arr2);          //[10,100,1000,10000,200,2000,20000]


    let arr3 = [ {"e_id":1, "emp_name":"e_one","e_sal":10000},
                 {"e_id":2, "emp_name":"e_two","e_sal":20000},
                 {"e_id":3, "emp_name":"e_three","e_sal":30000},
                 {"e_id":4, "emp_name":"e_four","e_sal":40000},
                 {"e_id":5, "emp_name":"e_five","e_sal":50000}];


        arr3.splice(arr3.findIndex((element,index)=>{
            return element.e_id == 3 ;
        }),1)
        console.log(arr3)       // Third object will be deleted
*/

/** 
console.log(
    [1.,2,3,4,5].some((element,index)=>{
        return element <=1;         //true        // this cond is tells about that if at least one element satisfys the cond it will return true.
    })
);
*/
/** 
    console.log(
        [1,2,3,4,5].every((element,index)=>{
            return element <=5; //true                //in this cond if all elements satisfies the condition then it will return true otherwise it will return false.

        })
    );
*/


/***
console.log(
    [1,2,3,4,5].find((element ,index)=>{
        return element == 6;                //in this situation if we will pass the same element in the cond it will return same ele if not matches(not available) it will return undefined
    })
);

 */

/** 
 *     let arr1 = [1,2,3,4,5];
    console.log(arr1.fill(100));   //[ 100, 100, 100, 100, 100 ]          // fill function is used to replace old elements with new elements
    console.log(arr1.fill(200,1));  //[ 100, 200, 200, 200, 200 ]         // from the index one onwards we need to replace with 200 then here we need do like this.
    console.log(arr1.fill(300,2))   //[ 100, 200, 300, 300, 300 ]
    console.log(arr1.fill(400,3))   //[ 100, 200, 300, 400, 400 ]
    console.log(arr1.fill(500,4))   //[ 100, 200, 300, 300, 500 ]
    console.log(arr1.fill(600,1,3))   //[ 100, 600, 600, 300, 300 ]         // one will be included and 3 will be excluded

*/

/*
// indexOf(): 

    let arr1 = [10,20,30,10,40,10,20,50];
    arr1.forEach((element,index)=>{
        console.log(arr1.indexOf(element) ,index)          //0,1,2,0,4,0,1,7
                                                            //0,1,2,3,4,5,6,7
    })

    let arr2 = [10,20,30,10,20,30];
    arr2.forEach((element,index)=>{
        console.log(arr2.indexOf(element), index)  //0 1 2 0 1 2  
                                                    //0,1,2,3,4,5
    })


    let arr3 = [100,200,300,100,200,300];   //[ 100, 200, 300 ] 
    console.log(
    arr3.filter((element,index)=>{
        return arr3.indexOf(element) == index; // inorder to delete the duplicate elements this logic will be used
    })                      // in above logic if the element is present output will be porduced other wise it won't print
    );

*/

//copyWithin  

/** 
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.copyWithin(4);
    console.log(arr1);        //  [10, 20, 30, 40, 10, 20, 30, 40, 50, 60 ]

    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(5);
    console.log(arr2)           //[10, 20, 30, 40, 50, 10, 20, 30, 40, 50]

    let arr3 = [10,20,30,40,50,60,70,80,90,100];
    arr3.copyWithin(-5);
    console.log(arr3)           //[10, 20, 30, 40, 50, 10, 20, 30, 40, 50]


    let arr4 = [10,20,30,40,50,60,70,80,90,100];
    arr4.copyWithin(2,7);
    console.log(arr4)           //[10, 20, 80, 90, 100, 60, 70, 80, 90, 100]


    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(-4,-7);
    console.log(arr5)              // [10, 20, 30, 40, 50, 60, 40, 50, 60, 70]

    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    arr6.copyWithin(2,4,7);
    console.log(arr6)               //[10, 20, 50, 60,  70,60, 70, 80, 90, 100]
    //here 4 will be included and 7 will be excluded afer that index is starts from 2 to 4

 */

/***
    //sort():

        console.log(
            [1,3,2,5,4].sort((arg1,arg2)=>{
                return arg1 - arg2 ;        //[ 1, 2, 3, 4, 5 ]     arg1 - arg2 is called ascending order
            })
        );
        console.log(
            [1,3,2,5,4].sort((arg1,arg2)=>{
                return arg2 - arg1 ;        //[ 5, 4, 3, 2, 1 ]     arg2 - arg1 is called decending order
            })
        );

        console.log(
            [10,30,50,20,40].sort((arg1,arg2)=>{
                return arg1-arg2;       // 10, 20, 30, 40, 50 ] 
            }) [1]     //20             // here we need to find second least element in array 

        );
        console.log(
        [10,50,30,20,40].sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]           //40           // here we need to find the second highest element in an array
        );
 */

    //forEach()

 
        [10,20,30,40,50].forEach((element,index)=>{
            console.log( element,index);            //10 0 20 1 30 2 40 3 50 4      //forEach loop is used inorder to get the elements in an array by using forEach() function.
        })
    
    //forOf():-   loop

    for(let x of [1,2,3,4,5]){          //here 1,2,3,4,5 each variable is stored in to a x variable is called forOf() loop
console.log(x)      //1 2 3 4 5
    }


    //forIn():- forIn() loop is used to iterate the  elements in a json object

       let obj = {"key1":"value1","key2":"value2","key3":"value3"};
    for(let x in obj){
        console.log(obj[x]);            // this is syntax for inorder to get the values of json object by using forIn loop
    }


    // reverse():- inorder to revers the array elements 

    console.log(
        [1,2,3,4,5,6].reverse()         //[ 6, 5, 4, 3, 2, 1 ]
    )
        

    console.log(
        ["Angular","Angularjs","Angular13"].reverse()       //[ 'Angular13', 'Angularjs', 'Angular' ]
    );

    console.log(
        Array.from("Hello").reverse().toString().replace(/,/g,"")        //[ 'H', 'e', 'l', 'l', 'o' ] this o/p for array.from() //[ 'o', 'l', 'l', 'e', 'H' ] this o/p for reverse the array elements //o,l,l,e,H here this o/p for toString() covert array to stiring      // array.from() is used to equalent to array  
    );                                                                     // here we have a problem with a replace function.   if we want to remove the all the commas we need to go for regular Expression.
                                                                            // (/,/g,"") is used to to find the , (comma) globally then need to replace the space

    console.log(
        Array.from("Welcome").reverse().join("")
    )

    //string to array // ['w','e','l','c','o','m','e']
    // reverse 
    //array to string //e,m,o,c,l,e,W
    // remove the commas with regular expression  //emocleW   instead of taking replace()  here we no need to go for this we can go for join()
    // join() funcition is used to converthe array to string like toString but join is advanced it contain the both features toStirng and replace



    let arr10 = [1,2,3,4,5,6];
    console.log(arr10.includes(3)) //true
    console.log(arr10.includes(10)) //false


     let arr = [1,2,3,4,5,6,7,8];
     console.log(arr.find((element,index)=>{
        return element == 3;        //3 if it is present then it will return 3 other wise undefined
     })
     )


     console.log(
       " Kiranraj ".trim().length                                              // with spaces here the size is 10( Before the trim )  after the applying trim() function the length is 8 
     )

     console.log(
         " kiranraj ".trimStart().length            // 9 is the output y bcz here starting of the space is removed not end
     )

     console.log(
         " kiranraj ".trimEnd().length       // 9 is the output y bcz here ending of the space is removed not begining
     )

     console.log(
         "kiranraj".padStart(15,"*")        //*******kiranraj
     )

     console.log(
         "kiranraj".padEnd(15,"*")          //kiranraj*******
     )

     console.log(
         "kiranraj".padStart(15,"&").padEnd(20,"*")    // &&&&&&&kiranraj*****
     )