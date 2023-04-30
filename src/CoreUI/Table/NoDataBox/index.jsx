import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { func, string } from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import Box from '../../Box/Box';
import CommonButton from '../../Button/Button';
import styles from './styles.module.scss';

const { noData, noDataTitle } = styles;

const NoDataBox = ({ tableTitle, addRowURL, onAddButtonClick, rowTitle }) => {
  const navigate = useNavigate();

  return (
    <Box className={noData}>
      <h5 className={noDataTitle}>There were no results found for {tableTitle}</h5>
      <CommonButton
        onClick={() => (addRowURL ? navigate(addRowURL) : onAddButtonClick)}
        icon={faAdd}
        label={`new ${rowTitle}`}
      />{' '}
    </Box>
  );
};

NoDataBox.propTypes = {
  tableTitle: string,
  addRowURL: string,
  onAddButtonClick: func,
  rowTitle: string
};

export default NoDataBox;
