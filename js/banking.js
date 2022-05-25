//handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get deposit amount
    const depositInputField = document.getElementById("deposit-input");
    const depositAmount = depositInputField.value;

    //display deposit amount
    const depositHolder = document.getElementById("deposit-holder");
    depositHolder.innerText = depositAmount;

    //clear deposit field
    depositInputField.value = "";
  });

//handle withdraw button event
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //get withdraw amount
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInputField.value;

    //display withdraw amount
    const withdrawHolder = document.getElementById("withdraw-holder");
    withdrawHolder.innerText = withdrawAmount;

    //clear withdraw field
    withdrawInputField.value = "";
  });
