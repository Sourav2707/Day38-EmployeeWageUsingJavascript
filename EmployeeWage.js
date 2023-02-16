console.log("Welcome to day 38 employee wage program using javascript");
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalEmpWage = 0;
function wageCalculation() {
for(let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    let empCheck = Math.floor(Math.random()*10)%3;
    switch (empCheck) {
        case IS_PART_TIME:
            console.log("Part time employee");
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            console.log("Full time employee");
            empHrs = FULL_TIME_HOURS;
            break;
        case IS_ABSENT:
            console.log("Employee is absent");
            empHrs = 0;
            break;        
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    totalEmpHrs += empHrs;
    totalEmpWage = totalEmpHrs * WAGE_PER_HOUR; 
    console.log("Employee Wage for the day "+(i+1)+" : "+empWage);
    }
    console.log("Total working hour for the month is "+totalEmpHrs+" and total wage is "+totalEmpWage);
}
wageCalculation();