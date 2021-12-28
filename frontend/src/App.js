import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import ProblemPage from './components/Pages/Problems/ProblemDescription';
import AlgorithmPage from './components/Pages/Problems/Algorithm/AlgorithmPage';
import DataStructuresPage from './components/Pages/Problems/DataStructures/DataStructuresPage';
import FifteenDaysOfPythonPage from './components/Pages/Problems/FifteenDaysOfPython/FifteenDaysOfPythonPage';
import KitProblemsPage from './components/Pages/Problems/KitProblemsPage';

function App() {
  return (
    <>
      <Router> 
          <Switch> 
            <Route path='/' exact component={Home} />
            <Route path='/algoritma/ucbes' exact component={ProblemPage} />
            <Route path='/algoritma/en-uzun-ek' exact component={ProblemPage} />
            <Route path='/algoritma' exact component={AlgorithmPage} />
            <Route path='/veri-yapilari' exact component={DataStructuresPage} />
            <Route path='/15-gunde-python-kiti' exact component={FifteenDaysOfPythonPage} />
            <Route path='/15-gunde-python-kiti/merhaba-dunya' exact component={ProblemPage} />
            <Route path='/15-gunde-python-kiti/aritmetik-operatorler' exact component={ProblemPage} />
            <Route path='/15-gunde-python-kiti/python-if-else' exact component={ProblemPage} />
          </Switch>
      </Router>
    </>
  );
}
  
export default App;