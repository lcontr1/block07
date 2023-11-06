//pseudocode: build a vault that requres 3 math calculations to generate 3 codes in a combination. 
//use console or <script> tag within HTML page to create the 3 variables. Each variable will be the result of each calculation. The combo code is 10-40-39. Use three different arithmetic operators that will generate each individual number. Then, display the combo on the html page or in an alert popup
//create a string variable
//create 3 variables
//variable 1 will equal 10, 5+5
//variable 2 will equal 40, 4 * 10
//variable 3 will equal 39, 40 - 1
//create alert() 

//I created a strg variable with the sentence to not type it out later
const strg = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:';
const ten = 5 + 5;
const forty = 4 * 10;
const thrtyNne = 40 - 1;

//alert(strg + " " + ten + "-" + forty + '-' + thrtyNne);

alert(`${strg} ${ten}-${forty}-${thrtyNne}`);