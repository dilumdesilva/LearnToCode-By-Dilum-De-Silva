//JavaScript Lesson - 01 FUNCTIONS (LearnToCode by Dilum De Silva)

var firstName = "Dilum";
var middleName = "De";
var lastName = "Silva";

var age = 22

var sentencePart1 = "I am";
var sentencePart2 = "years' old";

var genderCheck = true;
var answer = confirm("press okay if your gender is male");
var gender = "Male";
if (answer == true)
{
 document.write("Male");
}

alert("Hello " +firstName);

//how to create a funnction                 
function writeSomething()
{
    document.write("My name is "+ firstName+" "+middleName+" "+lastName);

    document.write(" and "+sentencePart1+" "+age+" "+sentencePart2);
  
}

writeSomething();

//passing data into a function
function functionToPassParameter(str, age2)
{
 var nameAndAge = str + age2;

 alert(nameAndAge);
}


functionToPassParameter("Dilum ", 22);

function testOperators()
{
    var num1 = 10;
    var num2 = 20;
    var num3 = 30;
    var num4 = 40;
    var num5 = 50;
}