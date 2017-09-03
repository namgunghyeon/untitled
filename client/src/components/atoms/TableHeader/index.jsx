import React from 'react';
import {
  Table as SemanticTable,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function TableHeader({ children, ...props }) {
  return (
    <SemanticTable.Header {...props}>
      { children }
    </SemanticTable.Header>
  );
}

TableHeader.propTypes = propTypes;

export default TableHeader;
