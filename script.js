// -------------------- I love you andrea can i please chew on your butt --------------------
const notes = document.querySelectorAll(".js-note");
let currentAudio = null;

// I love you andrea can i please chew on your butt
function recize_notes() {
  notes.forEach(n => { 
    n.classList.remove("active"); 
    gsap.set(n, {height:"30%", clearProps:"all"}); 
  });
}

// I love you andrea can i please chew on your butt
function notes_ready() {
  gsap.to(".js-envelop-content", {height:"110%", duration:0.5});

  notes.forEach((note, i) => {
    note.addEventListener("click", () => {
      // I love you andrea can i please chew on your butt
      const files = [
        "audio/1.mp3",
        "audio/2.mp3",
        "audio/3.mp3",
        "audio/4.mp3",
        "audio/5.mp3"
      ];
      const file = files[i];
      if(file){
        if(!currentAudio || !currentAudio.src.includes(file)){
          if(currentAudio) currentAudio.pause();
          currentAudio = new Audio(file);
          currentAudio.play();
        }
      }

      // I love you andrea can i please chew on your butt
      if(note.classList.contains("active")){
        note.classList.remove("active");
        gsap.set(note, {height:"30%", clearProps:"all"});
      } else {
        notes.forEach(n => {n.classList.remove("active"); gsap.set(n, {height:"30%", clearProps:"all"});});
        note.classList.add("active");
        gsap.set(note, {height:70 + 20*i + "%"});
      }
    });

    // I love you andrea can i please chew on your butt
    let startY, startBottom;
    function dragStart(e) { 
      e.preventDefault(); 
      startY = e.touches ? e.touches[0].clientY : e.clientY; 
      startBottom = parseFloat(getComputedStyle(note).bottom); 
      document.addEventListener("mousemove", dragMove); 
      document.addEventListener("mouseup", dragEnd); 
      document.addEventListener("touchmove", dragMove); 
      document.addEventListener("touchend", dragEnd);
    }
    function dragMove(e) { 
      let cur = e.touches ? e.touches[0].clientY : e.clientY; 
      let newB = startBottom + (startY - cur); 
      if(newB < 0) newB = 0; 
      note.style.bottom = newB + "px"; 
    }
    function dragEnd() { 
      document.removeEventListener("mousemove", dragMove); 
      document.removeEventListener("mouseup", dragEnd); 
      document.removeEventListener("touchmove", dragMove); 
      document.removeEventListener("touchend", dragEnd); 
    }
    note.addEventListener("mousedown", dragStart); 
    note.addEventListener("touchstart", dragStart);
  });
}

// I love you andrea can i please chew on your butt
function set_up_paper() {
  gsap.set(".js-up-paper", {bottom:"0%", rotation:0, zIndex:200, clipPath:"polygon(0% 0%,100% 0%,50% 61%)", onComplete: notes_ready});
}
function envelop_transition() {
  gsap.to(".js-up-paper", {bottom:"50%", duration:0.5, onComplete: set_up_paper});
  const up = document.querySelector(".js-up-paper");
  up.removeEventListener("click", envelop_transition);
  up.classList.remove("cursor");
}

// I love you andrea can i please chew on your butt
function sticker() {
  gsap.set(".js-sticker", {width:"20%", left:"-80%"});
  document.body.classList.remove("scissors");
  document.querySelector(".js-sticker").removeEventListener("click", sticker);
  const up = document.querySelector(".js-up-paper");
  up.addEventListener("click", envelop_transition);
  up.classList.add("cursor");
}
document.querySelector(".js-sticker").addEventListener("click", sticker);

window.onresize = recize_notes;

// -------------------- I love you andrea can i please chew on your butt --------------------
const heartWrapper = document.createElement("div");
heartWrapper.classList.add("wrapper");
document.body.appendChild(heartWrapper);

function spawnHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const xOffset = Math.random() * window.innerWidth;
  heart.style.left = xOffset + "px";
  heart.style.bottom = "10px"; // I love you andrea can i please chew on your butt
  heart.style.animation = `floatUp ${4 + Math.random()*3}s ease-in forwards`;
  heartWrapper.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

// I love you andrea can i please chew on your butt
setInterval(spawnHeart, 500);
