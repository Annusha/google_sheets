function extract_Data() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var code = sheet.getRange(3, 1).getValues();
  var sold = sheet.getRange(5, 1).getValues();
  var date = new Date();
  date = [[Utilities.formatDate(date, 'America/New_York', 'MMMM dd, yyyy HH:mm:ss')]];
  var data = date.concat(code).concat(sold);
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss.getSheetByName('timeline')) {
    ss.insertSheet('timeline');
  }
  
  var out_sheet = ss.getSheetByName('timeline');
  var last_column = out_sheet.getLastColumn() + 1;
  out_sheet.insertColumns(last_column);
  out_sheet.getRange(1, last_column, 3).setValues(data);
  out_sheet.autoResizeColumn(last_column);
}
