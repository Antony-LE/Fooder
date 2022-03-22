/* eslint-disable max-len */
/* eslint-disable no-empty */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './main.css';
import axios from 'axios';
import Swal from 'sweetalert2';

// Import des boutons
import ButtonMainCourse from '../ButtonMainCourse/ButtonMainCourse';
import ButtonDessert from '../ButtonDessert/ButtonDessert';
import ButtonStarter from '../ButtonStarter/ButtonStarter';
import ButtonDrink from '../ButtonDrink/ButtonDrink';
import ButtonBill from '../ButtonBill/ButtonBill';
import ButtonJoke from '../ButtonJoke/ButtonJoke';

// Import des listes
import CardListStarter from '../CardListStarter/CardListStarter';
import CardListMainCourse from '../CardListMainCourse/CardListMainCourse';
import CardListDessert from '../CardListDessert/CardListDessert';
import CardListDrink from '../CardListDrink/CardListDrink';

// Import des éléments annexes
import Footer from '../Footer/Footer';
import Chatbox from '../Chatbox/Chatbox';
import Bill from '../Bill/Bill';

// Import des datas en dur pour la génération aléatoires des phrases de la chatbox
import dataStarter from '../Datas/datas-starter-sentences';
import dataMainCourse from '../Datas/datas-mainCourse-sentences';
import dataDessert from '../Datas/datas-dessert-sentences';
import dataDrink from '../Datas/datas-drink-sentences';

function Main({ className }) {
  // Hook pour la gestion des données de la card Starter
  const [starterTitle, setStarterTitle] = useState('');
  const [starterImage, setStarterImage] = useState('');
  const [starterSummary, setStarterSummary] = useState('');
  const [starterPrice, setStarterPrice] = useState('');
  const [displayStarterCardList, setDisplayStarterCardList] = useState(false);

  // Hook pour la gestion des données de la card MainCourse
  const [mainCourseTitle, setMainCourseTitle] = useState('');
  const [mainCourseImage, setMainCourseImage] = useState('');
  const [mainCourseSummary, setMainCourseSummary] = useState('');
  const [mainCoursePrice, setMainCoursePrice] = useState('');
  const [displayMainCourseCardList, setDisplayMainCourseCardList] = useState(false);

  // Hook pour la gestion des données de la card Dessert
  const [dessertTitle, setDessertTitle] = useState('');
  const [dessertImage, setDessertImage] = useState('');
  const [dessertSummary, setDessertSummary] = useState('');
  const [dessertPrice, setDessertPrice] = useState('');
  const [displayDessertCardList, setDisplayDessertCardList] = useState(false);

  // Hook pour la gestion des données de la card Drink
  const [drinkTitle, setDrinkTitle] = useState('');
  const [drinkImage, setDrinkImage] = useState('');
  const [drinkSummary, setDrinkSummary] = useState('');
  const [drinkPrice, setDrinkPrice] = useState('');
  const [displayDrinkCardList, setDisplayDrinkCardList] = useState(false);

  // Hook pour la gestion des données des élements annexes
  const [chatboxSentence, setChatboxSentence] = useState('What would you like to eat today?');
  const [displayBill, setDisplayBill] = useState(false);
  const [footerTextContent, setFooterTextContent] = useState('Bon appétit !');

  // Paramètres des requêtes Axios
  const apiKey = `${process.env.REACT_APP_API_KEY}`;
  // Endpoint pour une entrée aléatoire
  const baseUrlStarter = `https://api.spoonacular.com/recipes/random?number=1&type=soup,salad&apiKey=${apiKey}`;
  // Endpoint pour un plat principal aléatoire
  const baseUrlMainCourse = `https://api.spoonacular.com/recipes/random?number=1&tags=main%20course&apiKey=${apiKey}`;
  // Endpoint pour un dessert aléatoire
  const baseUrlDessert = `https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${apiKey}`;
  // Endpoint pour une boisson aléatoire
  const baseUrlDrink = `https://api.spoonacular.com/recipes/random?number=1&tags=drink&apiKey=${apiKey}`;
  // Endpoint pour une blague aléatoire
  const baseUrlJoke = `https://api.spoonacular.com/food/jokes/random?&apiKey=${apiKey}`;

  // Gestion des datas liées aux composants CardStarter et ButtonCardStarter
  const handleClickButtonStarter = () => {
    axios.get(baseUrlStarter).then((response) => {
      setStarterTitle(response.data.recipes[0].title);
      setStarterImage(response.data.recipes[0].image);
      setStarterSummary(response.data.recipes[0].summary);
      setStarterPrice(response.data.recipes[0].pricePerServing);
      setDisplayStarterCardList(!displayStarterCardList);
      setDisplayStarterCardList(true);
      setChatboxSentence(dataStarter[Math.floor(Math.random() * dataStarter.length)]);
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  // Gestion des datas liées aux composantss CardMainCourse et ButtonCardMainCourse
  const handleClickButtonMainCourse = () => {
    axios.get(baseUrlMainCourse).then((response) => {
      setMainCourseTitle(response.data.recipes[0].title);
      setMainCourseImage(response.data.recipes[0].image);
      setMainCourseSummary(response.data.recipes[0].summary);
      setMainCoursePrice(response.data.recipes[0].pricePerServing);
      setDisplayMainCourseCardList(!displayMainCourseCardList);
      setDisplayMainCourseCardList(true);
      setChatboxSentence(dataMainCourse[Math.floor(Math.random() * dataMainCourse.length)]);
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  // Gestion des datas liées aux composants CardDessert et ButtonCardDessert
  const handleClickButtonDessert = () => {
    axios.get(baseUrlDessert).then((response) => {
      setDessertTitle(response.data.recipes[0].title);
      setDessertImage(response.data.recipes[0].image);
      setDessertSummary(response.data.recipes[0].summary);
      setDessertPrice(response.data.recipes[0].pricePerServing);
      setDisplayDessertCardList(!displayDessertCardList);
      setDisplayDessertCardList(true);
      setChatboxSentence(dataDessert[Math.floor(Math.random() * dataDessert.length)]);
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  // Gestion des datas liées aux composants CardDrink et ButtonCardDrink
  const handleClickButtonDrink = () => {
    axios.get(baseUrlDrink).then((response) => {
      setDrinkTitle(response.data.recipes[0].title);
      setDrinkImage(response.data.recipes[0].image);
      setDrinkSummary(response.data.recipes[0].summary);
      setDrinkPrice(response.data.recipes[0].pricePerServing);
      setDisplayDrinkCardList(!displayDrinkCardList);
      setDisplayDrinkCardList(true);
      setChatboxSentence(dataDrink[Math.floor(Math.random() * dataDrink.length)]);
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  // Gestion des datas liées aux composants Bill et ButtonBill
  const handleDisplayButtonBill = () => {
    if (starterPrice === '' && mainCoursePrice === '' && dessertPrice === '' && drinkPrice === '') {
      setChatboxSentence('You must choose a dish first !');
      setDisplayBill(false);
    } else {
      setDisplayBill(!displayBill);
      setChatboxSentence('We hope that you enjoyed your meal!');
      setFooterTextContent('Thank you, hope to see you soon !');
      console.log(starterPrice);
    }
  };

  // Gestion des datas liées au composant ButtonJoke
  const handleClickButtonJoke = () => {
    axios.get(baseUrlJoke).then((response) => {
      Swal.fire({
        title: response.data.text,
        width: 600,
        padding: '3em',
        color: '#fff',
        background: '#D2AA74',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://tenor.com/view/hahahaha-you-suck-happy-fun-excited-hooray-gif-14146663")
          left top
          no-repeat
        `,
      });
    });
  };

  return (
    <main className={className}>
      <Chatbox className="chatbox" sentence={chatboxSentence} />
      <ButtonStarter className="button-starter" handleRandomStarter={handleClickButtonStarter} />
      <ButtonMainCourse className="button-main-course" handleRandomMainCourse={handleClickButtonMainCourse} />
      <ButtonDessert className="button-dessert" handleRandomDessert={handleClickButtonDessert} />
      <ButtonDrink className="button-drink" handleRandomDrink={handleClickButtonDrink} />
      <ButtonBill className="button-bill" handleDisplayBill={handleDisplayButtonBill} />
      <br />
      <ButtonJoke className="button-joke" handleRandomJoke={handleClickButtonJoke} />
      {displayStarterCardList ? <CardListStarter className="cardlist-starter" handleStarterImage={starterImage} handleStarterTitle={starterTitle} handleStarterSummary={starterSummary} handleStarterPrice={starterPrice} /> : '' }
      {displayMainCourseCardList ? <CardListMainCourse className="cardlist-main-course" handleMainCourseImage={mainCourseImage} handleMainCourseTitle={mainCourseTitle} handleMainCourseSummary={mainCourseSummary} handleMainCoursePrice={mainCoursePrice} /> : '' }
      {displayDessertCardList ? <CardListDessert className="cardlist-dessert" handleDessertImage={dessertImage} handleDessertTitle={dessertTitle} handleDessertSummary={dessertSummary} handleDessertPrice={dessertPrice} /> : '' }
      {displayDrinkCardList ? <CardListDrink className="cardlist-drink" handleDrinkImage={drinkImage} handleDrinkTitle={drinkTitle} handleDrinkSummary={drinkSummary} handleDrinkPrice={drinkPrice} /> : '' }
      {displayBill ? <Bill className="bill" handleStarterTitle={starterTitle} handleStarterPrice={starterPrice} handleMainCourseTitle={mainCourseTitle} handleMainCoursePrice={mainCoursePrice} handleDessertTitle={dessertTitle} handleDessertPrice={dessertPrice} handleDrinkTitle={drinkTitle} handleDrinkPrice={drinkPrice} /> : ''}
      {displayStarterCardList ? <Footer className="footer" textContent={footerTextContent} /> : displayMainCourseCardList ? <Footer className="footer" textContent={footerTextContent} /> : displayDessertCardList ? <Footer className="footer" textContent={footerTextContent} /> : ''}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};

export default React.memo(Main);
