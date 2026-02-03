const music = document.getElementById("bgMusic");

// Cinematic music fade-in
document.body.addEventListener("click", () => {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.45) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}, { once: true });

function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
  document.querySelector(".open-btn").style.display = "none";

  // After letter moment → fade out → next scene
  setTimeout(() => {
    document.getElementById("letter").classList.add("fade-out");
  }, 4500);

  setTimeout(() => {
    window.location.href = "slideshow.html";
  }, 6500);
}
