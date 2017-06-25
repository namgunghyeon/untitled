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
          <Segment>
            Contents
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SearchDetail;
