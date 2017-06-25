import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  SearchBar,
  SearchList,
} from '../components';

class SearchContainer extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <SearchList />
      </Container>
    );
  }
}

export default SearchContainer;
