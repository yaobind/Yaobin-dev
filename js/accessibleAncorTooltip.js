//<ul id="parent"></ul>

let list = [
    {id: 0, name: "Yaobin"},
    {id: 1, name: "Tuo"},
    {id: 2, name: "Ling"},
]

let parentUl = document.getElementById('parent');
//prevent reflow performance concern 
let fragment = document.createDocumentFragment();
list.forEach(function(e){
    let li = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.textContent = e.name;
    anchor.href = "/" + e.name;
    anchor.setAttribute("aria-label", e.name); 
    li.appendChild(anchor);
    fragment.appendChild(li);
});

parentUl.appendChild(fragment);
//event delegation
parentUl.addEventListener('click', function(e){
    console.log(e.target.textContent + " is clicked")
})