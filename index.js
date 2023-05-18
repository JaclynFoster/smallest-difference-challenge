// Credit: Adapted from a problem in Cracking the Coding Interview, 
// 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.
let result = []
const smallestDifference = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        let index1 = arr1[i]
        for(let j = 0; j < arr2.length; j++) {
           let index2 = arr2[i]
           result.push(index2 - index1)
        }
    }
    return Math.min(...result)
}

console.log(smallestDifference([10,20,14,16,18], [30,23,54,33,96]))