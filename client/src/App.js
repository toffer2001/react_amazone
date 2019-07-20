import React, { Fragment, } from 'react';
import Home from './components/Home/Home';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/Auth/FetchUser';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import NoMatch from './components/Home/NoMatch';
import DepartmentPage from './components/Department/DepartmentPage';
import ProductPage from './components/Product/ProductPage';

const App = () => (
  <Fragment>
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/department/:id" component={DepartmentPage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      </FetchUser>
  </Fragment>
)

export default App;