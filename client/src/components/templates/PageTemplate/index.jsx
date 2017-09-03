import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const propTypes = {
  header: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

function PageTemplate({ header, children }) {
  return (
    <div>
      <Grid.Row>
        {header}
      </Grid.Row>
      <Grid.Row
        style={{
          padding: '1rem',
        }}
      >
        {
          cloneElement(children, {})
        }
      </Grid.Row>

    </div>
  );
}

PageTemplate.propTypes = propTypes;

export default PageTemplate;
