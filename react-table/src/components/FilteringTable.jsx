import { useMemo, useEffect } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import { MyDefaultFilterComponent } from './MyDefaultFilterComponent'
import MOCK_DATA from '../utils/MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns.js';
import '../style/table.css';

export function FilteringTable() {

  //useMemo avoid rerendering mock_data
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(
    () => ({ Filter: MyDefaultFilterComponent }), []
  )

  //set table instance
  const tableInstance = useTable({
    columns: columns,
    data: data,
    defaultColumn
  }, useGlobalFilter);

  //deconstruct functions and arrays provided by react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state

  return (
    <>
      {console.log(globalFilter)}
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                      <div>
                        {column.canFilter ? column.render('Filter') : null}
                      </div>
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                    )}
                </tr>
              )
            })}
        </tbody>
        <tfoot>
          {
            footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {
                  footerGroup.headers.map((column) => (
                    <td {...column.getFooterProps()}>
                      {column.render('Footer')}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tfoot>
      </table>
    </>
  )
}