// ===== Terminal typing effect =====
const lines = [
  "$ whoami",
  "Sahil Sanjay Shetye",
  "",
  "$ cat role.txt",
  "Python Developer — backend & APIs",
  "",
  "$ status --check",
  "Open to fresher / internship roles ✓"
];

const terminalEl = document.getElementById("terminalText");
let lineIndex = 0;
let charIndex = 0;
let currentText = "";

function typeNextChar() {
  if (lineIndex >= lines.length) {
    return; // typing complete
  }
  const line = lines[lineIndex];

  if (charIndex < line.length) {
    currentText += line[charIndex];
    terminalEl.textContent = currentText;
    charIndex++;
    setTimeout(typeNextChar, 28);
  } else {
    currentText += "\n";
    terminalEl.textContent = currentText;
    lineIndex++;
    charIndex = 0;
    setTimeout(typeNextChar, 280);
  }
}

// Respect users who prefer reduced motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  terminalEl.textContent = lines.join("\n");
} else {
  typeNextChar();
}

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu after clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();