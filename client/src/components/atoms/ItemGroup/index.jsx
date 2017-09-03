import React from 'react';
import {
  Item as SemanticItem,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function ItemGroup({ children, ...props }) {
  return (
    <SemanticItem.Group {...props}>
      { children }
    </SemanticItem.Group>
  );
}

ItemGroup.propTypes = propTypes;

export default ItemGroup;
