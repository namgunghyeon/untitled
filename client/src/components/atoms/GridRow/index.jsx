import React from 'react';
import {
  Grid as SemanticGrid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object.isRequired,
};

function GridRow({ children, ...props }) {
  return (
    <SemanticGrid.Row {...props}>
      { children }
    </SemanticGrid.Row>
  );
}

GridRow.propTypes = propTypes;

export default GridRow;
