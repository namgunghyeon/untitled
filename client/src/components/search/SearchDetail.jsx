import React from 'react';
import {
  Grid,
  List,
  Header,
  Button,
  Icon,
  Segment,
  Label,
  Table,
  Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchDetail.css';

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
              <Grid.Row
                style={{
                  marginBottom: '1rem',
                }}
              >
                <Grid.Column>
                  <List.Item>
                    <Label
                      color={colorMap[item.Type]}
                      size="large"
                      horizontal
                    >
                      { item.Type }
                    </Label>
                    { item.name }
                  </List.Item>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment className={cx('text')}>
                    <Table basic="very" celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Name</Table.HeaderCell>
                          <Table.HeaderCell>{ item.KeywordIndex }</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell collapsing>
                            <Header as="h5">
                              <Header.Content>
                                Location
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            { toPath(item.Path) }
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </div>
          ))
        }
      </Grid>
    );
  };
  return (
    <Grid columns={1}>
      <Grid.Row
        className={cx('detail')}
      >
        <Grid.Column
          className={cx('back')}
        >
          <Button
            primary
            onClick={props.onBack}
          >
            <Icon name="triangle left" />
          Back
          </Button>
        </Grid.Column>
        <Grid.Column>
          { renderProjectMenu(props.details) }
        </Grid.Column>
        <Grid.Column>
          { renderContents(props.details) }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
SearchDetail.propTypes = propTypes;
export default SearchDetail;
