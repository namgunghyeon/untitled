import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  SearchBar,
  SearchList,
  SearchDetail,
} from '../components';
import {
  SearchActions,
} from '../data/search';

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
}];

const propTypes = {
  searchKeywords: PropTypes.func.isRequired,
};

class SearchContainer extends Component {
  static renderBar() {
    return (<SearchBar />);
  }
  constructor(props) {
    super(props);
    this.state = {
      isSettingClicked: false,
      isItemClicked: false,
    };
    this.renderDetailView = this.renderDetailView.bind(this);
    this.renderListView = this.renderListView.bind(this);

    this.onClickItem = this.onClickItem.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
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
    this.props.searchKeywords('namgunghyeon');
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
        { SearchContainer.renderBar() }
        { this.renderListView(this.state.isItemClicked) }
        { this.renderDetailView(this.state.isItemClicked) }
      </Container>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
  }, dispatch);
}

SearchContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
