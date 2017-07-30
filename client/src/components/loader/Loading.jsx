import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  onHandelSearch: PropTypes.func.isRequired,
};

function Loading(props) {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Loader active inline="centered" />
      </Grid.Row>
    </Grid>
  );
}

Loading.propTypes = propTypes;
export default Loading;
