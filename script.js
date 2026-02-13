document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SLIDESHOW LOGIC (Section 1) ---
    const slideImages = document.querySelectorAll('.photo-frame img');
    let currentSlide = 0;

    function nextSlide() {
        slideImages[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideImages.length;
        slideImages[currentSlide].classList.add('active');
    }
    // Change photo every 2.5 seconds
    setInterval(nextSlide, 2500);


    // --- 2. SCREEN NAVIGATION ---
    const sectionIntro = document.getElementById('section-intro');
    const sectionProposal = document.getElementById('section-proposal');
    const sectionSuccess = document.getElementById('section-success');

    const exploreBtn = document.getElementById('exploreBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Step 1: Click "Explore Me" -> Show Proposal
    exploreBtn.addEventListener('click', () => {
        sectionIntro.style.display = 'none';
        sectionProposal.classList.remove('hidden');
    });

    // Step 2: Click "No" -> Vanish No, Big Yes
    noBtn.addEventListener('click', () => {
        // Hide the No button
        noBtn.style.display = 'none';
        
        // Make Yes button grow and pulse
        yesBtn.style.transform = 'scale(1.3)';
        yesBtn.style.background = 'linear-gradient(90deg, #ff4757, #ff6b6b)';
        yesBtn.innerText = "YES! (Obviously) ❤️";
    });

    // Step 3: Click "Yes" -> Show Success
    yesBtn.addEventListener('click', () => {
        sectionProposal.style.display = 'none';
        sectionSuccess.classList.remove('hidden');
        
        // Trigger heart explosion
        celebrate();
    });


    // --- 3. FLOATING HEARTS LOGIC ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random Position & Speed
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        
        // Random Colors
        const colors = ['#ff6b6b', '#ff4757', '#ff7f50', '#e84393'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const container = document.getElementById('hearts-bg');
        if (container) container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }

    // Continuous background hearts
    setInterval(createHeart, 400);

    // Explosion of hearts
    function celebrate() {
        for(let i=0; i<50; i++) {
            setTimeout(createHeart, i * 40);
        }
    }
});
