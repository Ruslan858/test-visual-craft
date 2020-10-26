import './Reset.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Reset = ({onClick, children}) => {
  return (
    <button className="btn btn-reset" onClick={onClick} type="button">
      {children}
    </button>
  );
};

Reset.defaultProps = {
  onClick: () => {}
};

Reset.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Reset;
