const createHeader = () => {
  const header = document.createElement('header');

  const logo = document.createElement('div');
  logo.id = 'logo';
  logo.textContent = 'Très Bien';

  const list = document.createElement('ul');
  const home = document.createElement('li');
  home.id = 'home';
  home.textContent = 'Home';

  const menu = document.createElement('li');
  menu.id = 'menu';
  menu.textContent = 'Menu';

  const contact = document.createElement('li');
  contact.id = 'contact';
  contact.textContent = 'Contact';

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