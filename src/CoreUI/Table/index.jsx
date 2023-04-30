import React from "react";
import { usePagination, useTable } from "react-table";
import Box from "../Box/Box";
import styles from "./table.module.scss";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TablePagination from "./Pagination";
import { addDeleteColumn, addColumnTypes } from "./rowHelpers";
import { useModal } from "../../../hooks";
import TableHeader from "./TableHeader";
import NoDataBox from "./NoDataBox";
import { array, bool, func, string } from "prop-types";

const { commonTable } = styles;

const Table = ({
  columns = [],
  data = [],
  withDeleteRowButton = true,
  rowTitle = "record",
  tableTitle = "rows list",
  addRowURL = "",
  itemDetailsURL = "",
  onRowClick,
  deleteRowClick = () => {},
  onAddButtonClick = () => {},
}) => {
  const { showModal } = useModal();

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  if (!data.length) {
    return (
      <NoDataBox
        tableTitle={tableTitle}
        addRowURL={addRowURL}
        onAddButtonClick={onAddButtonClick}
        rowTitle={rowTitle}
      />
    );
  }

  addDeleteColumn({
    withDeleteRowButton,
    columns,
    showModal,
    rowTitle,
    deleteRowClick,
  });

  addColumnTypes(columns);

  return (
    <>
      <TableHeader
        addRowURL={addRowURL}
        rowTitle={rowTitle}
        tableTitle={tableTitle}
        onAddButtonClick={onAddButtonClick}
      />
      <Box>
        <table className={commonTable} {...getTableProps()}>
          <TableHead headerGroups={headerGroups} />
          <TableBody
            onRowClick={onRowClick}
            prepareRow={prepareRow}
            page={page}
            getTableBodyProps={getTableBodyProps}
            itemDetailsURL={itemDetailsURL}
          />
        </table>
        <TablePagination
          pageOptions={pageOptions}
          gotoPage={gotoPage}
          pageIndex={pageIndex}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
          pageCount={canNextPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Box>
    </>
  );
};

Table.propTypes = {
  columns: array,
  data: array,
  withDeleteRowButton: bool,
  rowTitle: string,
  tableTitle: string,
  addRowURL: string,
  itemDetailsURL: string,
  onRowClick: func,
  deleteRowClick: func,
  onAddButtonClick: func,
};

export default Table;
