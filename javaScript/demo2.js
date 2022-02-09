var sub = "javaScript";
var wish = `Well Come to ${sub}` // to refer the one variable to another we need to follow one syntax i.e ${sub}
 console.log(wish)

var sub_one = "ReactJs";
var sub_two = "NodeJs";
var sub_three = "MangoDB";
var mernStack = `${sub_one} <==> ${sub_two} <==> ${sub_three}` //ReactJs <==> NodeJs <==> MangoDB

console.log(mernStack) // ReactJs <==> NodeJs <==> MangoDB


var tbl_name = "employee";
var sal = 5000;
var sql_query1 = `select * from ${tbl_name} where esal > ${sal}`;

console.log(sql_query1);//select * from employee where esal > 5000

 var uname = "admin";
 var upwd = "admin";
  var sql_query2 = `select * from ${tbl_name} where uname = ${uname} and upwd = ${upwd}`

  console.log(sql_query2) //select * from employee where uname = admin and upwd = admin

   var mern = `MERN stack means
               ******************
               frontEnd = ${sub_one}
               +++++++++++++++++++++
               Backend = ${sub_two}
               ++++++++++++++++++
               database = ${sub_three}` // Back tick is used to define the paragraph

    console.log(mern)