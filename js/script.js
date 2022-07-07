'use strict';

/**
 * Creates an HTML table representing a drawing area for creating pixel art. The
 * `table` element is given a class of `drawing-area`, and each `td` element is
 * given a class of `pixel`. Colored pixels are given a class of `colored`.
 */
class DrawingArea {
  /**
   * @param {number} rows - Number of rows that the drawing area will have
   * @param {number} columns - Number of columns that the drawing area will have
   */
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;

    const element = document.createElement('table');
    element.className = 'drawing-area';

    for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
      const row = document.createElement('tr');

      for (let columnNumber = 0; columnNumber < columns; columnNumber++) {
        const pixel = document.createElement('td');
        pixel.className = 'pixel';
        pixel.onclick = () => pixel.classList.toggle('colored');

        row.appendChild(pixel);
      }

      element.appendChild(row);
    }

    this.element = element;
  }
}

const drawingArea = new DrawingArea(16, 16);

document.querySelector('.drawing-area-container')
    .appendChild(drawingArea.element);
