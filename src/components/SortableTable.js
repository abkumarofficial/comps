import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    const { config, data } = props;
    const {sortBy, sortOrder, setSortColumn, sortedData} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return (
            {...column,
            header: () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)}>
                    <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                    </div>
                </th>
                ),
            }
        );
    })

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