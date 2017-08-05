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
  Tab,
  Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const colorMap = {
  function: 'purple',
  value: 'green',
};

const propTypes = {
  onBack: PropTypes.func.isRequired,
  details: PropTypes.array.isRequired,
};

function SearchDetail(props) {
  const { details } = props;
  const renderTabContent = () => (
    <Grid>
      {
        details.map(item => (
          <div
            key={`${item.KeywordIndex}_${item.Project}_${item.Type}`}
            style={{
              width: '100%',
              paddingTop: '2rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}
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
                <Segment>
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
                          { item.Path }
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h5">
                            <Header.Content>
                              Frequency
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          { item.frequency }
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Divider />
          </div>
        ))
      }
    </Grid>
  );
  const buildTabPanels = () => ([
      { menuItem: 'Angular', render: () => <Tab.Pane attached={false}>{ renderTabContent() }</Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  ]);
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column
          style={{
            paddingBottom: '2rem',
          }}
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
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={buildTabPanels()}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
SearchDetail.propTypes = propTypes;
export default SearchDetail;
