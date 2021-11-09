import React from 'react';
import {Link} from 'react-scroll'
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='../images/home2.png' alt='home'/>
      <h1 className='container-header'>makarnakod.com</h1>
      <p className='container-explanation'>kodlamaya başla</p>
      <div className='hero-btns'>
      <Link to='navbar' spy={true} smooth={true}>
        <Button
          className='btns'
          buttonStyle='btn--outline--black'
          buttonSize='btn--large'
        >
          <i className='fas fa-angle-down' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;