var userName = window.prompt("Please enter your name") ; /*window.prompt() method in JavaScript displays a popup prompt and allow the user to input their name. The string you place inside of the parentheses will be displayed as the message on the popup. */
var greetingParagraph = document.getElementById("greeting") ; /*to access the greeting paragraph element. Store this element in a variable called greetingParagraph */
greetingParagraph.innerHTML += userName ; /* Modifies the contents of the greeting paragraph so that the user's name is appended to the end of the greeting */
var num1 = parseInt(window.prompt("Enter a number")) ; /*the parseInt function reads the user's input as an integer instead of a string.  Otherwise, the values will be treated as strings and some calculations may not work properly. */
var num2 = parseInt(window.prompt("Enter another number")) ;
var span1 = document.getElementById("operand1");
var span2 = document.getElementById("operand2");
span1.innerHTML = num1;
span2.innerHTML = num2;
var sum = num1 + num2 ;
var difference = num1 - num2 ;
var product = num1*num2;
var quotient = num1/num2 ;
var modResult = num1%num2;
document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum ;
document.getElementById("subtraction").innerHTML = "The difference between " + num1 + " and "+num2+" is "+difference;
document.getElementById("multiplication").innerHTML = "The product of "+ num1 +" and "+ num2 + " is "+ product;
document.getElementById("division").innerHTML = "The quotient of "+ num1 +" and "+ num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on "+ num1+ " and "+num2 + " is "+modResult;



