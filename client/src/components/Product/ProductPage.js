import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class ProductPage extends Component {

  state = {}

  render() {
    console.log(this.props.location.state)
    const { id, name, description, price, stock } = this.props.location.state;
    return(
      <Header as='h3'>
            <Header.Content>
              {name}
            </Header.Content>
      </Header>
    )
  }
}

export default ProductPage;