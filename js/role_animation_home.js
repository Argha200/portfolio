const texts = ['Full Stack Developer', 'UI UX Designer'];
let index = 0;

function animateText() {
  const textAnimation = document.querySelector('.text-animation');
  textAnimation.textContent = texts[index];
  index = (index + 1) % texts.length;
}

// Immediate animation start
animateText();
setInterval(animateText, 4000);


