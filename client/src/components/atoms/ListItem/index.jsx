
import React from 'react';
import {
  List as SemanticList,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function ListItem({ children, ...props }) {
  return (
    <SemanticList.Item {...props}>
      { children }
    </SemanticList.Item>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
