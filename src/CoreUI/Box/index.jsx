import { array, string } from "prop-types";
import React from "react";
import styles from "./styles.module.scss";
const { commonBox } = styles;

const Box = ({ children, className = "" }) => {
  return <div className={`${commonBox} ${className}`}>{children}</div>;
};

Box.propTypes = {
  className: string,
  children: array,
};

export default Box;
