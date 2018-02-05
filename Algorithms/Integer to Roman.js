/*
Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.
*/

var romanMap = new Map();
romanMap.set('M',1000);
romanMap.set('CM',900);
romanMap.set('D',500);
romanMap.set('CD',400);
romanMap.set('C',100);
romanMap.set('XC',90);
romanMap.set('L',50);
romanMap.set('XL',40);
romanMap.set('X',10);
romanMap.set('IX',9);
romanMap.set('V',5);
romanMap.set('IV',4);
romanMap.set('I',1);


var intToRoman = function(num) {
    var rn='';
  for(var [key,val] of romanMap.entries()){
    while(num >= val){
      num -= val;
      rn += key;
    }
 };
    return rn;
}

console.log(intToRoman(1));
