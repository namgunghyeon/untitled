
import React from 'react';
import {
  List as SemanticList,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function ListContent({ children, ...props }) {
  return (
    <SemanticList.Content {...props}>
      { children }
    </SemanticList.Content>
  );
}

ListContent.propTypes = propTypes;

export default ListContent;
