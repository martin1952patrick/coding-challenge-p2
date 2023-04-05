// write a function to take a positive integer, and return the largest 
// power of two less than or equal to this integer. in javascript

function largestPowerOfTwo(num) {
  let result = 1;
  while (result <= num) {
    result *= 2;
  }
  return result / 2;

}



// This function works by starting with a result of 1, and then repeatedly 
// multiplying the result by 2 until it is larger than the input num. The 
// final result is then divided by 2 to get the largest power of two less than or equal to num.

// For example, if we call largestPowerOfTwo(10), the function will return 8, 
// because 8 is the largest power of two less than or equal to 10.