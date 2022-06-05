import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import ProblemsPage from './components/Pages/Problems/ProblemDescription';
import Algorithm from './components/Pages/Problems/MainProblems/Algorithm';
import Database from './components/Pages/Problems/MainProblems/Database';
import DataStructures from './components/Pages/Problems/MainProblems/DataStructures';
import FunctionalProgramming from './components/Pages/Problems/MainProblems/FunctionalProgramming';
import Regex from './components/Pages/Problems/MainProblems/Regex';
import Shell from './components/Pages/Problems/MainProblems/Shell';
import FifteenDaysOfPython from './components/Pages/Problems/KitProblems/FifteenDaysOfPython';
import TwentyDaysOfJavascript from './components/Pages/Problems/KitProblems/TwentyDaysOfJavascript';
import InterviewQuestions from './components/Pages/Problems/KitProblems/InterviewQuestions';
import Login from './components/Pages/UserAuthentication/Login';
import Register from './components/Pages/UserAuthentication/Register';
import Profile from './components/Pages/UserAuthentication/Profile';
import EditProfile from './components/Pages/UserAuthentication/EditProfile';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path='/profil/guncelle' exact component={EditProfile} />
            <Route path='/' exact component={Home} />
            <Route path='/:path/:path' exact component={ProblemsPage} />
            <Route path='/15-gunde-python-kiti' exact component={FifteenDaysOfPython} />
            <Route path='/algoritma' exact component={Algorithm} />
            <Route path='/veri-yapilari' exact component={DataStructures} />
            <Route path='/:path/:path' exact component={ProblemsPage} />
            <Route path='/15-gunde-python-kiti' exact component={FifteenDaysOfPython} />
            <Route path='/20-gunde-javascript-kiti' exact component={TwentyDaysOfJavascript} />
            <Route path='/mulakat-hazirlanma-kiti' exact component={InterviewQuestions} />
            <Route path='/algoritma' exact component={Algorithm} />
            <Route path='/fonksiyonel-programlama' exact component={FunctionalProgramming} />
            <Route path='/veri-yapilari' exact component={DataStructures} />
            <Route path='/veritabani' exact component={Database} />
            <Route path='/regex' exact component={Regex} />
            <Route path='/kabuk' exact component={Shell} />
            <Route path='/giris-yap' exact component={Login} />
            <Route path='/uye-ol' exact component={Register} />
            <Route path='/profil' exact component={Profile} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;