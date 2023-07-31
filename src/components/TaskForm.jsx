import getPriorityColor from "../helpers/getPriorityColor";
import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import "./TaskForm.css";

const TaskForm = (props) => {
  return (
    <Box className="taskForm">
      <FormControl margin="normal" color="primary">
        <FormLabel className="formLabel">Priority</FormLabel>
        <Select
          className="selectPriority"
          type="text"
          size="small"
          defaultValue={"Low"}
          sx={getPriorityColor(
            props.isEdit ? props.updateData.priority : props.newPriority
          )}
          value={props.isEdit ? props.updateData.priority : props.newPriority}
          onChange={
            props.isEdit
              ? (e) => props.changePriority(e)
              : (e) => props.setNewPriority(e.target.value)
          }
        >
          <MenuItem sx={getPriorityColor("High")} value={"High"}>
            High
          </MenuItem>
          <MenuItem sx={getPriorityColor("Medium")} value={"Medium"}>
            Medium
          </MenuItem>
          <MenuItem sx={getPriorityColor("Low")} value={"Low"}>
            Low
          </MenuItem>
        </Select>

        <FormLabel className="formLabel">Enter Title</FormLabel>
        <TextField
          className="inputTitle"
          type="text"
          size="small"
          value={props.isEdit ? props.updateData.title : props.newTitle}
          onChange={
            props.isEdit
              ? (e) => props.changeTitle(e)
              : (e) => props.setNewTitle(e.target.value)
          }
        />

        <FormLabel className="formLabel">Enter Description</FormLabel>
        <TextField
          className="inputDescription"
          type="text"
          size="small"
          value={
            props.isEdit ? props.updateData.description : props.newDescription
          }
          onChange={
            props.isEdit
              ? (e) => props.changeDescription(e)
              : (e) => props.setNewDescription(e.target.value)
          }
        />

        {props.isEdit ? (
          <>
            <Button
              className="updateButton"
              color="success"
              onClick={props.updateTask}
              variant="contained"
            >
              Update
            </Button>
            <Button
              className="cancelButton"
              color="warning"
              onClick={props.cancelUpdate}
              variant="contained"
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            className="addButton"
            color="success"
            onClick={props.addTask}
            variant="contained"
          >
            Add Task
          </Button>
        )}
      </FormControl>
    </Box>
  );
};

export default TaskForm;
