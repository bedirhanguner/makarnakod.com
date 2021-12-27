import React, { useEffect, useState } from 'react'
import './ProblemDescription.css';
import Navbar from '../../Navbar/Navbar';
import EditorLayout from '../Editor/EditorLayout';
import getBackendURL from '../../../helpers/getURL';

function ProblemDescription(props) {
    useEffect(() => {
        fetchProblem();
    }, [])

    const [problem, setProblem] = useState({});
    const fetchProblem = async () => {
        let paths = props.location.pathname.split('/');
        const requestOptions = {
            method: "GET",
        };
        const data = await fetch(getBackendURL() + '/algoritma/' + paths[paths.length - 1], requestOptions);
        const problem = await data.json();
        setProblem(problem);
    }

    return (
        <>
            <Navbar />
            <div className='problem'>
                <div className='problem__description__wrapper'>
                    <div className='problem__info__wrapper'>
                        <h1> {problem.displayname} </h1>
                        <h3> {problem.level}, {problem.difficulty}</h3>
                    </div>
                    <div className='problem__description__content'>
                        <div className='problem__description__text'>
                            {problem.description}

                            {problem.examples && problem.examples.map((example, index) => {
                                return (
                                    <div>
                                        <br /> <p>örnek {index + 1}:</p><br />
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

        </>
    );
}

export default ProblemDescription;