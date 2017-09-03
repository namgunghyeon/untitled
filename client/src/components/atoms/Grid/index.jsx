import React from 'react';
import {
  Grid as SemanticGrid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]),
};

const defaultProps = {
  children: [],
};

function Grid({ children, ...props }) {
  return (
    <SemanticGrid {...props}>
      { children }
    </SemanticGrid>
  );
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
