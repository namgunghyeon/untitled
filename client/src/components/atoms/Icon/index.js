import React from 'react';
import {
  Icon as SemanticIcon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Icon({ children, ...props }) {
  return (
    <SemanticIcon {...props}>
      { children }
    </SemanticIcon>
  );
}
Icon.propTypes = propTypes;

export default Icon;
