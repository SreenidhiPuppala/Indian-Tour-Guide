document.addEventListener('DOMContentLoaded', () => {
    // Initialize sliders on page load
    initializeSliders();
});

function initializeSliders() {
    // Select all sliders on the page
    document.querySelectorAll('.place-slider').forEach(slider => {
        let templeImages = slider.querySelector('.place-images');
        let prevButton = slider.querySelector('.prev');
        let nextButton = slider.querySelector('.next');

        // Debugging: Ensure elements are being selected
        console.log('Initializing slider:', slider);
        console.log('Prev Button:', prevButton);
        console.log('Next Button:', nextButton);

        if (!templeImages || !prevButton || !nextButton) {
            console.error('Required elements missing in slider:', slider);
            return;
        }

        let currentIndex = 0; // Start from the first image
        let images = Array.from(templeImages.querySelectorAll('.place-item')); // Get all images within this slider

        if (images.length === 0) {
            console.error('No images found in slider:', slider);
            return;
        }

        let imageWidth = images[0].offsetWidth + 20; // Image width + margin

        // Function to update the sliding position
        function updateSliderPosition() {
            templeImages.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
            templeImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }

        // Handle next button click
        nextButton.addEventListener('click', function () {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateSliderPosition();
            }

            // Disable next button if at the last image
            if (currentIndex === images.length - 1) {
                nextButton.disabled = true;
            }

            // Enable prev button when moving forward
            prevButton.disabled = false;
        });

        // Handle previous button click
        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }

            // Disable prev button if at the first image
            if (currentIndex === 0) {
                prevButton.disabled = true;
            }

            // Enable next button when moving backward
            nextButton.disabled = false;
        });

        // Adjust the slider on window resize
        window.addEventListener('resize', function () {
            imageWidth = images[0].offsetWidth + 20; // Recalculate image width
            updateSliderPosition(); // Adjust the position
        });

        // Initialize button states
        prevButton.disabled = true; // Disable prev button initially
        nextButton.disabled = images.length <= 1; // Disable next button if there's only one image
    });
}

