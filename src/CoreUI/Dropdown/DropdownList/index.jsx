import { array, bool, func, object } from 'prop-types';
import React, { Fragment } from 'react';
import Divider from '../Divider';
import DropdownItem from '../DropdownItem';
import MultiSelectDropdownItem from '../MultiSelectDropdownItem';

const DropdownList = ({
  items,
  multiSelect,
  handleMultiSelectChange,
  selectedItemsMap,
  onSelectionChange,
  onDropdownHide
}) => {
  return items.map(item => {
    return (
      <Fragment key={item.id}>
        <Divider withDivider={item.withDivider} />
        {multiSelect ? (
          <MultiSelectDropdownItem
            onChange={event => handleMultiSelectChange(event, item)}
            item={item}
            isChecked={selectedItemsMap[item.id]}
          />
        ) : (
          <DropdownItem
            item={item}
            multiSelect={multiSelect}
            onSelectionChange={item => {
              onSelectionChange(item);
              onDropdownHide();
            }}
          />
        )}
      </Fragment>
    );
  });
};

DropdownList.propTypes = {
  items: array,
  multiSelect: bool,
  handleMultiSelectChange: func,
  selectedItemsMap: object,
  onSelectionChange: func,
  onDropdownHide: func
};

export default DropdownList;
