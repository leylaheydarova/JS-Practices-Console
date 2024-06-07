//#region Task1 
//logGreeting() adında funksiya tərtib edin. 
//Funksiya name adında parametr qəbul etsin və konsola «[name] is a JS developer» mesajı çıxarsın.
// function logGreeting(name){
//     return (`${name} is a JavaScript Developer`);
// }

// let username = prompt("What is your name?");
// alert(logGreeting(username));
//#endregion

//#region Task 2: 
//İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
//Funksiyanı 3 müxtəlif ad üçün çağırın.
// function isActive(name){
//     if (name){
//         return (`${name} is active now`);
//     }
//     else{
//         alert("INVALID INPUT");
//     }
// }

// let username1 = prompt("What is your name?");
// alert(isActive(username1));

// let username2 = prompt("What is your name?");
// alert(isActive(username2));

// let username3 = prompt("What is your name?");
// alert(isActive(username3));
//#endregion

//#region Task3: 
//Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
//Fərqli arqumentlərlə funksiyanı üç dəfə çağırın və fərqli arqumentlər göndərək test edin.
// function getMaximum(a, b, c){
//     let maxValue;
//     if ( (a > b && a > c) || (a == b && a > c) || (a == c && a > b) || (b == c && a > b)){
//         maxValue = a;
//     }
//     else if ( (b > a && b > c) || (a == c && b > a) ){
//         maxValue = b;
//     }
//     else if ( (c > a && c > b) || (a == b && c > a) ){
//         maxValue = c;
//     }
//     else {
//         alert("Values are equal!");
//     }
//     return maxValue;
// }

// let usernum1 = prompt("First number:");
// let usernum2 = prompt("Second number:");
// let usernum3 = prompt("Third number:");
// alert(getMaximum(usernum1, usernum2, usernum3));
//#endregion

//region Task 4
//Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın.
//Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
//Bir dollar üçün məzənnə 75 rubl təşkil edir. Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.
// let dollarbalance = +prompt("Your balance in dollars");
// let rublbalance = +prompt("Your balance in rubls");

// function convertToRubl(dollarnum){
//     return dollarnum * 75;
// }

// let totalbalance = convertToRubl(dollarbalance) + rublbalance;
// alert(`Total balance is ${totalbalance}`);
//#endregion

//#region Task 5:
//Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() adında funksiyası tərtib edin.


//#region Task 8:
//Bir ədədi parametr kimi qəbul edən və onun cüt olub olmadığını yoxlayan isEven() adlı funksiya yazın. 
//Rəqəmin cüt olub olmadığını göstərən bir mesajı konsolda göstərin.
// let isEven = function(){
//     alert("This number is even");
// }

// let isOdd = function(){
//     alert("This number is odd");
// }

// let question = function(number){
//     if (number){
//         return number % 2;
//     }
//     else{
//         alert("0 is not even, nor odd.")
//     }
// }

// function checkEvenOdd(condition){
//     if (!condition){
//        isEven();
//     }
//     else{
//         isOdd();
//     }
// }

// let usernumber = prompt("Number:");
// checkEvenOdd(question(usernumber));
//#endregion

//#region Task 9
//Müsbət tam ədədi parametr kimi qəbul edən və onun sadə ədəd olub-olmadığını yoxlayan isPrime() adlı funksiya yazın. 
//Əgər ədəd sadədirsə funksiya true, əks halda false qaytarır.
function isPrime(number){
    let i;
    for ( i = 2; i < number; i++ ){
        if(number % i) {
            return `${number} is prime!`;
        }
        else {
            return `${number} is not prime`;
        }
    }
}

let usernumb = prompt("Number: ");
alert(isPrime(usernumb));

//#endregion