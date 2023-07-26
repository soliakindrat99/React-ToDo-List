import { FormControl, FormLabel, TextField, Button, Select, MenuItem } from '@mui/material';

const TaskForm = (props) => {
    return (
        <FormControl margin="normal" color="primary" 
        sx={{mb: 5,
             display: 'flex', 
             flexDirection: 'col', 
             justifyContent: 'space-around', 
             backgroundColor: "#555", 
             padding: 4,
             borderRadius: 1}}> 
          <FormLabel sx={{color: "white"}}>Priority</FormLabel>
          <Select type="text" size='small' sx={{mb: 3, backgroundColor: "#fff", borderRadius: 1}} defaultValue={3}
            value={props.isEdit ? props.updateData.priority : props.newPriority}
            onChange={ props.isEdit ? (
                (e) => props.changePriority(e)) : (
                (e) => props.setNewPriority(e.target.value))} >
            <MenuItem value={1}>High</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={3}>Low</MenuItem>
          </Select>

          <FormLabel sx={{color: "white"}}>Enter Title</FormLabel>
          <TextField type="text" size='small' sx={{mb: 3, backgroundColor: "#fff", borderRadius: 1}}
          value={props.isEdit ? props.updateData.title : props.newTitle}
                        onChange={ props.isEdit ? (
                            (e) => props.changeTitle(e)) : (
                            (e) => props.setNewTitle(e.target.value))} />
                            
          <FormLabel sx={{color: "white"}}>Enter Description</FormLabel>
          <TextField type="text" size='small' sx={{mb: 3, backgroundColor: "#fff", borderRadius: 1}}
          value={props.isEdit ? props.updateData.description : props.newDescription}
                        onChange={ props.isEdit ? (
                            (e) => props.changeDescription(e)) : (
                            (e) => props.setNewDescription(e.target.value))}  />

          {props.isEdit ? (
            <>
                <Button color='success' onClick={props.updateTask} variant="contained" sx={{mb: 1, padding: 1}}>Update</Button>
                <Button color='warning' onClick={props.cancelUpdate} variant="contained" sx={{padding: 1}}>Cancel</Button>
            </>
          ) : (
            <Button color='success' sx={{padding: 1}} onClick={props.addTask} variant="contained" >Add Task</Button>)}
        </FormControl>
    )
}

export default TaskForm;