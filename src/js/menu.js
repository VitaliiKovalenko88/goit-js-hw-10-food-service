import elementsMenu from '../templates/element-menu.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');

menuListRef.insertAdjacentHTML('afterbegin', elementsMenu(menu));
