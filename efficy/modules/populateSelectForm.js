// const array of objects
const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const Module = class {
  constructor() {
    let arrOfStatuses = [];
    let n = oppoStatus.length;
    for (let i = 0; i < n; i++) {
      arrOfStatuses.push(oppoStatus[i]["STATUS"]);
    }
    this.arr = arrOfStatuses;
  }
  start() {

    // getElementByTagName didn't work for me !

    function populateSelect(arr) {
      const options = arr.map(option =>
        `<option>${option}</option>`).join('');
      let el = document.querySelector('select.js-select1');
      console.log(`el: ${el}`);
      el.innerHTML = options;

      console.log(`getEl select tag: ${el.innerHTML}`);

    }

    populateSelect(this.arr);


    function showTheSelected() {
      let el = document.querySelector('button');
      el.addEventListener("click", (event) => {
        event.preventDefault();
        let content = document.querySelector('select.js-select1').value;
        let divOutput = document.querySelector("div.output");
        divOutput.innerHTML = content;

      });

    }

    showTheSelected();
    // function showSelectedOption((event) => {
        // let toPrint = document.getElementsByTagName('select').value;
        // document.body += `<div>${toPrint}`;
    // })
  }
}

export { Module };
