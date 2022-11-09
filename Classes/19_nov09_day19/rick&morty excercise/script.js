let charStatus = '';
let score = 0;
updateScore();
randomChar();

document.getElementById('random').addEventListener('click', () => {
  randomChar();
});

document.getElementById('alive').addEventListener('click', e => {
  validate(e);
});
document.getElementById('dead').addEventListener('click', e => {
  validate(e);
});
document.getElementById('unknown').addEventListener('click', e => {
  validate(e);
});

function validate(e) {
  if (e.target.innerText === charStatus) {
    document.body.style.backgroundColor = 'green';
    score++;
    updateScore();
  } else {
    document.body.style.backgroundColor = 'red';
    score--;
    updateScore();
  }
  setTimeout(() => {
    randomChar();
  }, 2000);
}

function randomChar() {
  fetch(
    `https://rickandmortyapi.com/api/character/${Math.floor(
      Math.random() * 826
    )}`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById('name').innerText = data.name;
      document.getElementById('image').src = data.image;
      charStatus = data.status;
      document.body.style.backgroundColor = 'white';
    });
}

function updateScore() {
  if (score === 10) {
    score = 'YOU WIN!';
  }
  document.getElementById('score-value').innerText = score;
}
