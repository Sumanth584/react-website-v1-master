import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Hub Locations across the country!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Pheonix Hub Location'
              label='Apply now'
              path='/Products'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Bloomington Hub Location'
              label='Apply now'
              path='/Products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Atlanta Hub Location'
              label='Apply now'
              path='/Products'
            />
            <CardItem
              src='images/img-13.jpg'
              text='State Farm RDC Location'
              label='Apply now'
              path='/Products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Dallas Hub Location'
              label='Apply now'
              path='/Products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
