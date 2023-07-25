const UpdateForm = (props) => {
    return (
        <>
        {/* Update Task */}
            <div className="form">
                <div class="mb-3">
                <label class="form-label">Title:</label>
                <input value={ props.updateData && props.updateData.title } 
                        onChange={ (e) => props.changeTitle(e)}
                        className="form-control"/>
                </div>
                <div class="mb-3">
                <label class="form-label">Description:</label>
                <input value={ props.updateData && props.updateData.description } 
                        onChange={ (e) => props.changeDescription(e)}
                        className="form-control"/>
                </div>
                <button
                    onClick={props.updateTask}
                    className="btn btn-success mr-20"
                >Update</button>
                <button
                    onClick={props.cancelUpdate}
                    className="btn btn-warning"
                >Cancel</button>
            </div>
        </>
    )
}

export default UpdateForm;