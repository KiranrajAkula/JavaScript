// enum
// "enum" is the keyword
// enum is uesd to create custom datatype
// 1) numeric enum
// 2) string enum
// 3) hetrogeneous enum
/**
    enum Corona{
        ALFA,
        BETA,
        GAMA,
        DELTA,
        OMICRAN
    }
    console.log(Corona)
    console.log(Corona.ALFA, Corona.BETA, Corona.GAMA,Corona.DELTA, Corona.OMICRAN) // 0 1 2 3 4
    console.log(Corona["ALFA"], Corona["BETA"], Corona["GAMA"],Corona["DELTA"], Corona["OMICRAN"])      //0 1 2 3 4
    console.log(Corona[0], Corona[1], Corona[2],Corona[3], Corona[4])    // revers mapping   //ALFA BETA GAMA DELTA OMICRAN
    // {        // this output for corona
    //     '0': 'ALFA',
    //     '1': 'BETA',
    //     '2': 'GAMA',
    //     '3': 'DELTA',
    //     '4': 'OMICRAN',
    //     ALFA: 0,
    //     BETA: 1,
    //     GAMA: 2,
    //     DELTA: 3,
    //     OMICRAN: 4
    //   }
*/
/**
     // Numeric Enums
    enum Enum1{
        CONST_1 = 100,
        CONST_2 ,
        CONST_3,
        CONST_4
    }
    console.log(Enum1)
        //     //{
        // '100': 'CONST_1',
        // '101': 'CONST_2',
        // '102': 'CONST_3',
        // '103': 'CONST_4',
        // CONST_1: 100,
        // CONST_2: 101,
        // CONST_3: 102,
        // CONST_4: 103
        // }
*/
/**
    enum Enum1{
            CONST_1 = 100,
            CONST_2 = 200,
            CONST_3 = 300,
            CONST_4 = 400
    }
    console.log(Enum1)

    // {
    //     '100': 'CONST_1',
    //     '200': 'CONST_2',
    //     '300': 'CONST_3',
    //     '400': 'CONST_4',
    //     CONST_1: 100,
    //     CONST_2: 200,
    //     CONST_3: 300,
    //     CONST_4: 400
    //   }
*/
/**             enum Enum1{
                CONST_1 = 100,
                CONST_2 = CONST_1*2,
                CONST_3 = CONST_2+100,
                CONST_4 = CONST_3+100
            }
            console.log(Enum1)
            //         //{
            // '100': 'CONST_1',
            // '200': 'CONST_2',
            // '300': 'CONST_3',
            // '400': 'CONST_4',
            // CONST_1: 100,
            // CONST_2: 200,
            // CONST_3: 300,
            // CONST_4: 400
            // }
*/
/** */
/**
        function fun_one():number{
             return 100;
        }
        enum Enum1{
            CONST_1 = fun_one(),
            CONST_2 = fun_one()*10,
            CONST_3 = CONST_1*20,
        }
        console.log(Enum1)

        // {
        //     '100': 'CONST_1',
        //     '1000': 'CONST_2',
        //     '2000': 'CONST_3',
        //     CONST_1: 100,
        //     CONST_2: 1000,
        //     CONST_3: 2000
        //   }
          
        enum Enum2{
            CONST_2 ,                // here we should go for initialization.
            CONST_3 ,
            CONST_1 = fun_one(), // manupulated value   // if we place this in the bottom we can reduce an error
            
        }
        console.log(Enum2)

        // {
        //     '0': 'CONST_2',
        //     '1': 'CONST_3',
        //     '100': 'CONST_1',
        //     CONST_2: 0,
        //     CONST_3: 1,
        //     CONST_1: 100
        //   }
*/
/**
        enum Enum1{
            VAL1 = 100,
            VAL2,
            VAL3,
            VAL4
        }
        function fun_one():Enum1{
            return Enum1.VAL1
        }
        console.log(fun_one())      // 100
    */
// stirng Enum
/**
        enum Enum1{
             VAL1 = "STRING_1",
             VAL2 = "STRING_2",
             VAL3 = "STRING_3",
             VAL4 = "STRING_4"
        }
        console.log(Enum1.VAL1, Enum1.VAL2 , Enum1.VAL3, Enum1.VAL4)        //STRING_1 STRING_2 STRING_3 STRING_4
        console.log(Enum1["VAL1"], Enum1["VAL2"] , Enum1["VAL3"], Enum1["VAL4"])    //STRING_1 STRING_2 STRING_3 STRING_4
        console.log(Object.keys(Enum1)) //[ 'VAL1', 'VAL2', 'VAL3', 'VAL4' ]
*/
/**
        enum Enum1{
            VAL1 = "VALUE_1",
            VAL2    //Enum member must have initializer     // IN NUMEEIC ENUM NOT SECOND VALUE INITIALIZATION BUT COMES TO STRINGENUM HERE FOR SECOND VARIABLE NAME IS MANDATORY
        }
*/
var Enum1;
(function (Enum1) {
    Enum1[Enum1["VAL1"] = 100] = "VAL1";
    Enum1["VAL2"] = "VALUE_2";
})(Enum1 || (Enum1 = {}));
console.log(Enum1); //{ '100': 'VAL1', VAL1: 100, VAL2: 'VALUE_2' }
console.log(Enum1[0]);
