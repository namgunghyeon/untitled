import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  Header,
} from '../components';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingOpen: false,
    };
    this.onClickSettingToogle = this.onClickSettingToogle.bind(this);
  }
  onClickSettingToogle(status) {
    this.setState({
      ...this.state,
      isSettingOpen: status,
    });
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
  };
};

export default HeaderContainer;
