/*
File: complexCode.js 
Description: This code demonstrates a complex algorithm for finding the prime numbers in a given range using the Sieve of Eratosthenes.
*/

// Function to generate prime numbers within the given range
function findPrimeNumbers(start, end) {
  // Generate an array of numbers from start to end
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // Create a boolean array to track prime numbers
  const isPrime = new Array(end + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  // Apply the Sieve of Eratosthenes algorithm
  for (let num = 2; num * num <= end; num++) {
    if (isPrime[num]) {
      for (let mult = num * num; mult <= end; mult += num) {
        isPrime[mult] = false;
      }
    }
  }

  // Filter out non-prime numbers
  const primes = numbers.filter((num) => isPrime[num]);

  return primes;
}

// Get user input for the range
const startRange = parseInt(prompt("Enter the start of the range:"));
const endRange = parseInt(prompt("Enter the end of the range:"));

// Validate the user input
if (isNaN(startRange) || isNaN(endRange) || endRange <= startRange) {
  console.log("Invalid input!");
} else {
  // Call the findPrimeNumbers function
  const primeNumbers = findPrimeNumbers(startRange, endRange);

  // Output the prime numbers
  console.log(`Prime numbers between ${startRange} and ${endRange}:`);
  console.log(primeNumbers);
}

// This code can be further optimized and enhanced, but it serves as a complex example for finding prime numbers in a given range using the Sieve of Eratosthenes algorithm.