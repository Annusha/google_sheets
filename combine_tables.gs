function combineTables(folder, depth, iteration) {
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
  
  var counter = 0;
  var n_folds = 20;
  if (depth > 0) {
    while (subfolders.hasNext() && counter < iteration * n_folds) {
      subfolders.next();
      counter += 1;
    }
    while (subfolders.hasNext() && counter < (iteration+1) * n_folds) {
      var subfolder = subfolders.next();
      var subfolder_name = subfolder.getName();
      var data_folder = combineTables(subfolder, depth - 1, iteration);
      if (data_folder != []) {
        joined_data = joined_data.concat(data_folder);
      }
      counter += 1;
    }
    if (!subfolders.hasNext()) {
      PropertiesService.getScriptProperties().setProperty('last', 'true');
    }
  }
  return joined_data;
}
