var singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var Tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];//move Ten to TenPlus array
var TenPlus = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var unitStr = ["Billion", "Million", "Thousand"];
var unit = [1e9, 1e6, 1000];//use scientific notition
var numberToWords = function(num) {
    //ask for clarification null undefined 
    if (num === 0) {
        return "Zero";
    }
    
    if (num < 0 || num >= 1e12) {
        return "Invalid number";
    }
    
    var decimal = num - Math.floor(num);
    num = Math.floor(num);//!!!
    var result = [];
    
    unit.forEach(function(unitVal, index) {
        if (num < unitVal) {
            return;
        }
        
        under1000(Math.floor(num / unitVal), result);
        result.push(unitStr[index]);
        num %= unit[index];
    });

    if (num > 0) {
        under1000(num, result);
    }
    
    if (decimal > 0) {
        result.push( Math.floor(decimal * 100) + "/100");
    }
    
    return result.join(" ");
}

function under1000(num, result) {
    if (num >= 100) {//!!! 
        result.push(singles[Math.floor(num / 100)]);
        result.push("Hundred");
        num %= 100;
    }
    
    if (num >= 20) {
        result.push(Tens[Math.floor(num / 10)]);
        num %= 10;
    }
    
    if (num >= 10) {
        result.push(TenPlus[num - 10]);
        return;
    }
    
    if (num > 0) {
        result.push(singles[num]);
    }
}



console.log('|' + numberToWords(123.01) + '|');
console.log('|' + numberToWords(123.445) + '|');
console.log('|' + numberToWords(123.4451234123541234) + '|');
console.log('|' + numberToWords(1234567890.12345) + '|');
console.log('|' + numberToWords(0.267) + '|');
console.log('|' + numberToWords(0) + '|');
console.log('|' + numberToWords(1) + '|');
console.log('|' + numberToWords(10) + '|');
console.log('|' + numberToWords(11) + '|');
console.log('|' + numberToWords(20) + '|');
console.log('|' + numberToWords(100) + '|');

//invalid
console.log('|' + numberToWords(-1) + '|');
console.log('|' + numberToWords(1234567890123) + '|');