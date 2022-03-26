import React from 'react';
import PropTypes from 'prop-types';
import './LibertyButton.scss';

const LibertyButton = ({ buttonType, type, disabled, className, style, children, onClick }) => {
  return (
    <button
      type={buttonType}
      disabled={disabled}
      className={`LibertyButton ${type} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

LibertyButton.defaultProps = {
  buttonType: 'button',
  type: 'primary',
  disabled: false,
  className: '',
};

LibertyButton.propTypes = {
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default LibertyButton;
