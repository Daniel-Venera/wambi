let log = console.log;

log("oui");

let buttonPlayer = document.querySelector(".button-player");
let iframe = document.querySelector("iframe");
let closeBtn = document.querySelector(".close-button");

buttonPlayer.addEventListener("click", function () {
  iframe.style.display = "block";
  document.body.style.overflowY = "hidden";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  iframe.style.display = "none";
  document.body.style.overflowY = "visible";
  closeBtn.style.display = "none";
});
