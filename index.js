const addInputsBtn = document.getElementById("add-inputs-btn");
const inputItem = document.getElementById("input-item");
const inputCurrency = document.getElementById("input-currency");
const currencySelectBox = document.getElementById("currency-select-box");
const itemOutput = document.getElementById("item-output");
const costOutput = document.getElementById("cost-output");
const currencyOutput = document.getElementById("currency-output");
const noteOutput = document.getElementById("note-output");
const totalOutput = document.getElementById("total-output");

const itemArray = [];
const costArray = [];

addInputsBtn.addEventListener("click", function () {
  // check if item and cost already exist in arrays before adding
  if (itemArray.indexOf(inputItem.value) === -1) {
    itemArray.push(inputItem.value);
  }
  //   CONVERT costArray strings to numbers - will help with sum total later on
  if (costArray.indexOf(Number(inputCurrency.value)) === -1) {
    costArray.push(Number(inputCurrency.value));
  }
  // render item
  itemOutput.innerHTML = "";
  itemArray.forEach(function (item) {
    itemOutput.innerHTML += `
    <div class="item-flex">
    <p>${item}</p>
    <p class="remove-text">remove</p>
    </div>
  `;
  });
  //   render cost
  costOutput.innerHTML = "";
  costArray.forEach(function (cost) {
    costOutput.innerHTML += `
    <p>${cost}</p>
    `;
  });
  // RENDER note output
  document.getElementById("note-output").innerHTML = `
   <p>We accept cash, credit card or PayPal.</p>
   `;
  // reset input values
  inputItem.value = "";
  inputCurrency.value = "";

  //   CALCULATE TOTAL COSTS

  let totalCost = 0;
  costArray.forEach(function (cost) {
    //   the below ensures a string is not returned
    totalCost += Number(cost);
  });

  console.log(costArray);

  // RENDER TOTAL COSTS
  document.getElementById("total-output").innerHTML = `
       <p class="adjust-class"> ${totalCost}</p>
       `;
});

// REMOVE text functionality

itemOutput.addEventListener("click", function (e) {
  console.log(e);
});
