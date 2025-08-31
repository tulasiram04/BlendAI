function openProfile() {
  alert("Profile clicked!");
}

function goNext() {
  alert("Arrow clicked!");
}

function signIn() {
  alert("Sign In clicked!");
}

function signUp() {
  alert("Sign Up clicked!");
}

function sendMessage() {
  const input = document.querySelector(".chat-input");
  if (input.value.trim() !== "") {
    alert("You typed: " + input.value);
    input.value = "";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
