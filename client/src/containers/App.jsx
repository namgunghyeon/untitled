import React, { Component, cloneElement } from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderContainer from './HeaderContainer';

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <HeaderContainer />
        </Grid.Row>
        <Grid.Row>
          {
            cloneElement(this.props.children, {})
          }
        </Grid.Row>
      </Grid>
    );
  }
}
export default App;
