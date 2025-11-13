// Audio files for testing
const noteAudioFiles = [
  "audio/1.mp3", // first note
  "audio/2.mp3"  // second note
];

let currentAudio = null;

notes.forEach((note, i) => {
  note.addEventListener("click", function () {
    // AUDIO LOGIC
    const audioSrc = noteAudioFiles[i]; // pick audio for this note
    if (audioSrc) {
      // Stop previous audio if playing
      if (currentAudio && currentAudio.src !== audioSrc) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Play this audio only if not already playing
      if (!currentAudio || currentAudio.src !== audioSrc || currentAudio.paused) {
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
      }
    }

    // EXISTING NOTE EXPAND LOGIC
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      gsap.set(this, { height: "30%", clearProps: "all" });
    } else {
      notes.forEach((n) => { n.classList.remove("active"); gsap.set(n, { height: "30%", clearProps: "all" }); });
      this.classList.add("active");
      gsap.set(this, { height: 70 + 20 * i + "%" });
    }
  });
});
