'use strict';

//declaring an array
const allEmployees = [];

console.log(allEmployees);

//writing welcoming msg from js to html
document.write("<h1> Welcome to HR Management Website </h1>")


//creating a constructor
function Employeeinfo(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    console.log(this)
    allEmployees.push(this)
}


//calculating salary  //could be changed with array and for loop
Employeeinfo.prototype.salary = function () {

    if (this.level.toLowerCase() === "senior") {
        this.salary = Math.floor((Math.random() * 500) + 1500); 
        allEmployees.push(this.salary)

        // console.log(`Original Salary = ${this.salary}`)

    } else if (this.level.toLowerCase() === "mid-senior") {
        this.salary = Math.floor((Math.random() * 500) + 1000); 
                allEmployees.push(this.salary)

        // console.log(`Original Salary = ${this.salary}`)
        

    } else if (this.level.toLowerCase() === "junior") {
        this.salary = Math.floor((Math.random() * 500) + 500); 
        allEmployees.push(this.salary)

        // console.log(`Original Salary = ${this.salary}`)
    }
}


//calculating net salary
Employeeinfo.prototype.netSalary = function () {

        // console.log(salary);

        this.netSalary = Math.floor(this.salary - (this.salary * 0.075));
        allEmployees.push(this.netSalary);

        // console.log(`Net Salary = ${this.netSalary}`)

        // document.write(`<p> Original Salary = (${this.salary} JD) ====> Net Salary = (${this.netSalary} JD)  </p>`)
   
}



//building a salary function (normal function)
// function salaryCalc(x) {

//         if (x.toLowerCase() === "senior") {
//             let y = Math.floor((Math.random() * 500) + 1500); return y
//         } else if  (x.toLowerCase() === "mid-senior") {
//             let y = Math.floor((Math.random() * 500) + 1000); return y
//         } else if  (x.toLowerCase() === "junior") {
//             let y = Math.floor((Math.random() * 500) + 500); return y
//         } 
//     }

    // let netSalary = (y - (y * 0.075));
    

//printing (name / salary / net salary) on (console / html)
Employeeinfo.prototype.printInfo = function () {
    console.log (`(Full Name : ${this.fullName}) - (Original Salary = ${this.salary} JD) - (Net Salary = ${this.netSalary} JD)`);
    document.write(`<p> <br> Full Name : ${this.fullName} ===> Original Salary = ${this.salary} JD ===> Net Salary = ${this.netSalary} JD </p>`)
}


//list of employees infos
const ghaziSamer = new Employeeinfo (1000, "Ghazi Samer", "Administration", "Senior","");
const lanaAli = new Employeeinfo (1001, "Lana Ali", "Finance", "Senior","");
const tamaraAyoub = new Employeeinfo (1002, "Tamara Ayoub", "Marketing", "Senior","");
const safiWalid = new Employeeinfo (1003, "Safi Walid", "Administration", "Mid-Senior","");
const omarZaid = new Employeeinfo (1004, "Omar Zaid", "Development", "Senior","");
const ranaSaleh = new Employeeinfo (1005, "Rana Saleh", "Development", "Junior","");
const hadiAhmad = new Employeeinfo (1006, "Hadi Ahmad", "Finance", "Mid-Senior","");


// traverse function
for (let i = 0; i <= allEmployees.length; i++) {
    allEmployees[i].salary();
    allEmployees[i].netSalary();
    allEmployees[i].printInfo();
}


// //testing

// ghaziSamer.salary();
// ghaziSamer.netSalary();