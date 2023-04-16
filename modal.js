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
  // local storage - save time repeating form fill
  localStorage.setItem("invoiceNumber", inputInvoiceNumber.value);
  localStorage.setItem("businessName", inputBusinessName.value);
  localStorage.setItem("issueDate", inputIssueDate.value);
  localStorage.setItem("dueDate", inputDueDate.value);
  localStorage.setItem("senderName", inputSenderName.value);
  localStorage.setItem("senderStreet", inputSenderStreet.value);
  localStorage.setItem("senderCity", inputSenderCity.value);
  localStorage.setItem("senderPostcode", inputSenderPostcode.value);
  localStorage.setItem("addresseeName", inputAddresseeName.value);
  localStorage.setItem("numberStreet", inputNumberStreet.value);
  localStorage.setItem("cityName", inputCityName.value);
  localStorage.setItem("postcode", inputPostcode.value);
  localStorage.setItem("taxPercentage", inputTaxPercentage.value);
  localStorage.setItem("tcLink", inputTCLink.value);

  document.getElementById("user-input-el").innerHTML = `
      <!-- user inputs 1 -->
      <div class="user-details-container">
        <div id="invoice-number">
          <p><strong>Invoice Number: </strong>${
            localStorage.getItem("invoiceNumber") || inputInvoiceNumber.value
          }</p>
        </div>
        <div id="issue-date">
          <!-- rendered by javascript -->
          <p><strong>Issue Date: </strong>${
            localStorage.getItem("issueDate") || inputIssueDate.value
          }</p>
        </div>
        <div id="due-date">
          <!-- rendered by javascript -->
          <p><strong><span class="red">Due Date: </span> ${
            localStorage.getItem("dueDate") || inputDueDate.value
          }</strong></p>
        </div>
      </div>
      <!-- user inputs 2 -->
      <div class="user-details-container">
        <div id="sender-address">
        <h4><strong>Correspondence Address:</strong></h4>
          <p>${localStorage.getItem("senderName") || inputSenderName.value}</p>
          <p>${
            localStorage.getItem("senderStreet") || inputSenderStreet.value
          }</p>
          <p>${localStorage.getItem("senderCity") || inputSenderCity.value}</p>
          <p>${
            localStorage.getItem("senderPostcode") || inputSenderPostcode.value
          }</p>
         
        </div>
        <div id="recipient-address">
        <h4><strong>Recipient Address:</strong></h4>
         <p>${
           localStorage.getItem("addresseeName") || inputAddresseeName.value
         }</p>
         <p>${
           localStorage.getItem("numberStreet") || inputNumberStreet.value
         }</p>
         <p>${localStorage.getItem("cityName") || inputCityName.value}</p>
         <p>${localStorage.getItem("postcode") || inputPostcode.value}</p>
        </div>
      </div>
      <!-- user inputs 3 -->
      <div class="fiscal-legal-container">
        <div><strong>Tax Percentage:</strong> ${
          localStorage.getItem("taxPercentage") || inputTaxPercentage.value
        }%</div>
      
        <div class="tc-link"><strong>Terms & Conditions:</strong> <a href ="${
          localStorage.getItem("tcLink") || inputTCLink.value
        }" target=”_blank”>${inputTCLink.value}</a></div>
      </div>
      `;
  console.log("click works!");
  document.querySelector(".modal-container ").style.display = "none";
});

// populate form fields with saved data on page load
window.addEventListener("load", function () {
  inputInvoiceNumber.value = localStorage.getItem("invoiceNumber");
  inputBusinessName.value = localStorage.getItem("businessName");
  inputIssueDate.value = localStorage.getItem("issueDate");
  inputDueDate.value = localStorage.getItem("dueDate");
  inputSenderName.value = localStorage.getItem("senderName");
  inputSenderStreet.value = localStorage.getItem("senderStreet");
  inputSenderCity.value = localStorage.getItem("senderCity");
  inputSenderPostcode.value = localStorage.getItem("senderPostcode");
  inputAddresseeName.value = localStorage.getItem("addresseeName");
  inputNumberStreet.value = localStorage.getItem("numberStreet");
  inputCityName.value = localStorage.getItem("cityName");
  inputPostcode.value = localStorage.getItem("postcode");
  inputTaxPercentage.value = localStorage.getItem("taxPercentage");
  inputTCLink.value = localStorage.getItem("tcLink");
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

{
  /* <div>
    <strong>Terms & Conditions:</strong> ${
    localStorage.getItem("tcLink") || inputTCLink.value
  }</div> */
}
