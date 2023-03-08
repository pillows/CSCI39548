// when using querySelector, the returned node can be of any type (e.g. text node or an element node)
// let h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.parentElement);
// console.log(h1.children); //returns an empty list because there are no element children of h1

// //node.children will return ONLY element children; node.childNodes will return any node type
// let ul = document.querySelector('ul');
// console.log(ul.children);
// console.log("lastElementChild of ul", ul.lastElementChild.childNodes);
// console.log(ul.lastElementChild.childNodes[0].nodeType);

// // Select the section with an id of container without using querySelector.
// console.log(document.getElementById("container"));
// console.log(document.getElementsByClassName("first"))

// // Select the section with an id of container using querySelector.
// console.log(document.querySelector("#container")); 

// // Select all nodes with a class of "second".
// console.log(document.querySelectorAll(".second"));

// // Select a node with a class of third, but only inside of the ol tag.
// console.log(document.querySelector("ol .third"));

// // Give the section with an id of container the text "Hello!".
// document.getElementById("container").innerHTML = "Hello!";

// Add the class main to the div with a class of header.
// document.querySelector('.header').classList.add('main');

// // Remove the class main on the div with a class of header.
// document.querySelector(".header").classList.remove('main');

// // Create a new li element.
let li = document.createElement("li");

// //  Create a text node and append it to the new element.
let txt = document.createTextNode("four");
li.appendChild(txt);
console.log(li)

// // Append the li to the ol element.
// // This step is what links our new element to an existing DOM element (the ol)
document.querySelector("ol").appendChild(li);

// // Loop over all of the li's inside the ol tag and give them a background color of "pink".
console.log(document.querySelectorAll("ol li"));
let listCount = document.querySelectorAll("ol li").length;
for (let i = 0; i < listCount; i++) {
  document.querySelectorAll("ol li")[i].style.backgroundColor = "pink";
}
let ol = document.querySelector("ol");
ol.style.backgroundColor = "magenta";

// // Remove the last element node in the ol
let olLastItem = ol.lastElementChild;
ol.removeChild(olLastItem);

// // Setting onlick functionality of the ol
ol.onclick = function () {
  this.style.backgroundColor = "red";
};

// // getting the number of element children the ordered list has
console.log(ol.childElementCount);

let counter = 0;
document.querySelector("#counter").addEventListener("click", function () {
  counter++;
  // console.log(counter);
  document.getElementById("number").innerHTML = counter;
})