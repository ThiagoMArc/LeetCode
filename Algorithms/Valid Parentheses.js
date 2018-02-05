/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

var isValid = function(s) {


    while(s.includes("()") || s.includes("[]") || s.includes("{}")){
        s = s.replace("()","").replace("[]","").replace("{}","");
    }

    return s.length===0;

};

console.log(isValid("[()]"));
