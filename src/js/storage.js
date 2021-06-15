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
