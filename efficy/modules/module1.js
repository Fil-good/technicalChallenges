// extra Module as an example

function createDiv (inputUser) {

  let newDiv = document.body;
  newDiv.innerHTML += "hi from the newDiv!";
  console.log(newDiv.innerHTML);
}

// purpose is to create a div after the body innerHTML, with a dropdown list from an array,
// the parameter of this function
function createDropDownList () {
  let ingredients = ["mascarpone", "eggs", "amaretto", "sugar", "cacao powder"];
  let n = ingredients.length;
  let options = "";
  for (let i=0; i<n;i++) {
    options += `<option>${i+1}. ${ingredients[i]}</option>`;
  }
  console.log(`options createdropdownlist: ${options}`);

  let fullHtml = `<div id="selectIngredients"><form>
  <label for="selectList">Ingredients</label>
  <select name="ingredients" id="selectList">${options}</select>
  </form></div>`;

  let newDivWithSelect = document.body;
  newDivWithSelect += fullHtml;
  console.log(`newDivWithSelect: ${newDivWithSelect} endOfNewDivWithSelect.`);
  console.log(`document.body: ${document.body}`)
}

export { createDiv, createDropDownList };
