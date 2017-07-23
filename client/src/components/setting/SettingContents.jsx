import React from 'react';
import {
  Grid,
  Segment,
  List,
  Dropdown,
} from 'semantic-ui-react';

const openSourceOptions = [
  { key: 'Hadoop', text: 'Hadoop', value: 'Hadoop' },
  { key: 'Tajo', text: 'Tajo', value: 'Tajo' },
  { key: 'DCOS', text: 'DCOS', value: 'DCOS' },
];

const versionOptions = [
  { key: '1.0.0', text: '1.0.0', value: '1.0.0' },
  { key: '1.0.1', text: '1.0.1', value: '1.0.1' },
  { key: '1.1.0', text: '1.1.0', value: '1.1.0' },
];

function SettingContents() {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <List divided verticalAlign="middle">
              <List.Item
                style={{
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                }}
              >
                <List.Content floated="right">
                  <Dropdown
                    options={openSourceOptions}
                    placeholder="Choose open source"
                    search
                    selection
                    fluid
                    allowAdditions
                    style={{
                      width: '15rem',
                    }}
                  />
                </List.Content>
                <List.Content>
                  Open Source
                </List.Content>
              </List.Item>
              <List.Item
                style={{
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                }}
              >
                <List.Content floated="right">
                  <Dropdown
                    options={versionOptions}
                    placeholder="Choose version"
                    search
                    selection
                    fluid
                    allowAdditions
                    style={{
                      width: '15rem',
                    }}
                  />
                </List.Content>
                <List.Content>
                  Version
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default SettingContents;
