const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeInput: document.querySelector('.theme-switch__toggle'),
};
onSaveTheme();

refs.themeInput.addEventListener('change', onSwitchTheme);

function onSaveTheme() {
  if (localStorage.getItem('DARK')) {
    refs.body.setAttribute('class', localStorage.getItem('DARK'));
    refs.themeInput.checked = true;
  }
}

function onSwitchTheme() {
  if (refs.themeInput.checked) {
    localStorage.setItem('DARK', Theme.DARK);
    localStorage.removeItem('LIGHT');
    refs.body.setAttribute('class', localStorage.getItem('DARK'));
  } else {
    localStorage.setItem('LIGHT', Theme.LIGHT);
    localStorage.removeItem('DARK');
    refs.body.setAttribute('class', localStorage.getItem('LIGHT'));
  }
}

// const body = document.querySelector('body');
// const themeSwitch = document.querySelector('.theme-switch__toggle');

// themeSwitch.addEventListener('change', onSwitchTheme);

// if (localStorage.getItem('DARK')) {
//   body.setAttribute('class', localStorage.getItem('DARK'));
// themeSwitch.checked = true;
// } else if (localStorage.getItem('LIGHT')) {
//   body.setAttribute('class', localStorage.getItem('LIGHT'));
//   themeSwitch.checked = false;
// }

// function onSwitchTheme() {
//   if (themeSwitch.checked) {
//     localStorage.setItem('DARK', Theme.DARK);
//     localStorage.removeItem('LIGHT');
//     body.setAttribute('class', localStorage.getItem('DARK'));
//   } else {
//     localStorage.setItem('LIGHT', Theme.LIGHT);
//     localStorage.removeItem('DARK');
//     body.setAttribute('class', localStorage.getItem('LIGHT'));
//   }
// }
