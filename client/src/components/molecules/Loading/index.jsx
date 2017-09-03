import React from 'react';

import Grid from '../../atoms/Grid';
import GridRow from '../../atoms/GridRow';
import Loader from '../../atoms/Loader';

function Loading() {
  return (
    <Grid columns={1}>
      <GridRow>
        <Loader active inline="centered" />
      </GridRow>
    </Grid>
  );
}

export default Loading;
