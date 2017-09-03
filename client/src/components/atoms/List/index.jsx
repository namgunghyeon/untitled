
import React from 'react';
import {
  List as SemanticList,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function List({ children, ...props }) {
  return (
    <SemanticList {...props}>
      { children }
    </SemanticList>
  );
}

List.propTypes = propTypes;

export default List;
