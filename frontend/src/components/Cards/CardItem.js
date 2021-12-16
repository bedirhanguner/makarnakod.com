import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <div className='cards__item__text'>{props.text}</div>
            <div className='cards__item__level'>{props.level}</div>
            <div className='cards__item__difficulty'>{props.difficulty}</div>
            <div className='cards__item__acceptance'>{props.acceptance}</div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;