function showAlert() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.alert(
     'No more tables to process',
      ui.ButtonSet.OK);

//  // Process the user's response.
//  if (result == ui.Button.YES) {
//    // User clicked "Yes".
//    ui.alert('Confirmation received.');
//  } else {
//    // User clicked "No" or X in the title bar.
//    ui.alert('Permission denied.');
//  }
}