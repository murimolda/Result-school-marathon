const board = document.querySelector('#board');
const colorsNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 00 6px ${color}`;
};

function removeColor(elem) {
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  let colorIndex = '';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colorsNumber.length);
    colorIndex = colorIndex + colorsNumber[index];
  }
  return `#${colorIndex}`;
};
