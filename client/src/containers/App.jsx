import React, { Component, cloneElement } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HeaderContainer from './HeaderContainer';
import {
  ArrowUpBtn,
} from '../components';

const propTypes = {
  children: PropTypes.object.isRequired,
};

class App extends Component {
  static moveScrollTop() {
    window.scrollTo(0, 0);
  }
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
          {
            <ArrowUpBtn
              onHandelUp={App.moveScrollTop}
            />
          }
        </Grid.Row>

      </div>
    );
  }
}
App.propTypes = propTypes;
export default App;
