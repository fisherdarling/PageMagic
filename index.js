const fs = require("fs");
const { dialog } = require("electron").remote;
const Jimp = require("jimp");

var button = document.getElementById("magic");
button.addEventListener("click", magic);

var input = document.getElementById("fileSelector");
// input.addEventListener("click", getFile);

let img;

// $('#fileName').html(this.files[0].name);

console.log("Script Loading...");

function getFile(event) {
    console.log("Get File");

    dialog.showOpenDialog(function(fileNames) {
        if (fileNames === undefined) return;
        var path = fileNames[0];
        console.log(path);
        Jimp.read(path, function(err, image) {
            img = image;
            input.innerHTML = require("path").basename(path);
            document.getElementById("beforeImage").src = path;
        });
    });
}

function magic() {}

// function getFileData
