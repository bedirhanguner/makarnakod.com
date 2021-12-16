import React from 'react';

import '../../Cards/Cards.css';
import CardItem from '../../Cards/CardItem';
import { Button } from '../../Button/Button';
import { Searchbar } from '../../Searchbar/Searchbar';
import Checkbox from '../../Checkbox/Checkbox';

function Algorithm() {
  return (
    <div className='cards'>
      <div className="info">
        <h1> algoritma </h1>
        <h3>algoritma sorularına göz at</h3>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
        <div className='cards__item__header'>
            <div className='cards__item__text'><h4>soru</h4></div>
            <div className='cards__item__level'><h4>seviye</h4></div>
            <div className='cards__item__difficulty'><h4>zorluk</h4></div>
            <div className='cards__item__acceptance'><h4>başarı oranı</h4></div>
          </div>
          <div className='horizontal'> <hr/> </div>
          <CardItem
            text='üçbeş'
            difficulty='kolay'
            level='temel'
            acceptance='%95,8'
            path='/algoritma/ucbes'
          />
          <CardItem
            text='en uzun ek'
            difficulty='kolay'
            level='temel'
            acceptance='%72,8'
            path='/sorular'
          />
          <CardItem
            text='sayıdan roma rakamına çevirme'
            difficulty='kolay'
            level='orta'
            acceptance='%51,0'
            path='/sorular'
          />
          <CardItem
            text='telefon numarasındaki kombinasyonlar'
            difficulty='medium'
            level='temel'
            acceptance='%61,7'
            path='/sorular'
          />
          <CardItem
            text='iki sıralı dizinin medyanı'
            difficulty='orta'
            level='orta'
            acceptance='%72,8'
            path='/sorular'
          />
          <CardItem
            text='sayının tersi'
            difficulty='zor'
            level='temel'
            acceptance='%55,1'
            path='/sorular'
          />
          <CardItem
            text='sıralı dizideki tekrar edenleri kaldırma'
            difficulty='orta'
            level='ileri'
            acceptance='%72,8'
            path='/sorular'
          />
          <CardItem
            text='palindrom sayı'
            difficulty='kolay'
            level='temel'
            acceptance='%72,8'
            path='/sorular'
          />
        </div>
      </div>
      
      <div className='options__container'>
        <div className='options__wrapper'>
          <h4 className='options__items'>zorluk</h4>
          <Checkbox 
          id='kolay'
          value='kolay'
          name='kolay'
          text='kolay'/>

          <Checkbox 
          id='orta'
          value='orta'
          name='orta'
          text='orta'/>

          <Checkbox 
          id='zor'
          value='zor'
          name='zor'
          text='zor'/>

        <div className='horizontal2'> <hr/> </div>

        <h4 className='options__items'>seviye</h4>
          <Checkbox 
          id='temel'
          value='temel'
          name='temel'
          text='temel'/>

          <Checkbox 
          id='orta'
          value='orta'
          name='orta'
          text='orta'/>

          <Checkbox 
          id='ileri'
          value='ileri'
          name='ileri'
          text='ileri'/>
         
        </div>
      </div>
    </div>
  );
}

export default Algorithm;