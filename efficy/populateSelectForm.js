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

  }
  start() {

    let arrOfStatuses = [];
    let n = oppoStatus.length;
    for(let i=0; i<n; i++) {
      arrOfStatuses.push(oppoStatus[i]["STATUS"]);
    }

    function populateSelect(arr) {
      const options = arr.map(option =>
        `<option>${option}</option>`).join('');
      let el = document.getElementsByTagName("select");
      console.log(el);
      el.innerHTML = `<select id="status" name="status">${options}</select>`;

      console.log(`getEl select tag: ${el}`);

    }

    document.addEventListener('DOMContentLoaded', (event) => {
      populateSelect(arrOfStatuses);

    });

    // function showSelectedOption((event) => {
        // let toPrint = document.getElementsByTagName('select').value;
        // document.body += `<div>${toPrint}`;
    // })
  }
}

const main = new Module();
main.start();
