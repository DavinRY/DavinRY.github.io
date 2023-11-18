document.querySelector('a[href="#biodata1"]').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah tautan mengarahkan langsung ke target

    var targetElement = document.querySelector('#biodata1');

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});


function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animated-element');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            element.classList.add('active'); // Menambahkan class 'active' untuk memicu animasi
        }
    });
}

// Tambahkan event listener untuk memantau scroll
window.addEventListener('scroll', handleScrollAnimation);

// Panggil fungsi saat halaman dimuat pertama kali
handleScrollAnimation();


