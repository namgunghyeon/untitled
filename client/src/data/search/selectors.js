import _ from 'lodash';

export const getKeywords = state => state.search.keywords || [];
export const getDetailKeywords = state => state.search.detailKeywords || [];
export const getIsSearching = state => state.search.isSearch || false;
export const getIsMoreSearching = state => state.search.isMoreSearch || false;
export const getDetailKeyowrdMap = (state) => {
  if (state.search.detailKeywords) {
    const detailKeywords = [...state.search.detailKeywords];
    return _.groupBy(detailKeywords, 'Project');
  }
  return {};
};
export const getReadTime = (state) => {
  const start = state.search.start;
  const end = state.search.end;
  return end - start;
};
export const getKeyword = state => state.search.keyword;
export const getCurrentProject = state => state.search.currentProject;
