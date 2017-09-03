import React from 'react';
import {
  Header as SemanticHeader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.array.isRequired,
};

function HeaderContent({ children, ...props }) {
  return (
    <SemanticHeader.Content {...props}>
      { children }
    </SemanticHeader.Content>
  );
}
HeaderContent.propTypes = propTypes;
export default HeaderContent;
