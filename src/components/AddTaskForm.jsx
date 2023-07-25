const AddTaskForm = (props) => {
    return (
        <>
        {/* Add Task */}
            <div className="form">
                <div class="mb-3">
                <label class="form-label" >Title:</label>
                <input value={props.newTitle}
                        onChange={ (e) => props.setNewTitle(e.target.value)} 
                        className="form-control"/>
                </div>
                <div class="mb-3">
                <label class="form-label">Description:</label>
                <input value={props.newDescription}
                        onChange={ (e) => props.setNewDescription(e.target.value)} 
                        className="form-control"/>
                </div>
                <button
                    onClick={props.addTask}
                    className="btn btn-success"
                >Add Task</button>
            </div>
        </>
    )
}

export default AddTaskForm;