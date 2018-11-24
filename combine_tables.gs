function combineTables(folder) {
//  folder = folder || DriveApp.getRootFolder();
  var name = folder.getName();
  var files = folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  
  var joined_data = [];
  while ( files.hasNext() ) {
    var next_file = files.next();
    var filename = next_file.getName();
    if (filename.indexOf('data') != -1) {
      var data = combineSheets(next_file.getId());
      if (joined_data == []) {
        joined_data = data;
      } else {
        joined_data = joined_data.concat(data);
      }
    }
  }
  
  var subfolders = folder.getFolders();
  
  while (subfolders.hasNext()) {
    var data_folder = combineTables(subfolders.next());
    if (data_folder != []) {
      joined_data = joined_data.concat(data_folder);
    }
  }
  return joined_data;
}
