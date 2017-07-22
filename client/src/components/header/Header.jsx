import React from 'react';
import {
  Grid,
  Menu,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router'

function Header(props) {
  const onSettingToggle = () => {
    props.onSettingToggle(!props.open);
    console.log(props.open);
  }
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
          <Menu.Item
            onClick={onSettingToggle}
          >
            <Icon name="settings"></Icon>
            <Link to="settings">Settings</Link>
          </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default Header;