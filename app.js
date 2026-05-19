let menu = document.getElementById("menu");

let hamburger = document.getElementById("hamburger");

function toggle() {
  if (menu.classList.contains("show")) menu.classList.remove("show");
  else {
    menu.classList.add("show");
  }
}

hamburger.addEventListener("click", toggle);
