function combineSheets(id) {
  var doc = SpreadsheetApp.openById(id); 
  var outdata = [];
  
  var sheets = doc.getSheets();
  for (i in sheets){ 
    var sheetname = sheets[i].getSheetName();
    if (sheetname.indexOf('data') != -1){ 
      var v = sheets[i].getRange(5, 1, sheets[i].getLastRow()).getValues();
      var l = 0;
      for (j in v) {
        if (typeof v[j][0] == 'number') {
          l += 1;
        }
      }
      var data = sheets[i].getRange(5, 1, l + 5, 43).getValues();
      if (outdata == []) {
        outdata = data;
      } else {
        outdata = outdata.concat(data);
      }
    }
  }
  return outdata;
}
