// WAP TO FIND IF A NO IS POSITIVE, NEGATIVE, OR ZERO USING IF ELSE
//   function test(number){
//     if (number > 0 ) {
//         return 'POSITIVE';
//     }
//     else{
//         if (number === 0) {
//             return 'ZERO';
//         }
//         else{
//             return 'NEGATIVE';
//         }
//     }
// }

// const testNumbers = [1, 5, -2, 0, 3, -9, -11, 2/3];

// testNumbers.forEach (num => {
//     console.log(`${num} === ${test(num)}`);
// });

// WAP TO FIND IF A PERSON IS ELIGIBLE TO VOTE OR NOT

// function isEligibleOrNot(age){
//     if (age > 18) {
//         return 'eligible to vote';
//     } else {
//         return 'not eligible to vote';
//     }
// }

// const testAge = [20, 19, 17, 16];

// testAge.forEach (num => {
//     console.log(`${num} is ${isEligibleOrNot(num)}`);
// })

// WITH NAME AND AGE
// function isEligibleOrNot(age) {
//     if (age > 18) {
//         return 'eligible';
//     } else {
//         return 'not eligible';
//     }
// }

// const testAge = { "aayush": 20, "jeevan": 19, "misson": 17, "dikshya": 16 };

// for (const [name, age] of Object.entries(testAge)) {
//     console.log(`${name} is ${isEligibleOrNot(age)}`);
// }

// WAP TO FIND THE LARGEST USING NESTED IF ELSE

// function largestNumber(a, b, c){
//     if (a > b){
//         if (a > c){
//             console.log(`${a} is the largest`);
//         } else {
//             console.log(`${c} is the largest`);
//         }
//     } else {
//             if (b > c){
//                 console.log(`${b} is the largest`);
//             } else {
//                 console.log(`${c} is the largest`);
//             }
//     }
// }

// largestNumber(45, 83, 6);


// WAP TO FIND TODAY'S DAY USING SWITCH CASE
// const day = new Date().getDay();
// let dayName;

// switch (day) {
//     case 0:
//     dayName = 'Sunday';
//     break;

//     case 1:
//     dayName = 'Monday';
//     break;

//     case 2:
//     dayName = 'Tuesday';
//     break;

//     case 3:
//     dayName = 'Wednesday';
//     break;

//     case 4:
//     dayName = 'Thursday';
//     break;

//     case 5:
//     dayName = 'Friday';
//     break;

//     case 6:
//     dayName = 'Saturday';
//     break;
//     default: 
//     dayName = 'Unknown Day';
// }

// console.log(`Today is ${dayName}`);


// WAP TO FIND THE GRADE BASED ON SCORE USING SWITCH CASE
// function getGrade(score) {
//     let grade;
//     switch (true) {
//         case (score >= 90 && score <= 100):
//             grade = 'A';
//             break;

//         case (score >= 80 && score <= 90):
//             grade = 'B';
//             break;

//         case (score >= 70 && score <= 80):
//             grade = 'C';
//             break;

//         case (score >= 60 && score <= 70):
//             grade = 'D';
//             break;

//         case (score >= 0 && score <= 60):
//             grade = 'F';
//             break;

//             default:
//                 grade = 'Invalid score';
//         }
//         return grade;
// }

// const scores = [93, 87, 66, 34, 78, 105, -5];

// scores.forEach(score => {
//     console.log(`Score: ${score}, Grade: ${getGrade(score)}`);
// })

// WAP TO CHECK EVEN OR ODD USING TERNARY OPERATOR

// function checkEvenOdd (number){
//     return (number % 2 === 0) ? `even`: `odd`;
// }

// const numbers = [ 2, 4, 5, 1, 6, 17, 28, 91];

// numbers.forEach (num => {
//     console.log(`The number ${num} is ${checkEvenOdd(num)} `);
// })

// TO FIND POSITIVE OR NEGATIVE OR ZERO

// function checkPositiveNegative(number) {
//     return (number > 0) ? `positive`: 
//            (number < 0) ? `negative`:
//                            `zero`;
// }

// const numbers = [2, 4, -5, 1, -92, 0, -1, 0, 2/3, -(5/3)];

// numbers.forEach (num => {
//     console.log(`the number ${num} is ${checkPositiveNegative(num)}`);
// })

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const years = [2000, 1900, 2004, 2001, 2100, 2400, 2024];

// years.forEach(year => {
//     console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);
// });
