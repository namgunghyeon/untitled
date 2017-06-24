import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import {
  Header,
} from '../components';
import SearchContainer from './SearchContainer';

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Header />
        </Grid.Row>
        <Grid.Row centered>
          <SearchContainer />
        </Grid.Row>
      </Grid>
    );
  }
}
export default App;
