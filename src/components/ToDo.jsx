import React, { useState } from "react";
import TaskFilter from "./TaskFilter";
import getPriorityColor from "../helpers/getPriorityColor";

import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ToDo = (props) => {
  const { toDo = [], setUpdateData = () => {}, deleteTask = () => {} } = props;

  const [filteredPriority, setFilteredPriority] = useState("All");

  const filterChangeHandler = (selectedPriority) => {
    setFilteredPriority(selectedPriority);
  };

  const filteredTasks = toDo.filter((task) => {
    if (filteredPriority !== "All") return task.priority === filteredPriority;
    else return true;
  });

  const editTaskHandler = (task) => {
    setUpdateData({
      id: task.id,
      priority: task.priority,
      title: task.title,
      description: task.description,
    });
  };

  return (
    <>
      <TaskFilter
        selected={filteredPriority}
        onChangeFilter={filterChangeHandler}
      />
      <List>
        {filteredTasks &&
          filteredTasks.map((task) => {
            return (
              <ListItem className="taskBg" key={task.id}>
                <ListItemText
                  className="priorityCol"
                  sx={getPriorityColor(task.priority)}
                >
                  {task.priority}
                </ListItemText>
                <ListItemText>
                  {task.title} {task.description}
                </ListItemText>
                <IconButton title="Edit" onClick={() => editTaskHandler(task)}>
                  <EditOutlinedIcon sx={{ fill: "#fff" }} />
                </IconButton>
                <IconButton title="Delete" onClick={() => deleteTask(task.id)}>
                  <DeleteOutlinedIcon sx={{ fill: "#fff" }} />
                </IconButton>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default ToDo;
