const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const scoreEl = document.getElementById("score");
const que = document.getElementById("question");
const formE1 = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));//to get the data from local storage we use json.parse

que.innerText = `what is ${num1} multiply by ${num2}`;

const inputel = document.getElementById("input");
const correct_ans = num1 * num2;
if (!score) {
  score = 0;
}

formE1.addEventListener("submit", () => {
  const userAns = Number(inputel.value);//user wil give the answer in the form of string so we need to updaate in the from of number
  if (userAns == correct_ans) {
    score++;
    updateLocalstorage();
  } else {
    score--;
    updateLocalstorage();
  }
});

scoreEl.innerText = `score:${score}`;

function updateLocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
