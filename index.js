const { dialog } = require("electron").remote;

let absPath;

function fileInput() {
    dialog.showOpenDialog(function(fileNames) {
        if (fileNames === undefined) return;

        var fileName = fileNames[0];

        absPath = fileName;

        base = require("path").basename(fileName);

        document.getElementById("fileSelector").innerHTML = base;
    });
}

function expand() {
    nPages = document.getElementById("numPages").value;
    magic(absPath, parseInt(nPages));
}
