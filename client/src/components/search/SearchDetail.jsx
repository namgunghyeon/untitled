import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchDetail.css';

import Grid from '../atoms/Grid';
import Segment from '../atoms/Segment';
import Header from '../atoms/Header';
import HeaderContent from '../atoms/HeaderContent';
import Table from '../atoms/Table';
import TableHeader from '../atoms/TableHeader';
import TableHeaderCell from '../atoms/TableHeaderCell';
import TableBody from '../atoms/TableBody';
import TableRow from '../atoms/TableRow';
import TableCell from '../atoms/TableCell';
import ListItem from '../atoms/ListItem';
import GridColumn from '../atoms/GridColumn';
import GridRow from '../atoms/GridRow';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Label from '../atoms/Label';
import Dropdown from '../atoms/Dropdown';

const cx = classNames.bind(styles);
const colorMap = {
  'function': 'purple',
  value: 'green',
};

const propTypes = {
  onBack: PropTypes.func.isRequired,
  onChangeProject: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  currentProject: PropTypes.string.isRequired,
};
function SearchDetail(props) {
  const {
    currentProject,
  } = props;
  const toPath = (path) => {
    const paths = path.split('untitled_analysis_test');
    if (paths.length) {
      return paths[1];
    }
    return path;
  };
  const buildOptions = (details) => {
    const projects = Object.keys(details);
    return projects.map(project => (
      {
        key: project,
        text: project,
        value: project,
      }
    ));
  };
  const onChangeMenu = (event, data) => {
    props.onChangeProject(data.value);
  };
  const renderProjectMenu = (details) => {
    const options = buildOptions(details);
    return (
      <Dropdown
        selection
        onChange={onChangeMenu}
        text={currentProject || options[0].value}
        options={options}
      />
    );
  };
  const renderContents = (details) => {
    const options = buildOptions(details);
    const contents = details[currentProject || options[0].value];
    return (
      <Grid>
        {
          contents.map(item => (
            <div
              key={`${item.KeywordIndex}_${item.Project}_${item.Type}`}
              className={cx('contents')}
            >
              <GridRow
                className={cx('type')}
              >
                <GridColumn>
                  <ListItem>
                    <Label
                      color={colorMap[item.Type]}
                      size="large"
                      horizontal
                    >
                      { item.Type }
                    </Label>
                    { item.name }
                  </ListItem>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn>
                  <Segment className={cx('text')}>
                    <Table basic="very" celled>
                      <TableHeader>
                        <TableRow>
                          <TableHeaderCell>Name</TableHeaderCell>
                          <TableHeaderCell>{ item.KeywordIndex }</TableHeaderCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell collapsing>
                            <Header as="h5">
                              <HeaderContent>
                                Location
                              </HeaderContent>
                            </Header>
                          </TableCell>
                          <TableCell>
                            { toPath(item.Path) }
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Segment>
                </GridColumn>
              </GridRow>
            </div>
          ))
        }
      </Grid>
    );
  };
  return (
    <Grid columns={1}>
      <GridRow
        className={cx('detail')}
      >
        <GridColumn
          className={cx('back')}
        >
          <Button
            primary
            onClick={props.onBack}
          >
            <Icon name="triangle left" />
          Back
          </Button>
        </GridColumn>
        <GridColumn>
          { renderProjectMenu(props.details) }
        </GridColumn>
        <GridColumn>
          { renderContents(props.details) }
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
SearchDetail.propTypes = propTypes;
export default SearchDetail;
