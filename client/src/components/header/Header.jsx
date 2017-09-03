import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../atoms/Grid';
import GridRow from '../atoms/GridRow';
import GridColumn from '../atoms/GridColumn';
import Menu from '../atoms/Menu';

const propTypes = {
  onSettingToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function Header() {
  return (
    <Grid columns={1}>
      <GridRow>
        <GridColumn>
          <Menu
            stackable
            inverted
            fixed="top"
            color="blue"
            size="massive"
          />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
Header.propTypes = propTypes;
export default Header;
