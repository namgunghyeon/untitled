import React from 'react';
import {
  Grid,
  List,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
};
function SearchList(props) {
  const onClickItem = (e) => {
    const { id } = e.target;
    props.onClickItem(true, id);
  };
  const renderReadTime = (readTime) => {
    if (readTime) {
      return (
        <div>
          { `${readTime / 1000} Sec` }
        </div>
      );
    }
    return (<div />);
  };
  return (
    <Grid columns={1}>
      { renderReadTime(props.readTime) }
      <Grid.Row>
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
                    paddingBottom: '1rem',
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
