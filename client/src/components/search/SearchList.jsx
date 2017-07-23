import React from 'react';
import {
  Grid,
  List,
  Header,
  Divider,
} from 'semantic-ui-react';

function SearchList(props) {
  const onClickItem = () => {
    props.onClickItem(true);
  };
  return (
    <Grid columns={1}>
      <Grid.Row
        style={{
          paddingTop: '2rem',
        }}
      >
        <Grid.Column>
          <Header as="h2">Function</Header>
          <Divider />
          <List
            divided
            relaxed
            size="huge"
          >
            {
              props.items.map((item) => {
                return (
                  <List.Item
                    key={item.id}
                    onClick={onClickItem}
                    style={{
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <List.Content>
                      <List.Header>{item.name}</List.Header>
                      <List.Description>{item.location}</List.Description>
                    </List.Content>
                  </List.Item>
                );
              })
            }
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SearchList;
