import Table from './Table';
import { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config } = props;
    const { data } = props;

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        }
        if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        }
        if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return (
            {...column,
            header: () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label)}>
                    <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                    </div>
                </th>
                ),
            }
        );
    })

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            
            return (valueA - valueB) * reverseOrder;
        }
        );
    }

    // data and config are already there inside props but since we are giving them explicitly,
    // the new values are going to override the one in props
    return <div>
            <Table {...props} config={updatedConfig} data={sortedData}/>
        </div>;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp/><GoArrowSmallDown/>
            </div>;
    }
    if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp/>
        </div>;
    }
    return <div>
    <GoArrowSmallDown/>
    </div>;
}

export default SortableTable;