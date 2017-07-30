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
      <div>
        <Grid.Row>
          <HeaderContainer />
        </Grid.Row>
        <Grid.Row
          style={{
            padding: '1rem',
          }}
        >
          {
            cloneElement(this.props.children, {})
          }
        </Grid.Row>
      </div>
    );
  }
}
App.propTypes = propTypes;
export default App;
