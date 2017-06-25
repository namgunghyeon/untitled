import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  Header,
} from '../components';

class HeaderContainer extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '2rem',
        }}
      >
        <Header />
      </div>
    );
  };
};

export default HeaderContainer;
