// extra Module as an example

let ingredients = ["mascarpone", "eggs", "amaretto", "sugar", "cacao powder"];
let n = ingredients.length;

const Module2 = class {

  constructor() {

  }

  start () {

    function createDropDownList() {

      let options = "";
      for (let i = 0; i < n; i++) {
        options += `<option>${i + 1}. ${ingredients[i]}</option>`;
      }
      // console.log(`options createdropdownlist: ${options}`);

      let newDivWithSelect = document.querySelector('select.js-select2');
      newDivWithSelect.innerHTML = options;
      console.log(`newDivWithSelect: ${newDivWithSelect} endOfNewDivWithSelect.`);
      console.log(`document.body: ${document.body}`)
    }

    createDropDownList();


  }


}


export { Module2 };
