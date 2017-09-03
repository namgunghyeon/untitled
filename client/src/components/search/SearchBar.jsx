import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../atoms/Grid';
import GridRow from '../atoms/GridRow';
import GridColumn from '../atoms/GridColumn';
import Input from '../atoms/Input';

const propTypes = {
  onHandelSearch: PropTypes.func.isRequired,
};

function SearchBar(props) {
  return (
    <Grid columns={1}>
      <GridRow
        style={{
          paddingTop: '2rem',
        }}
      >
        <GridColumn>
          <Input
            fluid
            type="text"
            placeholder="Search..."
            size="large"
            icon={{ name: 'search', circular: true, link: true }}
            onChange={props.onHandelSearch}
          />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
SearchBar.propTypes = propTypes;
export default SearchBar;
