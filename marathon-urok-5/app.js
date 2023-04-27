const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const  board = document.querySelector('#board');
const colorsNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) =>{
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) =>{
  if(event.target.classList.contains('time-btn')){
    screens[1].classList.add('up');
    time = parseInt(event.target.getAttribute('data-time'));
    startGame();
  }
});

board.addEventListener('click', (event) =>{
  if(event.target.classList.contains('circle')){
    score++;
    event.target.remove();
    createRandomCircle();
  }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  }else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h2>Score: <span class = "primary">${score}</span></h2>`;
}

function createRandomCircle(){
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${x}px`;
  circle.style.left = `${y}px`;
  setColor(circle)

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
};

function getRandomColor() {
  let colorIndex = '';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colorsNumber.length);
    colorIndex = colorIndex + colorsNumber[index];
  }
  return `#${colorIndex}`;
};
