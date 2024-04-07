export class Task {

    id?: number;
    name?: string;

    constructor(task?: any) {
        Object.assign(this, task);
    }
    
}