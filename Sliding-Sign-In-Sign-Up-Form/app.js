function checkLogin(username, password) {
  var url = 'https://docs.google.com/spreadsheets/d/1MsX9XVHIWgLZ9f7nLYZ0FGMEhcJHBuQunkqW5GSCXUI/edit#gid=0';
  var ss = SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var data = webAppSheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == username && data[i][1] == password) {
      return 'TRUE';
    }
  }

  return 'FALSE';
}
