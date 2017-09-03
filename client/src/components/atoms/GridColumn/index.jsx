import React from 'react';
import {
  Grid as SemanticGrid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object.isRequired,
};

function GridColumn({ children, ...props }) {
  return (
    <SemanticGrid.Column {...props}>
      { children }
    </SemanticGrid.Column>
  );
}

GridColumn.propTypes = propTypes;

export default GridColumn;
