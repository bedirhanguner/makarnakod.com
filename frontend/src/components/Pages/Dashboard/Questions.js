import React from 'react';
import './Dashboard.css';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';

function Questions(props) {
  return (
    <> 
        <Link className='subject_items' to={props.path}>
            <div className='subject_items_header'>
                {props.text}
            </div>
            <div className='subject_items_rate'>
                {props.rate}
            </div>
            <div className='subject_items_button'>
                <Button
                buttonStyle='btn_rounded_black'
                buttonSize='btn_large'
                >
                soruları gör
                </Button>
            </div>
        </Link>
    </>
  );
}

export default Questions;