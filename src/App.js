import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import MainLayout from './views/MainLayout'
import HomePage from './views/Homepage'
import RequestPage from './views/Requestpage'


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/home" render={props =><HomePage {...props} />} />
          <Route path="/pretrained" render={props => <MainLayout {...props} />} />
          <Route path="/request" render={props => <RequestPage {...props} />} />
          
          <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
