import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }){
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex(currentExpandedIndex => {
            if (nextIndex === currentExpandedIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })
    }

    const renderedItems = items.map((item, index)=> {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>
        // Below Ternary condition can be either false or <div>{item.content}</div>
        // and JSX cannot print out false|true|null|udefined
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
        // We could had done like this as well
        // {isExpanded ? <div>{item.content}</div> : false}

    })
    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>
}

export default Accordion;