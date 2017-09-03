import React from 'react';
import {
  Label as SemanticLabel,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Label({ children, ...props }) {
  return (
    <SemanticLabel {...props}>
      { children }
    </SemanticLabel>
  );
}

Label.propTypes = propTypes;

export default Label;
