import React, { useEffect, useState } from 'react'
import './ProblemRow.css';
import KitProblemsRow from './KitProblemsRow';
import getBackendURL from '../../../helpers/getURL';

function KitProblemsPage(props) {

    const [problem, setProblem] = useState([]);
    const address = props.address;
    const [searchTerm, setSearchTerm] = useState('');
    const [difficulties, setDifficulties] = useState({
    diffs:['kolay', 'orta', 'zor'],
  });
  const [levels, setLevels] = useState({
    lvls:['baslangic', 'ileri', 'uzman'],
  });
  
  const handleDifficulty = (e) => {
    const { value, checked } = e.target;
    const { diffs } = difficulties;
    if (!checked) {
      setDifficulties({
        diffs: diffs.filter((e) => e !== value),  
      });
    }else {
      setDifficulties({
        diffs: [...diffs, value],
      });
    }
  };

  const handleLevels = (e) => {
    const { value, checked } = e.target;
    const { lvls } = levels;

    if (!checked) {
      setLevels({
        lvls: lvls.filter((e) => e !== value),  
      });
    }else {
      setLevels({
        lvls: [...lvls, value],
      });
    }
  };

  function filterForCheckBoxes(val){
    if(val.difficulty === difficulties.diffs[0])
    {
        if(val.level === levels.lvls[0] || val.level === levels.lvls[1] || val.level === levels.lvls[2])
      {
        return val;
      }
    }
    if(val.difficulty === difficulties.diffs[1])
    {
        if(val.level === levels.lvls[0] || val.level === levels.lvls[1] || val.level === levels.lvls[2])
      {
        return val;
      }
    }

    if(val.difficulty === difficulties.diffs[2])
    {
        if(val.level === levels.lvls[0] || val.level === levels.lvls[1] || val.level === levels.lvls[2])
      {
        return val;
      }
    }
  }

  function filterProblems(val) {
    
    if (searchTerm === '') {
      return filterForCheckBoxes(val);
    }
    else if (val.displayname.toLowerCase().includes(searchTerm.toLowerCase())) {
      return filterForCheckBoxes(val);
    }
  }

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
        {problem.filter(filterProblems).map((example) => {
            return (
              <KitProblemsRow key={example._id}
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
           <div  className='checkbox_options_items'>
            <input className='search__primary' type="text" placeholder="sorularda ara..." onChange={(e) => {setSearchTerm(e.target.value)}}/>
            <h4 className='checkbox_options_header'>zorluk</h4>

            <div className='checkbox-container'>
                <input type="checkbox" id="kolay" name="kolay" defaultChecked={true} value="kolay" onChange={handleDifficulty}/>
                <span className="checkmark"></span>
                kolay
            </div>

              <div className='checkbox-container'>
                <input type="checkbox" id="orta" name="orta" defaultChecked={true} value="orta" onChange={handleDifficulty}/>
                <span className="checkmark"></span>
                orta
            </div>

            <div className='checkbox-container'>
                <input type="checkbox" id="zor>" name="zor" defaultChecked={true} value="zor" onChange={handleDifficulty}/>
                <span className="checkmark"></span>
                zor
            </div>

            <div className='horizontal_short'> <hr/> </div>

            <h4 className='checkbox_options_header'>seviye</h4>

            <div className='checkbox-container'>
                <input type="checkbox" id="baslangic>" name="baslangic" defaultChecked={true} value="baslangic" onChange={handleLevels}/>
                <span className="checkmark"></span>
                başlangıç
            </div>

            <div className='checkbox-container'>
                <input type="checkbox" id="ileri>" name="ileri" value="ileri" defaultChecked={true} onChange={handleLevels}/>
                <span className="checkmark"></span>
                ileri
            </div>

            <div className='checkbox-container'>
                <input type="checkbox" id="uzman>" name="uzman" value="uzman" defaultChecked={true} onChange={handleLevels}/>
                <span className="checkmark"></span>
                uzman
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitProblemsPage;