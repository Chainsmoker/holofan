var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//the the main conteiner of the modelviewers
const modelConteiner = document.getElementById("model-box");
let wasOver = false;
//
const over = function (event) {
  //es un model viewer?
  //i need improve how detect the scroll and load the "hocver event into"
  if ((event.target.class = "product-3d")) {
    // console.log(event.target);
    let modelViewer = event.target;
    modelViewer.dismissPoster();
    wasOver = !wasOver;
  }
};
const scroll = function (event) {
  wasOver = false;
  console.log("scroll");
};
const poster = function () {
  console.log("Se fuee de la pantalla");
};
modelConteiner.addEventListener("scroll", scroll);
modelConteiner.addEventListener("mouseover", over);
modelConteiner.addEventListener("poster-dismissed", poster);
