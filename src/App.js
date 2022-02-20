import React from 'react';
import GlobalStyle from './globalStyle'
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom'
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/"  ><Home/></Route>
        <Route path="/signup" ><SignupPage/></Route>
        <Route path="/price"><PricingPage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
