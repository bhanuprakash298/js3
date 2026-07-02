
// Task 1== Welcome function

function stackly ()
{
    console.log("Welcome to Stackly IT");
    
}
stackly () 

// Task 2 == Employee details

function emp (name,department,salary)
{
  console.log("Employe name :",name);
  console.log("Department :",department);
  console.log("Salary :",salary);
   
}
emp("Bhanu","CSE",3500)

// Task 3== calculating bonous

function bonous(sal,bon)
{
    console.log("Total salary :",(sal+bon));
    
}
bonous(4500,5000)

// Task 4== student result

function result(marks)
{
    if(marks>=35)
    {
        console.log("pass");
        
    }
    else
    {
        console.log("fail");
        
    }
}
result(45)
result(34)

// Task 5 == Return employe name

function emplo(name)
{
    return "Bhanu";
}
let rename=emplo();
console.log(rename);

//Task 6== product price

function productPrice()
{
    return 25000;
}
let price=productPrice()
let gst=0.5 *price;
console.log("GST :",gst);
console.log("Final price :",gst+price);


// Task 7== Predict the output

// Predict the output.
// function demo(){

//     if(true){

//         var a = 10;
//         let b = 20;
//         const c = 30;

//     }

//     console.log(a);

// }

// a. ans ==> a variable prints 
// b.ans ==> b,c variables gives an error
// c.ans ==> Which is not applicable for outside of block function code


// // Task 8 == Hoisting


// Predict the output.
// console.log(a);

// var a = 100;
// Now check
// console.log(b);

// let b = 200;


// Explain the difference.
// ans== here we will get var a does not error: JavaScript moves the declaration to the top but leaves the assignment (= 100) behind. It defaults to undefined
// let b does error: JavaScript hoists let, but keeps it in a "Temporal Dead Zone" (TDZ). You cannot touch it at all until the code reaches the let b line.


// Task =9 Named function

function named()
{
    console.log("named function");
    
}
named()

// task =10 Anonymous function

let empWelcome=function ()
{
    console.log("Anonymous function");
    
}
empWelcome()

// Task 11== Arrow function

const train= ()=>
{
    console.log("JavaScript Training");
    
}
train()

// Task 12 == Return function

function wel ()
{
    return "Stackly";
}
let renamee=wel();
console.log("Welocme",renamee);

// Task 13==  High order function

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);

// Task 14== Callback Function 

function order(callback)
{
    console.log("Order recieved");
    callback();
}
function prepare(callback)
{
    console.log("Prepared food");
    callback();
}
function delivered ()
{
   console.log("delivered");
   
}
order(function()
{
    prepare(delivered)
});

// task ==15

function* couponGenerator() {

    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";

}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// task ==16

function* fruits() {

    yield "Apple";
    yield "Orange";
    yield "Banana";

}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);


// task ==17 currying

function discount(price) {
    return function (percentage) {
        let finalPrice = price - (price * percentage / 100);
        console.log("Final Price :", finalPrice);

    };

}

discount(1000)(10);

// task ==18 company salary 

function salary(baseSalary) {
    return function (bonus) {
        return function (allowance) {
            console.log("Total Salary :", baseSalary + bonus + allowance);

        };
    };
}

salary(30000)(5000)(2000);


      //     Real time login system

console.log("\n---------------------------");
console.log("EMPLOYEE SALARY MANAGEMENT");
console.log("----------");

const welcomeEmployee = () => {
    console.log("Welcome to Stackly Employee Portal");
};

welcomeEmployee();

let department = function () {
    console.log("Department : Developer");
};

department();

function employeeInfo(name, salary) {

    console.log("Employee :", name);
    console.log("Salary :", salary);

    return salary;

}

let basicSalary = employeeInfo("Naveen", 30000);

function salaryBonus(salary, bonus) {
    return salary + bonus;
}

let totalSalary = salaryBonus(basicSalary, 5000);
console.log("Salary After Bonus :", totalSalary);
function dashboardScreen() {

    console.log("Employee Dashboard Loaded");

}

function employeeLogin(callback) {

    console.log("Employee Login Successful");
    callback();

}

employeeLogin(dashboardScreen);
function* monthlyCoupon() {

    yield "Bonus Coupon : 5%";
    yield "Bonus Coupon : 10%";
    yield "Bonus Coupon : 15%";
}

let monthly = monthlyCoupon();
console.log(monthly.next().value);
console.log(monthly.next().value);
console.log(monthly.next().value);
function taxCalculation(amount) {
    return function (tax) {
        let finalSalary = amount - (amount * tax / 100);
        console.log("Salary After Tax :", finalSalary);

    };
}
taxCalculation(totalSalary)(10);
console.log("Final Employee Report Generated Successfully");
