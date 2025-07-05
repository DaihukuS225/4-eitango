const quizData = [
  { word: "apple",  choices: ["りんご", "ばなな", "ぶどう", "みかん"], correct: "りんご" },
  { word: "banana", choices: ["いちご", "ばなな", "なし", "みかん"], correct: "ばなな" },
  { word: "grape",  choices: ["りんご", "すいか", "ぶどう", "もも"], correct: "ぶどう" },
  { word: "peach",  choices: ["メロン", "いちじく", "もも", "みかん"], correct: "もも" },
  { word: "orange", choices: ["レモン", "さくらんぼ", "とまと", "みかん"], correct: "みかん" }
];

let currentQuestion = 0;

const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const resultOverlay = document.getElementById("result-overlay");
const nextButton = document.getElementById("next-button");

function showQuestion() {
  const quiz = quizData[currentQuestion];
  questionElem.textContent = quiz.word;
  resultOverlay.textContent = "";
  nextButton.style.display = "none";

  choicesElem.innerHTML = "";
  quiz.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(choice));
    choicesElem.appendChild(button);
  });
}

function checkAnswer(selected) {
  const quiz = quizData[currentQuestion];
  if (selected === quiz.correct) {
    resultOverlay.textContent = "◯";
    resultOverlay.style.color = "red";
  } else {
    resultOverlay.textContent = "✕";
    resultOverlay.style.color = "red";
  }

  Array.from(choicesElem.children).forEach(btn => {
    btn.disabled = true;
  });

  nextButton.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    questionElem.textContent = "全問終了！お疲れさまでした😊";
    resultOverlay.textContent = "";
    choicesElem.innerHTML = "";
    nextButton.style.display = "none";
  }
}

nextButton.addEventListener("click", nextQuestion);

showQuestion();
