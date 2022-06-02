import { Module } from './modules/populateSelectForm.js';
import { Module2 } from './modules/module2.js';


const main = new Module();
main.start();

const main2 = new Module2();
main2.start();

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("js-div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement();
