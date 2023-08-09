import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className="menu" id='menu'>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Menu;
