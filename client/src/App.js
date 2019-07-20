import React, { Fragment, } from 'react';
import Home from './components/Home/Home';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/Auth/FetchUser';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import NoMatch from './components/Home/NoMatch';
import Navbar from './components/Header/Navbar';
import DepartmentPage from './components/Department/DepartmentPage';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/departments" component={DepartmentPage} />
        <Route component={NoMatch} />
      </Switch>
      </Container>
      </FetchUser>

  </Fragment>
)

export default App;