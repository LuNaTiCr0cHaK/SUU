let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;  // Reset to 0 when it reaches the end
  }

  if (dots.length > 0) {
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    dots[slideIndex].className += " active";
  }

  slides[slideIndex].style.display = "block";

  slideIndex++;

  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
