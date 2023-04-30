import { bool, func, node } from "prop-types";
import React, { useState } from "react";
import Checkbox from "../../Checkbox";
import styles from "./styles.module.scss";

const { dropdownMultiSelectItem } = styles;

const MultiSelectDropdownItem = ({ item, onChange, isChecked = false }) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <li>
      <Checkbox
        label={item.displayName}
        onChange={(e) => {
          setChecked(!checked);
          onChange(e);
        }}
        checked={checked}
        className={dropdownMultiSelectItem}
      />
    </li>
  );
};

MultiSelectDropdownItem.propTypes = {
  item: node,
  onChange: func,
  isChecked: bool,
};

export default MultiSelectDropdownItem;
