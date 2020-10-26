import './Title.scss';
import PropTypes from 'prop-types';
import React from 'react';
import csx from 'classnames';

const Title = ({ children, className, tag }) => {
  const classNames = csx('title', className);
  const Tag = tag;
  return <Tag className={classNames}>{children}</Tag>;
};

Title.defaultProps = {
  tag: 'h1',
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};

export default Title;
