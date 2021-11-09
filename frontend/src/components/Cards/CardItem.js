import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <div className='cards__item__text'><h4>{props.text}</h4></div>
            <div className='cards__item__level'><h5>{props.level}</h5></div>
            <div className='cards__item__difficulty'><h5>{props.difficulty}</h5></div>
            <div className='cards__item__acceptance'><h5>{props.acceptance}</h5></div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;