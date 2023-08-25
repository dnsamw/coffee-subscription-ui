// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const progress = document.getElementById("progress");
// const circles = document.querySelectorAll(".circle");
// const slides = document.querySelectorAll(".slide");

// console.log(slides);

// let currentActive = 1;

// next.addEventListener("click", () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }

//   update();
// });

// prev.addEventListener("click", () => {
//   currentActive--;

//   // prevents currentActive from going below 1
//   if (currentActive < 1) {
//     currentActive = 1;
//   }

//   update();
// });

// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   slides.forEach((slide, idx) => {
//     if (idx < currentActive) {
//       slide.classList.add("active");
//     } else {
//       slide.classList.remove("active");
//     }
//   });
// }

// const actives = document.querySelectorAll(".active");

// progress.style.width =
//   ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

// disables prev when you can't go back further, disables next when there are no more steps
//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let currentSlideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function navigateSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }

    showSlide(currentSlideIndex);
  }

  prev.addEventListener("click", () => {
    navigateSlide(-1);
  });

  next.addEventListener("click", () => {
    navigateSlide(1);
  });

  // Show the initial slide
  showSlide(currentSlideIndex);
});
