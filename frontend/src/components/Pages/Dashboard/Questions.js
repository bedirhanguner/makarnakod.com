import React from 'react';
import './Dashboard.css';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';

function Questions(props) {
  return (
    <> 
        <Link className='subject__items' to={props.path}>
            <div className='subject__items__header'>
                {props.text}
            </div>
            <div className='subject__items__rate'>
                {props.rate}
            </div>
            <div className='subject__items__button'>
                <Button
                buttonStyle='btn--rounded--black'
                buttonSize='btn--large'
                >
                soruları gör
                </Button>
            </div>
        </Link>
    </>
  );
}

export default Questions;