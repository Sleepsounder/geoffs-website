function openContact() {
    document.getElementById("myContact").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeContact() {
    document.getElementById("myContact").style.width = "0%";
}


function hover(element) {
    element.setAttribute('src', './images/my-stick-photo.png');
  }
  
  function unhover(element) {
    element.setAttribute('src', './images/stick_me.png');
  }
