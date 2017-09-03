import React from 'react';
import {
  Item as SemanticItem,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Item({ children, ...props }) {
  return (
    <SemanticItem {...props}>
      { children }
    </SemanticItem>
  );
}

Item.propTypes = propTypes;

export default Item;
