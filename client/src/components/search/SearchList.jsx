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
  const onClickItem = (e) => {
    const { id } = e.target;
    props.onClickItem(true, id);
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
                  key={item.Keyword}
                  style={{
                    padding: '1rem',
                  }}
                >
                  <List.Content>
                    <List.Header
                      as="a"
                      id={item.Keyword}
                      onClick={onClickItem}
                    >
                      {item.Keyword}
                    </List.Header>
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
