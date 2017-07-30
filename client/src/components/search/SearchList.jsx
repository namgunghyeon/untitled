import React from 'react';
import {
  Grid,
  List,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.array.isRequired,
};
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
          <List
            divided
            relaxed
            size="huge"
          >
            {
              props.items.map(item => (
                <List.Item
                  key={item.Name}
                  style={{
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <List.Content>
                    <List.Header
                      as="a"
                      onClick={onClickItem}
                    >
                      {item.Name}
                    </List.Header>
                    <List.Description>
                      <h5>{item.Path}</h5>
                    </List.Description>
                  </List.Content>
                </List.Item>
              ))
            }
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
SearchList.propTypes = propTypes;
export default SearchList;
