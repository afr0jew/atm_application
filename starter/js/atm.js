//Begin with the document ready function
$(document).ready(function () {
  $('#depositChecking').on('click', depositChecking);
  $('#withdrawChecking').on('click', withdrawChecking);
  $('#depositSavings').on('click', depositSavings);
  $('#withdrawSavings').on('click', withdrawSavings);
  $('#checkingBalance').addClass('zero');
  $('#savingsBalance').addClass('zero');

})
  //amountChecking
  //checkingBalanceNumber
    //Checking account deposit function
    function depositChecking(e) {
      e.preventDefault();
      var checkingBalance = parseInt($('#checkingBalanceNumber').text())
      var checkingBoxNum = parseInt($('#amountChecking').val())
      var newTotal = checkingBalance + checkingBoxNum;
      $('#checkingBalanceNumber').text(newTotal)
      if ($('#checkingBalanceNumber').text() !== '0') {
        $('#checkingBalance').removeClass('zero');
      }
    }
      //On click of the depositChecking button

        //Get value from the amountChecking input field

        //Take that value and add it to the existing value in the checkingBalance div

    //Checking account withdrawl funtion
      function withdrawChecking(e) {
        e.preventDefault();
        var checkingBalance = parseInt($('#checkingBalanceNumber').text());
        var checkingBoxNum = parseInt($('#amountChecking').val())
        if (checkingBalance >= checkingBoxNum) {
          var newTotal = checkingBalance - checkingBoxNum;
          $('#checkingBalanceNumber').text(newTotal)
        } else {
          alert('Insufficient Funds')
        }
        if ($('#checkingBalanceNumber').text() === '0') {
          $('#checkingBalance').addClass('zero');
        }
      }
      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function
    function depositSavings(e) {
      e.preventDefault();
      var savingsBalance = parseInt($('#savingsBalanceNumber').text())
      var savingsBoxNum = parseInt($('#amountSavings').val())
      var newTotal = savingsBalance + savingsBoxNum;
      $('#savingsBalanceNumber').text(newTotal)
      if ($('#savingsBalanceNumber').text() !== '0') {
        $('#savingsBalance').removeClass('zero');
      }
    }

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion
    function withdrawSavings(e) {
      e.preventDefault();
      var savingsBalance = parseInt($('#savingsBalanceNumber').text());
      var savingsBoxNum = parseInt($('#amountSavings').val())
      if (savingsBalance >= savingsBoxNum) {
        var newTotal = savingsBalance - savingsBoxNum;
        $('#savingsBalanceNumber').text(newTotal)
      } else {
        alert('Insufficient Funds')
      }
      if ($('#savingsBalanceNumber').text() === '0') {
        $('#savingsBalance').addClass('zero');
      }
    }
      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
