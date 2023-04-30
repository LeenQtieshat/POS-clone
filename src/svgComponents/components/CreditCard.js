/* eslint-disable */
/* tslint:disable */
import PropTypes from "prop-types";
import React from "react";
const CreditCard = ({ size, ...props }) => (
  <svg
    width={size || "22"}
    height={size || "18"}
    {...props}
    viewBox="0 0 22 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 3.75C0.5 2.09315 1.84315 0.75 3.5 0.75H18.5C20.1569 0.75 21.5 2.09315 21.5 3.75V14.25C21.5 15.9069 20.1569 17.25 18.5 17.25H3.5C1.84315 17.25 0.5 15.9069 0.5 14.25V3.75ZM2 6.75V14.25C2 15.0784 2.67157 15.75 3.5 15.75H18.5C19.3284 15.75 20 15.0784 20 14.25V6.75H2ZM20 4.5H2V3.75C2 2.92157 2.67157 2.25 3.5 2.25H18.5C19.3284 2.25 20 2.92157 20 3.75V4.5ZM3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H10.25C10.6642 10.5 11 10.8358 11 11.25C11 11.6642 10.6642 12 10.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25ZM3.5 13.5C3.5 13.0858 3.83579 12.75 4.25 12.75H7.25C7.66421 12.75 8 13.0858 8 13.5C8 13.9142 7.66421 14.25 7.25 14.25H4.25C3.83579 14.25 3.5 13.9142 3.5 13.5Z"
    />
  </svg>
);
CreditCard.displayName = "CreditCard";
CreditCard.propTypes = {
  size: PropTypes.string,
};
export default CreditCard;
/* tslint:enable */
/* eslint-enable */
