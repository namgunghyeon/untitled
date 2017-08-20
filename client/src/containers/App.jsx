import React, { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HeaderContainer from './HeaderContainer';
import {
  SearchActions,
} from '../data/search';

const propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

class App extends Component {
  static moveScrollTop() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    this.props.fetchProjects();
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
        </Grid.Row>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
  }, dispatch);
}

App.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(App);
