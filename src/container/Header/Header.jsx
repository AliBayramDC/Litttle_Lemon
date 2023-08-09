import React from 'react'

import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title= 'Little Lemon' />
      <h1 className='app__header_h1' style={{fontSize: '40px', marginTop: '-15px'}}>Chicago</h1>
      <p className='p__markazi-v2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br> Sed blandit libero eu turpis eleifend, a vulnērabilitate ut enim faucibus. Nunc tristique eleifend diam, eu convallis mauris convallis id.</p>
      <button type='button' className='custom__button'><a href="#reservation">Reserve Table</a></button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.restauranfood} alt='restauranfood' />

    </div>
  </div>
)

export default Header