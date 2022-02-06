const btnConfetti = document.querySelector(".btn-confetti");
btnConfetti.addEventListener("click", function () {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});
