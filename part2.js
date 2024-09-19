
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


var plusOne = function(digits) {
    // join array
    // perform multiplication and return sum
    // split into array

    let num = 0
    let listArr = []

    for (let i =0; i <= digits.length; i++)
    {
        num = digits.join("");
        // num = parseInt(num)
        num =+ num + 1      
        console.log(num)

       

       
    }

    while (num != 0) {
        listArr.push(num % 10);
        num = Math.trunc(num /10);
    }

    listArr.reverse();
    console.log(listArr)
    
};

const arr = [1,2,3];
console.log(plusOne(arr))