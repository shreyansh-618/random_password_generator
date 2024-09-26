// DOM Elements
const passwordDisplay = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");

// Character Sets
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Update the displayed password length value when the range slider is moved
lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
  generatePassword(); // Automatically generate password when length changes
});

// Generate Random Character Function
function getRandomCharacter(set) {
  return set[Math.floor(Math.random() * set.length)];
}

// Password Generation Function
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

  const passwordLength = parseInt(lengthRange.value); // Get the selected password length
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(characterSet);
  }

  passwordDisplay.value = password;
}

// Copy Password Function using onclick DOM
copyBtn.onclick = function () {
  passwordDisplay.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
};

// Dark Mode Toggle Function
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? "<i class='bx bx-sun'></i> Light Mode"
    : "<i class='bx bx-moon'></i> Dark Mode";
});

// Initial Password Generation on Page Load
generatePassword(); // Generate password when the page loads

// Generate Password Button Event Listener
generateBtn.addEventListener("click", generatePassword);
