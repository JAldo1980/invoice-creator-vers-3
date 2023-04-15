const inputInvoiceNumber = document.getElementById("input-invoice-number");
const inputBusinessName = document.getElementById("input-business-name");
const inputIssueDate = document.getElementById("input-issue-date");
const inputDueDate = document.getElementById("input-due-date");
const inputSenderName = document.getElementById("input-sender-name");
const inputSenderStreet = document.getElementById("input-sender-street");
const inputSenderCity = document.getElementById("input-sender-city");
const inputSenderPostcode = document.getElementById("input-sender-postcode");
const inputAddresseeName = document.getElementById("input-addressee-name");
const inputNumberStreet = document.getElementById("input-number-street");
const inputCityName = document.getElementById("input-city-name");
const inputPostcode = document.getElementById("input-postcode");
const inputTaxPercentage = document.getElementById("input-tax-percentage");
const inputTCLink = document.getElementById("input-t&c-link");

const submitDetails = document.getElementById("submit-details");

// MODAL SECTION

submitDetails.addEventListener("click", function () {
  console.log("click");
  console.log(inputInvoiceNumber.value);
});

// exporting varibales
export {
  submitDetails,
  inputInvoiceNumber,
  inputBusinessName,
  inputIssueDate,
  inputDueDate,
  inputSenderName,
  inputSenderStreet,
  inputSenderCity,
  inputSenderPostcode,
  inputAddresseeName,
  inputNumberStreet,
  inputCityName,
  inputPostcode,
  inputTaxPercentage,
  inputTCLink,
};

// mockText.innerHTML = `
// <!-- user inputs 1 -->
// <div class="user-details-container">
//   <div id="invoice-number">
//   inputInvoiceNumber.value
//     <p>Invoice Number: 001</p>
//   </div>
//   <div id="issue-date">
//     <!-- rendered by javascript -->
//     <p>Issue Date: 20/04/23</p>
//   </div>
//   <div id="due-date">
//     <!-- rendered by javascript -->
//     <p><strong>Due Date: 14/05/23</strong></p>
//   </div>
// </div>
// <!-- user inputs 2 -->
// <div class="user-details-container">
//   <div id="sender-address">
//     <!-- rendered by javascript -->
//     <p>Senders Address</p>
//   </div>
//   <div id="recipient-address">
//     <!-- rendered by javascript -->
//     <p>Recipient Address</p>
//   </div>
// </div>
// `;
