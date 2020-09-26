import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import MainLayout from './views/MainLayout'
import HomePage from './views/Homepage'
import RequestPage from './views/Requestpage'
import DetailsPage from './views/DetailsPage'
import RequestDetails from './views/RequestDetails'


function App() {
  return (

    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <Navbar />
      <Switch>
          <Route path="/home" render={props =><HomePage {...props} />} />
          <Route path="/pretrained" render={props => <MainLayout {...props} />} />
          <Route path="/request" render={props => <RequestPage {...props} />} />
          <Route 
            exact
            path="/details/:symbol"
            render={props => <DetailsPage {...props} />} 
          />
          <Route 
            exact
            path="/requestchart/:symbol"
            render={props => <RequestDetails {...props} />} 
          />
          
          <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
