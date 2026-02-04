let attempts = 0;
const maxAttempts = 4;

function generateCode() {
  const code = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("codeBox").innerText = code;
}

function checkCode() {
  const input = document.getElementById("userInput").value.trim();
  const correctCode = document.getElementById("codeBox").innerText.trim();
  const message = document.getElementById("message");
  const card = document.getElementById("card");
  const button = document.querySelector("button");

  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    window.location.href = "/main.html";
    return;
  }

  attempts++;
  message.innerText = `Incorrect code. Attempt ${attempts} of ${maxAttempts}`;

  // shake animation
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");

  if (attempts >= maxAttempts) {
    message.innerText = "Too many failed attempts. Access locked.";
    button.disabled = true;
    document.getElementById("userInput").disabled = true;
  }
}

// generate code on page load
generateCode();
