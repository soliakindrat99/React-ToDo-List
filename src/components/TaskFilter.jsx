import getPriorityColor from "../helpers/getPriorityColor";
import { Box, InputLabel, Select, MenuItem } from "@mui/material";

const TaskFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <Box className="taskFilter">
      <InputLabel sx={{ color: "white" }}>Filter by Priority</InputLabel>
      <Select
        className="selectPriority"
        type="text"
        size="small"
        fullWidth
        value={props.selected}
        onChange={dropdownChangeHandler}
        defaultValue={"All"}
        sx={getPriorityColor(props.selected)}
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
