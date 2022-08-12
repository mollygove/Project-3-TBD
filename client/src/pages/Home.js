import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Margarita from '../images/margarita.jpg'
import OldFashion from '../images/oldfashion.jpg'
import Martini from '../images/martini.jpg'
import LongIslandTea from '../images/longislandicetea.jpg'
import Gingerale from '../images/gingerale.jpg'
import VMojito from '../images/viginmojito.jpg'
import Suicide from '../images/suicidenoalcohol.jpg'

import DrinkCard from '../components/DrinkCard';
import ChooseType from '../components/ChooseType';


const drinks = [
  {
      name: 'Margarita',
      description: 'A classic lime cocktail with lime juice, tequila and agave syrup.',
      image: Margarita,
      // category: categories[0]._id,
      price: 7.50,
      quantity: 1
  },
  {
      name: 'Old Fashion',
      description: 'Oldy but goldy drink Traditionally made with bourbon or rye whiskey, lightly sweetened with sugar and aromatised with bitters.',
      image: OldFashion,
      // Option: options[0]._id,
      price: 9.50,
      quantity: 1
  },
  {
      name: 'Martini',
      description: 'a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
      image: Martini,
      // category: categories[0]._id,
      price: 8.75,
      quantity: 1
  },
  {
      name: 'Long Island Ice Tea',
      description: 'Cocktail made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same hue as iced tea.',
      image: LongIslandTea,
      // category: categories[0]._id,
      price: 9.00,
      quantity: 1
  },
  {
      name: 'Suicide',
      description: 'A cup filled to the brim with every single soft drink available at a restaurants soda machine',
      image: Suicide,
      // category: categories[1]._id,
      price: 2.25,
      quantity: 1
  },
  {
      name: 'Ginger ale',
      description: 'A carbonated beverage made with ginger root and a sweetener.',
      image: Gingerale,
      // category: categories[1]._id,
      price: 3.50,
      quantity: 1
  },
  {
      name: 'virgin Mojito',
      description: 'A refreshing drink blend of mint and lemon flavours with no rum',
      image: VMojito,
      // category: categories[1]._id,
      price: 5.75,
      quantity: 1
  },
  // {
  //     name: 'Lavender Lemonade',
  //     description: 'A lavender infused lemonade',
  //     image: 'client/public/Images/lavenderlemonade.jpg',
  //     // category: categories[1]._id,
  //     price: 4.25,
  //     quantity: 1
  // },
  // {
  //     name: 'zombie',
  //     description: 'A famous tropical rum cocktail. It is a tasty blend of rum and fruit juices.',
  //     image: 'client/public/Images/zombiecocktail.jpg',
  //     // category: categories[0]._id,
  //     price: 9.25,
  //     quantity: 1
  // },
  
]




const Home = () => {


  return (
    <main>

<Container>
      <Row>
        <ChooseType />
        <Col xs lg="2">
        {drinks.map((drink) =>  (<DrinkCard drink={drink}/>))}
        </Col>

      </Row>
    </Container>

   
    </main>
  );
};

export default Home;
