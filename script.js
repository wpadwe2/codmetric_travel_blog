document.addEventListener('DOMContentLoaded', function () {
  // Add interactivity for the contact form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
  });

  // JavaScript for Gallery Slideshow
  const slides = document.querySelectorAll('.slide-container'); // Get all the slide containers

  slides.forEach(slide => {
    let currentIndex = 0;
    const images = slide.querySelectorAll('.gallery-slide'); // Get images inside each slide container

    // Initially hide all images and only show the first image
    images.forEach(image => {
      image.style.opacity = 0; // Hide all images initially
    });
    images[currentIndex].style.opacity = 1; // Show the first image

    setInterval(() => {
      // Hide the current image
      images[currentIndex].style.opacity = 0;

      // Increment index and loop back to 0 if needed
      currentIndex = (currentIndex + 1) % images.length;

      // Show the new image
      images[currentIndex].style.opacity = 1;
    }, 5000); // Change image every 3 seconds
  });
});
