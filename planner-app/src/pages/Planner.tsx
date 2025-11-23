import React, { useState, useEffect } from 'react';
import Planner from '../components/Planner';
import { PlannerItem } from '../types';

const PlannerPage: React.FC = () => {
    const [items, setItems] = useState<PlannerItem[]>([]);

    useEffect(() => {
        // Load items from local storage or an API
        const storedItems = localStorage.getItem('plannerItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    const addItem = (item: PlannerItem) => {
        const updatedItems = [...items, item];
        setItems(updatedItems);
        localStorage.setItem('plannerItems', JSON.stringify(updatedItems));
    };

    const removeItem = (id: string) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('plannerItems', JSON.stringify(updatedItems));
    };

    return (
        <div>
            <h1>My Planner</h1>
            <Planner items={items} onAddItem={addItem} onRemoveItem={removeItem} />
        </div>
    );
};

export default PlannerPage;