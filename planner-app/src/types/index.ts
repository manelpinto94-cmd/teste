export interface PlannerItem {
    id: string;
    title: string;
    description?: string;
    date: Date;
    completed: boolean;
}

export interface PlannerState {
    items: PlannerItem[];
    loading: boolean;
    error?: string;
}

export type AddItemPayload = Omit<PlannerItem, 'id'>;

export type UpdateItemPayload = PlannerItem;