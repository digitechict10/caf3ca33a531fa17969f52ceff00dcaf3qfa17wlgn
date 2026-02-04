function checkCode() {
  const input = document.getElementById("userInput").value.trim();
  const correctCode = document
    .getElementById("codeBox")
    .innerText
    .trim();

  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    window.location.href = "/main.html";
  } else {
    const message = document.getElementById("message");
    message.innerText = "Incorrect code. Please try again.";
    message.style.color = "#ffdddd";
  }
}
