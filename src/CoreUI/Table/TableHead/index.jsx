import { array } from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

const { tableHeader, tableCell } = styles;

const TableHead = ({ headerGroups = [] }) => {
  return (
    <thead className={tableHeader}>
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th key={tableCell} className={tableCell} {...column.getHeaderProps()}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

TableHead.propTypes = {
  headerGroups: array
};

export default TableHead;
