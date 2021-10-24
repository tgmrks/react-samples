import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from '../utils/MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns.js';
import '../style/table.css';

export function SortingTable() {

    //useMemo avoid rerendering mock_data
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    //set table instance
    const tableInstance = useTable({
        columns: columns,
        data: data,
    },
    useSortBy);

    //deconstruct functions and arrays provided by react-table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        { column.render('Header') }
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' ⯆' : ' ⯅') : ''}
                                        </span>
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
                                            { cell.render('Cell') }
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
                                        { column.render('Footer') }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}