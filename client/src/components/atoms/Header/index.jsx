import React from 'react';
import {
  Header as SemanticHeader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Header({ children, ...props }) {
  return (
    <SemanticHeader {...props}>
      { children }
    </SemanticHeader>
  );
}

Header.propTypes = propTypes;

export default Header;
