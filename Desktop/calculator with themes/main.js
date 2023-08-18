var input = document.getElementById('input');
var del = document.getElementById('del');
var reset = document.getElementById('reset');
var equal = document.getElementById('equal');

// Selection Numbers
function select(element) {
  input.value += element;
}

// Delete
del.onclick = () => {
  input.value = input.value.slice(0, -1);
}

// Reset
reset.onclick = () => {
  input.value = '';
}

// Equal
equal.onclick = () => {
  try {
    input.value = eval(input.value);
  } catch (Error) {
    input.value = 'Error';
  }
}

// Themes

let themes = document.querySelectorAll('label');
let ball = document.querySelector('.ball');

console.log(themes)
// Selection Themes
themes.forEach(theme => {
  theme.onclick = (e) => {
    storeTheme(e.currentTarget.className , e.currentTarget.dataset.steps);
    ball.style.left = `${e.currentTarget.dataset.steps}px`;
    document.body.id = e.currentTarget.className;
  }
});

if (localStorage.getItem('Theme')) {
  document.body.id = localStorage.getItem('Theme');
  ball.style.left = `${localStorage.getItem('steps')}px`;
}

function storeTheme(id , steps) {
  localStorage['Theme'] = id;
  localStorage['steps'] = steps;
}