// AUDIO SECTION 1
let audioC1 = new Audio("kota-ini.mp3"); // pastikan file ada di folder yang sama
audioC1.loop = true;

const toggleButtons = document.querySelectorAll(".toggleBtn");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const content = document.getElementById(targetId);

    if (!content) return;

    // toggle display
    if (content.style.display === "block") {
      content.style.display = "none";

      // Hentikan audio hanya untuk c1
        if (targetId === "c1") {

audioC1.pause();

audioC1.currentTime = 0;
      }

    } else {
      content.style.display = "block";

      // Play audio hanya untuk c1
      if (targetId === "c1") {
        audioC1.play().catch(err => console.log("Audio gagal play:", err));
        
    }
  });
});
