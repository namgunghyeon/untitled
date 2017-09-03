import React from 'react';
import {
  Segment as SemanticSegment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function Segment({ children, ...props }) {
  return (
    <SemanticSegment {...props}>
      { children }
    </SemanticSegment>
  );
}

Segment.propTypes = propTypes;

export default Segment;
