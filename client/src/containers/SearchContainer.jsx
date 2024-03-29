import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  SearchSelectors,
  SearchActions,
} from '../data/search';
import {
  PageSelectors,
  PageActions,
} from '../data/page';

import Loading from '../components/molecules/Loading';
import SearchBar from '../components/organisms/SearchBar';
import SearchList from '../components/organisms/SearchList';
import SearchDetail from '../components/organisms/SearchDetail';

const LIMIT = 30;

const propTypes = {
  setScrollPosition: PropTypes.func.isRequired,
  searchKeywords: PropTypes.func.isRequired,
  searchDetailKeyword: PropTypes.func.isRequired,
  changeProject: PropTypes.func.isRequired,
  keywords: PropTypes.array.isRequired,
  detailKeywordMap: PropTypes.object.isRequired,
  keyword: PropTypes.object.isRequired,
  scrollPosition: PropTypes.object.isRequired,
  colorMap: PropTypes.object.isRequired,
  isSearch: PropTypes.bool.isRequired,
  isMoreSearch: PropTypes.bool.isRequired,
  readTime: PropTypes.number.isRequired,
  currentProject: PropTypes.string.isRequired,
};

class SearchContainer extends Component {
  static changeScrollPositionY(pageYOffset) {
    if (pageYOffset) {
      return window.scrollTo(0, pageYOffset);
    }
    return window.scrollTo(0, 0);
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
    const {
      pageXOffset,
      pageYOffset,
    } = window;
    this.props.setScrollPosition({ pageXOffset, pageYOffset });
    this.props.changeProject('');
    this.props.searchDetailKeyword(value);
    SearchContainer.changeScrollPositionY(0);
  }
  onClickBack() {
    this.setState({
      ...this.state,
      isItemClicked: false,
    }, () => {
      const {
        pageYOffset,
      } = this.props.scrollPosition;
      SearchContainer.changeScrollPositionY(pageYOffset);
    });
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
      offset: keywords.length - 1,
      limit: LIMIT,
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
      changeProject,
      currentProject,
      colorMap,
    } = this.props;
    return (
      !isItemClicked ?
        <SearchList
          items={keywords}
          colorMap={colorMap}
          readTime={readTime}
          onClickItem={this.onClickItem}
          onHandleMore={this.onHandleMore}
          onHandleUp={SearchContainer.changeScrollPositionY}
          isMoreSearch={isMoreSearch}
        />
      :
        <SearchDetail
          onBack={this.onClickBack}
          details={this.props.detailKeywordMap}
          onChangeProject={changeProject}
          currentProject={currentProject}
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
    currentProject: SearchSelectors.getCurrentProject(state),
    scrollPosition: PageSelectors.getScrollPosition(state),
    colorMap: SearchSelectors.getProjectColorMap(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...SearchActions,
    ...PageActions,
  }, dispatch);
}

SearchContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
