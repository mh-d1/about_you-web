let audioC1 = new Audio("kota-ini.mp3");
audioC1.loop = true;

const toggleButtons = document.querySelectorAll(".toggleBtn");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const content = document.getElementById(targetId);

    if (!content) return;

    // Jika sedang terlihat → sembunyikan
    if (content.style.display === "block") {
      content.style.display = "none";

      // Hentikan audio khusus c1
      if (targetId === "c1") {
        audioC1.pause();
        audioC1.currentTime = 0;
      }

    } 
    // Jika sedang disembunyikan → tampilkan
    else {
      content.style.display = "block";

      // Jalankan audio khusus c1
      if (targetId === "c1") {
        audioC1.play().catch(err => console.log("Audio gagal play:", err));
      }
    }
  });
});
