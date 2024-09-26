// DOM Elements
const passwordDisplay = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
  generatePassword();
});

function getRandomCharacter(set) {
  return set[Math.floor(Math.random() * set.length)];
}

function generatePassword() {
  const upperCheckbox = document.getElementById("uppercase").checked;
  const lowerCheckbox = document.getElementById("lowercase").checked;
  const numberCheckbox = document.getElementById("numbers").checked;
  const symbolCheckbox = document.getElementById("symbols").checked;

  let characterSet = "";

  if (upperCheckbox) characterSet += uppercase;
  if (lowerCheckbox) characterSet += lowercase;
  if (numberCheckbox) characterSet += numbers;
  if (symbolCheckbox) characterSet += symbols;

  if (characterSet === "") {
    alert("Please select at least one option.");
    return;
  }

  const passwordLength = parseInt(lengthRange.value);
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(characterSet);
  }

  passwordDisplay.value = password;
}

copyBtn.onclick = function () {
  passwordDisplay.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
};

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? "<i class='bx bx-sun'></i> Light Mode"
    : "<i class='bx bx-moon'></i> Dark Mode";
});

generatePassword();

generateBtn.addEventListener("click", generatePassword);
