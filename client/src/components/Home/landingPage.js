import React, { Component } from 'react';
import { Header, Navbar, Footer, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {

  state = { departments: [] }

  componentDidMount(){
    axios.get("/api/departments")
    .then( res => {
      this.setState({ departments: res.data })
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render() {
    return(<Header as="h1" textAlign="center">Home</Header>)
  }


}

export default Home;