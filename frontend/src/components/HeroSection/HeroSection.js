import React from 'react';
import {Link} from 'react-scroll'
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero_container'>
      <img src='../images/home.png' alt='home'/>
      <h1 className='container_header'>makarnakod.com</h1>
      <p className='container_explanation'>kodlamaya başla</p>
      <div className='hero_btns'>
      <Link to='navbar' spy={true} smooth={true}>
        <Button
          className='btns'
          buttonStyle='btn_outline_black'
          buttonSize='btn_large'
        >
          <i className='fas fa-angle-down' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;