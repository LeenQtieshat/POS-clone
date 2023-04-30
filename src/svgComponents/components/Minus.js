/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Minus = ({size, ...props}) => (
  <svg viewBox="0 0 16 2" fill="currentColor" width={ size || "16" } height={ size || "2" } {...props}>
    <path d="M0.895996 1C0.895996 0.620304 1.2038 0.3125 1.5835 0.3125H14.4168C14.7965 0.3125 15.1043 0.620304 15.1043 1C15.1043 1.3797 14.7965 1.6875 14.4168 1.6875H1.5835C1.2038 1.6875 0.895996 1.3797 0.895996 1Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Minus.displayName = 'Minus';
Minus.propTypes = {
  size: PropTypes.string
}
export default Minus;
/* tslint:enable */
/* eslint-enable */
