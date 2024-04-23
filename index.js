 <script>
    document.addEventListener('DOMContentLoaded', function() {
 
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = button.getAttribute('title').toLowerCase().replace('go to ', '');
                const targetElement = document.querySelector(`#${targetId}`);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

       
        const galleryImages = document.querySelectorAll('#gallery img');
        galleryImages.forEach(img => {
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.maxWidth = '400px';
            img.style.borderRadius = '8px';
            img.style.margin = '5px';
            img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
            img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
        });

   
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(event) {
                const emailInput = form.querySelector('input[type="email"]');
                if (emailInput && !emailInput.value.includes('@')) {
                    alert('Mohon masukkan alamat email yang valid.');
                    event.preventDefault(); 
                }
            });
        });


        const aboutUs = document.querySelector('#aboutus');
        window.addEventListener('scroll', function() {
            const windowBottom = window.scrollY + window.innerHeight;
            if (windowBottom >= aboutUs.offsetTop) {
                aboutUs.style.opacity = '1';
                aboutUs.style.transition = 'opacity 1s ease-in-out';
            }
        });
    });
    </script>
</body>

</html>
