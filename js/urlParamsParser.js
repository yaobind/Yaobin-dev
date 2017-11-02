//简单版：
var queryString = url.substring( url.indexOf('?') + 1 );
var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

//复杂版dup key: name: ["yaobin", "xi"]
//有点坑，需要考虑没query string，或者有fragement的情况http://www.linkedin.com?q1=v1&q2=v2#xxx
//这样子的话就要写regular expression进行处理

var parseQueryString = function( url ) {
    var params = {};
    url = decodeURIComponent(url);
    if (!url.includes('?')) {
        return params;
    }    
    
    var queryString = '';
    if (url.includes('#')) {
        queryString = url.substring( url.indexOf('?') + 1, url.indexOf('#'));
    } else {
        queryString = url.substring( url.indexOf('?') + 1);
    }
    
    var queries = queryString.split("&");
    queries.forEach(function(query) {
        var parts = query.split('=');
        var key = parts[0];
        var val = parts[1];
        if (key in params) {
            if (!Array.isArray(params[key])) {
                params[key] = new Array(params[key]);
            } 
            params[key].push(val);
        } else {
            params[key] = val;
        }  
    });
    
    return params;
};


var url = "http://abc.com?name=yaobin&name=xi&age=11";
console.log(parseQueryString(url));
var url_enc = encodeURIComponent(url);
console.log(parseQueryString(url_enc));
var url1 = "http://abc.com?name=yaobin";
console.log(parseQueryString(url1));
var url2 = "http://abc.com";
console.log(parseQueryString(url2));
var url3 = "http://www.linkedin.com?q1=v1&q2=v2#xxx";
console.log(parseQueryString(url3));
var url4 = "http://abc.com?name=yaobin&name=xi&age=11#123124213";
console.log(parseQueryString(url4));


//enco deco:
//var uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
//var uri_enc = encodeURIComponent(uri);
//var uri_dec = decodeURIComponent(uri_enc);
// Encoded URI
//https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab
// Decoded URI
//https://w3schools.com/my test.asp?name=ståle&car=saab
