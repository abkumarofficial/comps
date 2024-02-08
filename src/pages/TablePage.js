import Table from "../components/Table"

function TablePage() {
    const data = [
        {name : 'Orange', color: 'bg-orange-500', score: 5},
        {name : 'Apple', color: 'bg-red-500', score: 5},
        {name : 'Banana', color: 'bg-yellow-500', score: 5},
        {name : 'Lime', color: 'bg-green-500', score: 5},
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
        },
        {
            label: 'Score Squared',
            render: (fruit) => fruit.score * fruit.score,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <div>
            <Table config={config} data={data} keyFn={keyFn}/>
        </div>
        )
}

export default TablePage;