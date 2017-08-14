import React from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './ArrowUpBtn.css';

const propTypes = {
  onHandelUp: PropTypes.func.isRequired,
};

function ArrowUpBtn(props) {
  return (
    <Grid columns={1}>
      <Grid.Row
        style={{
          paddingTop: '2rem',
        }}
      >
        <Grid.Column>
          <div className="app up-btn">
            <Button
              circular
              color="yellow"
              icon={
                <Icon name="arrow up" size="large" />
              }
              onClick={props.onHandelUp}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
ArrowUpBtn.propTypes = propTypes;
export default ArrowUpBtn;
