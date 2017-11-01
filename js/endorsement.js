let endorsements = [
    {skill: 'css', user: 'Bill'},
    {skill: 'js', user: 'Chad'},
    {skill: 'js', user: 'Bill'},
    {skill: 'css', user: 'Sue'},
    {skill: 'js', user: 'Sue'},
    {skill: 'html', user: 'Sue'},
];


//input validation??? ask interviewer
function groupBySkill(arr) {
    let result = [];
    let skillMap = {};
    arr.forEach(function(e) {
        if (!(e.skill in skillMap)) {
            skillMap[e.skill] = [];
        }
        skillMap[e.skill].push(e.user);
    });

    //for (const sk in map) {}
    Object.keys(skillMap).forEach(function(e) {
        result.push({skill: e, user: skillMap[e], count: skillMap[e].length});
    })

    result.sort(function(a, b) {return b.count - a.count;});

    return result;
}

console.log(groupBySkill(endorsements));