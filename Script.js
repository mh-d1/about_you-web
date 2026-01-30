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
if (id === "c1") {
    playAudio();
  }
}

// === AUDIO (otomatis loop) ===
const audio = new Audio("opium.mp3.mp3");
audio.loop = true;
audio.volume = 1.0;

// === FUNGSI PLAY AUDIO ===
function playAudio() {
  audio.play().catch(err => {
    console.log("Audio belum bisa diputar:", err);
  });
}
