import React, { ReactNode, useEffect, useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
    todos: Todo[];
    addTodo: (newTodo: Todo) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
    todos: [],
    addTodo: (newTodo: Todo) => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(() => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setTodos(JSON.parse(todos));
        }
    }, []);
    const handleNewTodo = (newTodo: Todo) => {
        const newTodoList = [newTodo, ...todos];
        setTodos(newTodoList);
        localStorage.setItem("todos", JSON.stringify(newTodoList));
    };
    const handleDelete = (id: string) => {
        const newTodoList = todos.filter((todo) => todo.id !== id);
        setTodos(newTodoList);
        localStorage.setItem("todos", JSON.stringify(newTodoList));
    };
    const contextValue: TodoContextObj = {
        todos: todos,
        addTodo: handleNewTodo,
        removeTodo: handleDelete,
    };
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
