import React from 'react';
import { Input, Grid, Button, Select } from 'semantic-ui-react';

const options = [
  { key: 'Variable', text: 'Variable', value: 'Variable' },
  { key: 'Function', text: 'Function', value: 'Function' },
  { key: 'File', text: 'File', value: 'File' },
];

function SearchBar() {
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
export default SearchBar;
