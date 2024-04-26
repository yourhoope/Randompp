

// Select the button element with class "btn-pp"
let myPPbutton = document.querySelector(".btn-pp");

// Select the container for displaying the PP
let myPPcontainer = document.querySelector(".show-pp");


// Function to display a random PP
function showRandomPP() {
  // Generate a random PP (assuming you have a function named MyRandomPP)
  let randomPP = mypps.MyRandomPP();
  
  // Display the random PP inside the container
  myPPcontainer.textContent = randomPP;

  // Show the container
  myPPcontainer.classList.add("d-block");
}

// Add an event listener to the button for the "click" event
myPPbutton.addEventListener("click", showRandomPP);
