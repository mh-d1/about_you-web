// Audio setup
let audioC1 = new Audio("opium.mp3.mp3"); // pastikan file ada di folder yang sama
let c1Open = false;

function toggleC1() {
  const c1 = document.getElementById("c1");

  if (!c1) return;

  if (c1Open) {
    // tutup teks + stop audio
    c1.style.display = "none";
    audioC1.pause();
    audioC1.currentTime = 0; // reset
    c1Open = false;
  } else {
    // buka teks + play audio
    c1.style.display = "block";
    audioC1.play().catch(err => console.log("Audio gagal play:", err));
    c1Open = true;
  }
}
