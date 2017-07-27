import React from 'react';
import { Input, Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  onHandelSearch: PropTypes.func.isRequired,
};

function SearchBar(props) {
  return (
    <Grid columns={1}>
      <Grid.Row
        style={{
          paddingTop: '2rem',
        }}
      >
        <Grid.Column>
          <Input
            fluid
            action
            type="text"
            placeholder="Search..."
            size="large"
            onChange={props.onHandelSearch}
          >
            <input />
            <Button
              type="submit"
            >
              Search
            </Button>
          </Input>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
SearchBar.propTypes = propTypes;
export default SearchBar;
