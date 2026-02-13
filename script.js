document.addEventListener('DOMContentLoaded', () => {
    
    // --- ELEMENTS ---
    const questionSection = document.getElementById('question-section');
    const successSection = document.getElementById('success-section');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // --- LOGIC: The "Running" No Button ---
    function moveNoButton() {
        // Calculate random position within the window
        // Restricting to 80% of viewport to keep it accessible but elusive
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
        
        noBtn.style.position = 'fixed'; // Break it out of the layout
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Trigger move on Hover (Desktop) AND Touch (Mobile)
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevents clicking
        moveNoButton();
    });
    noBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Just in case they manage to click
        moveNoButton();
    });

    // --- LOGIC: The "Yes" Button ---
    yesBtn.addEventListener('click', () => {
        // 1. Hide Question Section
        questionSection.style.display = 'none';
        
        // 2. Show Success Section
        successSection.classList.remove('hidden');
        successSection.style.display = 'block';

        // 3. Burst of Hearts
        for(let i=0; i<50; i++) {
            setTimeout(createHeart, i * 30);
        }
    });

    // --- BACKGROUND: Floating Hearts ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        
        const colors = ['#ff6b6b', '#ff4757', '#ff7f50', '#e84393'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const container = document.getElementById('hearts-bg');
        if (container) container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 300);
});

// Extra celebration function for the final button
function celebrateMore() {
    alert("I love you more than words can say! ❤️");
}
        
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

