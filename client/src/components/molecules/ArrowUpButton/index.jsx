import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import UpIcon from 'react-icons/lib/fa/caret-up';
import styles from './ArrowUpButton.css';

import Grid from '../../atoms/Grid';
import GridRow from '../../atoms/GridRow';
import GridColumn from '../../atoms/GridColumn';

const cx = classNames.bind(styles);

const propTypes = {
  onHandleUp: PropTypes.func.isRequired,
};

function ArrowUpBtn(props) {
  return (
    <Grid columns={1}>
      <GridRow
        className={cx('up')}
      >
        <GridColumn>
          <UpIcon
            size={100}
            color="gray"
            className={cx('btn')}
            onClick={props.onHandleUp}
          />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
ArrowUpBtn.propTypes = propTypes;
export default ArrowUpBtn;
