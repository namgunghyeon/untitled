import React from 'react';
import {
  Grid,
  List,
  Header,
  Divider,
} from 'semantic-ui-react';

function SearchList(props) {
  return (
    <Grid columns={1}>
      <Grid.Row
        style={{
          paddingTop: '2rem',
        }}
      >
        <Grid.Column>
        <Header as='h2'>Function</Header>
        <Divider />
        <List
          divided
          relaxed
          size="huge"
        >
          <List.Item>
            <List.Content>
              <List.Header>getName</List.Header>
              <List.Description>server/Connection/Ping.py</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>getName</List.Header>
              <List.Description>
                server/Api/google.py
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>getName</List.Header>
              <List.Description>server/Api/Facebook.py</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>getName</List.Header>
              <List.Description>server/Api/Kakao.py</List.Description>
            </List.Content>
          </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SearchList;
