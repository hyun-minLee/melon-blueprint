function openModal() {
  var modal = document.querySelector(".modal");
  var modalImage = document.querySelector(".modalImage");
  modal.style.display = "block";
  modalImage.style.display="block";
  
}

var modal = document.querySelector(".modal");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("나와라");
  }
}