import React from 'react';
import {
  Button as SemanticButton,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Button({ children, ...props }) {
  return (
    <SemanticButton {...props}>
      { children }
    </SemanticButton>
  );
}

Button.propTypes = propTypes;

export default Button;
