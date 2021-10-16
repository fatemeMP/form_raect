
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { Redirect, Route,Switch } from 'react-router';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Redirect from="/" to="/signup"/>
      </Switch>
    </div>
  );
};

export default App;