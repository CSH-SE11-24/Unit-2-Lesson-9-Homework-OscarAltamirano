// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let number = prompt("Please enter a number")
number = Number(number)
// Prompt the user for another number that is bigger than the first number and cast it to a number
let secondNumber = prompt("Please enter another number that is bigger than the first number")
secondNumber = Number(secondNumber)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
for(let i = number; i <= secondNumber; i++){
  console.log(i)
}




// PART 2: Averaging an array
// Create an array of numbers 
let numbers = [1, 2, 3, 4] 
console.log(numbers)
// Write a for loop that calculates the sum of the elements 
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}
console.log(sum) 





// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let average = sum/numbers.length
console.log(average) 

