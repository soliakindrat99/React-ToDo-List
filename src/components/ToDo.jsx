import React, {useState} from 'react';
import TaskFilter from './TaskFilter';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ToDo = (props) => {
  const [filteredPriority, setFilteredPriority] = useState(0);

  const filterChangeHandler = (selectedPriority) => {
    setFilteredPriority(selectedPriority);
  };

  const filteredTasks = props.toDo.filter((task) => {
    if (filteredPriority !== 0)
      return task.priority === filteredPriority;
    else return true;
  });

  const getPriorityText = (priority) => {
    switch(priority) {
      case 1:
        return 'High';
      case 2:
        return 'Medium';
      case 3:
        return 'Low';
      default:
        return 'Low';
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 1:
        return {color: 'red'};
      case 2:
        return {color: 'yellow'};
      case 3:
        return {color: 'green'};
      default:
        return {color: 'green'};
    }
  }
    return (
        <>
        <TaskFilter selected={filteredPriority}
                    onChangeFilter={filterChangeHandler}/>
        {filteredTasks && filteredTasks
            .map((task) => {
            return (
              <List >
                <ListItem className="taskBg"> 
                  <ListItemText className="priorityCol" sx={getPriorityColor(task.priority)}>{getPriorityText(task.priority)}</ListItemText> 
                  <ListItemText>{task.title} {task.description}</ListItemText>            
                  <IconButton title="Edit" 
                    onClick={ () => props.setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      description: task.description
                    })}><EditOutlinedIcon sx={{ fill: '#fff' }}/></IconButton>
                  <IconButton title="Delete"
                    onClick={() => props.deleteTask(task.id)}>
                      <DeleteOutlinedIcon sx={{ fill: '#fff', }}/></IconButton>
                </ListItem>
              </List>
            )
          })}
        </>
    )
}

export default ToDo;