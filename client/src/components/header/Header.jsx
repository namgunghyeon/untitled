import React from 'react';
import {
  Grid,
  Menu,
  Icon
} from 'semantic-ui-react';

function Header(props) {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Menu
          stackable
          inverted
          fixed="top"
          color="blue"
          size="massive"
          >
          <Menu.Item>
            <Icon name="settings"></Icon>
          </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default Header;
