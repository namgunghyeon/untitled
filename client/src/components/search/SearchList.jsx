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
  bootstrap: '#CF6E36',
  react: 'olive',
  meteor: 'green',
  'Semantic-UI': 'teal',
  moment: 'blue',
  atom: '#476600',
  electron: '#F15F5F',
  vue: 'brown',
  express: 'grey',
  backbone: 'black',
  brackets: '#D941C5',
  'foundation-sites': '#27248A',
  'ember.js': '#CC723D',
  'json-server': '#007087',
  lodash: '#99004C',
};

function SearchList(props) {
  const {
    onHandleMore,
    isMoreSearch,
    readTime,
    onHandleUp,
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
        style={{
          background: colorMap[name.trim()],
          color: 'white',
        }}
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
    if (item.loading) {
      return (
        <List.Header
          as="a"
          id={item.Keyword}
          onClick={onHandleMore}
        >
          <Button
            fluid
            disabled={isMoreSearch}
            color="blue"
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
  const renderArrowUp = (items) => {
    if (!items.length) {
      return (<div />);
    }
    return (
      <ArrowUpBtn
        onHandleUp={onHandleUp}
      />
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
            renderArrowUp(props.items)
          }
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
}
SearchList.propTypes = propTypes;
export default SearchList;
