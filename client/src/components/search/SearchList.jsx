import React from 'react';
import {
  Grid,
  List,
  Label,
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
                  }}
                >
                  <List.Content>
                    <List.Header
                      as="a"
                      onClick={onClickItem}
                    >
                      {item.Name}
                    </List.Header>
                    <List.Description
                      style={{
                        paddingTop: '1rem',
                      }}
                    >
                      <Label color="yellow" key="angular" size="small">
                        {item.Project}
                      </Label>
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
