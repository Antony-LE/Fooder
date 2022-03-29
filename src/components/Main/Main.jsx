/* eslint-disable react/jsx-no-bind */
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
import CuisineCardList from '../CuisineCardList/CuisineCardList';

// Import des éléments annexes
import Footer from '../Footer/Footer';
import Chatbox from '../Chatbox/Chatbox';
import Bill from '../Bill/Bill';

// Import des datas en dur pour la génération aléatoires des phrases de la chatbox
import dataStarter from '../../Datas/datas-starter-sentences';
import dataMainCourse from '../../Datas/datas-mainCourse-sentences';
import dataDessert from '../../Datas/datas-dessert-sentences';
import dataDrink from '../../Datas/datas-drink-sentences';

function Main({ className }) {
  // Hook pour la gestion de l'affichage des types de plats
  const [typeOfFoodIsSelected, setTypeOfFoodIsSelected] = useState(false);
  // Fonction passée au composant enfant CuisineCardLIst
  function handleChangeCuisine(newValue) {
    setTypeOfFoodIsSelected(newValue);
  }

  // Hook pour la gestion des données de la card Starter
  const [starterTitle, setStarterTitle] = useState('');
  const [starterImage, setStarterImage] = useState('');
  const [starterSummary, setStarterSummary] = useState('');
  const [starterPrice, setStarterPrice] = useState('');
  const [starterCookingTime, setStarterCookingTime] = useState(0);
  const [starterServings, setStarterServings] = useState(0);
  const [starterHealthscore, setStarterHealthscore] = useState(0);
  const [displayStarterCardList, setDisplayStarterCardList] = useState(false);
  const [seeStarterIngredients, setSeeStarterIngredients] = useState({});
  const [seeStarterInstructions, setSeeStarterInstructions] = useState({});

  // Hook pour la gestion des données de la card MainCourse
  const [mainCourseTitle, setMainCourseTitle] = useState('');
  const [mainCourseImage, setMainCourseImage] = useState('');
  const [mainCourseSummary, setMainCourseSummary] = useState('');
  const [mainCoursePrice, setMainCoursePrice] = useState('');
  const [mainCourseCookingTime, setMainCourseCookingTime] = useState(0);
  const [mainCourseServings, setMainCourseServings] = useState(0);
  const [mainCourseHealthscore, setMainCourseHealthscore] = useState(0);
  const [displayMainCourseCardList, setDisplayMainCourseCardList] = useState(false);
  const [seeMainCourseIngredients, setSeeMainCourseIngredients] = useState({});
  const [seeMainCourseInstructions, setSeeMainCourseInstructions] = useState({});

  // Hook pour la gestion des données de la card Dessert
  const [dessertTitle, setDessertTitle] = useState('');
  const [dessertImage, setDessertImage] = useState('');
  const [dessertSummary, setDessertSummary] = useState('');
  const [dessertPrice, setDessertPrice] = useState('');
  const [dessertCookingTime, setDessertCookingTime] = useState(0);
  const [dessertServings, setDessertServings] = useState(0);
  const [dessertHealthscore, setDessertHealthscore] = useState(0);
  const [displayDessertCardList, setDisplayDessertCardList] = useState(false);
  const [seeDessertIngredients, setSeeDessertIngredients] = useState({});
  const [seeDessertInstructions, setSeeDessertInstructions] = useState({});

  // Hook pour la gestion des données de la card Drink
  const [drinkTitle, setDrinkTitle] = useState('');
  const [drinkImage, setDrinkImage] = useState('');
  const [drinkSummary, setDrinkSummary] = useState('');
  const [drinkPrice, setDrinkPrice] = useState('');
  const [drinkCookingTime, setDrinkCookingTime] = useState(0);
  const [drinkServings, setDrinkServings] = useState(0);
  const [drinkHealthscore, setDrinkHealthscore] = useState(0);
  const [displayDrinkCardList, setDisplayDrinkCardList] = useState(false);
  const [seeDrinkIngredients, setSeeDrinkIngredients] = useState({});
  const [seeDrinkInstructions, setSeeDrinkInstructions] = useState({});

  // Hook pour la gestion des données des élements annexes
  const [chatboxSentence, setChatboxSentence] = useState('Please select a dish type above !');
  const [displayBill, setDisplayBill] = useState(false);
  const [footerTextContent, setFooterTextContent] = useState('Bon appétit !');

  // Paramètres des requêtes Axios
  const apiKey = `${process.env.REACT_APP_API_KEY}`;

  // Gestion des datas liées aux composants CardStarter et ButtonCardStarter
  function handleClickButtonStarter() {
    const cuisineType = window.sessionStorage.getItem('cuisine-type').toLowerCase().replace(/"/g, '');
    // Endpoint pour une entrée aléatoire
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=${cuisineType},starter&apiKey=${apiKey}`).then((response) => {
      if (response.data.recipes.length === 0) {
        setChatboxSentence(`Sorry, there is no ${cuisineType} starter in our database yet!`);
        setDisplayStarterCardList(false);
      } else {
        setStarterTitle(response.data.recipes[0].title);
        setStarterImage(response.data.recipes[0].image);
        setStarterSummary(response.data.recipes[0].summary);
        setStarterPrice(response.data.recipes[0].pricePerServing);
        setStarterCookingTime(response.data.recipes[0].readyInMinutes);
        setStarterServings(response.data.recipes[0].servings);
        setStarterHealthscore(response.data.recipes[0].healthScore);
        setSeeStarterIngredients(response.data.recipes[0].extendedIngredients);
        setSeeStarterInstructions(response.data.recipes[0].analyzedInstructions[0].steps);
        setDisplayStarterCardList(true);
        setDisplayStarterCardList(true);
        setChatboxSentence(dataStarter[Math.floor(Math.random() * dataStarter.length)]);
        setDisplayBill(false);
        setFooterTextContent('Bon Appétit !');
      }
    }).catch((error) => {
      if (error.response) {
        setChatboxSentence('Oops server error, try again later !');
        setDisplayStarterCardList(false);
      }
      console.log(error.response.data);
    });
  }

  // Gestion des datas liées aux composantss CardMainCourse et ButtonCardMainCourse
  function handleClickButtonMainCourse() {
    const cuisineType = window.sessionStorage.getItem('cuisine-type').toLowerCase().replace(/"/g, '');
    // Endpoint pour un plat principal aléatoire
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=${cuisineType},lunch&apiKey=${apiKey}`).then((response) => {
      if (response.data.recipes.length === 0) {
        setChatboxSentence(`Sorry, there is no ${cuisineType} main-course in our database yet!`);
        setDisplayStarterCardList(false);
      } else {
        setMainCourseTitle(response.data.recipes[0].title);
        setMainCourseImage(response.data.recipes[0].image);
        setMainCourseSummary(response.data.recipes[0].summary);
        setMainCoursePrice(response.data.recipes[0].pricePerServing);
        setMainCourseCookingTime(response.data.recipes[0].readyInMinutes);
        setMainCourseServings(response.data.recipes[0].servings);
        setMainCourseHealthscore(response.data.recipes[0].healthScore);
        setSeeMainCourseIngredients(response.data.recipes[0].extendedIngredients);
        setSeeMainCourseInstructions(response.data.recipes[0].analyzedInstructions[0].steps);
        setDisplayMainCourseCardList(!displayMainCourseCardList);
        setDisplayMainCourseCardList(true);
        setChatboxSentence(dataMainCourse[Math.floor(Math.random() * dataMainCourse.length)]);
        setDisplayBill(false);
        setFooterTextContent('Bon Appétit !');
      }
    }).catch((error) => {
      if (error.response) {
        setChatboxSentence('Oops server error, try again later !');
        setDisplayStarterCardList(false);
      }
      console.log(error.response.data);
    });
  }

  // Gestion des datas liées aux composants CardDessert et ButtonCardDessert
  const handleClickButtonDessert = () => {
    const cuisineType = window.sessionStorage.getItem('cuisine-type').toLowerCase().replace(/"/g, '');
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=${cuisineType},dessert&apiKey=${apiKey}`).then((response) => {
      // Endpoint pour un dessert aléatoire
      if (response.data.recipes.length === 0) {
        setChatboxSentence(`Sorry, there is no ${cuisineType} dessert in our database yet!`);
        setDisplayStarterCardList(false);
      } else {
        setDessertTitle(response.data.recipes[0].title);
        setDessertImage(response.data.recipes[0].image);
        setDessertSummary(response.data.recipes[0].summary);
        setDessertPrice(response.data.recipes[0].pricePerServing);
        setDessertCookingTime(response.data.recipes[0].readyInMinutes);
        setDessertServings(response.data.recipes[0].servings);
        setDessertHealthscore(response.data.recipes[0].healthScore);
        setSeeDessertIngredients(response.data.recipes[0].extendedIngredients);
        setSeeDessertInstructions(response.data.recipes[0].analyzedInstructions[0].steps);
        setDisplayDessertCardList(!displayDessertCardList);
        setDisplayDessertCardList(true);
        setChatboxSentence(dataDessert[Math.floor(Math.random() * dataDessert.length)]);
        setDisplayBill(false);
        setFooterTextContent('Bon Appétit !');
      }
    }).catch((error) => {
      if (error.response) {
        setChatboxSentence('Oops server error, try again later !');
        setDisplayStarterCardList(false);
      }
      console.log(error.response.data);
    });
  };

  // Gestion des datas liées aux composants CardDrink et ButtonCardDrink
  const handleClickButtonDrink = () => {
    const cuisineType = window.sessionStorage.getItem('cuisine-type').toLowerCase().replace(/"/g, '');
    // Endpoint pour une boisson aléatoire
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=beverage&apiKey=${apiKey}`).then((response) => {
      if (response.data.recipes.length === 0) {
        setChatboxSentence(`Sorry, there is no ${cuisineType} drink in our database yet!`);
        setDisplayStarterCardList(false);
      } else {
        setDrinkTitle(response.data.recipes[0].title);
        setDrinkImage(response.data.recipes[0].image);
        setDrinkSummary(response.data.recipes[0].summary);
        setDrinkPrice(response.data.recipes[0].pricePerServing);
        setDrinkCookingTime(response.data.recipes[0].readyInMinutes);
        setDrinkServings(response.data.recipes[0].servings);
        setDrinkHealthscore(response.data.recipes[0].healthScore);
        setSeeDrinkIngredients(response.data.recipes[0].extendedIngredients);
        setSeeDrinkInstructions(response.data.recipes[0].analyzedInstructions[0].steps);
        setDisplayDrinkCardList(!displayDrinkCardList);
        setDisplayDrinkCardList(true);
        setChatboxSentence(dataDrink[Math.floor(Math.random() * dataDrink.length)]);
        setDisplayBill(false);
        setFooterTextContent('Bon Appétit !');
      }
    }).catch((error) => {
      if (error.response) {
        setChatboxSentence('Oops server error, try again later !');
        setDisplayStarterCardList(false);
      }
      console.log(error.response.data);
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
      setFooterTextContent('That wasn\'t too expensive !');
      console.log(starterPrice);
    }
  };

  // Gestion des datas liées au composant ButtonJoke
  const handleClickButtonJoke = () => {
    // Endpoint pour une blague aléatoire
    axios.get(`https://api.spoonacular.com/food/jokes/random?&apiKey=${apiKey}`).then((response) => {
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
      <CuisineCardList className="cuisine-card-list" typeOfCuisine={typeOfFoodIsSelected} cuisineChoice={handleChangeCuisine} />
      {typeOfFoodIsSelected ? (
        <div className="button-list">
          <ButtonStarter className="button-starter" handleRandomStarter={handleClickButtonStarter} />
          <ButtonMainCourse className="button-main-course" handleRandomMainCourse={handleClickButtonMainCourse} />
          <ButtonDessert className="button-dessert" handleRandomDessert={handleClickButtonDessert} />
          <ButtonDrink className="button-drink" handleRandomDrink={handleClickButtonDrink} />
          <ButtonBill className="button-bill" handleDisplayBill={handleDisplayButtonBill} />
          <Chatbox className="chatbox" sentence={chatboxSentence} />
        </div>
      ) : ''}
      <br />
      <div className="cardLists-container">
        {displayStarterCardList ? <CardListStarter className="cardlist-starter" handleStarterImage={starterImage} handleStarterTitle={starterTitle} handleStarterSummary={starterSummary} handleStarterPrice={starterPrice} handleStarterIngredients={seeStarterIngredients} handleStarterInstructions={seeStarterInstructions} handleStarterCookingTime={starterCookingTime} handleStarterServings={starterServings} handleStarterHealthscore={starterHealthscore} /> : '' }
        {displayMainCourseCardList ? <CardListMainCourse className="cardlist-main-course" handleMainCourseImage={mainCourseImage} handleMainCourseTitle={mainCourseTitle} handleMainCourseSummary={mainCourseSummary} handleMainCoursePrice={mainCoursePrice} handleMainCourseIngredients={seeMainCourseIngredients} handleMainCourseInstructions={seeMainCourseInstructions} handleMainCourseCookingTime={mainCourseCookingTime} handleMainCourseServings={mainCourseServings} handleMainCourseHealthscore={mainCourseHealthscore} /> : '' }
        {displayDessertCardList ? <CardListDessert className="cardlist-dessert" handleDessertImage={dessertImage} handleDessertTitle={dessertTitle} handleDessertSummary={dessertSummary} handleDessertPrice={dessertPrice} handleDessertIngredients={seeDessertIngredients} handleDessertInstructions={seeDessertInstructions} handleDessertCookingTime={dessertCookingTime} handleDessertServings={dessertServings} handleDessertHealthscore={dessertHealthscore} /> : '' }
        {displayDrinkCardList ? <CardListDrink className="cardlist-drink" handleDrinkImage={drinkImage} handleDrinkTitle={drinkTitle} handleDrinkSummary={drinkSummary} handleDrinkPrice={drinkPrice} handleDrinkIngredients={seeDrinkIngredients} handleDrinkInstructions={seeDrinkInstructions} handleDrinkCookingTime={drinkCookingTime} handleDrinkServings={drinkServings} handleDrinkHealthscore={drinkHealthscore} /> : '' }
      </div>
      {displayBill ? (
        <>
          <Bill className="bill" handleStarterTitle={starterTitle} handleStarterPrice={starterPrice} handleMainCourseTitle={mainCourseTitle} handleMainCoursePrice={mainCoursePrice} handleDessertTitle={dessertTitle} handleDessertPrice={dessertPrice} handleDrinkTitle={drinkTitle} handleDrinkPrice={drinkPrice} />
          <ButtonJoke className="button-joke" handleRandomJoke={handleClickButtonJoke} />
        </>
      ) : ''}
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
