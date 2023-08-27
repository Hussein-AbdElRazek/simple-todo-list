import { Paper, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem: React.FC<{
    todoName: string;
    todoDesc: string;
    handleDelete:()=>void;
}> = (props) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                mb: 1,
                overflowWrap: "break-word",
                maxHeight: 100,
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
        >
            <ListItem
                secondaryAction={
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={props.handleDelete}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemText
                    primary={props.todoName}
                    secondary={props.todoDesc}
                />
            </ListItem>
        </Paper>
    );
};

export default TodoItem;
