import React from 'react';

import './Cards.css';
import CardItem from './CardItem';
import { Button } from '../Button/Button';
import { Searchbar } from '../Searchbar/Searchbar';


function Cards() {
  return (
    <div className='cards'>
      <div className="info">
        <h1> anasayfa </h1>
        <h3>sorulara göz at</h3>
      </div>

      <div className='subjectSelectors'>
        <Button buttonStyle='btn--rounded'><i class="fas fa-bolt"></i> tüm konular</Button>
        <Button buttonStyle='btn--rounded'><i class="fas fa-code"></i> algoritma</Button>
        <Button buttonStyle='btn--rounded'><i class="fas fa-database"></i> veritabanı</Button>
        <Button buttonStyle='btn--rounded'><i class="fas fa-terminal"></i> betik</Button>
        <Button buttonStyle='btn--rounded'><i class="fas fa-sitemap"></i> veri yapıları</Button>
        <Searchbar></Searchbar>
      <div className='horizontal'> <hr/> </div>
      </div>

      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <CardItem
            text='longest common prefix'
            label='Easy'
            path='/services'
          />
          <CardItem
            text='letter combinations of a phone number'
            label='Medium'
            path='/services'
          />
          <CardItem
            text='median of two sorted arrays'
            label='Hard'
            path='/services'
          />
          <CardItem
            text='reverse integer'
            label='Medium'
            path='/products'
          />
          <CardItem
            text='merge two sorted lists'
            label='Easy'
            path='/services'
          />
          <CardItem
            text='remove duplicates from sorted array'
            label='Easy'
            path='/products'
          />
          <CardItem
            text='combination sum'
            label='Medium'
            path='/services'
          />
          <CardItem
            text='palindrome number'
            label='Easy'
            path='/products'
          />
        </div>
      </div>
      
      <div className='options__container'>
        <div className='options__wrapper'>
          <div className='checkbox'>
            <input type="checkbox" id="easy" name="easy" value="easy"  />başlangıç
          </div>
          <div className='checkbox'>
            <input type="checkbox" id="medium" name="medium" value="medium" />orta
          </div>
          <div className='checkbox'>
            <input type="checkbox" id="zor" name="zor" value="zor" />ileri
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Cards;