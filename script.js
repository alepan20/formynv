// script.js
document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector('.heart-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3s and 5s

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove the heart after 5 seconds
    }

    setInterval(createHeart, 500); // Create a new heart every 500ms
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

     // URL para redirigir cuando se hace clic en el botón Sí
    


    noButton.addEventListener('click', function() {
        const currentScale = getComputedStyle(yesButton).transform.match(/matrix\((.+)\)/);
        let scale = 1;
        if (currentScale && currentScale[1]) {
            scale = parseFloat(currentScale[1].split(', ')[0]);
        }
        yesButton.style.transform = `scale(${scale + 0.1})`;
    });
    
});
function redireccionar() {
    window.location.href = 'teamo.html';
}
