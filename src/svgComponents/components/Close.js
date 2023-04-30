/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Close = ({size, ...props}) => (
  <svg viewBox="0 0 12 12" fill="currentColor" width={ size || "12" } height={ size || "12" } {...props}>
    <path d="M0.558058 0.558058C0.802136 0.313981 1.19786 0.313981 1.44194 0.558058L6 5.11612L10.5581 0.558059C10.8021 0.313981 11.1979 0.313981 11.4419 0.558059C11.686 0.802137 11.686 1.19786 11.4419 1.44194L6.88388 6L11.4419 10.5581C11.686 10.8021 11.686 11.1979 11.4419 11.4419C11.1979 11.686 10.8021 11.686 10.5581 11.4419L6 6.88388L1.44194 11.4419C1.19786 11.686 0.802136 11.686 0.558058 11.4419C0.313981 11.1979 0.313981 10.8021 0.558058 10.5581L5.11612 6L0.558058 1.44194C0.313981 1.19786 0.313981 0.802136 0.558058 0.558058Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Close.displayName = 'Close';
Close.propTypes = {
  size: PropTypes.string
}
export default Close;
/* tslint:enable */
/* eslint-enable */
