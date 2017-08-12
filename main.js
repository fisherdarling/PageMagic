function expand() {
  var image = document.getElementById("fileSelector").files[0];
  var numPages = parseInt(document.getElementById("numPages").value);

//   alert(numPages);

  //Check if page numbers were inputted.
  if (!numPages) {
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

  }
}
