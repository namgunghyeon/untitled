import React from 'react';
import {
  Grid,
  List,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {
  ArrowUpBtn,
} from '../../components';

const propTypes = {
  onHandleMore: PropTypes.func.isRequired,
  onHandleUp: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
  isMoreSearch: PropTypes.bool.isRequired,
};

function SearchList(props) {
  const {
    onHandleMore,
    isMoreSearch,
    readTime,
  } = props;
  const onClickItem = (e) => {
    const { id } = e.target;
    props.onClickItem(true, id);
  };
  const renderReadTime = () => {
    if (readTime) {
      return (
        <div>
          { `${readTime / 1000} Sec` }
        </div>
      );
    }
    return (<div />);
  };
  const renderItem = (item) => {
    if (item.reserved) {
      return (
        <List.Header
          as="a"
          id={item.Keyword}
          onClick={onHandleMore}
        >
          <Button
            fluid
            disabled={isMoreSearch}
            color="green"
          >
            { !isMoreSearch ? 'More' : 'Loading...'}
          </Button>
        </List.Header>
      );
    }
    return (
      <List.Header
        as="a"
        id={item.Keyword}
        onClick={onClickItem}
      >
        {item.Keyword}
      </List.Header>
    );
  };
  return (
    <Grid columns={1}>
      { renderReadTime(readTime) }
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
                    { renderItem(item) }
                  </List.Content>
                </List.Item>
              ))
            }
          </List>
          {
            <ArrowUpBtn
              onHandleUp={props.onHandleUp}
            />
          }
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
}
SearchList.propTypes = propTypes;
export default SearchList;
