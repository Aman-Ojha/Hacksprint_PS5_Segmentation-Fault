import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import MainLayout from './views/MainLayout'


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/app" render={props => <MainLayout {...props} />} />
          
          <Redirect from="/" to="/app" />
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
