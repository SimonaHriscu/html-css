//replace TEXT

let firstElem = document.getElementById("one");
firstElem.innerHTML = "replaced line";


//create new element
let newElem = document.createElement("li");
let newText = document.createTextNode('quinoa');
newElem.appendChild(newText);
console.log(newText);
let position = document.querySelector('ul');
position.appendChild(newElem);

//remove existing element
let removeEl = document.getElementsByTagName('li')[3]; 
//console.log(removeEl)
let containerEl= removeEl.parentNode;
containerEl.removeChild(removeEl);

//set a class attribute to all items
let uList = document.querySelectorAll("li");
console.log(uList);
//uList.hasAttribute("")
uList.forEach(elem => {
    elem.setAttribute("class", "cool");
});

//add another elem to the li
let newElem2 = document.createElement("li");
let newText2 = document.createTextNode("kale");
newElem2.appendChild(newText2);
console.log(newText2);
let positionFirst = document.querySelector("ul");
positionFirst.insertBefore(newElem2, positionFirst.firstChild);
console.log(positionFirst);



//add the number of items to the content of the heading

let uListUpdate = document.querySelectorAll("li");
let heading = document.querySelector('h2');
let headingText = heading.firstChild.nodeValue;
let totalItems = uListUpdate.length ;
let newHeading = `${headingText}  :   ${totalItems}  items`;
heading.textContent = newHeading;


// let heading = document.getElementById("header");
// numLiElem = uList.length;
// heading.innerHTML += numLiElem ; //or NodeValue or textContent;
// console.log(heading);

