function findPointsWithin(orgin, points, d) {
    return points.filter(function(p){
        let xdiff = p.x - orgin.x;
        let ydiff = p.y - orgin.y;
        return (xdiff*xdiff + ydiff*ydiff) <= d*d;
    });
}

var orgin = {x: 0, y: 0};
var points = [
    {x:0, y:1},
    {x:1, y:0},
    {x:0, y:2},
    {x:2, y:0},
    {x:0, y:3},
    {x:3, y:0},
]

console.log(findPointsWithin(orgin,points,1));
console.log(findPointsWithin(orgin,points,2));
console.log(findPointsWithin(orgin,points,3));