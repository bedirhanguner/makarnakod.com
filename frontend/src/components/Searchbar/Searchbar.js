import React from 'react';
import './Searchbar.css';
export const Searchbar = ({
    type,
    onClick,
}) => {
    return (
        <input className='search__primary' type="text" placeholder="sorularda ara..." name="search"></input>
    )
}
