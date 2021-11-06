import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          
          <div className='cards__item__info'>
            <h2 className='cards__item__text'>{props.text}</h2>
            <h5 className='label'>{props.label}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;