import React from 'react';
import {
  Table as SemanticTable,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function TableHeaderCell({ children, ...props }) {
  return (
    <SemanticTable.HeaderCell {...props}>
      { children }
    </SemanticTable.HeaderCell>
  );
}

TableHeaderCell.propTypes = propTypes;

export default TableHeaderCell;
