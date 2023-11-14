// const slider = document.querySelector(".slider");

// const leftArrow = document.querySelector(".left");
// const rightArrow = document.querySelector(".right");
// const indicatorParents = document.querySelector(".controls ul");
// var sectionIndex = 0;

// document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
//   indicator.addEventListener("click", function () {
//     sectionIndex = ind;
//     document.querySelector(".controls .selected").classList.remove("selected");
//     indicator.classList.add("selected");
//     slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
//   });
// });

// leftArrow.addEventListener("click", function () {
//   sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
//   document.querySelector(".controls .selected").classList.remove("selected");
//   indicatorParents.children[sectionIndex].classList.add("selected");
//   slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
// });

// rightArrow.addEventListener("click", function () {
//   sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
//   document.querySelector(".controls .selected").classList.remove("selected");
//   indicatorParents.children[sectionIndex].classList.add("selected");
//   slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
// });

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    updateSlider();
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  updateSlider();
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  updateSlider();
});
// განმეორებითი ფუნქციონალი გატანილია ერთ ფუნქციაში და გამოძახებული
// იმ ადგილებზე სადაც იყო საჭირო
function updateSlider() {
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}

const interval = setInterval(function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  updateSlider();
}, 1000);

// daklikebis shemdeg intervali ishleba

// leftArrow.addEventListener("click", function () {
//   clearInterval(interval);
// });

// rightArrow.addEventListener("click", function () {
//   clearInterval(interval);
// });
