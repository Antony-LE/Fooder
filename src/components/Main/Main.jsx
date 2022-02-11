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

  const [mainCourseTitle, setMainCourseTitle] = useState('');
  const [mainCourseImage, setMainCourseImage] = useState('');

  const [dessertTitle, setDessertTitle] = useState('');
  const [dessertImage, setDessertImage] = useState('');

  const [drinkTitle, setDrinkTitle] = useState('');
  const [drinkImage, setDrinkImage] = useState('');

  const apiKey = 'c0d15de7e0bd47eeb023b186b7c521a1';
  const baseUrlStarter = `https://api.spoonacular.com/recipes/random?number=1&type=soup,salad&apiKey=${apiKey}`;
  const baseUrlMainCourse = `https://api.spoonacular.com/recipes/random?number=1&tags=main%20course&apiKey=${apiKey}`;
  const baseUrlDessert = `https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${apiKey}`;
  const baseUrlDrink = `https://api.spoonacular.com/recipes/random?number=1&tags=drink&apiKey=${apiKey}`;

  const handleClickButtonStarter = async () => {
    await axios.get(baseUrlStarter).then((response) => {
      setStarterTitle(response.data.recipes[0].title);
      setStarterImage(response.data.recipes[0].image);
    });
  };

  const handleClickButtonMainCourse = async () => {
    await axios.get(baseUrlMainCourse).then((response) => {
      setMainCourseTitle(response.data.recipes[0].title);
      setMainCourseImage(response.data.recipes[0].image);
    });
  };

  const handleClickButtonDessert = async () => {
    await axios.get(baseUrlDessert).then((response) => {
      setDessertTitle(response.data.recipes[0].title);
      setDessertImage(response.data.recipes[0].image);
    });
  };

  const handleClickButtonDrink = async () => {
    await axios.get(baseUrlDrink).then((response) => {
      setDessertTitle(response.data.recipes[0].title);
      setDessertImage(response.data.recipes[0].image);
    });
  };

  return (
    <main className={className}>
      <ButtonStarter className="button-starter" handleRandomStarter={handleClickButtonStarter} />
      <ButtonMainCourse className="button-main-course" handleRandomMainCourse={handleClickButtonMainCourse} />
      <ButtonDessert className="button-dessert" handleRandomDessert={handleClickButtonDessert} />
      <ButtonDrink className="button-drink" handleRandomDrink={handleClickButtonDrink} />
      <CardListStarter className="cardlist-starter" handleStarterImage={starterImage} handleStarterTitle={starterTitle} />
      <CardListMainCourse className="cardlist-main-course" handleMainCourseImage={mainCourseImage} handleMainCourseTitle={mainCourseTitle} />
      <CardListDessert className="cardlist-dessert" handleDessertImage={dessertImage} handleDessertTitle={dessertTitle} />
      <CardListDrink className="cardlist-drink" handleDrinkImage={drinkImage} handleDrinkTitle={drinkTitle} />
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
