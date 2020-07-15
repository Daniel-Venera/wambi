let log = console.log;

let buttonPlayer = document.querySelector(".button-player");
let iframe = document.querySelector(".youtube-video");
let closeBtn = document.querySelector(".close-button");
let burgerMenu = document.querySelector(".btn-menu");
let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");
let menuContent = document.querySelector(".menu-content");
let menuItems = document.querySelectorAll(".menu-item");

buttonPlayer.addEventListener("click", function () {
  iframe.style.display = "block";
  document.body.style.overflowY = "hidden";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  iframe.style.display = "none";
  document.body.style.overflowY = "visible";
  closeBtn.style.display = "none";
  iframe.contentWindow.postMessage('{"event":"command","func":"' + "stopVideo" + '","args":""}', "*");
});

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("open");
  if (burgerMenu.classList.contains("open")) {
    menu.style.maxHeight = "100%";
    logo.setAttribute("src", "./images/logo-inverse.png");
    setTimeout(function () {
      menuContent.style.display = "block";
    }, 300);
  } else {
    menu.style.maxHeight = "0";
    logo.setAttribute("src", "./images/logo.png");
    menuContent.style.display = "none";
    closeMenuItems();
  }
});

menuItems.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.nextElementSibling.style.display == "block") {
      e.lastElementChild.style.transform = "rotate(0)";
      e.nextElementSibling.style.display = "none";
    } else {
      closeMenuItems();
      e.lastElementChild.style.transform = "rotate(180deg)";
      e.nextElementSibling.style.display = "block";
    }
  });
});

function closeMenuItems() {
  menuItems.forEach(function (f) {
    if (f.nextElementSibling.style.display == "block") {
      f.lastElementChild.style.transform = "rotate(0)";
      f.nextElementSibling.style.display = "none";
    }
  });
}
