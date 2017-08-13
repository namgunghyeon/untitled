import React from 'react';
import {
  Grid,
  Menu,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  onSettingToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function Header() {
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
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
Header.propTypes = propTypes;
export default Header;
