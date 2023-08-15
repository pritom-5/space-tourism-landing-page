const hamburger_icon_div = document.querySelector("#hamburger_icon");
const hamburger_icon_img_div = document.querySelector("#hamburger_icon_img");
const nav = document.querySelector("nav");

hamburger_icon_div.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList[0] != "open") {
    hamburger_icon_img_div.setAttribute(
      "src",
      "./assets/shared/icon-hamburger.svg"
    );
  } else {
    hamburger_icon_img_div.setAttribute(
      "src",
      "./assets/shared/icon-close.svg"
    );
  }
});
