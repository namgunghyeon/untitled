import React from 'react';
import {
  Input as SemanticInput,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Input({ children, ...props }) {
  return (
    <SemanticInput {...props}>
      { children }
    </SemanticInput>
  );
}
Input.propTypes = propTypes;

export default Input;
