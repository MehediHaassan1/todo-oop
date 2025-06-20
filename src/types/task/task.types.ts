export interface ITaskPayload {
    title: string;
    description: string;
    due_date: Date;
    priority?: 'low' | 'medium' | 'high';
}