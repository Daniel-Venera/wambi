let log = console.log;

let buttonPlayer = document.querySelector(".button-player");
let iframe = document.querySelector(".youtube-video");
let closeBtn = document.querySelector(".close-button");
let burgerMenu = document.querySelector(".btn-menu");
let logo = document.querySelector(".logo");
let searchBtn = document.querySelector(".btn-search");
let search = document.querySelector(".search");
let searchContent = document.querySelector(".search-content");
let menu = document.querySelector(".menu");
let menuContent = document.querySelector(".menu-content");
let menuItems = document.querySelectorAll(".menu-item");

searchBtn.addEventListener("click", function () {
  burgerMenu.classList.toggle("btn-menu-search");
  if (searchBtn.classList.contains("fa-search")) {
    search.style.maxHeight = "180px";
    logo.setAttribute("src", "./images/logo-inverse.png");
    searchBtn.style.color = "white";
    searchBtn.classList.remove("fa-search");
    searchBtn.classList.add("fa-times");
    setTimeout(function () {
      searchContent.style.display = "block";
    }, 300);
  } else {
    closeSearch();
  }
});

function closeSearch() {
  search.style.maxHeight = "0";
  logo.setAttribute("src", "./images/logo.png");
  searchBtn.style.color = "var(--purpleDark)";
  searchBtn.classList.remove("fa-times");
  searchBtn.classList.add("fa-search");
  searchContent.style.display = "none";
}

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("open");
  if (burgerMenu.classList.contains("open")) {
    if (!searchBtn.classList.contains("fa-search")) {
      burgerMenu.classList.remove("btn-menu-search");
      closeSearch();
    }
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
