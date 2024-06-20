// //unique
// function User(){
//     this.ad = 'Leyla', //property
//     this.soyad = 'Heydarova',
//     this.yas = 24,
//     this.ish = 'Full-Stack Developer'
// }

// const user = new User();
// console.log(user);

// //general
// function User1(name, surname, age, job){
//     this.ad = name
//     this.soyad = surname
//     this.yas = age
//     this.ish = job
// }

// const user1 = new User1('Hasan', 'Heydarov', 29, 'Wheel Master');
// console.log(user1);
// const user2 = new User1('Rana', 'Valiyeva', 41, 'Confectionary');
// console.log(user2);
// const user3 = new User1('Vugar', 'Valiyev', 49, 'Furniture Master');
// console.log(user3);


// //Task Bank Accounting
// function Client (fullname, creditlimit, balance, percentOfMinPayment){
//     this.fullname = fullname
//     this.creditlimit = creditlimit
//     this.balance = balance
//     this.percentOfMinPayment = percentOfMinPayment
//     this.getBalance = function(){
//         if ( this.balance >= 0 ){
//             console.log(`Your balance is $${this.balance}`);
//         }
//         else{
//             console.log(`Your dept $${Math.abs(this.balance)} `);
//         }
//     }

//     this.getMinPayment = function(){
//         if(this.creditlimit - this.balance){
//             console.log(`Your dept is $${this.creditlimit - this.balance}`);
//             const minPayment = ((this.creditlimit - this.balance) * 0.2);
//             console.log(`Your min payment is $${minPayment}`);
//         }
//         else{
//             console.log("You don't have any dept");
//         }
//     }

//     this.withDraw = function(money){
//         if  (this.balance < money){
//             console.log(`Your dept is $${this.creditlimit - this.balance}`);
//             console.log("You can not withdraw money");
//         }
//         else{
//             this.balance -= money
//             console.log(`Success Withdraw!\nYour balance is $${this.balance}`);
//         }
//     }

//     this.reFill = function(money){
//         if((this.balance + money)+this.creditlimit){
//             console.log(`LIMIT EXCEED!\nYou can pay $${this.creditlimit - this.balance}`);
//         }
//         else{
//             this.balance += money
//             console.log(`Payment is succed!`);
//         }
//     }
// }


// const client1 = new Client('Kazimaga Karimov', 2500, 320, 20)
// client1.getBalance();
// client1.getMinPayment();
// client1.withDraw(400);
// client1.reFill(200)

//Task Calculator

function Calculator(){
    alert("Welcome to Calculator App!\nYou can calculate arithmetic operators here")
    let result = 0
    let operator;
    let number1;
    let number2;
    let operation;
    this.Calculate = function(){
        operator = +prompt('Select one of these operators:\n1.Summation;\n2.Multiplication\n3.Substraction\n4.Division\n5.Remain of Division\n6.Percent of number')
        this.operator = operator;
        number1 = +prompt('Number 1:');
        this.number1 = number1;
        number2 = +prompt('Number 2:');
        this.number2 = number2
        if (this.operator){
            switch(this.operator){
                case 1:
                    operation = 'summation'
                    result = this.number1 + this.number2;
                    break;
                case 2:
                    operation = 'multiplication'
                    result = this.number1 * this.number2;
                    break;
                case 3:
                    operation = 'substraction'
                    result = this.number1 - this.number2;
                    break;
                case 4:
                    if (this.number2){
                        operation = 'division'
                        result = this.number1 / this.number2;
                    }
                    else{
                        alert("INFINITY!")
                    }
                    break;
                case 5:
                    if (this.number2){
                        operation = 'Remain of division'
                        result = this.number1 % this.number2;
                    }
                    else{
                        alert("INFINITY");
                    }
                      break;
                case 6:
                    operation = 'Percent'
                    result = this.number1 * this.number2 / 100;
                    break;
                default:
                    alert('INVALID OPERATOR!');
                    break;
            
            }
            alert(`Result of ${operation} is ${result}`)
        }
    }
}

const calc = new Calculator();
calc.Calculate();

