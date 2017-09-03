import React from 'react';
import {
  Loader as SemanticLoader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Loader({ children, ...props }) {
  return (
    <SemanticLoader {...props}>
      { children }
    </SemanticLoader>
  );
}

Loader.propTypes = propTypes;

export default Loader;
