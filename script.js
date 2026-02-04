let attempts = 0;
const maxAttempts = 4;
let verified = false;

document.addEventListener("DOMContentLoaded", () => {
  generateCode();
});

function generateCode() {
  if (verified) return; // 🔴 do not regenerate after success

  const codeBox = document.getElementById("codeBox");
  if (!codeBox) return;

  const code = Math.floor(1000 + Math.random() * 9000);
  codeBox.innerText = code;
}

function checkCode(event) {
  if (event) event.preventDefault(); // 🔴 stop page reload

  const inputField = document.getElementById("userInput");
  const codeBox = document.getElementById("codeBox");
  const message = document.getElementById("message");
  const button = document.querySelector("button");
  const card = document.getElementById("card");

  if (!inputField || !codeBox) return;

  const input = inputField.value.trim();
  const correctCode = codeBox.innerText.trim();

  // ✅ SUCCESS
  if (input === correctCode) {
    verified = true;
    sessionStorage.setItem("verified", "true");

    // redirect ONCE
    window.location.assign("/");
    return;
  }

  // ❌ FAILURE
  attempts++;
  message.innerText = `Incorrect code. Attempt ${attempts} of ${maxAttempts}`;
  message.style.color = "#d9534f";

  if (card) {
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
  }

  if (attempts >= maxAttempts) {
    message.innerText = "Too many failed attempts. Access locked.";
    button.disabled = true;
    inputField.disabled = true;
  }
}
