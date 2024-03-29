import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from 'react-icons/go'
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);// or setIsOpen((current) => !current)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedItems = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
        </div>
    })
    return <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg"/>
            </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}

    </div>
}

export default Dropdown;