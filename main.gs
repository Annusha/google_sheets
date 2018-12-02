function nextIter() {
  var iteration = PropertiesService.getScriptProperties().getProperty('iteration');
  iteration = Number(iteration);
  inference(iteration);
  PropertiesService.getScriptProperties().setProperty('iteration', iteration + 1);
}


function refresh() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss.getSheetByName('out')) {
    var outSheet = ss.getSheetByName('out');
    try{
      var range = outSheet.getRange(1, 1, outSheet.getLastRow(), outSheet.getLastColumn());
      range.clear();
    } catch (e) {}
  }
  PropertiesService.getScriptProperties().setProperty('iteration', 0);
}