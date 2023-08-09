import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className='p__markazi-v4'>{price}</p>
      <button className="item-button" style={{fontFamily: 'var(--font-alt)', fontSize: '25px'}}>Order Delivery</button>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MenuItem;
