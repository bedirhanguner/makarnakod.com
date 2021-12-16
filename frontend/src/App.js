import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Problems from './components/Pages/Problems/Problems';
import ProblemPage from './components/Pages/Problems/ProblemPage';
import AlgorithmPage from './components/Pages/Algorithm/AlgorithmPage';

function App() {
  return (
    <>
    
    <Router> 
        <Switch> 
          <Route path='/' exact component={Home} />
          <Route path='/sorular' exact component={Problems} />
          <Route path='/algoritma/ucbes' exact component={ProblemPage} />
          <Route path='/algoritma' exact component={AlgorithmPage} />
        </Switch>
    </Router>
    
    </>
  );
}
  
export default App;