const images = [
  "A_test.jpg", "B_test.jpg", "C_test.jpg", "D_test.jpg", "E_test.jpg",
  "F_test.jpg", "G_test.jpg", "H_test.jpg", "I_test.jpg", "J_test.jpg",
  "K_test.jpg", "L_test.jpg", "M_test.jpg", "N_test.jpg", "O_test.jpg",
  "P_test.jpg", "Q_test.jpg", "R_test.jpg", "S_test.jpg", "T_test.jpg",
  "U_test.jpg", "V_test.jpg", "W_test.jpg", "X_test.jpg", "Y_test.jpg", "Z_test.jpg",
  "del_test.jpg", "nothing_test.jpg", "space_test.jpg"
];

let correctAnswer = "";

function getLabelFromFilename(filename) {
  if (filename.startsWith("del")) return "Delete";
  if (filename.startsWith("nothing")) return "Nothing";
  if (filename.startsWith("space")) return "Space";
  return filename.charAt(0).toUpperCase();
}

function loadGame() {
  const correctIndex = Math.floor(Math.random() * images.length);
  correctAnswer = getLabelFromFilename(images[correctIndex]);

  let wrongIndex;
  do {
    wrongIndex = Math.floor(Math.random() * images.length);
  } while (wrongIndex === correctIndex);

  const wrongAnswer = getLabelFromFilename(images[wrongIndex]);

  const correctFirst = Math.random() < 0.5;

  // ✅ Use relative path from root folder
  document.getElementById("sign-image").src = `${images[correctIndex]}`;
  document.getElementById("option1").innerText = correctFirst ? correctAnswer : wrongAnswer;
  document.getElementById("option2").innerText = correctFirst ? wrongAnswer : correctAnswer;

  document.getElementById("result").innerText = "";
}

function checkAnswer(button) {
  if (button.innerText === correctAnswer) {
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = `❌ Wrong! It was "${correctAnswer}"`;
  }
  setTimeout(loadGame, 1000);
}

window.onload = loadGame;
