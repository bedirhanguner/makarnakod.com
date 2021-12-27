import React, { useEffect, useState } from 'react'
import '../../Cards/Cards.css';
import CardItem from '../../Cards/CardItem';
import Checkbox from '../../Checkbox/Checkbox';
import getBackendURL from '../../../helpers/getURL';

function Algorithm() {
    useEffect(() => {
        fetchProblem();
    }, [])

    const [problem, setProblem] = useState([]);
    const fetchProblem = async () => {
        const requestOptions = {
            method: "GET",
        };
        const data = await fetch(getBackendURL() + '/algoritma', requestOptions);
        const problem = await data.json();
        setProblem(problem);
    }

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
          {problem.map((example) => {
            return (
              <CardItem
              text={example.displayname}
              difficulty={example.difficulty}
              level={example.level}
              acceptance={example.acceptance}
              path={'/algoritma/'+example.name}
              />  
              )
            })
          }
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
          id='baslangic'
          value='baslangic'
          name='baslangic'
          text='başlangıç'/>

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