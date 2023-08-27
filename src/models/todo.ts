class Todo {
    id: string;
    name: string;
    description: string;

    constructor(todoName: string, todoDesc: string) {
        this.name = todoName;
        this.description = todoDesc;
        this.id = new Date().toISOString();
    }
} 
export default Todo