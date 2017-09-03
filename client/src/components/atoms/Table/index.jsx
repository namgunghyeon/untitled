import React from 'react';
import {
  Table as SemanticTable,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Table({ children, ...props }) {
  return (
    <SemanticTable {...props}>
      { children }
    </SemanticTable>
  );
}

Table.propTypes = propTypes;

export default Table;
