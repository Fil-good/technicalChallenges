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

    // let n = oppoStatus.length;
    // for (let i = 0; i < n; i++) {
      //  `<option>${oppoStatus[0][1]}</option>`;

      // let form = document.form;
      let select = document.querySelector('select[name="status"]');
      select.innerHTML=`<option>Something</option>`;

    }
  }


const main = new Module();
main.start();
