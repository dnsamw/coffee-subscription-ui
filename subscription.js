// const prev = document.getElementById("prev");
// const next = document.getElementById("next");

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const progress = document.getElementById("progress");
  const circles = document.querySelectorAll(".circle");

  let currentSlideIndex = 0;
  let currentActive = 1;

  function update() {
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    slides.forEach((slide, idx) => {
      if (idx < currentActive) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  console.log(progress.style.width, actives.length);
  console.log((actives.length - 1) / (circles.length - 1));

  // disables prev when you can't go back further, disables next when there are no more steps
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

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
    currentActive--;

    // prevents currentActive from going below 1
    if (currentActive < 1) {
      currentActive = 1;
    }

    update();
  });

  next.addEventListener("click", () => {
    navigateSlide(1);
    currentActive++;

    if (currentActive > circles.length) {
      currentActive = circles.length;
    }

    update();
  });

  // Show the initial slide
  showSlide(currentSlideIndex);
});
