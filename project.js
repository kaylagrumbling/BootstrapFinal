// function to display an alert when the button is clicked
document.getElementById('btn').onclick = function() {
    alert("Button clicked!");
  };  


  // Displays a pop-up with "Enjoy your visit!" when the page loads
window.onload = function() {
    alert("Enjoy your visit!");
  }

  // Make navbar responsive
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  // Make the image change when the mouse hovers over it
function changeImage() {
    document.getElementById("image").src = "images/image2.jpg";
  }

  // Make the image change back when the mouse moves away
function changeImageBack() {
    document.getElementById("image").src = "images/image1.jpg";
  }   

  // Make form validation
  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  
