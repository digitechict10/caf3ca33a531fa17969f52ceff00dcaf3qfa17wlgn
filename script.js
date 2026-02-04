let attempts = 0;
const maxAttempts = 4;

document.addEventListener("DOMContentLoaded", () => {
  generateCode();
});

function generateCode() {
  const codeBox = document.getElementById("codeBox");
  if (!codeBox) return;

  const code = Math.floor(1000 + Math.random() * 9000);
  codeBox.innerText = code;
}

function checkCode() {
  const inputField = document.getElementById("userInput");
  const codeBox = document.getElementById("codeBox");
  const message = document.getElementById("message");
  const button = document.querySelector("button");
  const card = document.getElementById("card"); // optional

  if (!inputField || !codeBox || !message) return;

  const input = inputField.value.trim();
  const correctCode = codeBox.innerText.trim();

  // ✅ Success
  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    window.location.replace("/");
    return;
  }

  // ❌ Failure
  attempts++;
  message.innerText = `Incorrect code. Attempt ${attempts} of ${maxAttempts}`;
  message.style.color = "#d9534f";

  // Shake animation (only if card exists)
  if (card) {
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
  }

  // 🔒 Lockout
  if (attempts >= maxAttempts) {
    message.innerText = "Too many failed attempts. Access locked.";
    button.disabled = true;
    inputField.disabled = true;
  }
}
