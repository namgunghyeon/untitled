import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  SearchBar,
} from '../components';

class SearchContainer extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}

export default SearchContainer;
