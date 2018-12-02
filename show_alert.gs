function showAlert() {
  var ui = SpreadsheetApp.getUi();

  var result = ui.alert(
     'No more tables to process',
      ui.ButtonSet.OK);

}