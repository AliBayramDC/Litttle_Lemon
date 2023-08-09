import React from 'react'

import { Header } from './container';

import { Navbar } from './components';
import { Menu } from './components';
import { TestimonialSection } from './components';
import { AboutUs } from './components';
import { Footer } from './components';
import { ScrollToTopButton } from './components';
import { ReservationSection } from './components';
import './App.css';

const menuItems = [
  {
    name: 'Dürüm',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. ',
    price: 'Price: 10.99$',
    imageUrl: 'durum.jpeg',
  },
  {
    name: 'Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua',
    price: 'Price: 20.99$',
    imageUrl: 'sushi.jpg',
  },
  {
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua',
    price: 'Price: 10.99$',
    imageUrl: 'pizza.jpg',
  },
  {
    name: 'Pasta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua',
    price: 'Price: 12.99',
    imageUrl: 'pasta.webp',
  },
  {
    name: 'Mazarella',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua',
    price: 'Price: 10.99',
    imageUrl: 'mazarella.webp',
  },
  {
    name: 'Kebab',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua. labore et dolore magna aliqua',
    price: 'Price: 12.99',
    imageUrl: 'kebab.jpg',
  },
  // ... add more items
];


const App = () => (
    <div>
      <Navbar />
      <Header />
      <ScrollToTopButton />
      <p className='p__markazi-v3'>This Week Specials!</p>
      <Menu items={menuItems} />
      <TestimonialSection />
      <AboutUs />
      <ReservationSection />
      <Footer />
    </div>
)

export default App