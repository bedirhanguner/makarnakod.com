import React, { useEffect, useState } from 'react'
import './ProblemDescription.css';
import Navbar from '../../Navbar/Navbar';
import EditorLayout from '../Editor/EditorLayout';
import getBackendURL from '../../../helpers/getURL';

function ProblemDescription(props) {

    const [problem, setProblem] = useState({});
    const pathName = props.location.pathname;

    useEffect(() => {
        const fetchProblem = async () => {
            let paths = pathName.split('/');
            const requestOptions = {
                method: "GET",
            };
            const data = await fetch(getBackendURL() + '/'+paths[1]+'/' + paths[paths.length - 1], requestOptions);
            const problem = await data.json();
            setProblem(problem);
        };
        fetchProblem();
    }, [pathName])

    return (
        <>
            <Navbar />
            <div className='problem'>
                <div className='problem_description_wrapper'>
                    <div className='problem_info_wrapper'>
                        <h1> {problem.displayname} </h1>
                        <h3> {problem.level}, {problem.difficulty}</h3>
                    </div>
                    <div className='problem_description_content'>
                        <div className='problem_description_text'>
                            {problem.description}

                            {problem.examples && problem.examples.map((example, index) => {
                                return (
                                    <div>
                                        <br /> <p>örnek {index + 1}:</p><br />
                                        <div className='problem_description_text_example'>
                                            {example}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='problem_solution_wrapper'>
                    <EditorLayout />
                </div>
            </div>

        </>
    );
}

export default ProblemDescription;