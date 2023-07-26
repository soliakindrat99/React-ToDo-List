const TaskForm = (props) => {
    return (
        <>
            <div className="form">
                <div class="mb-3">
                <label class="form-label" >Title:</label>
                <input value={props.isEdit ? props.updateData.title : props.newTitle}
                        onChange={ props.isEdit ? (
                            (e) => props.changeTitle(e)) : (
                            (e) => props.setNewTitle(e.target.value))} 
                        className="form-control"/>
                </div>
                <div class="mb-3">
                <label class="form-label">Description:</label>
                <input value={props.isEdit ? props.updateData.description : props.newDescription}
                        onChange={ props.isEdit ? (
                            (e) => props.changeDescription(e)) : (
                            (e) => props.setNewDescription(e.target.value))} 
                        className="form-control"/>
                </div>
                {props.isEdit ? (
                    <>
                        <button
                            onClick={props.updateTask}
                            className="btn btn-success mr-20"
                        >Update</button>
                        <button
                            onClick={props.cancelUpdate}
                            className="btn btn-warning"
                        >Cancel</button>
                    </>
                ) : (
                    <button
                      onClick={props.addTask}
                      className="btn btn-success">Add Task</button>
                )}
                
            </div>
        </>
    )
}

export default TaskForm;