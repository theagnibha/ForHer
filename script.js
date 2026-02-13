document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Slideshow Logic ---
    const images = document.querySelectorAll('.photo-frame img');
    let currentImgIndex = 0;

    function cycleImages() {
        if (images.length > 0) {
            // Remove active class from current image
            images[currentImgIndex].classList.remove('active');
            
            // Calculate next image index
            currentImgIndex = (currentImgIndex + 1) % images.length;
            
            // Add active class to next image
            images[currentImgIndex].classList.add('active');
        }
    }

    // Change image every 3 seconds
    setInterval(cycleImages, 3000);

    // --- 2. Floating Hearts Logic ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + "vw";
        
        // Random animation speed
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        
        // Random colors
        const colors = ['#ff6b6b', '#ff4757', '#ff7f50', '#e84393'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const container = document.getElementById('hearts-bg');
        if (container) {
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    // Create a new heart every 300ms
    setInterval(createHeart, 300);

    // --- 3. Button Interaction ---
    const btn = document.getElementById('celebrateBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            // Burst of hearts
            for(let i=0; i<30; i++) {
                setTimeout(createHeart, i * 50);
            }
            alert("I love you, Ishani! ❤️");
        });
    }
});

