document.querySelector(".header__burger").addEventListener(
  "click",
  function (e) {
    document.querySelector(".main__nav").classList.toggle("show");
    document.querySelector(".header__burger").classList.toggle("open");
  },
  false
);
