import React, { useEffect, useState } from 'react'
import './ProblemRow.css';
import ProblemRow from './ProblemRow';
import Checkbox from '../../Checkbox/Checkbox';
import getBackendURL from '../../../helpers/getURL';

function ProblemsPage(props) {

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
        <div className='dashboard_info_header'> {props.domain} </div>
        <div className='dashboard_info_desc'>{props.domain} sorularına göz at</div>
      </div>

      <div className='dashboard_container'>
        <div className='dashboard_wrapper'>
        <div className='row_item_header'>
            <div className='row_item_text'><h4>soru</h4></div>
            <div className='row_item_text_other'><h4>seviye</h4></div>
            <div className='row_item_text_other'><h4>zorluk</h4></div>
            <div className='row_item_text_other'><h4>başarı oranı</h4></div>
          </div>
          <div className='horizontal'> <hr/> </div>
          {problem.map((example) => {
            return (
              <ProblemRow
                text={example.displayname}
                difficulty={example.difficulty}
                level={example.level}
                acceptance={example.acceptance}
                path={'/'+address+'/'+example.name}
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

export default ProblemsPage;