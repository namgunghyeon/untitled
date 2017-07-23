import React from 'react';
import { Input, Grid, Button, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const options = [
  { key: 'Variable', text: 'Variable', value: 'Variable' },
  { key: 'Function', text: 'Function', value: 'Function' },
  { key: 'File', text: 'File', value: 'File' },
];

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
            <Select
              style={{ width: '8rem' }}
              compact
              options={options}
              defaultValue="Variable"
            />
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
