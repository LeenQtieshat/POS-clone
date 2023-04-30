/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Plus = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M8 0.4375C8.3797 0.4375 8.6875 0.745304 8.6875 1.125V7.3125H14.875C15.2547 7.3125 15.5625 7.6203 15.5625 8C15.5625 8.3797 15.2547 8.6875 14.875 8.6875H8.6875V14.875C8.6875 15.2547 8.3797 15.5625 8 15.5625C7.6203 15.5625 7.3125 15.2547 7.3125 14.875V8.6875H1.125C0.745304 8.6875 0.4375 8.37969 0.4375 8C0.4375 7.6203 0.745304 7.3125 1.125 7.3125H7.3125V1.125C7.3125 0.745304 7.6203 0.4375 8 0.4375Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Plus.displayName = 'Plus';
Plus.propTypes = {
  size: PropTypes.string
}
export default Plus;
/* tslint:enable */
/* eslint-enable */
