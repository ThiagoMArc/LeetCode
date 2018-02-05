/*
Determine whether an integer is a palindrome. Do this without extra space.
*/

var isPalindrome = function(x) {

    var num_str = x.toString();

    var palin_num = num_str.split('').reverse().join('');

    return palin_num===num_str;

};

console.log(isPalindrome(-2147483648));
