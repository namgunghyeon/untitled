import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Header from '../components/organisms/Header';
import {
  SearchActions,
} from '../data/search';

const propTypes = {
  fetchProjects: PropTypes.func.isRequired,
};

class HeaderContainer extends Component {
  static moveScrollTop() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      isSettingOpen: false,
    };
    this.onClickSettingToogle = this.onClickSettingToogle.bind(this);
  }
  componentDidMount() {
    this.props.fetchProjects();
  }
  onClickSettingToogle(status) {
    this.setState({
      ...this.state,
      isSettingOpen: status,
    });
    HeaderContainer.moveScrollTop();
  }
  render() {
    return (
      <div
        style={{
          marginTop: '2rem',
        }}
      >
        <Header
          open={this.state.isSettingOpen}
          onSettingToggle={this.onClickSettingToogle}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
  }, dispatch);
}
HeaderContainer.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(HeaderContainer);
