// Floating effect for the heading section
document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.img-fluid1');
    let position = 0;
    let direction = 1;
    const speed = 0.5;  // Adjust the speed of the floating effect
    const amplitude = 20;  // Adjust the amplitude of the floating

    function floatImage() {
        // Calculate the new position
        position += direction * speed;

        // Reverse direction if limits are reached
        if (position > amplitude || position < -amplitude) {
            direction *= -1;
        }

        // Apply transformation to the image
        img.style.transform = `translateY(${position}px)`;

        // Repeat animation
        requestAnimationFrame(floatImage);
    }

    // Start the floating effect
    floatImage();
});



// Floating effect for the delivery service image
const deliveryImage = document.querySelector('.delivery-service img');

function floatImage() {
    deliveryImage.style.transform = 'translateY(-10px)';
    deliveryImage.style.transition = 'transform 2s ease-in-out';
    setTimeout(() => {
        deliveryImage.style.transform = 'translateY(10px)';
    }, 2000);
    setTimeout(() => {
        floatImage(); // Loop the function
    }, 4000);
}

floatImage();

// Rotating effect for the water composition image
document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('#water-composition .center img');
    let angle = 0;
    let direction = 1;
    const speed = 0.3;  // Adjust the speed of the rotation
    const maxAngle = 15;  // Adjust the maximum rotation angle

    function rotateImage() {
        // Calculate the new angle
        angle += direction * speed;

        // Reverse direction if limits are reached
        if (angle > maxAngle || angle < -maxAngle) {
            direction *= -1;
        }

        // Apply transformation to the image
        img.style.transform = `rotate(${angle}deg)`;

        // Repeat animation
        requestAnimationFrame(rotateImage);
    }

    // Start the rotating effect
    rotateImage();
});


// Automatic sliding effect for client testimonials
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();
