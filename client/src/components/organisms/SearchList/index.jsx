import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Grid from '../../atoms/Grid';
import GridColumn from '../../atoms/GridColumn';
import GridRow from '../../atoms/GridRow';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Item from '../../atoms/Item';
import ItemGroup from '../../atoms/ItemGroup';
import List from '../../atoms/List';
import ListHeader from '../../atoms/ListHeader';
import ListContent from '../../atoms/ListContent';
import ListItem from '../../atoms/ListItem';
import ArrowUpButton from '../../molecules/ArrowUpButton';

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
      <ListHeader
        as="a"
        id={keyword}
        onClick={onClickItem}
      >
        {keyword}
      </ListHeader>
    )
  );
  const renderItem = (item) => {
    if (item.loading) {
      return (
        <ListHeader
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
        </ListHeader>
      );
    }
    return (
      <ItemGroup>
        <Item className={cx('item')}>
          <span className={cx('keyword')}>
            {renderItemKeyword(item.Keyword)}
          </span>
          <span>
            {renderItemProject(item.Project)}
          </span>
        </Item>
      </ItemGroup>
    );
  };
  const renderArrowUp = (items) => {
    if (!items.length) {
      return (<div />);
    }
    return (
      <ArrowUpButton
        onHandleUp={onHandleUp}
      />
    );
  };
  return (
    <Grid columns={1}>
      { renderReadTime(readTime) }
      <GridRow>
        <GridColumn>
          <List
            divided
            relaxed
            size="huge"
            className={cx('list')}
          >
            {
              props.items.map(item => (
                <ListItem
                  key={item.Keyword}
                  className={cx('contents')}
                >
                  <ListContent>
                    { renderItem(item) }
                  </ListContent>
                </ListItem>
              ))
            }
            {
              renderArrowUp(props.items)
            }
          </List>

        </GridColumn>
      </GridRow>

    </Grid>
  );
}
SearchList.propTypes = propTypes;
export default SearchList;
