import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
// import Update from './Update';
class App extends React.Component{
  render() {
    return (
      <Switch>
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/" exact render={()=><Homepage page="Index"/>} />
        <Route path="/Form" render={()=><Homepage page="Form"/>} />
        <Route path="/Resource" render={()=><Homepage page="Resource"/>} />
        <Route path="/NONSTOP" render={()=><Homepage page="NONSTOP"/>} />
        <Route path="/BUNGEE" render={()=><Homepage page="BUNGEE"/>} />
        <Route path="/SSFWL" render={()=><Homepage page="SSFWL"/>} />
        <Route path="/RM" render={()=><Homepage page="RM"/>} />
        <Route path="/BAM" render={()=><Homepage page="BAM"/>} />
        <Route path="/SG" render={()=><Homepage page="SG"/>} />
        <Route path="/BONVOYAGE" exact render={()=><Homepage page="BONVOYAGE"/>} />
        <Route component={() => (<div>404 Not found </div>)} />
        {/* <Route path="/UpDaTe" exact component={Update} /> */}
      </Switch>
    );
  }
}

export default App;
