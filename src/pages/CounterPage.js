import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';
// import useCounter from '../hooks/use-counter';
import { produce } from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'on-submit';
const SET_VALUE_TO_ADD = 'change-value-to-add'

const reducer = (state, action) => {

    switch(action.type) {
        case INCREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count + 1,
            // }
            state.count = state.count + 1;
            break;
        case DECREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count - 1,
            // }
            state.count = state.count - 1;
            break;
        case SET_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     valueToAdd: action.payload,
            // }
            state.valueToAdd = action.payload;
            break;
        case ADD_VALUE_TO_COUNT:
            // return {
            //     ...state,
            //     count: state.count + state.valueToAdd,
            //     valueToAdd: 0,
            // }
            state.count += state.valueToAdd;
            break;
        default:
        // throw new Error('Unexpected Action Type: ', + action.type); //community convetion 
        return state ;
    }

    
}

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT,
        });
    }
    
    const decrement = () => {
        // setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT,
        })
    }

    const handleChange = (event) => {
        // converting string to INT and Checking for NAN 
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
    }
    return <Panel className="m-3">
        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input
                value={state.valueToAdd || ''}
                onChange={handleChange}
                type='number'
                className='p-1 m-3 bg-gray-50 border border-gray-300'
            />
            <Button>Add it!</Button>
        </form>
    </Panel>
}

export default CounterPage;