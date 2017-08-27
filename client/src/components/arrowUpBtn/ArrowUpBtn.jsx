import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import UpIcon from 'react-icons/lib/fa/caret-up';
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
          <UpIcon
            size={100}
            color="gray"
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
