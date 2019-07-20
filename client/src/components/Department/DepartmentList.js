import React from 'react';
import { Grid, Card } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const DepartmentList = ({title, id}) => (
  <Grid>
    <Grid.Row relaxed columns={4}>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header><Link to={{ pathname: `./department/${id}`, state: { id, title } }} >{ title }</Link></Card.Header>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default DepartmentList;

