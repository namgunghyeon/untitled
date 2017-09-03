import React from 'react';
import {
  Table as SemanticTable,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function TableBody({ children, ...props }) {
  return (
    <SemanticTable.Body {...props}>
      { children }
    </SemanticTable.Body>
  );
}

TableBody.propTypes = propTypes;

export default TableBody;
