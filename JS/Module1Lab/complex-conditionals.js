var num1 = parseInt(window.prompt("Enter a number "));
var num2 = parseInt(window.prompt("Enter another number "));
if (num1 % 2 == 0 && num2 % 2 == 0){ /* && AND */
    document.write("Both numbers are even");
}
if (num1 % 2 == 1 || num2 % 2 == 1){ /* || OR */
    document.write("Both numbers are not even");
}