import React from 'react';
import { Grid, Menu } from 'semantic-ui-react'
function Header(props) {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Menu
          inverted
          fixed="top"
          color="blue"
          size="massive"
          >
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default Header;
