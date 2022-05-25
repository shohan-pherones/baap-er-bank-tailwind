//handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get deposit amount
    const depositInputField = document.getElementById("deposit-input");
    const depositAmount = parseFloat(depositInputField.value);

    //display deposit amount
    const depositHolder = document.getElementById("deposit-holder");
    const previousDepositedAmount = parseFloat(depositHolder.innerText);
    const newDepositedTotal = previousDepositedAmount + depositAmount;
    depositHolder.innerText = newDepositedTotal;

    //clear deposit field
    depositInputField.value = "";

    //update total balance
    const balanceHolder = document.getElementById("balance-holder");
    const previousTotalBalance = parseFloat(balanceHolder.innerText);
    const newTotalBalance = previousTotalBalance + depositAmount;
    balanceHolder.innerText = newTotalBalance;
  });

//handle withdraw button event
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //get withdraw amount
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawAmount = parseFloat(withdrawInputField.value);

    //display withdraw amount
    const withdrawHolder = document.getElementById("withdraw-holder");
    const previousWithdrawHolder = parseFloat(withdrawHolder.innerText);
    const newWithdrawAmount = previousWithdrawHolder + withdrawAmount;
    withdrawHolder.innerText = newWithdrawAmount;

    //clear withdraw field
    withdrawInputField.value = "";

    //update total balance
    const balanceHolder = document.getElementById("balance-holder");
    const previousTotalBalance = parseFloat(balanceHolder.innerText);
    const newTotalBalance = previousTotalBalance - withdrawAmount;
    balanceHolder.innerText = newTotalBalance;
  });
