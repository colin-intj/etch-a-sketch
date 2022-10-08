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
    element.onclick = (event) => {
      const eventTarget = /** @type {HTMLElement} */ (event.target);
      if (eventTarget.tagName === 'TD') {
        eventTarget.classList.toggle('colored');
      }
    };

    for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
      const row = document.createElement('tr');

      for (let columnNumber = 0; columnNumber < columns; columnNumber++) {
        const pixel = document.createElement('td');
        pixel.className = 'pixel';
        row.appendChild(pixel);
      }

      element.appendChild(row);
    }

    this.element = element;
  }

  /**
   * Clears the drawing area and changes it's number of rows and columns.
   * @param {number} newRows - New number of rows
   * @param {number} newColumns - New number of columns
   */
  resize(newRows, newColumns) {
    this.rows = newRows;
    this.columns = newColumns;

    // Completely removes every pixel from the drawing area
    while (this.element.lastChild) {
      this.element.removeChild(this.element.lastChild);
    }

    for (let rowNumber = 0; rowNumber < newRows; rowNumber++) {
      const row = document.createElement('tr');

      for (let columnNumber = 0; columnNumber < newColumns; columnNumber++) {
        const pixel = document.createElement('td');
        pixel.className = 'pixel';
        row.appendChild(pixel);
      }

      this.element.appendChild(row);
    }
  }

  /** Clears the drawing area. */
  clear() {
    for (const row of this.element.childNodes) {
      for (const pixel of row.childNodes) {
        pixel.classList.remove('colored');
      }
    }
  }
}

const drawingArea = new DrawingArea(16, 16);

document.querySelector('.drawing-area-container')
    .appendChild(drawingArea.element);

document.querySelector('.resize-drawing-area').onclick = () => {
  let length;

  do {
    length = prompt('Enter new length:');

    if (length === null) return;

    length = +length;

    if (isNaN(length)) {
      alert(`ERROR: You're input is not a number; please enter a number.`);
    } else if (length < 1 || length > 100) {
      alert('ERROR: You can only entire sizes between 1 and 100.');
    }
  } while (isNaN(length));

  drawingArea.resize(length, length);
};

document.querySelector('.clear-drawing-area').onclick = () => {
  drawingArea.clear();
};
