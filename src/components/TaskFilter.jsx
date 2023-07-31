import getPriorityColor from "../helpers/getPriorityColor";
import { Box, InputLabel, Select, MenuItem } from "@mui/material";
import "./TaskFilter.css";

const TaskFilter = (props) => {
  const { selected = false, onChangeFilter = () => {} } = props;

  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <Box className="taskFilter">
      <InputLabel className="inputLabel">Filter by Priority</InputLabel>
      <Select
        className="selectPriority"
        type="text"
        size="small"
        fullWidth
        value={selected}
        onChange={dropdownChangeHandler}
        defaultValue={"All"}
        sx={getPriorityColor(selected)}
      >
        <MenuItem sx={getPriorityColor("All")} value={"All"}>
          All
        </MenuItem>
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
    </Box>
  );
};

export default TaskFilter;
