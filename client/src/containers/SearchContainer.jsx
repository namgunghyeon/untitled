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

const LIMIT = 30;

const propTypes = {
  searchKeywords: PropTypes.func.isRequired,
  searchDetailKeyword: PropTypes.func.isRequired,
  keywords: PropTypes.array.isRequired,
  detailKeywordMap: PropTypes.object.isRequired,
  keyword: PropTypes.object.isRequired,
  isSearch: PropTypes.bool.isRequired,
  isMoreSearch: PropTypes.bool.isRequired,
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
    this.onHandleMore = this.onHandleMore.bind(this);
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
    const name = data.value;
    if (this.state.isItemClicked) {
      this.setState({
        ...this.state,
        isItemClicked: false,
      });
    }
    this.props.searchKeywords({
      name,
      offset: 0,
      limit: LIMIT,
    });
  }
  onHandleMore() {
    const { keyword, keywords } = this.props;
    this.props.searchKeywords({
      name: keyword.name,
      offset: keywords.length,
      limit: keywords.length + LIMIT,
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
      isMoreSearch,
      readTime,
    } = this.props;
    return (
      !isItemClicked ?
        <SearchList
          items={keywords}
          readTime={readTime}
          onClickItem={this.onClickItem}
          onHandleMore={this.onHandleMore}
          onHandleUp={SearchContainer.moveScrollTop}
          isMoreSearch={isMoreSearch}
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
    isMoreSearch: SearchSelectors.getIsMoreSearching(state),
    readTime: SearchSelectors.getReadTime(state),
    keyword: SearchSelectors.getKeyword(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
  }, dispatch);
}

SearchContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
