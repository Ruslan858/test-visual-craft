import { zeroStringFix } from '../../utils';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title';

const Time = ({ min, sec, h }) => {
  return (
    <div className="timer">
      <Title tag="h2">
        Time has passed {zeroStringFix(h)}:{zeroStringFix(min)}:{zeroStringFix(sec)}
      </Title>
    </div>
  );
};

Time.propTypes = {
  h: PropTypes.number,
  min: PropTypes.number,
  sec: PropTypes.number,
};

export default Time;
