function checkCode() {
  const input = document.getElementById("userInput").value;
  const correctCode = "7392";

  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    window.location.href = "/main.html";
  } else {
    const message = document.getElementById("message");
    message.innerText = "Incorrect code. Please try again.";
    message.style.color = "#ffdddd";
  }
}
