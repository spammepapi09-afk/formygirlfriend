let currentAudio = null; // track currently playing audio
const notes = document.querySelectorAll(".js-note");

// Sticker click: opens envelope
function sticker() {
  gsap.set(".js-sticker", { width: "20%", left: "-80%" });
  document.body.classList.remove("scissors");
  document.querySelector(".js-sticker").removeEventListener("click", sticker);

  const upPaper = document.querySelector(".js-up-paper");
  upPaper.addEventListener("click", envelop_transition);
  upPaper.classList.add("cursor");
}

// Envelope opening
function envelop_transition() {
  gsap.to(".js-up-paper", { bottom: "1%", duration: 0.25, onComplete: set_up_paper });
  const upPaper = document.querySelector(".js-up-paper");
  upPaper.removeEventListener("click", envelop_transition);
  upPaper.classList.remove("cursor");
}

// Setup after envelope opens
function set_up_paper() {
  var arr = [0, 0, 100, 0, 50, 61];
  gsap.set(".js-up-paper", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath: "polygon(" + arr[0] + "%" + arr[1] + "%," + arr[2] + "%" + arr[3] + "%," + arr[4] + "%" + arr[5] + "%)",
    onComplete: notes_ready
  });
}

// Notes click & drag
function notes_ready() {
  notes.forEach((note, i) => {
    note.addEventListener("click", () => {
      // Stop previous audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Choose audio for first 2 notes
      let audioSrc = null;
      if (i === 0) audioSrc = "audio/1.mp3";
      else if (i === 1) audioSrc = "audio/2.mp3";

      if (audioSrc) {
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
      }

      // Expand note
      notes.forEach(n => n.classList.remove("active"));
      note.classList.add("active");
      gsap.set(note, { height: "70%" });
    });
  });
}

document.querySelector(".js-sticker").addEventListener("click", sticker);
