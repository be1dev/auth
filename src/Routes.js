import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Profile from './containers/Profile'
import {requireAuth}  from './hoc/requireAuth'
import SignOut from './containers/SignOut'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'

const Routes = () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path='/' render={() => <h3>Главная</h3>} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signout' component={SignOut} />
        <Route path='/signin' component={SignIn} />
        <Route path="/profile" component={requireAuth(Profile)} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default Routes;