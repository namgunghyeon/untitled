import React from 'react';
import {
  Grid,
  List,
  Header,
  Divider,
  Button,
  Icon,
  Segment,
  Label,
  Table,
  Image,
} from 'semantic-ui-react';

function SearchDetail(props) {
  return (
    <Grid columns={1}>
    <Grid.Row
      style={{
        paddingTop: '2rem',
      }}
    >
      <Grid.Column>
        <Button
          primary
          onClick={props.onBack}
        >
        <Icon name="triangle left" />
        Back
        </Button>
      </Grid.Column>
    </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <List.Item>
              <Label
                color='purple'
                horizontal
              >
                Function
              </Label>
              getName
            </List.Item>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Table basic='very' celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Contents</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Header as='h5'>
                      <Header.Content>
                        Location
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    server/Connection/Ping.py
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Frequency
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    15
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SearchDetail;
