import React from 'react';
import {
  Dropdown as SemanticDropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Dropdown({ children, ...props }) {
  return (
    <SemanticDropdown {...props}>
      { children }
    </SemanticDropdown>
  );
}

Dropdown.propTypes = propTypes;

export default Dropdown;
