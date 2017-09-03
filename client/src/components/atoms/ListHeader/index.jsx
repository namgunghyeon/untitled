
import React from 'react';
import {
  List as SemanticList,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function ListHeader({ children, ...props }) {
  return (
    <SemanticList.Header {...props}>
      { children }
    </SemanticList.Header>
  );
}

ListHeader.propTypes = propTypes;

export default ListHeader;
