// STRING METHODS
//#region Task Banana: Type banana without using letter 'n'
// let b = 'b';
// let a = 'a';
// let str = +a;
// let word = b+a+str+a
// console.log(word.toLowerCase() );
//#endregion


//#region Task 1 DNA
// function dna(input){
//     return input
//     .replaceAll('A', 't')
//     .replaceAll('T', 'a')
//     .replaceAll('C', 'g')
//     .replaceAll('G', 'c')
//     .toUpperCase();
// }

// let strDNA = prompt("One side of DNA string:");
// console.log(dna(strDNA));

// //CTAT - GATT
// #endregion


// #region Task 2 INFECT
// function infect(input, infected){
//     return infected.repeat(input.length) 
// }

// console.log(infect('Telman', 'a'));
//#endregion


//#region Task 3 Remove non-digits
// function getNumFromString(inp = ''){
//     let a = '';
//     for(let i = 0; i < inp.length; i++ ){
//         if(!isNaN(inp[i]) && inp[i] != ' ') {
//             a += inp[i];
//         }
//     }
//     if (inp.length > 0){
//         return a;
//     }
//     else{
//         console.log('NULL DATA');
//     }
// }

// userinput = prompt('Enter some data sequence:')
// console.log(getNumFromString(userinput));
//#endregion


//#region Task 4 Remove !
function removeExclamations(str){
    let a, b='';
    a = str.split('');
    for (i = 0; i < a.length; i++){
        if(a[i] != '!'){
            b += a[i];
        }
    }
    return b+'!';
}
//alternative code
function removeExclamations2(str2){
    return str2.replaceAll("!", "") + "!";
}
//console.log(removeExclamations2('euhe32!(!)H!(!H)!)'));


// let userstr = prompt('Give some string sequence for removing "!"')
// console.log(removeExclamations(userstr));
//#endregion

//#region Task 5 Remove digits
function removeDigits(strin){
    let a = strin.split('');
    let b = '';
    for(let i = 0; i < a.length; i++){
        if(isNaN(a[i])){
            b += a[i];
        }
    }
    return b;
}

// let userstrin = prompt("Enter string for remove digits:");
// console.log(removeDigits(userstrin));
//#endregion

//#region Task 6 Binary sequence
function getSizeReturnBinary(size){
    if(size % 2 == 0 ) size /= 2;
    else if (size % 2 != 0 ) size = size / 2 + 1;
    let i = '10'
    return i.repeat(size)
}

let userword = prompt();
console.log(getSizeReturnBinary(userword.length));
//#endregion