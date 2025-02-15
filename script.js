document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    // Fade-In-Effekte beim Scrollen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scrollen zu Features
    const featureLinks = document.querySelectorAll('.key-features a');
    featureLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Verhindere das Standard-Scrollverhalten

            const targetId = link.getAttribute('href'); // Hole das Ziel-Feature (z. B. #investment)
            const targetElement = document.querySelector(targetId); // Finde das Ziel-Element
            const featuresSection = document.querySelector('#features'); // Finde die Features-Sektion

            if (targetElement && featuresSection) {
                // Scrollen zur Features-Sektion
                featuresSection.scrollIntoView({ behavior: 'smooth' });

                // Füge eine Animation hinzu (optional)
                targetElement.style.animation = 'highlight 1.5s ease-in-out';
                targetElement.addEventListener('animationend', () => {
                    targetElement.style.animation = ''; // Entferne die Animation nach dem Ende
                });
            } else {
                console.error(`Ziel-Element nicht gefunden: ${targetId}`); // Fehlermeldung in der Konsole
            }

            // Verhindere, dass die URL geändert wird
            history.replaceState(null, null, ' '); // Entfernt den Hash aus der URL
        });
    });
});