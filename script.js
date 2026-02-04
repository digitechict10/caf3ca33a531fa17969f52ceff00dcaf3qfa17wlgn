function checkCode() {
  const input = document.getElementById("userInput").value;
  const correctCode = "7392";

  if (input === correctCode) {
    sessionStorage.setItem("verified", "true");
    window.location.href = "/main.html";
  } else {
    document.getElementById("message").innerText =
      "Incorrect code. Please try again.";
  }
}
