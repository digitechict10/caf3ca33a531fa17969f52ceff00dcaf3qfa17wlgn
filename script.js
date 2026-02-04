let attempts = 0;
const maxAttempts = 4;

// Generate code once per session
function generateCode() {
  let code = sessionStorage.getItem("challengeCode");

  if (!code) {
    code = Math.floor(1000 + Math.random() * 9000).toString();
    sessionStorage.setItem("challengeCode", code);
  }

  document.getElementById("codeBox").innerText = code;
}

function checkCode(event) {
  event.preventDefault(); // 🚨 STOP PAGE RELOAD

  const input = document.getElementById("userInput").value.trim();
  const correctCode = sessionStorage.getItem("challengeCode");
  const message = document.getElementById("message");
  const card = document.getElementById("card");
  const button = document.getElementById("verifyBtn");

  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    window.location.replace("/main.html"); // clean redirect
    return;
  }

  attempts++;
  message.innerText = `Incorrect code. Attempt ${attempts} of ${maxAttempts}`;

  // Shake animation
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");

  if (attempts >= maxAttempts) {
    message.innerText = "Too many failed attempts. Access locked.";
    button.disabled = true;
    document.getElementById("userInput").disabled = true;
  }
}

// Run once on page load
document.addEventListener("DOMContentLoaded", generateCode);
