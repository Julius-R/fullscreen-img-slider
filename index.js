// Selects each image and arrows
let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

// Defines counter
let current = 0;

//  Will make all images invisble
function reset() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

//  inits slider
function startSlide() {
  // Calls reset to make all images display none
  reset();
  // Sets the first image to have display block
  sliderImages[0].style.display = 'block';
}

// Show previous slide
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current --;
}

// event listeners

arrowLeft.addEventListener('click', function(){
  if (current == 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Show next

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current ++;
}

arrowRight.addEventListener('click', function(){
  if (current === sliderImages.length -1) {
    current = -1;
  }
  slideRight();
});

startSlide();
