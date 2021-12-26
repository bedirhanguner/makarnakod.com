import React, {useEffect, useState} from 'react'
import './ProblemPage.css';
import Navbar from '../../Navbar/Navbar';
import EditorLayout from '../Editor/EditorLayout';
import getBackendURL from '../../../helpers/getURL';

function Problems() {
    useEffect(() => {
        fetchItems();
    }, [])

    const[items, setItems] = useState([]);

    const fetchItems = async()=>{
        const data = await fetch(getBackendURL()+'/algoritma/ucbes');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <>
            <Navbar />
            {
                items.map(item =>{return(
                    <div className='problem'>
                    <div className='problem__description__wrapper'>
                        <div className='problem__info__wrapper'>
                            <h1> {item.name} </h1>
                            <h3> {item.level}, {item.difficulty}</h3> 
                        </div>
                        <div className='problem__description__content'>
                            <div className='problem__description__text'>
                                {item.description}

                                {item.examples.map((example, index) => {
                                    return (
                                        <div>
                                            <br/> <p>örnek {index+1}:</p><br/>
                                            <div className='problem__description__text__example'>
                                                {example}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='problem__solution__wrapper'>
                        <EditorLayout />
                    </div>
                </div>
                )})
            }
        </>
    );
}

export default Problems;