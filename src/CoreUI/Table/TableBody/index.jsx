import { array, func } from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

const { tableCell, oddCell, tableRow } = styles;

const TableBody = ({ prepareRow, page = [], getTableBodyProps, onRowClick }) => {
  const navigate = useNavigate();
  return (
    <tbody {...getTableBodyProps()}>
      {page.map(row => {
        prepareRow(row);
        return (
          <tr
            key={row.id}
            className={tableRow}
            onClick={() => {
              onRowClick ? onRowClick(row) : navigate(`${row.original.id}`);
            }}
            {...row.getRowProps()}
          >
            {row.cells.map(cell => {
              return (
                <td
                  key={row.id}
                  className={`${tableCell} ${row.index % 2 === 1 ? oddCell : ''}`}
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  prepareRow: func,
  page: array,
  getTableBodyProps: func,
  onRowClick: func
};

export default TableBody;
