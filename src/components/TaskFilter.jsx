import { InputLabel, Select, MenuItem } from '@mui/material';

const TaskFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      }

    return (
        <div className='taskFilter'>
            <InputLabel sx={{color: "white"}}>Filter by Priority</InputLabel>
            <Select type="text" size='small' sx={{mb: 3, backgroundColor: "#fff", borderRadius: 1}} fullWidth
            value={props.selected} onChange={dropdownChangeHandler} defaultValue={0}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>High</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>Low</MenuItem>
            </Select>
        </div>
    );
}

export default TaskFilter;