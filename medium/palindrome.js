/*
  Implement a function `isPalindrome` which takes a string 
  as argument and returns true/false as its result.
  
  Note: the input string is case-insensitive which means 'Nan' 
  is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const new_str = str.toLowerCase();
  let start = 0;
  let end = new_str.lenght-1;

  while(start<end){
    if(new_str[start] != new_str[end]){
      return false;

      start++;
      end--;
    }
  }
  return true;
}

module.exports = isPalindrome;
