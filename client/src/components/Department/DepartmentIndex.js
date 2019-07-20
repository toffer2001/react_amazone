
import React, { Component } from 'react';
import { Accordion, Icon, Header } from "semantic-ui-react";
import DepartmentLinks from './DepartmentLinks';


const DepartmentIndex = ({departments}) => (

  <div>
  <h1>All Departments</h1>

      {
        departments.map( department => <DepartmentList key={department.id} {...department} /> )
      }
  </div>
)



export default DepartmentIndex;
