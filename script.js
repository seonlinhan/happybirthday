const startButton = document.getElementById('start-button');
const welcomePage = document.getElementById('welcome-page');
const birthdayPage = document.getElementById('birthday-page');
const levelUpButton = document.getElementById('level-up-button');
const outerCircle = document.getElementById('outer-circle');
const circleContainer = document.getElementById('circle-container');
const circleText = document.getElementById('circle-text');
const circleText2 = document.getElementById('circle-text-2');
const confettiContainer = document.getElementById('confetti-container');
const giftPage = document.getElementById('gift-page');
const giftBox = document.getElementById('gift-box');
const giftContent = document.getElementById('gift-content');

let clickCount = 0;
const maxClicks = 1;

startButton.addEventListener('click', () => {
    welcomePage.classList.add('fade-out');
    setTimeout(() => {
        welcomePage.classList.add('hidden');
        birthdayPage.classList.remove('hidden');
        birthdayPage.classList.add('fade-in');
    }, 800);
});

levelUpButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= maxClicks) {
        const percentage = (clickCount / maxClicks) * 100;
        outerCircle.style.background = `conic-gradient(#90A9FF ${percentage}%, #eaeaea ${percentage}%)`;

        if (clickCount === maxClicks) {
            celebrate();
            circleText.textContent = "Happy Birthday!";
            circleText2.textContent = "Here's your gift!";
            circleContainer.style.cursor = "pointer";

            circleContainer.addEventListener('click', () => {
                birthdayPage.classList.add('fade-out');
                setTimeout(() => {
                    birthdayPage.classList.add('hidden');
                    giftPage.classList.remove('hidden');
                    giftPage.classList.add('fade-in');
                }, 800);
            });
        }
    }
});

function celebrate() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = randomColor();
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 7000);
    }
}

function randomColor() {
    const colors = ['#e57373', '#4caf50', '#4a90e2', '#fdd835', '#ff5722'];
    return colors[Math.floor(Math.random() * colors.length)];
}

$(document).ready(function() {
    $(".candles").click(function() {
        
      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({"top": -90, "opacity": 1}, "fast");
    });
});

let extinguishedCount = 0;

function extinguish(candle) {
  const flame = candle.querySelector('.flame');
  if (flame) {
    flame.style.display = 'none';
    extinguishedCount++;

    const candles = document.querySelectorAll('.candle');
    if (extinguishedCount === candles.length) {
      document.getElementById('card-button').style.display = 'block';
    }
  }
}

function redirectToCardPage() {
  window.location.href = 'card-page.html';
}