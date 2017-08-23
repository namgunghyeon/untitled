import React from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ArrowUpBtn.css';

const cx = classNames.bind(styles);

const propTypes = {
  onHandleUp: PropTypes.func.isRequired,
};

function ArrowUpBtn(props) {
  return (
    <Grid columns={1}>
      <Grid.Row
        className={cx('up')}
      >
        <Grid.Column>
          <Button
            circular
            color="yellow"
            icon={
              <Icon
                name="arrow up"
                size="big"
              />
            }
            className={cx('btn')}
            onClick={props.onHandleUp}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
ArrowUpBtn.propTypes = propTypes;
export default ArrowUpBtn;
