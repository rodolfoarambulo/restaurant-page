import Hero from './hero.jpg';

const createHome = () => {
  const mainContent = document.querySelector('#content');
  const hero = document.createElement('div');
  hero.id = 'hero';

  const headline = document.createElement('h1');

  const heroImage = new Image();
  heroImage.src = Hero;

  const contentBody = document.createElement('div');
  contentBody.id = 'contentBody';

  const description1 = document.createElement('p');
  const description2 = document.createElement('p');
  const description3 = document.createElement('p');

  headline.textContent = "Elevate Your Palate: Indulge in Culinary Excellence at Très Bien";

  description1.textContent =
    `Tres Bien is an exquisite culinary destination that offers a harmonious blend of exceptional cuisine, 
  impeccable service, and a captivating ambiance. It is renowned for its innovative and thoughtfully crafted menu, 
  featuring a diverse range of dishes that showcase the finest ingredients, expertly prepared by a talented team of chefs.`;

  description2.textContent =
    `This establishment's commitment to excellence is evident in its attention to detail, from the presentation of
  each dish to the selection of the finest wines and cocktails to complement the dining experience. The staff is
  highly knowledgeable, providing attentive and personalized service, ensuring that every guest feels pampered and
  well-cared for.`;

  description3.textContent =
    `The restaurant's ambiance is a sensory delight, with a tastefully designed interior that creates an inviting and
  sophisticated atmosphere. Whether you're seeking a romantic dinner, a celebratory meal, or a memorable gathering
  with friends and family, the best restaurant offers an unforgettable culinary journey that leaves a lasting
  impression on all who dine there.`;

  hero.appendChild(headline);
  mainContent.appendChild(hero);
  contentBody.appendChild(description1);
  contentBody.appendChild(description2);
  contentBody.appendChild(description3);
  mainContent.appendChild(contentBody);
}

export default createHome;