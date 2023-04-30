/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Calendar = ({size, ...props}) => (
  <svg viewBox="0 0 14 13" fill="currentColor" width={ size || "14" } height={ size || "13" } {...props}>
    <path d="M3.5 0C3.77614 0 4 0.223858 4 0.5V1.5H10V0.5C10 0.223858 10.2239 0 10.5 0C10.7761 0 11 0.223858 11 0.5V1.5H11.5C12.6046 1.5 13.5 2.39543 13.5 3.5V11C13.5 12.1046 12.6046 13 11.5 13H2.5C1.39543 13 0.5 12.1046 0.5 11V3.5C0.5 2.39543 1.39543 1.5 2.5 1.5H3V0.5C3 0.223858 3.22386 0 3.5 0ZM2.5 2.5C1.94772 2.5 1.5 2.94772 1.5 3.5V4.26756C1.79417 4.09739 2.13571 4 2.5 4H11.5C11.8643 4 12.2058 4.09739 12.5 4.26756V3.5C12.5 2.94772 12.0523 2.5 11.5 2.5H2.5ZM12.5 6C12.5 5.44772 12.0523 5 11.5 5H2.5C1.94772 5 1.5 5.44772 1.5 6V11C1.5 11.5523 1.94772 12 2.5 12H11.5C12.0523 12 12.5 11.5523 12.5 11V6Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Calendar.displayName = 'Calendar';
Calendar.propTypes = {
  size: PropTypes.string
}
export default Calendar;
/* tslint:enable */
/* eslint-enable */
