// 1. Create an array named numbers and store 5 number values in it
let numbers = [ 14, 25, 41, 18, 17];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum =0 ;
for(let num of numbers){
    sum += num ;
}
console.log(sum)
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum / numbers.length)
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];
for(let num of numbers) {
    if(num > highestNumber) {
        highestNumber = num;
    }
}
console.log(highestNumber)
// 5. Find the lowest number in the array and print it to the console using console.log()
let LowestNumber = numbers[0];
for(let num of numbers) {
    if(num < LowestNumber) {
        LowestNumber= num;
    }
}
console.log(LowestNumber)
// 6. Find the even numbers in the array and print them to the console using console.log()
for(let num of numbers ){
    if( num % 2 === 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let num of numbers ){
    if( num % 2 !== 0) {
        console.log(`${num} is odd`)
    } else {
        console.log(`${num} is even`)
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let num of numbers ){
    if( num % 5 === 0) {
        console.log(`${num} is divisible by 5`)
    } else {
        console.log(`${num} is not divisible by 5`)
    }
}
// 9. Log all the element of the array one by one
for(num of numbers){
    console.log(num)
}
// 10. Find all the number in the array that is divisible by 3
for(let num of numbers ){
    if( num % 3 === 0) {
        console.log(`${num} is divisible by 3`)
    } else {
        console.log(`${num} is not divisible by 3`)
    }
}