/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Search = ({size, ...props}) => (
  <svg viewBox="0 0 18 18" fill="currentColor" width={ size || "18" } height={ size || "18" } {...props}>
    <path d="M7.625 1.4375C4.20774 1.4375 1.4375 4.20774 1.4375 7.625C1.4375 11.0423 4.20774 13.8125 7.625 13.8125C9.33382 13.8125 10.8798 13.1207 12.0002 12.0002C13.1207 10.8798 13.8125 9.33382 13.8125 7.625C13.8125 4.20774 11.0423 1.4375 7.625 1.4375ZM0.0625 7.625C0.0625 3.44835 3.44835 0.0625 7.625 0.0625C11.8017 0.0625 15.1875 3.44835 15.1875 7.625C15.1875 9.46551 14.5293 11.1533 13.4366 12.4643L17.7361 16.7639C18.0046 17.0324 18.0046 17.4676 17.7361 17.7361C17.4676 18.0046 17.0324 18.0046 16.7639 17.7361L12.4643 13.4366C11.1533 14.5293 9.46551 15.1875 7.625 15.1875C3.44835 15.1875 0.0625 11.8017 0.0625 7.625Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Search.displayName = 'Search';
Search.propTypes = {
  size: PropTypes.string
}
export default Search;
/* tslint:enable */
/* eslint-enable */
