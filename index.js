// select all drums button
var drums = document.querySelectorAll(".drum");

// add mouse click event
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// add keyboard event
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "a":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
