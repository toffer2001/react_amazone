import React from 'react';
import { Header, Container } from "semantic-ui-react";

const DepartmentHeader = ({title}) => (
  <Container>
    <Header as="h1">
      { title }
    </Header>
    <br/>
  </Container>
)

export default DepartmentHeader;