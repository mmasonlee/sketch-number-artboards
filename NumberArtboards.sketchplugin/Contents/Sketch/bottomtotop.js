var onRun = function(context) {
    // reference the sketch document
    var doc = context.document;
    var selection = context.selection;
    var numArtboard;

    // check if user selected something
    if (selection.count() == 0) {
        doc.showMessage("Please select artboards.");
    }

    // check if every layer selected is an Artboard
    var selectedArtboards = selection.every(function(layer){
        return layer.isMemberOfClass(MSArtboardGroup)
    });

    if (!selectedArtboards) {
        doc.showMessage("Only artboards allowed. Please only select artboards!.");
    }
    
    else {
        numArtboard = selection.count();
        // loop through the selected layers
        for (var i = 0; i < numArtboard; i++) {
            // reference the selection
            var artboard = selection[i];
            var artboardName = artboard.name();
            var newArtboardName = i+1 + "." + artboardName;
            artboard.setName(newArtboardName);
        }
    }

}
