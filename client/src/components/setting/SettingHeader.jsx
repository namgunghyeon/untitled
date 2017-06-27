import React from 'react';
import {
  Grid,
  Header,
} from 'semantic-ui-react';

function SettingHeader(props) {
  return (
    <Grid columns={1}>
      <Grid.Row
        style={{
          paddingTop: '2rem',
        }}
      >
        <Grid.Column>
          <Header as='h1'>Setting</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SettingHeader;
