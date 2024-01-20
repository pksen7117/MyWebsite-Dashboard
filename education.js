const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
let currentImageIndex = 0;

function showImage(index) {
  const imageContainer = document.querySelector('.image-container img');
  imageContainer.src = images[index];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Show the first image when the page loads
showImage(currentImageIndex);
