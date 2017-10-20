

//   var Tuple = function(str) {
//     //console.log(str);
//     this.tupleCount = this.count(str);
//     this.tupleArr = this.parse(str);
//   }
  
//   Tuple.prototype.count= function(str) {
//     //console.log(str);
//     return str.substring(1, str.indexOf(')')).split(',').length;
//   }
    
//   Tuple.prototype.multiply = function(n) {
//     //calculation here
//     if (n > this.tupleCount) {
//       console.log('invalid');
//       return false;
//     }
      
//     var result = 1;
//     for (let i = 0; i < this.tupleArr.length; i++) {
//       if (this.tupleArr[i][n-1]) {
//         result *= this.tupleArr[i][n-1];
//       }
//     }
      
//     return result;
//   }
    
//   Tuple.prototype.parse = function(str) {
//     let tupleArr = str.replace(/[,()]/g, '').match(/.{1,3}/g).map((t) => {
//       return t.split('');
//     });
      
//     return tupleArr;
//   }



// let myTuple = new Tuple('(1,2,3),(4,5,6),(7,8,9)');
// console.log(myTuple.multiply(2)); //should be 2*5*8=80


//-------------------------------------------------------
// class Tuple {
//   constructor(str) {
//     this.tupleCount = this.count(str);
//     this.tupleArr = this.parse(str);
//   }
  
//   count(str) {
//     return str.substring(1, str.indexOf(')')).split(',').length;
//   }
    
//   multiply(n) {
//     //calculation here
//     if (n > this.tupleCount) {
//       console.log('invalid');
//       return false;
//     }
//     var result = 1;
//     for (let i = 0; i < this.tupleArr.length; i++) {
//       if (this.tupleArr[i][n-1]) {
//         result *= this.tupleArr[i][n-1];
//       }
//     }
      
//     return result;
//   }
    
//   parse(str) {
//     let tupleArr = str.replace(/[,()]/g, '').match(/.{1,3}/g).map((t) => {
//       return t.split('');
//     });
//     return tupleArr;
//   }
// }

// const myTuple = new Tuple('(1,2,3),(4,5,6),(7,8,9)');
// console.log(myTuple.multiply(2)); //should be 2*5*8=80

//-------------------------------------------------------------------------

//validation is very important
var Tuple = function(str) {
        this.tuple = [];
        this.parse(str);
}

Tuple.prototype.parse = function(str) {
    var str2 = str.substring(1, str.length-1);
    var t = str2.split('),(');
    var tps = t.map(function(item) {
            return item.split(',').map(function(i) {return +i})
    })
        
    this.tuple = tps;
}

Tuple.prototype.multiply = function(n) {
    if(n <= 0 || n > this.tuple[0].length) {
        return null;
    }
    
    var output = 1;
    for(var i=0; i<this.tuple.length; i++) {
            output *= this.tuple[i][n-1];
    }
    
    return output;
}



const myTuple = new Tuple('(1,2,3),(4,5,6),(7,8,9)');
//console.log(myTuple.multiply(2)); //should be 2*5*8=80


var myparse = function(str) {
    return str.match(/\((\d,){2}\d\)/g).map(function(singleStr) {
        return singleStr.match(/\d/g);
    });//matches each parenthesis
}

//console.log(myparse('(1,2,3),(4,5,6),(7,8,9)'));
//console.log(myparse('(1,2,3),(4,5,6),(7,8,z)'));
var testRes = /^(\(\d,\d,\d\),)*(\(\d,\d,\d\))$/.test('(1,2,3),(4,5,6),(7,8,9)');
console.log(testRes);