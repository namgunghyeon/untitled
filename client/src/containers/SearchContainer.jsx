import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import {
  SearchBar,
  SearchList,
  SearchDetail,
} from '../components';

const items = [{
  id: 1,
  name: 'getName',
  location: 'server/Connection/Ping.py',
}, {
  id: 2,
  name: 'getName',
  location: 'server/Api/google.py',
}, {
  id: 3,
  name: 'getName',
  location: 'server/Api/Facebook.py',
}, {
  id: 4,
  name: 'getName',
  location: 'server/Api/Kakao.py',
}, {
  id: 5,
  name: 'getName',
  location: 'server/Api/Naver.py',
}]

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
          items={items}
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
