// WAP to print numbers from 1 to 10 using for loop
// for (let i =1; i <= 10; i++) {
//     console.log(i);
// }

// WAP to print the multiplication table of 5 using for loop
// for (i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// WAP to print the sum of numbers from 1 to 10 using while loop
// let sum = 0;
// let i = 1;

// while (i <= 10) {
//     sum += i;   
//     i++
// }
// console.log(`the sum of numbers from 1 to 10 is ${sum}`);

// WAP to print numbers from 10 to 1 using while loop
// let i = 50;

// while (i > 10) {
//     console.log(i);
//     i--;
// }

// WAP to print numbers from 1 to 5 using DO ... while loop
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// WAP to calculate a factorial of a number using do...while loop

// function factorial (n){
//     let result = 1;
//     let i = n;

//     do {
//         result *= i;
//         i--;
//     } while (i > 0);

//     return result;
// }

// const number = 5;
// console.log(`The facotrial of ${number} is ${factorial(number)}`);

// WAp to print a pattern

// for (let i = 1; i <= 5; i++) {
//     let stars = '';
//     for (let j = 1; j <= i; j++) {
//         stars += '*'
//     }
//     console.log(stars);
// } 

// WAP print from 1 to 10 but skip 5 using continue statement

// for (let i = 1; i<= 10; i++) {
//     if ( i === 5) {
//         continue;
//     }
//     console.log(i);
// }

//  print from 1 to 10 but stops the loop when 7 uses the break statement

for (let i = 1; i<= 10; i++) {
    if ( i === 7) {
        break;
    }
    console.log(i);
}