import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SearchContainer from './SearchContainer';
import HeaderContainer from './HeaderContainer';

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <HeaderContainer />
        </Grid.Row>
        <Grid.Row>
          <SearchContainer />
        </Grid.Row>
      </Grid>
    );
  }
}
export default App;
