'use strict';

const drawingArea = document.createElement('section');
drawingArea.className = 'drawing-area';

// Creates 256 divs to represent pixels in a 16×16 drawing area grid
for (let i = 0; i < 256; i++) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.onclick = () => pixel.classList.toggle('colored');

  drawingArea.appendChild(pixel);
}

document.body.appendChild(drawingArea);
