import React from 'react';
import {
  Grid,
  List,
  Button,
  Label,
  Item,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {
  ArrowUpBtn,
} from '../../components';
import './SearchList.css';

const propTypes = {
  onHandleMore: PropTypes.func.isRequired,
  onHandleUp: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
  isMoreSearch: PropTypes.bool.isRequired,
};

const colorMap = {
  angular: 'orange',
  bootstrap: 'yellow',
  react: 'olive',
  meteor: 'green',
  'Semantic-UI': 'teal',
  moment: 'blue',
  atom: 'violet',
  electron: 'pink',
  vue: 'brown',
  express: 'grey',
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
  const renderItemProject = (project) => {
    const projects = project ? project.split(',') : [];
    return projects.map(name => (
      <Label
        horizontal
        key={name}
        color={colorMap[name.trim()]}
      >
        {name}
      </Label>
    ));
  };
  const renderItemKeyword = keyword => (
    (
      <List.Header
        as="a"
        id={keyword}
        onClick={onClickItem}
      >
        {keyword}
      </List.Header>
    )
  );
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
      <Item.Group>
        <Item className="search__item">
          <span className="project__label">
            {renderItemKeyword(item.Keyword)}
          </span>
          <span>
            {renderItemProject(item.Project)}
          </span>
        </Item>
      </Item.Group>
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
