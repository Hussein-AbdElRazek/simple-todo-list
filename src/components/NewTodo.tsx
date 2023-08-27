import { useRef, useContext } from "react";
import { Button, Paper, TextField } from "@mui/material";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const newTodoName = useRef<HTMLInputElement>(null);
    const newTodoDesc = useRef<HTMLInputElement>(null);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !newTodoDesc.current!.value.trim().length &&
            !newTodoName.current!.value.trim().length
        ) {
            return;
        }

        const newTodo = new Todo(
            newTodoName.current!.value,
            newTodoDesc.current!.value
        );
        todoCtx.addTodo(newTodo);
    };
    return (
        <Paper
            sx={{ width: "70%", p: 3, marginX: "auto", mt: 5, mb: 2 }}
            elevation={4}
        >
            <form onSubmit={handleAddTodo}>
                <TextField
                    id="taskName"
                    label="Task Name"
                    fullWidth
                    sx={{ mb: 2 }}
                    inputRef={newTodoName}
                />
                <TextField
                    id="taskDescription"
                    label="Task Description"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ mb: 2 }}
                    inputRef={newTodoDesc}
                />
                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 1 }}
                    type="submit"
                >
                    Add
                </Button>
            </form>
        </Paper>
    );
};

export default NewTodo;
