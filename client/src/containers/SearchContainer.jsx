import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  SearchBar,
  SearchList,
  SearchDetail,
  Loading,
} from '../components';
import {
  SearchSelectors,
  SearchActions,
} from '../data/search';

const propTypes = {
  searchKeywords: PropTypes.func.isRequired,
  keywords: PropTypes.array.isRequired,
  isSearch: PropTypes.bool.isRequired,
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingClicked: false,
      isItemClicked: false,
    };
    this.renderBar = this.renderBar.bind(this);
    this.renderDetailView = this.renderDetailView.bind(this);
    this.renderListOrDetailView = this.renderListOrDetailView.bind(this);
    this.renderSearchResult = this.renderSearchResult.bind(this);

    this.onClickItem = this.onClickItem.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onHandelSaerch = this.onHandelSaerch.bind(this);
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
  onHandelSaerch(e, data) {
    const keyword = data.value;
    this.props.searchKeywords(keyword);
  }
  renderBar() {
    return (
      <SearchBar
        onHandelSearch={this.onHandelSaerch}
      />
    );
  }
  renderListOrDetailView(isItemClicked) {
    const {
      keywords,
    } = this.props;
    return (
      !isItemClicked ?
        <SearchList
          items={keywords}
          onClickItem={this.onClickItem}
        />
      :
        <SearchDetail
          onBack={this.onClickBack}
        />
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
  renderSearchResult(isSearching) {
    if (isSearching) {
      return (<Loading />);
    }
    return (
      this.renderListOrDetailView(this.state.isItemClicked)
    );
  }
  render() {
    return (
      <Container>
        { this.renderBar() }
        { this.renderSearchResult(this.props.isSearch) }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    keywords: SearchSelectors.getKeywords(state),
    isSearch: SearchSelectors.getIsSearching(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
  }, dispatch);
}

SearchContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
