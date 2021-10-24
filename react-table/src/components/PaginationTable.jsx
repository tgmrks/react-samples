import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from '../utils/MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns.js';
import '../style/table.css';

export function PaginationTable() {

    //useMemo avoid rerendering mock_data
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    //set table instance
    const tableInstance = useTable({
        columns: columns,
        data: data,
        initialState: { pageIndex: 1 },
    }, usePagination);

    //deconstruct functions and arrays provided by react-table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,//rows,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex, pageSize },
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow
    } = tableInstance;

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        //rows.map((row) => {
                        page.map((row) => {
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
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number" defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(pageNumber);
                        }}
                        style={{ width: '50px' }}
                    />
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {
                        [10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
            <div>
                {
                    (pageOptions.length)
                    [1,2,3,4,5,'...'].map((item) => (
                        <button>{item}</button>
                    ))
                }
            </div>
        </>
    )
}