import React from 'react';
import { Input, Grid, Button, Select } from 'semantic-ui-react'
function SearchBar(props) {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Input fluid type='text' placeholder='Search...' action>
            <input />
            <Select compact defaultValue='articles' />
            <Button type='submit'>Search</Button>
          </Input>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SearchBar;
