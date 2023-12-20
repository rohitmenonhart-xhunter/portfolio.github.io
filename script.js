document.addEventListener('DOMContentLoaded', function () {
    const emojisContainer = document.querySelector('.emojis-container');

    function createFallingImage() {
        const fallingImage = document.createElement('img');
        fallingImage.src = 'snow-bg.png'; // Change this to the path of your image
        fallingImage.className = 'falling-image';
        fallingImage.style.left = Math.random() * window.innerWidth + 'px';

        emojisContainer.appendChild(fallingImage);

        anime({
            targets: fallingImage,
            translateY: window.innerHeight + 'px',
            duration: 4000,
            easing: 'easeInQuad',
            complete: function () {
                emojisContainer.removeChild(fallingImage);
            },
        });
    }

    setInterval(createFallingImage, 200); // Adjust the interval as needed
});

// Smooth scrolling to sections on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade in projects on scroll
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    function fadeInProjects() {
        projects.forEach(project => {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (projectPosition < screenPosition) {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', fadeInProjects);
});
