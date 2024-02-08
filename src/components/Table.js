import { Fragment } from "react";

function Table({ data, config, keyFn }) {

    // Creating Columns
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            // return column.header(column);
            return <Fragment key={column.label}>{column.header(column)}</Fragment>
        }
        return <th key={column.label}>
            {column.label}
        </th>
    })

    // Creating Rows
    const renderedRows =  data.map((row) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(row)}</td>
        });

        return <tr className="border-b" key={keyFn(row)}>{renderedCells}</tr>
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
        <tbody>
            {renderedRows}
        </tbody>
        </table>
        )
}

export default Table;