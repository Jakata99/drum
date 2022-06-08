function button_click() {

  button_animation(this.innerHTML);

  switch (this.innerHTML) {

    case "w":
      return new Audio('sounds/tom-1.mp3').play()
      break;

    case "a":
      return new Audio('sounds/tom-2.mp3').play()
      break;

    case "s":
      return new Audio('sounds/tom-3.mp3').play()
      break;

    case "d":
      return new Audio('sounds/tom-4.mp3').play()
      break;

    case "j":
      return new Audio('sounds/snare.mp3').play()
      break;

    case "k":
      return new Audio('sounds/crash.mp3').play()
      break;

    case "l":
      return new Audio('sounds/kick-bass.mp3').play()
      break;



    default:
      console.log(this.innerHTML);

  }
}

function keyboard_click() {

  button_animation(event.key);

  switch (event.key) {
    case "w":
      return new Audio('sounds/tom-1.mp3').play();
      break;

    case "a":
      return new Audio('sounds/tom-2.mp3').play();
      break;

    case "s":
      return new Audio('sounds/tom-3.mp3').play();
      break;

    case "d":
      return new Audio('sounds/tom-4.mp3').play();
      break;

    case "j":
      return new Audio('sounds/snare.mp3').play();
      break;

    case "k":
      return new Audio('sounds/crash.mp3').play();
      break;

    case "l":
      return new Audio('sounds/kick-bass.mp3').play();
      break;

    default:
      console.log(this.innerHTML);
  }
}

function button_animation(button) {
  var current_button = document.querySelector("." + button);
  current_button.classList.add("pressed");
  setTimeout(function() {
    current_button.classList.remove("pressed");
  }, 100)
}

var buttons_count = document.querySelectorAll(".drum");

for (var i = 0; i < buttons_count.length; i++) {
  buttons_count[i].addEventListener("click", button_click);
}

document.addEventListener("keydown", keyboard_click);
