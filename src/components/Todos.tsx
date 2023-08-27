import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { List, Paper, Typography } from "@mui/material";
import Empty from "./Empty";
import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <Paper
            sx={{
                width: "95%",
                p: 3,
                marginX: "auto",
                mt: 5,
                mb: 5,
                maxHeight: 400,
                overflowY: "scroll",
                "::-webkit-scrollbar": {
                    width: "15px",
                    height: "10px",
                },
                "::-webkit-scrollbar-corner": {
                    display: "none",
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: "#606060",
                },
                "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#707070",
                },
            }}
            elevation={4}
        >
            <List>
                <Typography marginBottom={2}>Todo List</Typography>
                {todosCtx.todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todoName={todo.name}
                        todoDesc={todo.description}
                        handleDelete={todosCtx.removeTodo.bind(null, todo.id)}
                    />
                ))}
                {!todosCtx.todos.length && <Empty />}
            </List>
        </Paper>
    );
};

export default Todos;
