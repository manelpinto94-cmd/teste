import React, { useState } from 'react';

const Planner: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleAddItem = () => {
        if (inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Planner</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Add a new item" 
            />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Planner;