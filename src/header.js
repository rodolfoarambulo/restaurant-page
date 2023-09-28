import createHome from "./home";
import createMenu from "./menu";

const clearContent = () => {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const createHeader = () => {
  const header = document.createElement('header');

  const logo = document.createElement('div');
  logo.id = 'logo';
  logo.textContent = 'Très Bien';

  const list = document.createElement('ul');
  const home = document.createElement('li');
  home.className = 'headerBtn';
  home.textContent = 'Home';

  const menu = document.createElement('li');
  menu.className = 'headerBtn';
  menu.textContent = 'Menu';

  const contact = document.createElement('li');
  contact.className = 'headerBtn';
  contact.textContent = 'Contact';

  home.addEventListener('click', () => {
    clearContent();
    createHome();
  });

  menu.addEventListener('click', () => {
    clearContent();
    createMenu();
  });

  contact.addEventListener('click', () => {
    clearContent();
    console.log('Contact button!');
  });

  header.appendChild(logo);
  header.appendChild(list);

  list.appendChild(home);
  list.appendChild(menu);
  list.appendChild(contact);

  const body = document.querySelector('body');
  body.prepend(header);

  return header;
}

export default createHeader;