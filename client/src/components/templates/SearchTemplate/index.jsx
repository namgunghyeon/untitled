import PropTypes from 'prop-types';

const propTypes = {
  searchBar: PropTypes.object.isRequired,
  SearchDetail: PropTypes.object.isRequired,
  searchList: PropTypes.object.isRequired,
  Loading: PropTypes.object.isRequired,
  isSearch: PropTypes.bool.isRequired,
  isItemClicked: PropTypes.bool.isRequired,
};

function SearchTemplate({ children }) {
  return (
    children
  );
}

SearchTemplate.propTypes = propTypes;

export default SearchTemplate;
