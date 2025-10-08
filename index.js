const slider = document.getElementById('lengthSlider');
const sliderValue = document.getElementById('sliderValue');
const myForm = document.getElementById('myForm');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const symbol = document.getElementById('sym');
const number = document.getElementById('num');



function updateSlider() {
  const val = slider.value;
  sliderValue.textContent = val;
  const percent = (val / slider.max) * 100;
  slider.style.setProperty('--value', percent + '%');
}

slider.addEventListener('input', updateSlider);
updateSlider();


myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let charset = "";
  const passwordLength = parseInt(document.getElementById("lengthSlider").value);
  if (upper.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower.checked) charset += "abcdefghijklmnopqrstuvwxyz";
  if (number.checked) charset += "0123456789";
  if (symbol.checked) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (charset.length === 0 &&  passwordLength == 0) {
    alert("Please select at least one option! and the password length" );
    return;
  }

  else if (charset.length === 0) {
    alert("Please select at least one option!" );
    return;
  }

  else if (passwordLength == 0) {
    alert("Please select the password length" );
    return;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  console.log("Generated Password:", password);
  alert(`Your password is: ${password}`);

  myForm.reset();
});
