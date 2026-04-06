const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing effect

const texts = ["C Programming", "HTML / CSS", "JavaScript", "Python", "MERN STACK", "Web Development", "Data Structures & Algorithms"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
    return;
  }

  setTimeout(type, 120);
}

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById("typing").textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 500);
    return;
  }

  setTimeout(erase, 80);
}

type();