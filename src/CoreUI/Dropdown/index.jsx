import { array, bool, func, node, object, string } from 'prop-types';
import React, { useEffect, useRef } from 'react';
import Animate from '../Animate';
import DropdownList from './DropdownList';
import styles from './styles.module.scss';

const handleClickOutsideEventListener = clickOutside => {
  document.addEventListener('mousedown', clickOutside, { once: true });
  return () => {
    document.removeEventListener('mousedown', clickOutside);
  };
};

const Dropdown = ({
  showDropdown = false,
  items = [],
  onSelectionChange = () => {},
  onDropdownShow = () => {},
  onDropdownHide = () => {},
  className = '',
  parentNode = null,
  multiSelect,
  selectedItemsMap = {},
  onBlur = () => {}
}) => {
  const node = useRef();

  const clickOutside = e => {
    const { target } = e;
    const { current } = node;
    const { current: parentNodeCurrent } = parentNode;
    if (
      (!current || !current.contains(target)) &&
      (!parentNode || !parentNodeCurrent || !parentNodeCurrent.contains(target))
    ) {
      // e.stopPropagation();

      onDropdownHide();
      onBlur();
    }
  };

  useEffect(() => {
    handleClickOutsideEventListener(clickOutside);
  });

  return (
    <Animate
      onEnter={onDropdownShow}
      onExit={onDropdownHide}
      showsIn={showDropdown}
      animationType="fadeUpDown"
    >
      <ul ref={node} className={`${styles.sharedDropdown} ${className} `}>
        <DropdownList
          items={items}
          multiSelect={multiSelect}
          handleMultiSelectChange={onSelectionChange}
          selectedItemsMap={selectedItemsMap}
          onSelectionChange={onSelectionChange}
          onDropdownHide={onDropdownHide}
        />
      </ul>
    </Animate>
  );
};

Dropdown.propTypes = {
  showDropdown: bool,
  items: array,
  onSelectionChange: func,
  onDropdownShow: func,
  onDropdownHide: func,
  className: string,
  parentNode: node,
  multiSelect: bool,
  selectedItemsMap: object,
  onBlur: func
};

export default Dropdown;
