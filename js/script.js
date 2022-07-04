'use strict';

const drawingArea = document.createElement('table');
drawingArea.className = 'drawing-area';

for (let rowNumber = 0; rowNumber < 16; rowNumber++) {
  const row = document.createElement('tr');

  for (let columnNumber = 0; columnNumber < 16; columnNumber++) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    pixel.onclick = () => pixel.classList.toggle('colored');

    row.appendChild(pixel);
  }

  drawingArea.appendChild(row);
}

document.body.appendChild(drawingArea);
