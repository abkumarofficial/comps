// import Table from "../components/Table"
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        {name : 'Orange', color: 'bg-orange-500', score: 5},
        {name : 'Apple', color: 'bg-red-500', score: 2},
        {name : 'Banana', color: 'bg-yellow-500', score: 6},
        {name : 'Lime', color: 'bg-green-500', score: 1},
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            // This is for how we want to show the rows
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score, 
            sortValue: (fruit) => fruit.score, // this is for sorting
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <div>
            <SortableTable config={config} data={data} keyFn={keyFn}/>
        </div>
        )
}

export default TablePage;