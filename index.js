const slider = document.getElementById('lengthSlider');
const sliderValue = document.getElementById('sliderValue');
const myForm = document.getElementById('myForm');

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
  
});