// drawer
document.getElementById("drawer").addEventListener("click", function (event) {
  document.getElementById("nav").style.top = "0px";
});

document.getElementById("close").addEventListener("click", function (event) {
  let parent = document.getElementById("close").offsetParent.id;
  document.getElementById(parent).style.top = "-100px";
});

// messages
window.onload = function newMessage() {
    var message = [`Turtley Gnarly, Dude!`,`Shell-o There!`,`Care For A Seanut Butter and Jellyfish?`,`I'm Noc-turtle.`,`Shell Yeah!`,`Turtley Rad.`,`Lemme Take A Shell-fie.`,`Beakaboo!`,`Oh, You Sturtled Me!`];
    var randomMessage = Math.floor(Math.random() * message.length);
    document.getElementById("messages").innerHTML = message[randomMessage];
};

//get inked
document.getElementById("squid").addEventListener("click", function (event) {
  document.getElementsByClassName("squid")[0].style.display = "block";
});

document
  .getElementById("closeSquid")
  .addEventListener("click", function (event) {
    document.getElementsByClassName("squid")[0].style.display = "none";
  });

//wait, you're on turtles!
document
  .getElementById("turtle")
  .addEventListener("click", function (event) {
    // HINT use the to compare the style.display as your comparitive!
    console.log(document.getElementById(event.target.id).value);
    document.getElementById("open").style.display = "block";
  });

//manta rays
document.getElementById("manta").addEventListener("click", function (event) {
  document.getElementsByClassName("manta")[0].style.display = "block";
});

document
  .getElementById("closeManta")
  .addEventListener("click", function (event) {
    document.getElementsByClassName("manta")[0].style.display = "none";
  });

//dolphins
document.getElementById("dolphin").addEventListener("click", function (event) {
  document.getElementsByClassName("dolphin")[0].style.display = "block";
});

document
  .getElementById("closeDolphin")
  .addEventListener("click", function (event) {
    document.getElementsByClassName("dolphin")[0].style.display = "none";
  });
