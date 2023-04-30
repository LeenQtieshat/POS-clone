// returns a comma separated string, by creating a map from the items and access the selected items in the map by the value array
const getNamesFromIds = (values = [], items = []) => {
  const itemsObj = {};
  const selectedValues = [];
  items.forEach(item => {
    itemsObj[item.id] = item.displayName;
  });
  values.forEach(value => {
    selectedValues.push(itemsObj[value]);
  });
  return selectedValues.join(', ');
};

// returns either the displayName of the selected item or the default select label
const getNameForSingleSelectedItem = (value, items, label) => {
  const selectedItem = items.find(item => item.id === value);
  return selectedItem ? selectedItem.displayName : label;
};

// returns an object of the selectedItems with a key of the id and a value of the checked flag, to easy access and avoid nested loops
const createSelectedItemsMap = value => {
  const selectedItemsMap = {};
  value.forEach(item => {
    selectedItemsMap[item] = true;
  });
  return selectedItemsMap;
};

export { getNameForSingleSelectedItem, getNamesFromIds, createSelectedItemsMap };
