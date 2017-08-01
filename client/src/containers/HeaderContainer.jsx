import React, { Component } from 'react';
import {
  Header,
} from '../components';

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

export default HeaderContainer;
