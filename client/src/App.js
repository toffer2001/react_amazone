import React, { Fragment, } from 'react';
import Home from './components/Home/landingPage';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </Container>
  </Fragment>
)

export default App;
