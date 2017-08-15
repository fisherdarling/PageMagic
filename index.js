var button = document.getElementById("magic");
button.addEventListener("click", magic);

var picker = document.getElementById("fileSelector");
function fileChange(event) {
    var input = picker.files[0];
    console.log("Getting Data");
    var reader = new FileReader();
    reader.onload = function() {
        var dataURL = reader.result;
        console.log("Executing Load");

        var output = document.getElementById("beforeImage");
        output.src = dataURL;
    };
    reader.readAsDataURL(input);
}

function getData() {
    var file = document.getElementById("fileSelector").files[0];
    var nPages = parseInt(document.getElementById("numPages").value);

    // console.log(file, nPages);

    if (!file || !nPages) {
        alert("Please make sure all inputs are filled and have proper data.");
        console.log("Invalid Data");
        return null;
    }

    // alert(!file);
    // alert(file);
    // alert(!nPages);
    // alert(nPages);

    console.log("Returning Files");

    // console.log(file, nPages);

    return { file, nPages };
}

function magic() {
    var { file, nPages } = getData();
    console.log(file, nPages);
    if (!file || !nPages) return;

    console.log("Creating Image");

    var img = document.getElementById("beforeImage");

    if (img.width < nPages) {
        alert(
            "Image width cannot be less than the number of pages. The maximum number of pages for this image is: " +
                img.width
        );
        return;
    }

    const width = img.width;
    const height = img.height;

    var preCanvas = document.createElement("canvas");
    preCanvas.width = width;
    preCanvas.height = height;

    var preContext = preCanvas.getContext("2d");
    preContext.drawImage(img, 0, 0);

    //Calculate slice width:
    //Assume pages > than width.
    // var sW = width / nPages;

    console.log(width, height /*sW*/);
}
