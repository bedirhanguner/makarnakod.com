import React, { useEffect, useState } from 'react'
import './ProblemRow.css';
import KitProblemsRow from './KitProblemsRow';
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
              <KitProblemsRow key={example._id}
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
        <h4 className='checkbox_options_header'>zorluk</h4>
          <div className='checkbox-container'>
              <input type="checkbox" id="kolay" name="kolay" value="kolay"/>
              <span className="checkmark"></span>
              kolay
          </div>

            <div className='checkbox-container'>
              <input type="checkbox" id="orta" name="orta" value="orta"/>
              <span className="checkmark"></span>
              orta
          </div>

          <div className='checkbox-container'>
              <input type="checkbox" id="zor>" name="zor" value="zor"/>
              <span className="checkmark"></span>
              zor
          </div>

          <div className='horizontal_short'> <hr/> </div>

          <h4 className='checkbox_options_header'>seviye</h4>

          <div className='checkbox-container'>
              <input type="checkbox" id="baslangic>" name="baslangic" value="baslangic"/>
              <span className="checkmark"></span>
              başlangıç
          </div>

          <div className='checkbox-container'>
              <input type="checkbox" id="ileri>" name="ileri" value="ileri"/>
              <span className="checkmark"></span>
              ileri
          </div>

          <div className='checkbox-container'>
              <input type="checkbox" id="uzman>" name="uzman" value="uzman"/>
              <span className="checkmark"></span>
              uzman
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default KitProblemsPage;