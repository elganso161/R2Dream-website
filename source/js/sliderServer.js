let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");

let slide1 = document.querySelector(".slide-1");
let slide2 = document.querySelector(".slide-2");


function on1() {
  slide1.classList.remove("slide-none");
  slide2.classList.add("slide-none");

  btn1.classList.add("btn-active");
  btn2.classList.remove("btn-active");
}

function on2() {
  slide2.classList.remove("slide-none");
  slide1.classList.add("slide-none");

  btn2.classList.add("btn-active");
  btn1.classList.remove("btn-active");
}
