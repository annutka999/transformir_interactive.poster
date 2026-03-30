const tvElements = document.querySelectorAll('.tv');

const tvImages = {
  1: [
    'images/tv-1.1.svg',
    'images/tv-1.2.svg',
    'images/tv-1.3.svg',
    'images/tv-1.4.svg'
  ],
  2: [
    'images/tv-2.1.svg',
    'images/tv-2.2.svg',
    'images/tv-2.3.svg',
    'images/tv-2.4.svg'
  ],
  3: [
    'images/tv-3.1.svg',
    'images/tv-3.2.svg',
    'images/tv-3.3.svg',
    'images/tv-3.4.svg'
  ],
  4: [
    'images/tv-4.1.svg',
    'images/tv-4.2.svg',
    'images/tv-4.3.svg',
    'images/tv-4.4.svg'
  ]
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

tvElements.forEach((tv) => {
  tv.addEventListener('click', () => {
    const tvId = tv.dataset.tv;
    const images = tvImages[tvId];
    const randomIndex = getRandomInt(0, images.length - 1);
    const randomImage = images[randomIndex];

    tv.querySelector('.tv-image').src = randomImage;
  });
});

const numberCircles = document.querySelectorAll('.number-circle');

numberCircles.forEach((circle) => {
  circle.addEventListener('click', function () {
    const currentColor = window.getComputedStyle(this).backgroundColor;
    currentColor === 'rgb(39, 255, 183)'
      ? (this.style.backgroundColor = '#cf00cf')
      : (this.style.backgroundColor = '#27FFB7');
  });
});

document.querySelectorAll('.square').forEach((square) => {
  square.addEventListener('click', function () {
    if (this.style.backgroundColor) {
      this.style.backgroundColor = '';
    } else {
      this.style.backgroundColor = 'transparent';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.sudoku-container');
  const items = document.querySelectorAll('.drag-item');

  items.forEach((item, index) => {
    const randomX = Math.random() * (container.clientWidth - 50);
    const randomY = Math.random() * (container.clientHeight - 50);
    item.style.left = randomX + 'px';
    item.style.top = randomY + 'px';

    initDrag(item);
  });

  function initDrag(el) {
    let isDragging = false;
    let offsetX, offsetY;

    el.addEventListener('mousedown', (e) => {
      isDragging = true;

      const rect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      el.style.zIndex = 1000;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const containerRect = container.getBoundingClientRect();

      let x = e.clientX - containerRect.left - offsetX;
      let y = e.clientY - containerRect.top - offsetY;

      const maxX = containerRect.width - el.offsetWidth;
      const maxY = containerRect.height - el.offsetHeight;

      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x > maxX) x = maxX;
      if (y > maxY) y = maxY;

      el.style.left = x + 'px';
      el.style.top = y + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        el.style.zIndex = 10;
      }
    });

    el.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
      isDragging = true;
    });

    document.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const containerRect = container.getBoundingClientRect();
      let x = touch.clientX - containerRect.left - offsetX;
      let y = touch.clientY - containerRect.top - offsetY;

      const maxX = container.clientWidth - el.offsetWidth;
      const maxY = container.clientHeight - el.offsetHeight;
      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      el.style.left = x + 'px';
      el.style.top = y + 'px';
    });

    document.addEventListener('touchend', () => {
      isDragging = false;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const starSliderContainer = document.querySelector('.star-slider');
  if (!starSliderContainer) {
    console.error(
      "Container '.star-slider' not found. Check your HTML structure."
    );
    return;
  }
  const slides = starSliderContainer.querySelectorAll('.star-slide');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  console.log('-----------------------------------------');
  console.log('JS Loaded.');
  console.log('Total slides found for this slider:', slides.length);
  if (slides.length === 0) {
    console.error(
      "No slides with class 'star-slide' found inside '.star-slider'. Slider will not function."
    );
    return;
  }
  console.log('-----------------------------------------');

  function updateSlides(newIndex) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    currentIndex = ((newIndex % slides.length) + slides.length) % slides.length;

    console.log('Attempting to show slide index:', currentIndex);

    if (slides[currentIndex]) {
      slides[currentIndex].classList.add('active');

      console.log('Successfully activated slide:', slides[currentIndex].alt);
    } else {
      console.error(
        'Error: Could not activate slide at index',
        currentIndex,
        ' - element is undefined.'
      );
    }
  }

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    updateSlides(currentIndex + 1);
  });

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    updateSlides(currentIndex - 1);
  });

  updateSlides(0);
});

function initImageDownload() {
  const buttons = document.querySelectorAll('.ticket-reality-btn_icon-wrap');

  if (buttons.length === 0) return;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = 'images/CERTIFICATE.svg';
    a.download = 'CERTIFICATE.svg';
    a.rel = 'noopener';

    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  buttons.forEach((button) => {
    button.addEventListener('click', handleDownload);
  });
}

document.addEventListener('DOMContentLoaded', initImageDownload);

document.addEventListener('DOMContentLoaded', function () {
  const colorSamples = document.querySelectorAll('.color-sample');
  const stars = document.querySelectorAll('.star-slide');

  const starImages = {
    pink: [
      'star-1.svg',
      'star-2.svg',
      'star-3.svg',
      'star-4.svg',
      'star-5.svg'
    ],
    green: [
      'star-1-green.svg',
      'star-2-green.svg',
      'star-3-green.svg',
      'star-4-green.svg',
      'star-5-green.svg'
    ],
    blue: [
      'star-1-blue.svg',
      'star-2-blue.svg',
      'star-3-blue.svg',
      'star-4-blue.svg',
      'star-5-blue.svg'
    ],

    purple: [
      'star-1-purple.svg',
      'star-2-purple.svg',
      'star-3-purple.svg',
      'star-4-purple.svg',
      'star-5-purple.svg'
    ]
  };

  colorSamples.forEach((sample) => {
    sample.addEventListener('click', function () {
      const color = sample.dataset.color;

      stars.forEach((star, index) => {
        star.src = `images/${starImages[color][index]}`;
      });
    });
  });
});

const circles = document.querySelectorAll('.mini-pink-circles img');
let selectedCircle = null;
const linesContainer = document.getElementById('lines-container');

circles.forEach((circle) => {
  circle.addEventListener('click', function () {
    if (selectedCircle === null) {
      selectedCircle = circle;
      circle.style.border = '0.119vw solid #FFF';
    } else {
      drawLine(selectedCircle, circle);
      selectedCircle.style.border = '';
      selectedCircle = null;
    }
  });
});

function drawLine(circle1, circle2) {
  const line = document.createElement('div');
  line.className = 'line';

  const rect1 = circle1.getBoundingClientRect();
  const rect2 = circle2.getBoundingClientRect();
  const centerX1 = rect1.left + rect1.width / 2;
  const centerY1 = rect1.top + rect1.height / 2;
  const centerX2 = rect2.left + rect2.width / 2;
  const centerY2 = rect2.top + rect2.height / 2;

  line.style.left = `${centerX1}px`;
  line.style.top = `${centerY1}px`;

  const distance = Math.sqrt(
    Math.pow(centerX2 - centerX1, 2) + Math.pow(centerY2 - centerY1, 2)
  );
  const angle =
    Math.atan2(centerY2 - centerY1, centerX2 - centerX1) * (180 / Math.PI);

  line.style.width = `${distance}px`;
  line.style.transform = `rotate(${angle}deg)`;

  linesContainer.appendChild(line);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hand-1').addEventListener('click', function () {
    this.style.display = 'none';
    document.getElementById('hand-2').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.button-container').style.display = 'flex';
    }, 2000);
  });

  document.getElementById('btn-1').addEventListener('click', () => {
    document.getElementById('img-container-1').style.display = 'block';
  });
  document.getElementById('btn-2').addEventListener('click', () => {
    document.getElementById('img-container-2').style.display = 'block';
  });
  document.getElementById('btn-3').addEventListener('click', () => {
    document.getElementById('img-container-3').style.display = 'block';
  });
  document.getElementById('btn-4').addEventListener('click', () => {
    document.getElementById('img-container-4').style.display = 'block';
  });
});

const cells = document.querySelectorAll('.cell');
const symbols = ['+', '#', '*', '%', '$', '<'];

function randomizeSymbols() {
  cells.forEach((cell) => {
    if (Math.random() < 0.3) {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      cell.textContent = symbol;
    } else {
      cell.textContent = '';
    }
  });
}

setInterval(randomizeSymbols, 1000);

window.onload = randomizeSymbols;
