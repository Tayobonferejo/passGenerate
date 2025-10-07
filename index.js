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


myForm.addEventListener("submit", function(event){
  event.preventDefault();
  if(upper.checked){
    console.log(upper.value);
  }
  if(lower.checked){
    console.log(lower.value);
  }
  if(number.checked){
    console.log(number.value);
  }
  if(symbol.checked){
    console.log(symbol.value);
  }

  myForm.reset();

});