let endorsements = [
    {skill: 'css', user: 'Bill'},
    {skill: 'js', user: 'Chad'},
    {skill: 'js', user: 'Bill'},
    {skill: 'css', user: 'Sue'},
    {skill: 'js', user: 'Sue'},
    {skill: 'html', user: 'Sue'},
];

function groupBySkill(arr) {
    let result = [];
    let skillMap = {};
    arr.forEach(function(e) {
        if (skillMap[e.skill] === undefined) {
            skillMap[e.skill] = [];
        }
        skillMap[e.skill].push(e.user);
    });

    Object.keys(skillMap).forEach(function(e) {
        result.push({skill: e, user: skillMap[e], count: skillMap[e].length});
    })

    return result;
}

groupBySkill(endorsements);