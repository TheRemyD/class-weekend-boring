const btn = document.querySelector('#check');
btn.addEventListener('click', check);
const input = document.querySelector('#day');
input.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    check();
  }
});

const title = document.querySelector('.card__title');
const card = document.querySelector('.card');

function check() {
  const inputValue = document.querySelector('#day');
  const day = inputValue.value.toLowerCase();

  // Reset input field to placeholder value
  inputValue.value = "";

  //Conditionals go here
  switch (day) {
    case "monday": weekday(); break;
    case "tuesday": classDay(); break;
    case "wednesday": weekday(); break;
    case "thursday": classDay(); break;
    case "friday": weekday(); break;
    case "saturday": weekend(); break;
    case "sunday": weekend(); break;
    default: alert("Please enter a day in the input"); break;
  }
}

function weekday() {
  changeLabel();
  title.innerHTML = "It's a weekday...";
  card.style.backgroundImage = "url('images/boring.jpg')";
}

function weekend() {
  changeLabel();
  title.innerHTML = "It's the Weekend!";
  card.style.backgroundImage = "url('images/weekend.jpg')";
}

function classDay() {
  changeLabel();
  title.innerHTML = "It's a Class Day!";
  card.style.backgroundImage = "url('images/class.jpg')";
}

function changeLabel() {
  document.querySelector('.card__label').innerHTML = "What is today?";
}