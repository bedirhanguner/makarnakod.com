import React from 'react';
import { Link } from 'react-router-dom';

function ProblemRow(props) {
  return (
    <>
      <div className='row_item'>
        <Link className='row_item_link' to={props.path}>
          <div className='row_item_info'>
            <div className='row_item_text'>{props.text}</div>
            <div className='row_item_level'>{props.level}</div>
            <div className='row_item_difficulty'>{props.difficulty}</div>
            <div className='row_item_acceptance'>{props.acceptance}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProblemRow;