import './Card.scss';
import PropTypes from 'prop-types';
import React from 'react';
import csx from 'classnames';

const Card = ({ isShow, number, color, onClick }) => {
  const classes = csx(
    { 'card--open': isShow },
    { 'none': !isShow },
  );

  const stylesCardOpen = {
    background: color,
    color: 'black',
  };

  return (
    <div className="card" onClick={onClick}>
      <div className={classes} style={stylesCardOpen}>{number}</div>
    </div>
  );
};

Card.defaultProps = {
  isShow: true,
  onClick: () => {}
};

Card.propTypes = {
  color: PropTypes.string,
  isShow: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Card;
