import { func, node } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const { dropdownItemText, dropdownItem } = styles;

const DropdownItem = ({ item, onSelectionChange }) => {
  const itemInnerHTML = (
    <>
      {item.icon}
      <span className={dropdownItemText}>{item.displayName || item.name}</span>
    </>
  );

  return item.linkTo ? (
    <Link className={dropdownItem} to={item.linkTo}>
      {itemInnerHTML}
    </Link>
  ) : (
    <li
      className={dropdownItem}
      onClick={() => {
        item.onClick ? item.onClick(item) : onSelectionChange(item);
      }}
    >
      {itemInnerHTML}
    </li>
  );
};

DropdownItem.propTypes = {
  item: node,
  onSelectionChange: func,
};

export default DropdownItem;
