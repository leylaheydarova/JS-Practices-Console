alert('Welcome, to Calculator!\nYou can there are five main operations:\n1.Summation\n2.Multiplication.\n3.Substraction\n4.Division\n5.Calculate Remain of the division\nFor calculation, You have to enter numbers and operator for calculation.\nIf you got target result, stop operation by typing "0"')
let isBoolean = true;
let result;

let num1, num2;
function GetNumbers(){
     num1 = +prompt("First number:");
     num2 = +prompt("Second number:");
    }

function GetResult(){
    alert("Result is " + result);
}

function InvalidInput(){
    alert("Invalid input!");
}

function InfinityResult(){
    alert("INFINITY");
}
while (isBoolean){
    let operation = prompt("Please, type one of the operations:\n1.+ 2.* 3.- 4./ 5.%\nPlease type '0' if you want to stop operation.");
    switch(operation){
        case '0':
            isBoolean = false;
            break;
        case '1':
            GetNumbers();
            console.log("Summation:");
            result = num1 + num2;
            GetResult();
            break;
        case '2':
            GetNumbers();
            console.log("Multiplication:");
            result = num1 * num2;
            GetResult();
            break;
        case '3':
            GetNumbers();
            console.log("Substraction:");
            result = num1 - num2;
            GetResult();
            break;
        case '4':
            GetNumbers();
            console.log("Division:");
            if (num2 != 0){
                result = num1 / num2;
                GetResult();
            }
            else{
                InfinityResult();
            }
            break;
        case '5':
            GetNumbers();
            console.log("Remain of division:");
            if (num2 != 0){
                result = num1 % num2;
                GetResult();
            }
            else{
                InfinityResult();
            }
            break;
        default:
            InvalidInput();
    }
    
    }