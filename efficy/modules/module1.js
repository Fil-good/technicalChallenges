// extra Module as an example

function createDiv (inputUser) {
  let newDiv = document.body.createElement("div");
  newDiv.append = `${inputUser}`;
}

export { createDiv };
