import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  SearchBar,
  SearchList,
  SearchDetail,
} from '../components';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingClicked: false,
      isItemClicked: false,
    };
    this.renderBar = this.renderBar.bind(this);
    this.renderDetailView = this.renderDetailView.bind(this);
    this.renderListView = this.renderListView.bind(this);

    this.onClickItem = this.onClickItem.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }
  onClickSetting() {

  }
  onClickItem(status) {
    this.setState({
      ...this.state,
      isItemClicked: status,
    });
  }
  onClickBack() {
    this.setState({
      ...this.state,
      isItemClicked: false,
    });
  }
  renderBar() {
    return (<SearchBar />);
  }
  renderListView(isItemClicked) {
    return (
      !isItemClicked ?
        <SearchList
          onClickItem={this.onClickItem}
        />
      :
        null
    );
  }
  renderDetailView(isItemClicked) {
    return (
      isItemClicked ?
        <SearchDetail
          onBack={this.onClickBack}
        />
      :
        null
    );
  }
  render() {
    return (
      <Container>
        { this.renderBar() }
        { this.renderListView(this.state.isItemClicked) }
        { this.renderDetailView(this.state.isItemClicked) }
      </Container>
    );
  }
};

export default SearchContainer;
