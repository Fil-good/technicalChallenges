// extra Module as an example

function createDiv (inputUser) {

  let newDiv = document.body;
  newDiv.innerHTML += "hi from the newDiv!";
  console.log(newDiv.innerHTML);
}

export { createDiv };
