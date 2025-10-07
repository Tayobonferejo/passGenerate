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
  if(upper.checked && lower.checked && number.checked && symbol.checked){
  }
  else if(upper.checked && lower.checked && number.checked ){
  }
  else if(upper.checked && number.checked && symbol.checked){
  }
  else if(upper.checked && lower.checked && symbol.checked ){
  }
  else if(lower.checked && number.checked && symbol.checked){
  }


  myForm.reset();

});