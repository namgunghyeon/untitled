import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';

function Loading() {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Loader active inline="centered" />
      </Grid.Row>
    </Grid>
  );
}

export default Loading;
