import React from 'react';
import {
  Grid,
  List,
  Button,
  Label,
  Item,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {
  ArrowUpBtn,
} from '../../components';
import styles from './SearchList.css';

const cx = classNames.bind(styles);
const propTypes = {
  onHandleMore: PropTypes.func.isRequired,
  onHandleUp: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  colorMap: PropTypes.object.isRequired,
  readTime: PropTypes.number.isRequired,
  isMoreSearch: PropTypes.bool.isRequired,
};

function SearchList(props) {
  const {
    onHandleMore,
    isMoreSearch,
    readTime,
    onHandleUp,
    colorMap,
  } = props;
  const onClickItem = (e) => {
    const { id } = e.target;
    props.onClickItem(true, id);
  };
  const renderReadTime = () => {
    if (readTime > 0) {
      return (
        <div>
          { `${readTime / 1000} Sec` }
        </div>
      );
    }
    return (<div />);
  };
  const findProjectColor = (name) => {
    const project = colorMap[name.trim()][0];
    return project ? project.Color : '';
  };
  const renderItemProject = (project) => {
    const projectNames = project ? project.split(',') : [];
    return projectNames.map(name => (
      <Label
        horizontal
        key={name}
        className={cx('project')}
        style={{
          background: findProjectColor(name.trim()),
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
        <Item className={cx('item')}>
          <span className={cx('keyword')}>
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
            className={cx('list')}
          >
            {
              props.items.map(item => (
                <List.Item
                  key={item.Keyword}
                  className={cx('contents')}
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
