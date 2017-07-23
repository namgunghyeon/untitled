import React, { Component, cloneElement } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HeaderContainer from './HeaderContainer';


const propTypes = {
  children: PropTypes.object.isRequired,
};

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
App.propTypes = propTypes;
export default App;
