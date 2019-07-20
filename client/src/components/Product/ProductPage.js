import React, { Component } from 'react';
import { Container, Header, Divider, Segment } from 'semantic-ui-react';

class ProductPage extends Component {

  state = {}

  render() {
    console.log(this.props.location.state)
    const { id,name, description, price, stock } = this.props.location.state;
    return(
      <>
        <Container fluid>
          <Header as='h3'>
            <Header.Content>
              {name}
        </Header.Content>
      </Header>

      <Header as='h3' >
        <Header.Content>
          Description
          <Header.Subheader>{ description }</Header.Subheader>
        </Header.Content>
        <Header.Content>
          Price: ${ price }
        </Header.Content>
        <Header.Content>
          On-Hand: { stock }
        </Header.Content>
      </Header>
      </Container>
      </>
    )
  }
}

export default ProductPage;