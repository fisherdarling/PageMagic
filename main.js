function expand() {
  var numPages = parseInt(document.getElementById("numPages").value);
  
  var imgFile = document.getElementById("fileSelector").files[0];

  var img = document.getElementById("beforeImage");
  
  img.title = imgFile.name;
  img.src = URL.createObjectURL(imgFile);

  alert(img.title + ", " + img.src);


  // var reader = new FileReader();

  // reader.onload = function (event) {
  //   img.src = event.target.result;
  // };

  // img.title = file.name;
  // reader.readAsDataURL(file);

  // var canvas =



  //   alert(numPages);

  //Check if page numbers were inputted.
  /*if (!numPages) {
      alert("Pages:")
      //data-dismiss='alert'
    $("#mainContainer").append(
      `<div class='alert alert-warning fade in'>
        <strong>Make sure to input the number of pages!</strong>
        </div>`
    );
  }

  //Check if file exists.
  if (typeof image == "undefined") {

  }*/





}

function createWarningAlert(text) {

}
