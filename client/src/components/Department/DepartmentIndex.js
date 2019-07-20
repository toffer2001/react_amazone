import React, { Component } from 'react';
import { Accordion, Icon, Header } from "semantic-ui-react";
import DepartmentLinks from './DepartmentLinks';

const DepartmentIndex = ({departments}) => (

  <div>
  <h1>All Departments</h1>
    <ul>
      {
        departments.map( department => <DepartmentLinks key={department.id} {...department} /> )
      }
    </ul>
</div>
)

export default DepartmentIndex;