document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            
            // Cerrar los demás acordeones
            if (this.classList.contains('active')) {
                accordionButtons.forEach(otherButton => {
                    if (otherButton !== this && otherButton.classList.contains('active')) {
                        otherButton.classList.remove('active');
                        otherButton.nextElementSibling.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Abrir el primer acordeón por defecto
    if (accordionButtons.length > 0) {
        accordionButtons[0].classList.add('active');
        accordionButtons[0].nextElementSibling.classList.add('active');
    }
});