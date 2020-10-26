import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title';

const Steps = ({countSteps}) => {
  const title = countSteps <= 1 ? 'Step' : 'Steps';
  return (
    <div className="steps">
      <Title tag="h2">{title}: {countSteps}</Title>
    </div>
  );
};

Steps.defaultProps = {
  countSteps: 0
};

Steps.propTypes = {
  countSteps: PropTypes.number.isRequired,
};

export default Steps;
