let attempts = 0;
const maxAttempts = 4;

// Generate code ONCE per session
function generateCode() {
  let code = sessionStorage.getItem("challengeCode");

  if (!code) {
    code = Math.floor(1000 + Math.random() * 9000).toString();
    sessionStorage.setItem("challengeCode", code);
  }

  const codeBox = document.getElementById("codeBox");
  if (codeBox) {
    codeBox.innerText = code;
  }
}

function checkCode(event) {
  if (event) event.preventDefault(); // stop reloads

  const inputEl = document.getElementById("userInput");
  const message = document.getElementById("message");
  const card = document.getElementById("card");
  const button = document.getElementById("verifyBtn");

  const input = inputEl.value.trim();
  const correctCode = sessionStorage.getItem("challengeCode");

  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    sessionStorage.
