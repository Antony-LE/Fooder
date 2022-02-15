/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './main.css';
import axios from 'axios';
import ButtonStarter from '../ButtonStarter/ButtonStarter';
import CardListStarter from '../CardListStarter/CardListStarter';
import CardListMainCourse from '../CardListMainCourse/CardListMainCourse';
import ButtonMainCourse from '../ButtonMainCourse/ButtonMainCourse';
import ButtonDessert from '../ButtonDessert/ButtonDessert';
import CardListDessert from '../CardListDessert/CardListDessert';
import ButtonDrink from '../ButtonDrink/ButtonDrink';
import CardListDrink from '../CardListDrink/CardListDrink';
import Footer from '../Footer/Footer';
import Chatbox from '../Chatbox/Chatbox';
import Bill from '../Bill/Bill';
import ButtonBill from '../ButtonBill/ButtonBill';

function Main({ className }) {
  const [starterTitle, setStarterTitle] = useState('');
  const [starterImage, setStarterImage] = useState('');
  const [starterSummary, setStarterSummary] = useState('');
  const [starterPrice, setStarterPrice] = useState('');
  const [displayStarterCardList, setDisplayStarterCardList] = useState(false);

  const [mainCourseTitle, setMainCourseTitle] = useState('');
  const [mainCourseImage, setMainCourseImage] = useState('');
  const [mainCourseSummary, setMainCourseSummary] = useState('');
  const [mainCoursePrice, setMainCoursePrice] = useState('');
  const [displayMainCourseCardList, setDisplayMainCourseCardList] = useState(false);

  const [dessertTitle, setDessertTitle] = useState('');
  const [dessertImage, setDessertImage] = useState('');
  const [dessertSummary, setDessertSummary] = useState('');
  const [dessertPrice, setDessertPrice] = useState('');
  const [displayDessertCardList, setDisplayDessertCardList] = useState(false);

  const [drinkTitle, setDrinkTitle] = useState('');
  const [drinkImage, setDrinkImage] = useState('');
  const [drinkSummary, setDrinkSummary] = useState('');
  const [drinkPrice, setDrinkPrice] = useState('');
  const [displayDrinkCardList, setDisplayDrinkCardList] = useState(false);

  const [chatboxSentence, setChatboxSentence] = useState('What would you like to eat Madam/Sir?');
  const [displayBill, setDisplayBill] = useState(false);
  const [footerTextContent, setFooterTextContent] = useState('Bon appétit !');

  const apiKey = 'c0d15de7e0bd47eeb023b186b7c521a1';
  const baseUrlStarter = `https://api.spoonacular.com/recipes/random?number=1&type=soup,salad&apiKey=${apiKey}`;
  const baseUrlMainCourse = `https://api.spoonacular.com/recipes/random?number=1&tags=main%20course&apiKey=${apiKey}`;
  const baseUrlDessert = `https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${apiKey}`;
  const baseUrlDrink = `https://api.spoonacular.com/recipes/random?number=1&tags=drink&apiKey=${apiKey}`;

  const handleClickButtonStarter = async () => {
    await axios.get(baseUrlStarter).then((response) => {
      setStarterTitle(response.data.recipes[0].title);
      setStarterImage(response.data.recipes[0].image);
      setStarterSummary(response.data.recipes[0].summary);
      setStarterPrice(response.data.recipes[0].pricePerServing);
      setDisplayStarterCardList(!displayStarterCardList);
      setDisplayStarterCardList(true);
      setChatboxSentence('I had the same yesterday it was wonderful...');
      setChatboxSentence('Excellent choice Sir ! May I suggest a main course to go along with your Starter ?');
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  const handleClickButtonMainCourse = async () => {
    await axios.get(baseUrlMainCourse).then((response) => {
      setMainCourseTitle(response.data.recipes[0].title);
      setMainCourseImage(response.data.recipes[0].image);
      setMainCourseSummary(response.data.recipes[0].summary);
      setMainCoursePrice(response.data.recipes[0].pricePerServing);
      setDisplayMainCourseCardList(!displayMainCourseCardList);
      setDisplayMainCourseCardList(true);
      setChatboxSentence(`${mainCourseTitle} : the best dish ever !`);
      setChatboxSentence('A moment on the lips, forever on the hips !');
      setChatboxSentence('You\'ll never forget the taste of it... !');
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  const handleClickButtonDessert = async () => {
    await axios.get(baseUrlDessert).then((response) => {
      setDessertTitle(response.data.recipes[0].title);
      setDessertImage(response.data.recipes[0].image);
      setDessertSummary(response.data.recipes[0].summary);
      setDessertPrice(response.data.recipes[0].pricePerServing);
      setDisplayDessertCardList(!displayDessertCardList);
      setDisplayDessertCardList(true);
      setChatboxSentence('Too much sugar is not good for your health...');
      setChatboxSentence('Are you sure ? I thought you were on a diet?');
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
    });
  };

  const handleDisplayButtonBill = () => {
    setDisplayBill(!displayBill);
    setChatboxSentence('We hope that you enjoyed your meal and hope to see you soon!');
    setFooterTextContent('Thank you, hope to see you soon !');
  };

  const handleClickButtonDrink = async () => {
    await axios.get(baseUrlDrink).then((response) => {
      setDrinkTitle(response.data.recipes[0].title);
      setDrinkImage(response.data.recipes[0].image);
      setDrinkSummary(response.data.recipes[0].summary);
      setDrinkPrice(response.data.recipes[0].pricePerServing);
      setDisplayDrinkCardList(!displayDrinkCardList);
      setDisplayDrinkCardList(true);
      setChatboxSentence('Be careful you have to drive back home !');
      setChatboxSentence('Nop I won\'t drive you home sorry!');
      setChatboxSentence('Sure but only one glass ok??');
      setDisplayBill(false);
      setFooterTextContent('Bon Appétit !');
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
      {displayStarterCardList ? <CardListStarter className="cardlist-starter" handleStarterImage={starterImage} handleStarterTitle={starterTitle} handleStarterSummary={starterSummary} handleStarterPrice={starterPrice} /> : '' }
      {displayMainCourseCardList ? <CardListMainCourse className="cardlist-main-course" handleMainCourseImage={mainCourseImage} handleMainCourseTitle={mainCourseTitle} handleMainCourseSummary={mainCourseSummary} handleMainCoursePrice={mainCoursePrice} /> : '' }
      {displayDessertCardList ? <CardListDessert className="cardlist-dessert" handleDessertImage={dessertImage} handleDessertTitle={dessertTitle} handleDessertSummary={dessertSummary} handleDessertPrice={dessertPrice} /> : '' }
      {displayDrinkCardList ? <CardListDrink className="cardlist-drink" handleDrinkImage={drinkImage} handleDrinkTitle={drinkTitle} handleDrinkSummary={drinkSummary} handleDrinkPrice={drinkPrice} /> : '' }
      {displayBill ? <Bill className="bill" handleStarterTitle={starterTitle} handleStarterPrice={starterPrice} handleMainCourseTitle={mainCourseTitle} handleMainCoursePrice={mainCoursePrice} handleDessertTitle={dessertTitle} handleDessertPrice={dessertPrice} handleDrinkTitle={drinkTitle} handleDrinkPrice={drinkPrice} /> : '' }
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
