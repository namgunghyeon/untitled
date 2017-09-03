import React from 'react';
import {
  Table as SemanticTable,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function TableRow({ children, ...props }) {
  return (
    <SemanticTable.Row {...props}>
      { children }
    </SemanticTable.Row>
  );
}

TableRow.propTypes = propTypes;

export default TableRow;
