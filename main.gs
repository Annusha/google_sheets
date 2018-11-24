function inference() {
  var thisFileId = SpreadsheetApp.getActive().getId();
  var thisFile = DriveApp.getFileById(thisFileId);
  var folder_it = thisFile.getParents();
  var folder = folder_it.next();
  var folder_name = folder.getName();
  var data = combineTables(folder);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  if (ss.getSheetByName('out') == null) {
    ss.insertSheet('out');
  }
  var outSheet = ss.getSheetByName('out');
  try{
    var range = outSheet.getRange(1, 1, outSheet.getLastRow(), outSheet.getLastColumn());
    range.clear();
  } catch (e) {}
  outSheet.getRange(5,1,data.length,43).setValues(data);
}
