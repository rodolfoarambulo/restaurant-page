import FoodImage1 from './food1.jpg';

const myFoodMenu = [
  {
    'name': 'Boeuf Bourguignon',
    'imgUrl': FoodImage1,
    'price': 'Php 220',
  },
  {
    'name': 'Boeuf Bourguignon',
    'imgUrl': FoodImage1,
    'price': 'Php 220',
  },
  {
    'name': 'Boeuf Bourguignon',
    'imgUrl': FoodImage1,
    'price': 'Php 220',
  },
  {
    'name': 'Boeuf Bourguignon',
    'imgUrl': FoodImage1,
    'price': 'Php 220',
  }
];

const createMenu = () => {

  const mainContent = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.id = 'menu';

  const menuHeader = document.createElement('h1');
  menuHeader.id = 'menuHeader';
  menuHeader.textContent = 'Menu';

  mainContent.appendChild(menuHeader);

  for (let i = 0; i < myFoodMenu.length; i++) {
    let foodItem = document.createElement('div');
    foodItem.id = 'foodItem';

    let foodName = document.createElement('div');
    let foodImage = document.createElement('img');
    let foodPrice = document.createElement('div');
    
    foodName.textContent = myFoodMenu[i].name;
    foodImage.src = myFoodMenu[i].imgUrl;
    foodPrice.textContent = myFoodMenu[i].price;

    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodName);
    foodItem.appendChild(foodPrice);

    menu.appendChild(foodItem);
  }

  mainContent.appendChild(menu);
}

export default createMenu;