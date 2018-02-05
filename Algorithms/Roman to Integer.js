/*
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
*/
var romanMap = {'M': 1000,'D': 500 ,'C': 100,'L': 50,'X': 10,'V': 5,'I': 1};

var romanToInt = function(s) {
    var integer = 0;

    for(var i=0; i < s.length; i++){
        if(romanMap[s[i]] < romanMap[s[i+1]]){
            integer -= romanMap[s[i]];
        }
        else{
            integer +=romanMap[s[i]];
        }
    }
    return integer;
};
