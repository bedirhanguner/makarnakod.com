import React from 'react';
import './Searchbar.css';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--outline--black', 'btn--rounded'];

// const SIZES = ['btn--medium', 'btn--large'];
// export const Button = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize
// }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

export const Searchbar = ({
    type,
    onClick,
}) => {
    return (
        /* <Link to='/sign-up' className="btn-mobile">
             <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                 onClick={onClick}
                 type={type}>
                 {children}
             </button>
         </Link>*/

        <input className='primary' type="text" placeholder="sorularda ara..." name="search"></input>
    )
}
