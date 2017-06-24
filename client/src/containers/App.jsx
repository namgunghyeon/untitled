import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import {
  Header,
  SearchBar,
} from '../components';
class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Header />
        </Grid.Row>
        <Grid.Row centered>
          <Container>
            <SearchBar />
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}
export default App;
