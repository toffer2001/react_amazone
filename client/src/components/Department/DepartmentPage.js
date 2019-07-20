import React, { Component } from 'react';
import DepartmentHeader from './DepartmentHeader';
import ProductIndex from '../Product/ProductIndex';
import axios from 'axios';

class DepartmentPage extends Component {

  state = { products: [] }

  componentDidMount() {
    const { id } = this.props.location.state
    axios.get(`/api/department/${id}`)
      .then(res => {
        this.setState({ products: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { title, id, } = this.props.location.state
    const { products } = this.state
    return (
      <>
        <DepartmentHeader
          department_id={id}
          title={title}
        />

        <ProductIndex products={products} />
      </>

    )
  }
}

export default DepartmentPage;

//this page is located - Helper: api_course_path Path: /api/courses/:id Action: api/courses#show
