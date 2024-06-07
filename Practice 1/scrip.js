//app.js, index.js, script.js.
//use selectors and apply at them.
//JS is case sensitive. name and naMe are different variables.

//create variable
//string type canbe written between ' ', " ", ` `
//in JS assignment are read from right to left. Ex, value "Leyla" is assigned to variable name.
//variable name cannot start with number. However, start character may be only both _ or $. Except them, none of symbols may be used. _name, $name, name.
//keywords are reserved words. They cannot be used as a variable name.
/* Cases:
1.UPPERCASE: USERNAME
2.lowercase: username
3.camelCase: userName (most useful)
6.PaskalCase: UserName
4.SNAKE_CASE: USER_NAME (const variables)
5.kebab-case: user-name(variables cannot be created with kebab-case)
*/

// let cannot be recreated - default
console.log("Creating variables:")
let name = "Leyla";
console.log(name);
//let name = "Lilo"; - error. cannot be recreated
name = "Lilo";
console.log(name);

//cannot be recreated and changed. Constant value
const name2 = "Hesen";
console.log(name2);
// name2 = "Hasan"; - error - because value cannot be changed

//var can be recreated and value changed
var name3 = "Kovser";
console.log(name3);
var name3 = "Esr";
console.log(name3);
name3 = "Sadaf";
console.log(name3);
//var is not recommended more. It makes crashes on codes.

//built-in functions - inside of javascript for user interaction
alert("Alert: I love you"); //message on little screen
console.log("This is going on reading the following codes");//prints on console
confirm("Confirm: Do you want to continue?"); //ok,cancel query to user
let username = prompt("Prompt: Enter your Name:"); //input 
console.log(username);

//one line comment
/* multi
lines
comments
 */

//primitive value types
console.log("\nPrimitive value types:")
let sentence = "we are learning js";
let year = 2024;
let isOnline = true;
let num = undefined;
let age = null;
console.log(sentence);
console.log(year);
console.log(isOnline);
console.log(num);
console.log(age);

//type convertion -> is done by ourselves
console.log("\nType convertion");
//convert ot string
console.log("\nConvert to String");
year=year.toString(); //to string method
isOnline=String(isOnline); // String constructor
num = num + ""; //not more used method, converts to string and matches them. 2+"2"=22

console.log(String(true));
console.log(typeof year);
console.log(typeof isOnline);
console.log(typeof num);

//convert to number
console.log("\nConvert to Number");
let word1 = "number";
word1 = parseInt(word1);
console.log(word1); // NaN - Not a number. Because word "number" cannot be converted to integer numbers. NaN's type is number.
let numb = '1234';
numb = parseInt(numb);
console.log(numb);
console.log(typeof numb);
let numbe = '2.3';
numbe = parseFloat(numbe);
console.log(numbe);
let word = "hello";
const birthyear = null;
console.log(typeof null);
let num2 = +num;//from undefined to number
console.log(num2); //NaN
let age2=+age; //from null to number
console.log(age2);
let isOnline1 = +isOnline //from boolean to number
console.log(isOnline1);
//type coersion -> is done by JS itself.


//convert to boolean
console.log("\nConvert to Boolean");
//truthy values - returns true while converting to boolean.
console.log(Boolean(word));
//falsy values - returns false while converting to boolean. " ", 0, false, null, undefined, NaN returns false.
var numm = undefined;
console.log(Boolean(numm)); //undefined
console.log(Boolean(age)); //null

//+ operator
console.log("\n+Operator");
let finame = "Leyla";
let surname = "Heydarova";
console.log(finame + " " + surname);
//template lieral ``
console.log(`Developer is ${finame} ${surname}`);
console.log('she says: "Hello, everybody!"');
// backslash \ is escape character. Program skips the symbol after it.
console.log("she says:\"Hello. everybody\"");