import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
//Import link
import Main from './containers/Main/Main';
import createUser from './containers/createUser/createUser';
import NotFound from './containers/NotFound/NotFound';
import Login from './containers/Login/Login';
import './App.css';
import LoadUsers from './components/LoadUsers/LoadUsers';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/add-user" component={createUser}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/user_1" component={LoadUsers}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
