import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  SettingHeader,
  SettingContents,
} from '../components';

class SettingContainer extends Component {
  render() {
    return (
      <Container>
        <SettingHeader />
        <SettingContents />
      </Container>
    )
  }
}

export default SettingContainer;
