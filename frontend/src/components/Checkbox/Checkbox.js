import React from 'react';
import './Checkbox.css';

function Checkbox(props) {
    return (
    //   <div className='checkbox'>
    //   <input type="checkbox" id={props.id} name={props.name} value={props.value} /> {props.text}
    //   </div>

    <div className='container'>
        <input type="checkbox" id={props.id} name={props.name} value={props.value} />
        <span class="checkmark"></span>
        {props.text}
    </div>
    );
  }
export default Checkbox;