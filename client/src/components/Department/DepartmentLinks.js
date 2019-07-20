import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon, Header } from "semantic-ui-react";
import DepartmentIndex from './DepartmentIndex';

const DepartmentLinks = ({ title, id }) => (
  <>
    <li><Link to={{ pathname: `../department/${id}`, state: { id, title } }} >{ title }</Link></li>
  </>
)

export default DepartmentLinks;