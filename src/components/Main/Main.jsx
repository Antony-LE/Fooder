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

function Main({ className }) {
  const [starterTitle, setStarterTitle] = useState('');
  const [starterImage, setStarterImage] = useState('');
  const [displayStarterCardList, setDisplayStarterCardList] = useState(false);

  const [mainCourseTitle, setMainCourseTitle] = useState('');
  const [mainCourseImage, setMainCourseImage] = useState('');
  const [displayMainCourseCardList, setDisplayMainCourseCardList] = useState(false);

  const [dessertTitle, setDessertTitle] = useState('');
  const [dessertImage, setDessertImage] = useState('');
  const [displayDessertCardList, setDisplayDessertCardList] = useState(false);

  const [drinkTitle, setDrinkTitle] = useState('');
  const [drinkImage, setDrinkImage] = useState('');
  const [displayDrinkCardList, setDisplayDrinkCardList] = useState(false);

  const apiKey = 'c0d15de7e0bd47eeb023b186b7c521a1';
  const baseUrlStarter = `https://api.spoonacular.com/recipes/random?number=1&type=soup,salad&apiKey=${apiKey}`;
  const baseUrlMainCourse = `https://api.spoonacular.com/recipes/random?number=1&tags=main%20course&apiKey=${apiKey}`;
  const baseUrlDessert = `https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${apiKey}`;
  const baseUrlDrink = `https://api.spoonacular.com/recipes/random?number=1&tags=drink&apiKey=${apiKey}`;

  const handleClickButtonStarter = async () => {
    await axios.get(baseUrlStarter).then((response) => {
      setStarterTitle(response.data.recipes[0].title);
      setStarterImage(response.data.recipes[0].image);
      setDisplayStarterCardList(!displayStarterCardList);
    });
  };

  const handleClickButtonMainCourse = async () => {
    await axios.get(baseUrlMainCourse).then((response) => {
      setMainCourseTitle(response.data.recipes[0].title);
      setMainCourseImage(response.data.recipes[0].image);
      setDisplayMainCourseCardList(!displayMainCourseCardList);
    });
  };

  const handleClickButtonDessert = async () => {
    await axios.get(baseUrlDessert).then((response) => {
      setDessertTitle(response.data.recipes[0].title);
      setDessertImage(response.data.recipes[0].image);
      setDisplayDessertCardList(!displayDessertCardList);
    });
  };

  const handleClickButtonDrink = async () => {
    await axios.get(baseUrlDrink).then((response) => {
      setDrinkTitle(response.data.recipes[0].title);
      setDrinkImage(response.data.recipes[0].image);
      setDisplayDrinkCardList(!displayDrinkCardList);
    });
  };

  return (
    <main className={className}>
      <ButtonStarter className="button-starter" handleRandomStarter={handleClickButtonStarter} />
      <ButtonMainCourse className="button-main-course" handleRandomMainCourse={handleClickButtonMainCourse} />
      <ButtonDessert className="button-dessert" handleRandomDessert={handleClickButtonDessert} />
      <ButtonDrink className="button-drink" handleRandomDrink={handleClickButtonDrink} />
      {displayStarterCardList ? <CardListStarter className="cardlist-starter" handleStarterImage={starterImage} handleStarterTitle={starterTitle} /> : '' }
      {displayMainCourseCardList ? <CardListMainCourse className="cardlist-main-course" handleMainCourseImage={mainCourseImage} handleMainCourseTitle={mainCourseTitle} /> : '' }
      {displayDessertCardList ? <CardListDessert className="cardlist-dessert" handleDessertImage={dessertImage} handleDessertTitle={dessertTitle} /> : '' }
      {displayDrinkCardList ? <CardListDrink className="cardlist-drink" handleDrinkImage={drinkImage} handleDrinkTitle={drinkTitle} /> : '' }
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