/* LET US IDENTIFY WHERE THE ELEMENTS WE NEED TO PUT CONTENT */
/* JAVASCRIPT USES THE DOM TO FIGURE OUT WHERE TO COMMUNICATE WITH HTML*/
/* HTML COMMUNICATES BACK USING CLASSES/IDS/ATTRIBUTES AS IDENTIFIERS FOR JAVASCRIPT TO MANIPULATE OR CHANGE*/
/* JAVASCRIPT INTERPRETS ELEMENTS AS OBJECTS WITH PROPERTIES AND VALUES*/
/* WE USE JAVASCRIPT OBJECT SYNTAX TO WORK WITH HTML*/

/* step 1 in interactivity in HTML and Javascript is querying the Document Object Manager to see if what we want to change has an element or what element it is that we need to change*/

let explainer = document.getElementById("explainer");

/* ADDING EVENT LISTENERS ON THE JAVASCRIPT SIDE*/
/* ANATOMY OF THE .ADDEVENTLISTENER

1. WHAT IS THE ELEMENT TRIGGERING THE EVENT  (remember the object)
2. NOW I'M LISTENING FOR SOME ACTION TO BE TAKEN ON THAT OBJECT  (.addEventListener)
3. WHAT IS THE ACTION THAT I'M LISTENING FOR? is it a click, is it a hover? what is it? 
4. WHAT ACTION AM I TAKING*/

/* document.getElementById("myBtn").addEventListener("click", function(){
}); */

// THE BASICS. I encourage you to find which one is which!
document
  .getElementById("clickEvent")
  .addEventListener("click", function (event) {
    console.log(event);
    explainer.innerHTML =
      "I am an event that has been fired from an event listener. The LISTENER is on the Javascript side.";
  });

document
  .getElementById("mouse")
  .addEventListener("mouseover", function (event) {
    console.log(event);
    explainer.innerHTML = `X: ${event.x} and Y: ${event.y}: I AM A MOUSE IN AND A MOUSE OUT`;
  });

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    explainer.innerHTML = `Hello there! You pressed Enter!`;
  } else {
    explainer.innerHTML = `${event.key}`;
  }
});

/* HTML EXAMPLES FOR HOMEWORK :)*/

// drawer

document.getElementById("drawer").addEventListener("click", function (event) {
  document.getElementById("nav").style.left = "0px";
});

document.getElementById("close").addEventListener("click", function (event) {
  let parent = document.getElementById("close").offsetParent.id;
  document.getElementById(parent).style.left = "-600px";
});

// modal

document.getElementById("modal").addEventListener("click", function (event) {
  document.getElementsByClassName("modal")[0].style.display = "block";
});

document
  .getElementById("closeModal")
  .addEventListener("click", function (event) {
    document.getElementsByClassName("modal")[0].style.display = "none";
  });

document
  .getElementById("accordion")
  .addEventListener("click", function (event) {
    // HINT use the to compare the style.display as your comparitive!
    console.log(document.getElementById(event.target.id).value);
    document.getElementById("open").style.display = "block";
    document.getElementById(event.target.id).innerHTML = "Click to Close!";
  });
