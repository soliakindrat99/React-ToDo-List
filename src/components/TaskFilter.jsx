import { InputLabel, Select, MenuItem } from '@mui/material';

const TaskFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    const getColor = (priority) => {
        switch(priority) {
          case 0:
            return {color: 'black'};
          case 1:
            return {color: 'red'};
          case 2:
            return {color: 'orange'};
          case 3:
            return {color: 'green'};
          default:
            return {color: 'green'};
        }
      }

    return (
        <div className='taskFilter'>
            <InputLabel sx={{color: "white"}}>Filter by Priority</InputLabel>
            <Select className='selectPriority' type="text" size='small' fullWidth
            value={props.selected} onChange={dropdownChangeHandler} defaultValue={0} sx={getColor(props.selected)}>
                <MenuItem sx={getColor(0)} value={0}>All</MenuItem>
                <MenuItem sx={getColor(1)} value={1}>High</MenuItem>
                <MenuItem sx={getColor(2)} value={2}>Medium</MenuItem>
                <MenuItem sx={getColor(3)} value={3}>Low</MenuItem>
            </Select>
        </div>
    );
}

export default TaskFilter;