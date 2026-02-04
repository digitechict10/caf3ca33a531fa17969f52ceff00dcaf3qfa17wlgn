let attempts = 0;
const maxAttempts = 4;

// Generate a random 4-digit code on every load
function generateCode() {
  const code = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("codeBox").innerText = code;
}

// Check user input
function checkCode() {
  const input = document.getElementById("userInput").value.trim();
  const correctCode = document
    .getElementById("codeBox")
    .innerText
    .trim();

  const message = document.getElementById("message");
  const card = document.getElementById("card");
  const button = document.querySelector("button");
  const inputField = document.getElementById("userInput");

  // ✅ Success
  if (input === correctCode) {
    ses
