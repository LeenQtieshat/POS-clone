import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { func, string } from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import CommonButton from '../../Button/Button';
import styles from './styles.module.scss';

const { commonTableHeader, commonTableTitle, commonTableAddButton } = styles;

const TableHeader = ({ rowTitle, tableTitle, addRowURL, onAddButtonClick }) => {
  const navigate = useNavigate();
  return (
    <div className={commonTableHeader}>
      <h5 className={commonTableTitle}>{tableTitle}</h5>
      <CommonButton
        onClick={() => (addRowURL ? navigate(addRowURL, { replace: true }) : onAddButtonClick)}
        className={commonTableAddButton}
        icon={faAdd}
        label={`new ${rowTitle}`}
      />
    </div>
  );
};

TableHeader.propTypes = {
  rowTitle: string,
  tableTitle: string,
  addRowURL: string,
  onAddButtonClick: func
};

export default TableHeader;
