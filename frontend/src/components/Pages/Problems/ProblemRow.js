import React from 'react';
import { Link } from 'react-router-dom';

function ProblemRow(props) {
  return (
    <>
      <div className='row_item'>
        {props ? <>
          <Link  to={props.path}>
          <div className='row_item_info'>
            <div className='row_item_text'>{props.text}</div>
            <div className='row_item_text_other'>{props.level}</div>
            <div className='row_item_text_other'>{props.difficulty}</div>
            <div className='row_item_text_other'>{props.acceptance}</div>
          </div>
        </Link>
        </>
        :
          console.log("test")
        }
        
      </div>
    </>
  );
}

export default ProblemRow;