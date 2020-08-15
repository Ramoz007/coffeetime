//var to element mappings

//modal maps
const closes = document.getElementById('close-icon');
const opens = document.getElementById('open');
const modal = document.getElementById('modal');

//form maps
const form = document.getElementById('modal-form');
const coffee = document.getElementById('coffee');
const sugar = document.getElementById('sugar');

//input display var maps
const coffeeValue = document.getElementById('coffee-value');
const sugarValue = document.getElementById('sugar-value');

//different div and btn maps
const brewBtn = document.getElementById('brew-btn');
const ingreBtn = document.getElementById('ingre-btn');
const main1 = document.getElementById('main-left');
const main2 = document.getElementById('main-right');

//functions

//func to send alert as user presses brew btn,
//for incomplete inputs
function alertError() {
  alert("Go Back and Add Ingredients");
}
//func to send alert as user presses brew btn,
//for complete inputs
function alertMsg() {
  alert("Awesome Please Enjoy Your Coffee!");
}

//func to display the modal
//on-click func
opens.onclick = function() {
  modal.style.display = "block";
}

//func to hide the modal
//on-click func
closes.onclick = function() {
  modal.style.display = "none";
}

//func to hide the modal, when user clicks outside it
//on-click func
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//func to visualize input errors
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//func to visualize input success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//func to check length of user inputs
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  }else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  }else {
    showSuccess(input);
  }
}

//func to ensure completion of input fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

//func to retrieve input field names
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//submit event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if(!checkRequired([coffee, sugar])){
    checkLength(coffee, 1, 2);
    checkLength(sugar, 1, 2);
  }
  coffeeValue.innerText = `${coffee.value}`;
  sugarValue.innerText = `${sugar.value}`;
  modal.style.display = "none";
});

//func to hide and show divs
//on-click func
brewBtn.onclick = function() {
  main1.style.display = "none";
  main2.style.display = "flex";
}
//func to hide and show divs
//on-click func
ingreBtn.onclick = function() {
  main2.style.display = "none";
  main1.style.display = "flex";
}