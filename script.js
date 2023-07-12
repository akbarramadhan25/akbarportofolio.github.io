
  // Mendapatkan referensi ke elemen formulir
  var contactForm = document.getElementById('contact-form');

  // Menambahkan event listener untuk menangani saat formulir dikirim
  contactForm.addEventListener('submit', function(event) {
    // Mencegah perilaku default pengiriman formulir
    event.preventDefault();

    // Menampilkan pesan terima kasih
    alert('Terima kasih, pesan Anda telah terkirim ke Akbar');
  });
</
