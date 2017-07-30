import React from 'react';
import {
  Grid,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  onSettingToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function Header(props) {
  const onSettingToggle = () => {
    props.onSettingToggle(!props.open);
  };
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
            {
              !props.open ?
                <Menu.Item
                  onClick={onSettingToggle}
                  icon={{ name: 'settings', link: true }}
                  as={Link}
                  to="/settings"
                />
              :
                <Menu.Item
                  onClick={onSettingToggle}
                  icon={{ name: 'home', link: true }}
                  as={Link}
                  to="/main"
                />
            }
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
Header.propTypes = propTypes;
export default Header;
