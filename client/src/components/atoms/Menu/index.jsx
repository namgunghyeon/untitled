import React from 'react';
import {
  Menu as SemanticMenu,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Menu({ children, ...props }) {
  return (
    <SemanticMenu {...props}>
      { children }
    </SemanticMenu>
  );
}

Menu.propTypes = propTypes;

export default Menu;
