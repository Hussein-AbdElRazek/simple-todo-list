import { CssBaseline } from "@mui/material";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <TodosContextProvider>
                <NewTodo />
                <Todos />
            </TodosContextProvider>
        </ThemeProvider>
    );
}

export default App;
