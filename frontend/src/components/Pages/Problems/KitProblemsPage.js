import React, { useEffect, useState } from 'react'
import './ProblemRow.css';
import KitProblemsRow from './KitProblemsRow';
import Checkbox from '../../Checkbox/Checkbox';
import getBackendURL from '../../../helpers/getURL';

function KitProblemsPage(props) {

    const [problem, setProblem] = useState([]);
    const address = props.address;

    useEffect(() => {
      const fetchProblem = async () => {
        const requestOptions = {
            method: "GET",
        };
        const data = await fetch(getBackendURL() + '/'+ address, requestOptions);
        const problem = await data.json();
        setProblem(problem);
      };  
      fetchProblem();
    }, [address])

   

  return (
    <div className='dashboard'>
      <div className="dashboard_info">
        <h1> {props.domain} </h1>
        <h3>{props.domain} kiti ile kendizi geliştirin</h3>
      </div>

      <div className='dashboard_container'>
        <div className='dashboard_wrapper'>
          {problem.map((example) => {
            return (
              <KitProblemsRow
                text={example.displayname}
                difficulty={example.difficulty}
                level={example.level}
                acceptance={example.acceptance}
                path={'/'+ address +'/'+example.name}
              />  
              )
            })
          }
        </div>
      </div>
      
      <div className='checkbox_options_container'>
        <div className='checkbox_options_wrapper'>
          <h4 className='checkbox_options_items'>zorluk</h4>
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

        <div className='horizontal_short'> <hr/> </div>

        <h4 className='checkbox_options_items'>seviye</h4>
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

export default KitProblemsPage;