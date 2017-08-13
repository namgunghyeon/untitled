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
  searchDetailKeyword: PropTypes.func.isRequired,
  keywords: PropTypes.array.isRequired,
  detailKeywordMap: PropTypes.object.isRequired,
  isSearch: PropTypes.bool.isRequired,
  readTime: PropTypes.number.isRequired,
};

class SearchContainer extends Component {
  static moveScrollTop() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      isSettingClicked: false,
      isItemClicked: false,
    };
    this.renderBar = this.renderBar.bind(this);
    this.renderListOrDetailView = this.renderListOrDetailView.bind(this);
    this.renderSearchResult = this.renderSearchResult.bind(this);

    this.onClickItem = this.onClickItem.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onHandelSaerch = this.onHandelSaerch.bind(this);
  }
  onClickItem(status, value) {
    this.setState({
      ...this.state,
      isItemClicked: status,
    });
    SearchContainer.moveScrollTop();
    this.props.searchDetailKeyword(value);
  }
  onClickBack() {
    this.setState({
      ...this.state,
      isItemClicked: false,
    });
    SearchContainer.moveScrollTop();
  }
  onHandelSaerch(e, data) {
    const keyword = data.value;
    if (this.state.isItemClicked) {
      this.setState({
        ...this.state,
        isItemClicked: false,
      });
    }
    this.props.searchKeywords({
      name: keyword,
      offset: 0,
      limit: 30,
    });
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
          readTime={this.props.readTime}
          onClickItem={this.onClickItem}
        />
      :
        <SearchDetail
          onBack={this.onClickBack}
          details={this.props.detailKeywordMap}
        />
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
    detailKeywordMap: SearchSelectors.getDetailKeyowrdMap(state),
    isSearch: SearchSelectors.getIsSearching(state),
    readTime: SearchSelectors.getReadTime(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
  }, dispatch);
}

SearchContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
