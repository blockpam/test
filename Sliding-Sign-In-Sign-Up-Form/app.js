// This function is triggered when the user submits the sign-up form
function signUp(username, email, password) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([username, email, password]);
}

// This function is triggered when the user submits the sign-in form
function signIn(username, password) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === username && data[i][2] === password) {
      return true; // Sign in successful
    }
  }

  return false; // Sign in failed
}
