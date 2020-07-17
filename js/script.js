let log = console.log;

let buttonPlayer = document.querySelector(".button-player");
let iframe = document.querySelector(".youtube-video");
let closeBtn = document.querySelector(".close-button");
let burgerMenu = document.querySelector(".btn-menu");
let logo = document.querySelector(".logo");
let searchBtn = document.querySelector(".btn-search");
let search = document.querySelector(".search");
let searchContent = document.querySelector(".search-content");
let menuResponsive = document.querySelector(".menu-responsive");
let menuContent = document.querySelector(".menu-content");
let menuItems = document.querySelectorAll(".menu-item");
let chatbot = document.querySelector(".chatbot");
let chatbotOpen = document.querySelector(".chatbot-open");
let chatbotCloseBtn = document.querySelector(".chatbot-open-close-btn");
let advantageArrows = document.querySelectorAll(".advantage-arrow");
let advantageSliderContent = document.querySelector(".advantage-slider-content");
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
    menuResponsive.style.maxHeight = "100%";
    logo.setAttribute("src", "./images/logo-inverse.png");
    setTimeout(function () {
      menuContent.style.display = "block";
    }, 300);
  } else {
    menuResponsive.style.maxHeight = "0";
    logo.setAttribute("src", "./images/logo.png");
    menuContent.style.display = "none";
    closeMenuItems();
  }
});

menuItems.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.nextElementSibling.classList.contains("menu-item-body-open")) {
      e.lastElementChild.style.transform = "rotate(0)";
      e.nextElementSibling.classList.remove("menu-item-body-open");
    } else {
      closeMenuItems();
      e.lastElementChild.style.transform = "rotate(180deg)";
      e.nextElementSibling.classList.add("menu-item-body-open");
    }
  });
});

function closeMenuItems() {
  menuItems.forEach(function (f) {
    if (f.nextElementSibling.classList.contains("menu-item-body-open")) {
      f.lastElementChild.style.transform = "rotate(0)";
      f.nextElementSibling.classList.remove("menu-item-body-open");
    }
  });
}

// Video
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

// Advantage Slider
let advantageSliderCount = 1;
advantageArrows.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.classList.contains("button-active")) {
      if (advantageSliderCount == 1) {
        if (e.classList.contains("arrow-right")) {
          advantageSliderContent.style.transform = "translateX(-33%)";
          advantageArrows[0].classList.add("button-active");
        }
      }
      if (advantageSliderCount == 2) {
        if (e.classList.contains("arrow-right")) {
          advantageSliderContent.style.transform = "translateX(-66%)";
          e.classList.remove("button-active");
        } else {
          advantageSliderContent.style.transform = "translateX(0)";
          advantageArrows[0].classList.remove("button-active");
        }
      }
      if (advantageSliderCount == 3) {
        if (e.classList.contains("arrow-left")) {
          advantageSliderContent.style.transform = "translateX(-33%)";
          advantageArrows[1].classList.add("button-active");
        }
      }
      if (e.classList.contains("arrow-right")) {
        advantageSliderCount++;
      } else {
        advantageSliderCount--;
      }
    }
    log(advantageSliderCount);
  });
});

// Chatbot
chatbot.addEventListener("click", function () {
  chatbotOpen.style.display = "block";
});

chatbotCloseBtn.addEventListener("click", function () {
  chatbotOpen.style.display = "none";
});
