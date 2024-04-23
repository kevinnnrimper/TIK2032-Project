document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('title').toLowerCase().replace('go to ', '');
        document.querySelector(`#${target}`).scrollIntoView({ behavior: 'smooth' });
    });
});


const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(img => {
    img.style.width = '80%';
    img.style.height = 'auto';
});

// Menambahkan fitur carousel
let currentIndex = 0;
function showImage(index) {
    galleryImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

showImage(currentIndex);

// Menambahkan navigasi ke carousel
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    }
});
