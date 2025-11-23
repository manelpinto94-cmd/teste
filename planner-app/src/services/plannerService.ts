import { PlannerItem } from '../types';

let items: PlannerItem[] = [];

export const addItem = (item: PlannerItem): void => {
    items.push(item);
};

export const getItems = (): PlannerItem[] => {
    return items;
};

export const deleteItem = (id: string): void => {
    items = items.filter(item => item.id !== id);
};