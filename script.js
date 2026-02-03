const stage = document.getElementById("buttonStage");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const moveNoButton = () => {
  const stageRect = stage.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = stageRect.width - buttonRect.width - 16;
  const maxY = stageRect.height - buttonRect.height - 16;

  const nextX = Math.max(8, Math.random() * maxX);
  const nextY = Math.max(8, Math.random() * maxY);

  noBtn.style.left = `${nextX}px`;
  noBtn.style.top = `${nextY}px`;
};

const initNoButton = () => {
  noBtn.style.left = "60%";
  noBtn.style.top = "50%";
  noBtn.style.transform = "translate(-50%, -50%)";
};

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.transform = "none";
  moveNoButton();
});

noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("focus", moveNoButton);

stage.addEventListener("mouseleave", () => {
  noBtn.style.transform = "none";
});

yesBtn.addEventListener("click", () => {
  message.textContent = "Great! Thanks for being honest.";
});

window.addEventListener("load", () => {
  initNoButton();
});

window.addEventListener("resize", () => {
  moveNoButton();
});
