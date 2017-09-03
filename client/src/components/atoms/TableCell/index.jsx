import React from 'react';
import {
  Table as SemanticTable,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function TableCell({ children, ...props }) {
  return (
    <SemanticTable.Cell {...props}>
      { children }
    </SemanticTable.Cell>
  );
}

TableCell.propTypes = propTypes;

export default TableCell;
