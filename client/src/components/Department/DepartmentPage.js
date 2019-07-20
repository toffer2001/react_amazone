import React, { Component } from 'react';
// import DepartmentHeader from './DepartmentHeader';
// import DepartmentDescription from './DepartmentDescription';
// import DepartmentOverview from './DepartmentOverview';
// import DepartmentProductPlan from './DepartmentProductPlan';
import { Header, Button, Divider, Grid, Icon, Search, Segment, Container } from "semantic-ui-react";
// import Home from '../Home';
// import ProductIndex from '../Product/ProductIndex';
import axios from 'axios';

class DepartmentPage extends React.Component {

  state = { departments:[] }

  componentDidMount(){
    axios.get(`/api/departments`)
    .then( res => {
      this.setState({ departments: res.data })
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render() {
    const { title, id } = this.state
    return (
      <>
        {/* <DepartmentHeader
          department_id={id}
          title={title}
          subtitle={subtitle}
        />
        <DepartmentDescription
          description={description}
        />
        <DepartmentOverview products={products}/>
        <ProductIndex products={products}/>
        <DepartmentProductPlan/> */}
      </>

    )
  }
}

export default DepartmentPage;