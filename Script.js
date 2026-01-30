function toggleContent(id) {
  const box = document.getElementById(id);

  // Jika elemen tidak ditemukan (ID salah)
  if (!box) {
    console.error("ID tidak ditemukan:", id);
    return;
  }

  // Jika sudah muncul → sembunyikan
  if (box.style.display === "block") {
    box.style.display = "none";
  } 
  // Jika masih sembunyi → tampilkan
  else {
    box.style.display = "block";
  }
}
// === AUDIO SETUP ===
let audio = null;

function playAudio() {
  if (!audio) {
    audio = new Audio("opium.mp3.mp3"); // pastikan nama file benar!
    audio.loop = true;             // otomatis ulang
  }

  // play hanya setelah klik pertama
  audio.play().catch(err => console.log("Audio gagal play:", err));
}

// === FUNGSI BUKA/TUTUP KONTEN ===
function toggleContent(id) {
  const box = document.getElementById(id);

  if (!box) {
    console.error("ID tidak ditemukan:", id);
    return;
  }

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";

    // PLAY AUDIO HANYA UNTUK BUTTON PERTAMA (c1)
    if (id === "c1") {
      playAudio();
    }
  }
}
