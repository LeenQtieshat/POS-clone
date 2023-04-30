import React, { useRef, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import SelectButton from './SelectButton';
import formStyles from '../../../styles/form.module.scss';
import styles from './styles.module.scss';
import {
  getNameForSingleSelectedItem,
  getNamesFromIds,
  createSelectedItemsMap
} from './selectHelpers';
import Animate from '../Animate/Animate';
import { array, bool, func, oneOfType, string } from 'prop-types';
const { selectContainer, selectButtonOpened } = styles;
const { inputLabel, hasError, fieldError } = formStyles;

const Select = ({
  items,
  onChange = () => {},
  onBlur = () => {},
  label,
  className,
  multiSelect,
  value = multiSelect ? [] : '',
  width,
  error,
  placeholder = 'select'
}) => {
  if (multiSelect && !value.length) {
    value = [];
  }

  const defaultButtonText = multiSelect
    ? getNamesFromIds(value, items, placeholder) || placeholder
    : getNameForSingleSelectedItem(value, items, placeholder);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectButtonText, setSelectButtonText] = useState(defaultButtonText);
  const [defaultValue, setDefaultValue] = useState(value);
  const [isDropdownTouched, setIsDropdownTouched] = useState(false);

  const node = useRef();

  let newSelectedItems = [];
  let selectedItemsMap = {};
  if (multiSelect) {
    newSelectedItems = [...defaultValue];
    selectedItemsMap = createSelectedItemsMap(value);
  }

  const handleSelectionChange = changes => {
    let buttonText;

    if (multiSelect) {
      const changesNames = newSelectedItems.length
        ? getNamesFromIds(newSelectedItems, items, placeholder).split(',')
        : [];
      const multiSelectButtonValue = changesNames.join(', ');
      setDefaultValue(newSelectedItems);
      buttonText = multiSelectButtonValue || placeholder;
    } else {
      buttonText = changes.displayName;
      setDefaultValue(changes.id);
    }

    setSelectButtonText(buttonText);
    const result = multiSelect
      ? { target: { value: newSelectedItems } }
      : { target: { value: changes.id } };
    onChange(result);
    onBlur(result);
    setIsDropdownTouched(false);
  };

  const handleMultiSelectChange = ({ target }, { id }) => {
    target.checked
      ? newSelectedItems.push(id)
      : (newSelectedItems = newSelectedItems.filter(item => item !== id));

    setDefaultValue(newSelectedItems);
    handleSelectionChange();
  };

  return (
    <div className={`${selectContainer} ${className} ${width} ${error ? hasError : ''}`}>
      {label && <label className={inputLabel}>{label}</label>}
      <SelectButton
        node={node}
        setShowDropdown={showState => {
          setShowDropdown(showState);
          setIsDropdownTouched(true);
        }}
        showDropdown={showDropdown}
        selectButtonOpened={selectButtonOpened}
        selectButtonValue={selectButtonText}
      />
      <Dropdown
        parentNode={node}
        items={items}
        showDropdown={showDropdown}
        onDropdownHide={() => {
          setShowDropdown(false);
        }}
        onDropdownShow={() => setShowDropdown(true)}
        onSelectionChange={multiSelect ? handleMultiSelectChange : handleSelectionChange}
        onBlur={() => {
          isDropdownTouched && onBlur({ target: { value: defaultValue } });
        }}
        multiSelect={multiSelect}
        selectedItemsMap={selectedItemsMap}
        value={defaultValue}
      />
      <Animate animationType="fadeUpDown" showsIn={!!error}>
        <span className={fieldError}>{error}</span>
      </Animate>
    </div>
  );
};

Select.propTypes = {
  items: array,
  onChange: func,
  onBlur: func,
  label: string,
  className: string,
  multiSelect: bool,
  value: oneOfType([array, string]),
  width: string,
  error: string,
  placeholder: string
};

export default Select;
