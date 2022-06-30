'use strict';

const drawingArea = document.createElement('section');
drawingArea.className = 'drawing-area';

// Creates 256 divs to represent pixels in a 16×16 drawing area grid
for (let i = 0; i < 256; i++) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  drawingArea.appendChild(pixel);
}

for (const pixel of drawingArea.childNodes) {
  pixel.onclick = () => {
    pixel.style.backgroundColor = '#000';
  };
}

document.body.appendChild(drawingArea);
