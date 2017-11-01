var isParent = function(ele1, ele2) {
    var parent = ele2.parentNode//parentElement;
    while (parent != null) {
        if (ele1 === parent) {
            return true;
        }
	parent = parent.parentNode//parentElement;
    }

    return false;
}

var div = document.createElement('div');
document.body.appendChild(div);
console.log(isParent(document, div));
