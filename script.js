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

function checkCode(event
