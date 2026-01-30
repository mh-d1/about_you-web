// === AUDIO (HARUS dibuat setelah klik, agar HP mengizinkan) ===
let audioStarted = false;
let audio; 

function startAudio() {
  if (!audioStarted) {
    audio = new Audio("opium.mp3.mp3");   // Pastikan nama file sama
    audio.loop = true;               // Ulang otomatis
    audio.play().catch(e => console.log("Audio gagal play:", e));
    audioStarted = true;
  }
}

// === FUNGSI KONTEN ===
function toggleContent(id) {
  const box = document.getElementById(id);

  if (!box) return;

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";

    // PLAY AUDIO hanya untuk tombol pertama (c1)
    if (id === "c1") {
      startAudio();
    }
  }
}
