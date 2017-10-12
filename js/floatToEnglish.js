var singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var Tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var TenPlus = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var unitStr = ["Billion", "Million", "Thousand"];
var unit = [1000000000, 1000000, 1000];
var numberToWords = function(num) {
    if (num === 0) {
        return "Zero";
    }
    
    if (num < 0 || num > 1000000000000) { //!!!
        return "Invalid number";
    }
    
    var result = [];
    var decimal = num - Math.floor(num); //!!!
    num = Math.floor(num);
    
    // note: for (x in person) only for obj properties
    for (var i = 0; i < 3; i++) {
        if (num >= unit[i]) { // !!!
            var curt = ~~(num / unit[i]);
            under1000(curt, result);
            result.push(unitStr[i]);
        }

        num = num % unit[i];
    }
    
    under1000(num, result);
    
    if (decimal > 0) {
        result.push(~~(decimal * 100) + '/100'); // !!! 
    }
    
    return format(result);
};

function format(list) {
    if (!list || list.length == 0) {
        return "";
    }
    
    var result = list[0];
    for (var i = 1; i < list.length; i++) {
        result += ' ' + list[i];
    }
    
    return result;
}

function under1000(num, list) {
    if (num >= 100) {
        list.push(singles[~~(num / 100)])
        list.push("Hundred");
        num = num % 100;
    }
    
    if (num < 20 && num > 10) {
        list.push(TenPlus[num - 10]);
        return;
    }
    
    if (num >= 10) {
        list.push(Tens[~~(num / 10)]);
        num = num % 10;
    }
    
    if (num > 0) {
        list.push(singles[num]);
    }
}



console.log('|' + numberToWords(123.01) + '|');
console.log('|' + numberToWords(123.445) + '|');
console.log('|' + numberToWords(123.4451234123541234) + '|');
console.log('|' + numberToWords(1234567890.12345) + '|');
console.log('|' + numberToWords(0.267) + '|');
console.log('|' + numberToWords(0) + '|');

//invalid
console.log('|' + numberToWords(-1) + '|');
console.log('|' + numberToWords(1234567890123) + '|');
