 
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